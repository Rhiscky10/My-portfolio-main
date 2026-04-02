// src/components/About.js
import React from "react";


function About() {
return (
<section id="about" className="about">
<div className="container">
<div className="section-header">
<h2>About Me</h2>
<p>I'm a passionate developer who loves creating digital experiences that make a difference.</p>
</div>
<div className="about-content">
<div className="about-image">
<img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="Kofi Osei-Okyere" className="profile-image" />
</div>
<div className="about-text">
<h3>Hello! I'm Kofi Osei-Okyere</h3>
<p>I'm a <b>Full-Stack Developer</b> specializing in MERN (MongoDB, Express.js, React, Node.js) and Django, with 4+ years of experience building high-impact web applications that drive results. I combine scalable architecture, cutting-edge design and seamless user experience to create digital solutions that stand out.</p>
<p>From complex eCommerce platforms to enterprise-level applications, I deliver projects that are robust, maintainable and tailored to client goals. I approach every challenge with precision, creativity and a results-driven mindset, ensuring that every solution maximizes value and impact.</p> 
<p>Beyond coding, I mentor aspiring developers, contribute to open-source projects and stay ahead of industry trends to ensure my work is innovative and future-proof.</p> 
<p>If you’re seeking a developer who can transform your vision into a world-class digital product, let’s collaborate to build something extraordinary.</p></div>
</div>
</div>
</section>
);
}


export default About;