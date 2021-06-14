import React, { useState } from 'react';

const Work = () => {
    const [projects] = useState([
        {
            name: "0"
        },
        {
            name: "1"
        },
        {
            name: "2"
        },
        {
            name: "3"
        },
        {
            name: "4"
        },
        {
            name: "5"
        },
    ]);

    return(
        <section>  
            <h1 className="fw-bold fs-2 text-center pt-3">My Work</h1>
            <div>
                {projects.map((image, i) => {
                    return(
                        <img
                            src={require(`../../assets/images/projects/${i}.png`).default}
                            alt={image.name}
                            key={image.name}
                            className="m-5"
                            height="300em"
                        />
                    )
                })}
            </div>      
        </section>
    );
};


export default Work;