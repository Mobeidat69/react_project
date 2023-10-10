import React from 'react'
import '../../css/about.css';
import Alhareth from '../../img/Alhareth.png';
import mohammed from '../../img/Mohammed.png';
import omar from '../../img/omar.png';
import randah from '../../img/randah.png';
import Batool from '../../img/batool.png';
import sofa from '../../img/products/sofa.png';



const About = () => {
  return (
    <div>
            
       <div id="about-descs">
        <h1>About <span> Us </span></h1>
        <p>Our Welcome to master shopping , your one-stop destination for all your chair needs<br/>
          At master shopping, we are passionate about helping you find the perfect chairs<br/>
           that not only enhance the comfort and aesthetics of your space but also suit your<br/>
            unique style and preferences.</p>
            <img src={sofa} alt="sofa" width="200" height="200" />

        </div>


      <div id="about-desc">
        <h1>Our <span>Goal</span></h1>
        <p>Our mission is simple - to provide you with an unparalleled chair shopping experience.<br/>
           We believe that the right chair can make a significant difference in your daily life,.<br/>
            whether you're working, relaxing, dining, or socializing. We strive to offer an extensive.<br/>
             selection of chairs, from ergonomic office chairs to cozy armchairs, trendy dining chairs, .<br/>
             and everything in between.</p>
        </div>

        <div id="about-team">
            <h1>Meet Our <span>Team</span></h1>
            <div id="team">
                <div className="members">
                    <img src={Alhareth} alt="Alhareth" width="200" height="200"/>
                    <h4> Alhareth Alalawneh </h4>
                    <h5> scrum master </h5>

                </div>
                <div className="members">
                    <img src={randah}alt="randah" width="200" height="200"/>
                    <h4> Randah Alwageei </h4>
                    <h5> Product Owner </h5>
                </div>
                <div className="members">
                    <img src={Batool} alt="batool" width="200" height="200"/>
                    <h4> Batool Aljonidee </h4>
                    <h5> Member </h5>

                </div>
                <div className="members">
                    <img src={omar} alt="omar" width="200" height="200"/>
                    <h4> Omar Salah </h4>
                    <h5> Member </h5>

                </div>
                <div className="members">
                    <img src={mohammed} alt="mohammed" width="200" height="200"/>
                    <h4> Mohammed Mahasneh </h4>
                    <h5> Member </h5>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About