import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../../public/img/avatar.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Souza" />
      <h2 className="name line-1 anim-typewriter" id="name">Rafael Souza</h2>
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      {/* <a href="#" className="btn">
        Download currículo
      </a> */}
    </aside>
  );
};

export default Sidebar;