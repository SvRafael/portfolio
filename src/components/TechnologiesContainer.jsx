import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiSass,
    DiDotnet
  } from "react-icons/di";

  import { SiGooglemaps, SiTailwindcss } from "react-icons/si"
  import { FaVuejs } from "react-icons/fa"
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, level: 'Avançado' },
    { id: "css", name: "CSS3", icon: <DiCss3 />, level: 'Médio' },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: 'Avançado' },
    { id: "sass", name: "Sass", icon: <DiSass />, level: 'Básico' },
    { id: "googlemaps", name: "Google Maps API", icon: <SiGooglemaps />, level: 'Médio' },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, level: 'Médio' },
    { id: "vue", name: "Vue", icon: <FaVuejs />, level: 'Avançado' },
    { id: "react", name: "React", icon: <DiReact />, level: 'Básico' },
    { id: "dotnet", name: ".NET", icon: <DiDotnet />, level: 'Básico' },
    {id: "tailwind", name: "Tailwind", icon: <SiTailwindcss/>, level: 'Médio'}
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;