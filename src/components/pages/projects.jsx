import React from "react";
import projectList from "../data/projectData";
import {BsGithub} from "react-icons/bs";
import {CgScreen} from "react-icons/cg";
import './projects.css';

export default function Projects () {
        return(
        <div>
            <center><h2>              
            Proj  
              <span className="color-change">ects</span>
            </h2></center><br />  
            <div className="projects">
             {projectList.map((info) => (       
                  <div className="cards"  key={info.id}>  
                    <center> <p className="proj-title" >{info.title}</p>
                     <p><img src={info.image} alt={info.title}/></p>
                    <div className="icons">
                        <p ><a href={info.codeurl}>Code<BsGithub  size={15}/></a></p>
                     <p ><a href={info.appurl}>Demo<CgScreen  size={15}/> </a></p></div>  </center>  
                  </div>
                 
            ))}</div>
            </div>
    );
}