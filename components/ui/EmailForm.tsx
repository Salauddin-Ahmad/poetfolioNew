
'use client'

// EmailForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import MagicButton from "../MagicButton";


const EmailForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <h1 className="text-6xl text-center">Leave a message</h1>
      <section className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="emailForm">
          <div className="my-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="my-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="my-4">
            <textarea
              cols={30}
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={handleMessageChange}
              className="w-xl px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="text-center">
            <MagicButton
              title="Send Mail"
              handleClick={handleSubmit} // Pass handleSubmit directly
              otherClasses="your-custom-classes"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default EmailForm;
