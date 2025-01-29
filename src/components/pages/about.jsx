import React from 'react'
import myimg from '../images/mypic.png'
import './about.css'
import Type from './type';

const About = () => {
  return (
    <div className="hero-content">
      <center> <h2>              
            About  
              <span className="color-change">ME</span>
            </h2></center><br />
         <div className="left-section">
            <div className="left-content-container">
              <Type /><br/>
            <p><span>I’m a Frontend developer looking for a position that
                needs innovation, creation, dedication and
                enables me to continue to my work. During
                HackYourFuture bootcamp i gained strong
                competence within problem solving and worked in different projects and gained hands-on 
                experience in working with HTML, CSS,JavaScript,NodeJs,MySQL and ReactJs as well as a
                great deal of experience in working in a team. I
                am very social person and enjoy teamwork, but
                can easily work independent when needed.</span>
            </p>
          </div>
        </div>
        <div className="right-section">
          <div className="image-wrap">
            <img src={myimg} alt="santhosh"/>
          </div>
        </div>
      </div>
  )
}
export default About;