import React from "react";
import Skilldata from "../data/skillData";
import './skills.css'

function Skills() {
return (
<>
  <center>
  <h2>Ski<span className="color-change">lls</span></h2>
      <div className="skill-container">
           {Skilldata.map((info) => (              
                <img
                  className="skill-icons"
                  key={info.id}
                  src={info.imageUrl}
                  alt={info.text}
                />
             ))}
        </div>
  </center>
</>
  );
};
export default Skills;