import './education.css';
import React  from "react";

function Education () {
return( 
<div>
<center><h2>Edu<span className="color-change">cation</span></h2></center>
   <div className="edu">
     <div className="edu-cards">
         <p className="edu-title">Web Development</p>
         <p>Hack Your Future</p>
         <p>Copenhagen,Denmark</p>
     </div>
     <div className="edu-cards">
         <p className="edu-title">Master of Computer Application</p>
         <p>Kakatiya University</p>
         <p>Warangal, India</p>
     </div>
     <div className="edu-cards">
         <p className="edu-title">Bachelor in Computer Science</p>
         <p>Kakatiya University</p>
         <p>Warangal, India</p>
     </div>
       
  </div>
</div>
);
}
export default Education;