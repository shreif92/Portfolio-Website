import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Code,
  CircleFadingPlus,
} from "lucide-react";

const socials = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shreif-abdullah-sh4503/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    link: "https://github.com/shreif92",
  },
  {
    icon: <Code className="w-5 h-5" />,
    label: "LeetCode",
    link: "https://leetcode.com/u/shreifabdallah92/",
  },
  {
    icon: <CircleFadingPlus className="w-5 h-5" />,
    label: "TikTok",
    link: "https://www.tiktok.com/@shreif6",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    link: "https://www.instagram.com/sherif_abdullah_official?igsh=MXQzcGxiYXRlOHRtdw==",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    link: "https://www.facebook.com/sherif.abdullah.786920",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "X (Twitter)",
    link: "https://x.com/Shreifabdullah2?t=43sYXBlFcvqty0edhq1ywg&s=09",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Let’s Connect
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Feel free to reach out or follow me on any of the platforms below.
        </p>
        <div className="text-orange-400 mb-8">
          <Mail className="inline-block w-5 h-5 mr-2" />
          <a
            href="mailto:shreifabdallah92@gmail.com"
            className="hover:underline"
          >
            shreifabdallah92@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              {social.icon}
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
