import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-12">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Contact Me
        </h1>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
