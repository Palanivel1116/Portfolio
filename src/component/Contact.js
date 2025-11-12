import React from "react";
import {
  EnvelopeIcon,
  CodeBracketIcon,
  LinkIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const CONTACT = {
  name: "Get in touch with me!",
  email: "palanivel250804@gmail.com",
  leetcode: "https://leetcode.com/u/PALANIVEL_P/",
  linkedin: "https://www.linkedin.com/in/palani77/",
  github: "https://github.com/Palanivel1116",
};

const ContactSection = () => {
  const { name,  email, leetcode, linkedin, github } = CONTACT;

  return (
    <section id="contact" className="bg-[#0b0d2b] text-gray-100 px-10 py-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl  font-bold px-4 text-white">Contact📱</h1>
        <h1 className="text-3xl font-bold text-white">{name}</h1>
        <div className="space-y-4 text-gray-300">
          
          <ContactRow
            icon={<EnvelopeIcon className="h-6 w-6" />}
            text={
              <a
                href={`mailto:${email}`}
                className="hover:text-white underline transition"
              >
                {email}
              </a>
            }
          />
        </div> 
        <div className="flex justify-center gap-8 text-gray-400 mt-6">
          <SocialIcon href={github} icon={<CodeBracketIcon className="h-8 w-8" />} label="GitHub" />
          <SocialIcon href={linkedin} icon={<LinkIcon className="h-8 w-8" />} label="LinkedIn" />
          <SocialIcon href={leetcode} icon={<CommandLineIcon className="h-8 w-8" />} label="LeetCode" />
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        © 2024 Palanivel P. All rights reserved.
      </footer>
    </section>
  );
};
const ContactRow = ({ icon, text }) => (
  <div className="flex items-center justify-center gap-3 text-lg">
    <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
    <span>{text}</span>
  </div>
);

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-white transition transform hover:scale-110"
  >
    {icon}
  </a>
);

export default ContactSection;
