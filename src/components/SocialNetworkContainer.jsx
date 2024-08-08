import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://linkedin.com/in/rafael-souza-967b8815b' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/SvRafael' },
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/rafaelsouza7_/' },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;