import React from "react";
import {Link} from "react-router-dom";
import pizza from "../assets/pizza.jpeg";
import "../styles/home.css";

function Home() {
    return (
        <div className="Home"  style={{backgroundImage: `url(${pizza})`, height: "500px"}}>
            <div className="headerContainer">
                <h1>Anusha's Pizzeria</h1>
                <p>Pizza to fit any taste</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;