import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!executeRecaptcha) {
      return;
    }

    if (!formRef.current) return;
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    )
      return;

    const token = await executeRecaptcha();
    if (!token) {
      return;
    }

    const result = await axios.post("/api/contact", {
      token,
    });

    if (result.data.status !== "Success") {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSuccess(true);
          setIsSending(false);

          // @ts-ignore
          formRef.current.reset();
        },
        (error) => {
          setIsError(true);
          setIsSending(false);
        }
      );
  };
  return (
    <>
      <form
        ref={formRef}
        method="post"
        className="flex flex-col gap-5 pt-5 pb-20"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-xl">
          Best way to reach me is by email or by filling out this form.
        </h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="border-solid border-2 border-slate-400 p-2 bg-inherit text-inherit placeholder-inherit"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="border-solid border-2 border-slate-400 p-2 bg-inherit text-inherit placeholder-inherit"
        />
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder="Message"
          required
          className="border-solid border-2 border-slate-400 p-2 bg-inherit text-inherit placeholder-inherit"
        ></textarea>
        <button
          type="submit"
          className="bg-slate-700 text-white self-center px-10 py-5"
          data-sitekey={process.env.RECAPTCHA_SITE_KEY}
          data-callback="handleSubmit"
          data-action="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
        {isSuccess && (
          <p className="text-green-600 text-lg font-semibold mt-2">{`Your message has been sent. I'll get back to you soon :)`}</p>
        )}
        {isError && (
          <p className="text-red-600 text-lg font-semibold mt-2">{`There was a problem sending your message. Please send me an email instead. Thanks!`}</p>
        )}
      </form>
    </>
  );
};
export default ContactForm;
