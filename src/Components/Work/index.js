import React, { useState } from 'react';

const Work = () => {
    const [projects] = useState([
        {
            name: "Snake the Game!",
            description: "A classic! Created using javascript and html this game will take you back to the nokia brick. This game includes classic options as well as a new updated mode to test your skills!",
            deployed: "https://dboothe92.github.io/Game-Night/",
            CTA: "Play Snake the Game",
            repo: "https://github.com/dboothe92/Game-Night"
        },
        {
            name: "Weather Dashboard",
            description: "Fun  with API's! Enter your city and this will 'fetch' you up your  current weather as well as a five day forecast. Hate typing? Good thing this stores your recent searches so the weather is only a click away.",
            deployed: "https://dboothe92.github.io/weather-dashboard/",
            CTA: "Check your weather",
            repo: "https://github.com/dboothe92/weather-dashboard"
        },
        {
            name: "Work Day Scheduler",
            description: "Need help planning your day? This planner will give you an hour by hour planner to help you! It will allow you to save tasks and update you on where you should be. ",
            deployed: "https://dboothe92.github.io/calendar-planner/",
            CTA: "Start planning your day",
            repo: "https://github.com/dboothe92/calendar-planner"
        },
        {
            name: "Password generator",
            description: "Remove the pain of thinking of a password. Just enter your password specifications and this will create your password for you!",
            deployed: "https://dboothe92.github.io/passwordGenerator/",
            CTA: "Create your new password",
            repo: "https://github.com/dboothe92/passwordGenerator"
        },
        {
            name: "Social Network API",
            description: "This is the backend for a social media site. Test it out using Isomnia Core! ",
            deployed: "https://github.com/dboothe92/social-network-api",
            repo: "https://github.com/dboothe92/social-network-api"
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
                            <a target="_blank" rel="noreferrer" href={image.repo}>
                                <img
                                    src={require(`../../assets/images/projects/${i}.png`).default}
                                    alt={image.name}
                                    key={image.name}
                                />
                            </a>
                            <figcaption>
                                   {image.description} <br/>
                                   <a target="_blank" rel="noreferrer" href={image.deployed}>{image.CTA}</a> <br/>
                                   <a target="_blank" rel="norefferer" href={image.repo}>GitHub Repo</a>
                            </figcaption>
                        </figure>
                    )
                })}
            </div>      
        </section>
    );
};


export default Work;