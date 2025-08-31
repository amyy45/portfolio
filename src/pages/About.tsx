import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-semibold">Your Name</span> 👋  
          I’m passionate about building secure, scalable, and beautiful applications.  
          Currently, I’m exploring <span className="text-blue-600">Cybersecurity</span>  
          and working on exciting projects around ethical hacking and steganalysis.  
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Outside of coding, I love participating in hackathons, learning new frameworks,
          and writing about my journey in tech.
        </p>
      </div>
    </section>
  );
};

export default About;
