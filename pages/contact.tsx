import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="dark:bg-slate-900 dark:text-gray-200">
      <div className="max-w-xl container mx-auto px-10 py-40 min-h-screen">
        <h2 className="text-center font-bold text-xl mb-8">CONTACT INFO</h2>
        <p className="semi-bold text-xl mb-4">
          <strong>Email:</strong> brandonwu500@gmail.com
        </p>
        <p className="semi-bold text-xl mb-4">
          <strong>LinkedIn: </strong>
          <a
            href="https://www.linkedin.com/in/brandonwu500/"
            target="_blank"
            className="break-all"
          >
            https://www.linkedin.com/in/brandonwu500/
          </a>
        </p>
        <GoogleReCaptchaProvider
          //@ts-ignore
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          scriptProps={{
            async: false, // optional, default to false,
            defer: true, // optional, default to false
            appendTo: 'body', // optional, default to "head", can be "head" or "body",
            nonce: undefined,
          }}
        >
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </section>
  );
};
export default Contact;
