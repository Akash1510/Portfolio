import React, { useState } from "react";

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/myzjbvpq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="bg-[#537d5d] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#D2D0A0] mb-4 text-shadow-lg/35 ">
        Get in Touch
      </h2>

      <p className="text-center text-lg sm:text-xl text-amber-600 shadow-2xl font-bold font-mono mb-10 max-w-2xl">
        Whether you have a question, project idea, or just want to say hi — fill out the form below!
      </p>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-[#D2D0A0] rounded-xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#537d5d]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#537d5d]"
              placeholder="xyz@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#537d5d]"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#537d5d]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#537d5d] hover:bg-green-900 text-white font-mono py-2 rounded-lg text-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-lg text-[#D2D0A0] font-semibold">
          ✅ Thank you! Your message has been sent.
        </p>
      )}

      <footer className="mt-16 text-center text-sm text-white font-bold font-mono">
        <p>
          © {new Date().getFullYear()} Akash Jadhav. 
        </p>
      </footer>
    </div>
  );
};

export default ContactMe;



