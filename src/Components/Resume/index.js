import React from 'react';

import '../../index.css';

const Resume = () => {
    return(
        <section>
            <h3 className="text-center fw-bold fs-2">Full-Stack Developer</h3>
            <div>
                <h4 className="px-4 fw-bold">Summary of Qualifications</h4>
                <p className ="px-5">
                    Recent graduate of Davis Technical College Software Development program. 
                    Driven professional with proven record of building relationships, managing 
                    projects, and coaching individuals to success. Adaptive leader with the 
                    ability to work independently or function highly as a member of a team. 
                    Skilled with HTML, CSS, ASP.NET, Git, Java, JavaScript, C#, and C++. 
                    Recognized for being level-headed while utilizing critical thinking and 
                    complex problem solving. Skilled at organization and attention to detail. 
                </p>
            </div>

            <div>
                <h4 className="px-4 fw-bold" >Competencies</h4>
                <ul className ="px-5">
                    <li>Experience with object-oriented language Javascript</li>
                    <li>Familiar with web development using the MERN stack</li>
                    <li>Able to work as member of a team on various software development-related projects</li>
                    <li>Follows new developments in industry practices and technologies</li>
                    <li>Constructs concise plans in order to work through problems quickly and efficiently</li>
                    <li>Ability to manage and organize time in order to perform multiple tasks effectively</li>
                </ul>
            </div>

            <div>
                <h4 className="px-4 fw-bold">Education</h4>
                <div className ="px-5">
                    <p>University of Utah Bootcamp<span>2020</span></p>
                    <p><i>Software Development</i></p>
                </div>
            </div>

            <div>
                <h4 className="px-4 fw-bold">Experience</h4>
                <div className ="px-5">
                    <h5 className="fw-bold">Signs.com<span className="work-dates">2019-Present</span></h5>
                    <div className="px-3">
                        <p className="fw-bold"><i>Customer Experience Lead<span className="position-dates">2020-2021</span></i></p>
                        <p className="px-3">
                            Responsible for ensuring customer satisfaction. Work as a team and 
                            individual to increase company revenue and rating. Responsible for 
                            10% of department revenue in a team of 20 for 2 consecutive record 
                            breaking months. 
                        </p>
                        <p className="fw-bold"><i>Customer Experience Representative</i></p>
                        <p className="px-3">
                            Responsible for ensuring customer satisfaction. Work as a team and 
                            individual to increase company revenue and rating. Responsible for 
                            10% of department revenue in a team of 20 for 2 consecutive record 
                            breaking months. 
                        </p>
                    </div>
                </div>
                <div className ="px-5">
                    <h5 className ="fw-bold">El Matador<span className="work-dates">2009-2019</span></h5>
                    <div className="px-3">
                        <p className="fw-bold"><i>Manager<span className="position-dates">2016-2019</span></i></p>
                        <p className="px-3">
                            Handled all day to day operations. Fostered strong relationships with 
                            employees and customers. Worked with each department to create a focus 
                            of teamwork and service. Implemented more efficient policies to expedite 
                            the flow of the business. Created training manual. Trained new employees 
                            in all positions. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;