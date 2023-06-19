import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${multiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Luctus accumsan tortor posuere ac ut. Lacinia at quis risus sed. Feugiat scelerisque varius morbi enim. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Vitae ultricies leo integer malesuada nunc. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Convallis a cras semper auctor neque vitae tempus. Nulla facilisi cras fermentum odio eu. Quisque egestas diam in arcu cursus euismod quis. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
            </div>
        </div>
    );
}

export default About;