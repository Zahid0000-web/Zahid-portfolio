import { Mail, MapPin, Github, Linkedin, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: <Mail size={20} />, label: "mzahidking0000@gmail.com", href: "mailto:mzahidking0000@gmail.com" },
    { icon: <MapPin size={20} />, label: "Pakistan", href: "#" },
    { icon: <Github size={20} />, label: "github.com/Muhammad Zahid", href: "https://github.com/Zahid0000-web" },
    { icon: <Linkedin size={20} />, label: "linkedin.com/in/Muhammad Zahid", href: "https://linkedin.com/in/muhammad-zahid-a4aaa139a" },
    { icon: <LinkIcon size={20} />, label: "Discord", href: "#" },
  ];

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-gray-300 rounded-3xl p-10 shadow-sm text-center">
        <h2 className="text-3xl font-bold mb-4 inline-block border-b-4 border-blue-600 pb-1">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          I'm always open to new opportunities and conversations. Reach out!
        </p>

        <div className="space-y-4 text-left inline-block">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="flex items-center gap-4 text-blue-600 hover:text-blue-800 transition-colors py-1"
            >
              <span className="text-blue-500">{link.icon}</span>
              <span className="text-gray-700 font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;