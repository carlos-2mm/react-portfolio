import { useEffect, useState } from "react";
import Project from "./Project";
// import "./Portfolio.css";
import { frontEndProjects, backEndProjects, fullStackProjects } from "../utils/projects";

function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontEnd",
      title: "Front End",
    },
    {
      id: "backEnd",
      title: "Back End",
    },
    {
      id: "fullStack",
      title: "Full Stack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontEnd":
        setData(frontEndProjects);
        break;
      case "backEnd":
        setData(backEndProjects);
        break;
      case "fullStack":
        setData(fullStackProjects);
        break;
      default:
        setData(frontEndProjects);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Project
          key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img
              src={d.image}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
