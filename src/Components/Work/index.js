import React, { useState } from 'react';

const Work = () => {
    const [projects] = useState([
        {
            name: "Snake the Game!",
            github: "Game-Night",
            description: "Description 1",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game!"
        },
        {
            name: "Weather Dashboard",
            github: "weather-dashboard",
            description: "Description 2",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game here!"
        },
        {
            name: "Got Plants?",
            github: "",
            description: "Description 3",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game here!"
        },
        {
            name: "Work Day Scheduler",
            github: "calendar-planner",
            description: "Description 4",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game here!"
        },
        {
            name: "Password generator",
            github: "passwordGenerator",
            description: "Description 5",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game here!"
        },
        {
            name: "Social Network API",
            github: "social-network-api",
            description: "Description 6",
            deployed: "https://github.com/dboothe92",
            CTA: "Play Snake the Game here!"
        },
    ]);

    return(
        <section className="projects">  
            <h1>My Work</h1>
            <div className="individual-projects">
                {projects.map((image, i) => {
                    return(
                        <figure>
                            <h2>{image.name}</h2>
                            <a target="_blank" rel="noreferrer" href={`https://github.com/dboothe92/${image.github}`}>
                                <img
                                    src={require(`../../assets/images/projects/${i}.png`).default}
                                    alt={image.name}
                                    key={image.name}
                                />
                            </a>
                            <figcaption>
                                   {image.description} <br/>
                                   <a target="_blank" rel="noreferrer" href={image.deployed}>{image.CTA}</a>
                            </figcaption>
                        </figure>
                    )
                })}
            </div>      
        </section>
    );
};


export default Work;