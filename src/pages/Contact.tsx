import { useEffect, useRef } from "react";
import { MdSend } from "react-icons/md";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_9afu8up', 'template_x54vljr', form.current, '0FThQEKHscvm2Jjw1')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error: any) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };



  return (
    <div className="absolute inset-0 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <div className="mx-32 animate-fade-in">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="text-5xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent rounded-lg">
            Contact me
          </h1>
          <div className="border-2 rounded-lg my-5 w-[800px] mx-36">
            <div className="text-left text-lg m-5">
              <h1 className="inline-flex">Full Name</h1><br />
              <input
                type="text"
                name="from_name"
                className="w-[500px] rounded-lg py-1 px-3 text-black"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="text-left text-lg m-5">
              <h1 className="inline-flex">Telephone</h1><br />
              <input
                type="number"
                name="telephone"
                className="w-[300px] rounded-lg py-1 px-3 text-black inline-flex"
                placeholder="+94 xx xxx xxxx"
                required
              />
            </div>

            <div className="text-left text-lg m-5">
              <h1 className="inline-flex">Email</h1><br />
              <input
                type="email"
                name="from_email"
                className="w-[400px] rounded-lg py-1 px-3 text-black inline-flex"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="text-left text-lg m-5">
              <h1 className="inline-flex">Description</h1><br />
              <textarea
                rows={5}
                name="message"
                className="w-[700px] rounded-lg py-1 px-3 text-black inline-flex"
                placeholder="Write here..."
                required
              ></textarea>
            </div>

            <div className="mx-[700px] my-5">
              <button type="submit" className="inline-flex items-center space-x-2">
                <span>Send</span>
                <MdSend size={24} color="orange" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
