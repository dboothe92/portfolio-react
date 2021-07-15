import React, { useState } from 'react';

const Work = () => {
    const [projects] = useState([
        {
            name: "Snake the Game!",
            github: "Game-Night"
        },
        {
            name: "Weather Dashboard",
            github: "weather-dashboard"
        },
        {
            name: "Got Plants?",
            github: ""
        },
        {
            name: "Work Day Scheduler",
            github: "calendar-planner"
        },
        {
            name: "Password generator",
            github: "passwordGenerator"
        },
        {
            name: "Social Network API",
            github: "social-network-api"
        },
    ]);

    return(
        <section>  
            <h1 className="fw-bold fs-2 text-center pt-3">My Work</h1>
            <div>
                {projects.map((image, i) => {
                    return(
                        <a  target="_blank" rel="noreferrer" href={`https://github.com/dboothe92/${image.github}`}><img
                            src={require(`../../assets/images/projects/${i}.png`).default}
                            alt={image.name}
                            key={image.name}
                            className="m-5"
                            height="300em"
                        /></a>
                    )
                })}
            </div>      
        </section>
    );
};


export default Work;