import React from 'react';

const About = () => {
    return(
        <section className="pt-2 about">
            <img 
                src={require('../../assets/images/about/placeholder.png.png').default}
                alt="placeholder of me"
            />
            <h1>Hi! I'm Dan!</h1>
            <p>
                I'm a full-stack developer specializing in the MERN stack. I'm a very goal oriented, creative, 
                ambitious person with a passion for all things javascript, When I am not coding I enjoy creating 
                art, playing Magic: The Gathering and brainstorming new maps, ideas, or situations for my latest 
                Dungeons and Dragons campaign. 
            </p>
            <br/>
            <p>
                I currently work as a customer service representative but have recently completed the 
                University of Utah Software Development bootcamp and am looking to transition into the 
                development field. My current role has helped me refine and improve my organization and 
                critical thinking skills and has taught me how to work with and lead a team. I believe 
                these skills will compliment what I've learned about being a developer and will help 
                with my career grow as a software developer. 
            </p>
        </section>
    );
};

export default About;