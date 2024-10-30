import { useRef } from "react";
import { MdSend } from "react-icons/md";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_9afu8up', 'template_x54vljr', form.current, '0FThQEKHscvm2Jjw1')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-auto h-full w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <form ref={form} onSubmit={sendEmail} className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-5xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-8 font-bold">
            Contact me
          </h1>
          <div className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label className="block text-lg mb-2 ">Full Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full md:w-3/4 lg:w-2/3 rounded-lg py-2 px-3 text-black "
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Telephone Input */}
            <div>
              <label className="block text-lg mb-2">Telephone</label>
              <input
                type="tel"
                name="telephone"
                className="w-full md:w-2/3 lg:w-1/2 rounded-lg py-2 px-3 text-black"
                placeholder="+94 xx xxx xxxx"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full md:w-3/4 lg:w-2/3 rounded-lg py-2 px-3 text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-lg mb-2">Description</label>
              <textarea
                rows={5}
                name="message"
                className="w-full md:w-3/4 lg:w-full rounded-lg py-2 px-3 text-black"
                placeholder="Write here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button type="submit" className="flex items-center space-x-2 bg-black p-3 rounded-lg hover:bg-opacity-80 transition">
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
