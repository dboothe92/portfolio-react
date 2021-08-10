import React from 'react';

const Resume = () => {
    return(
        <section className="resume">
            <h3>Full-Stack Developer</h3>
            <div>
                <h4>Summary of Qualifications</h4>
                <hr/>
                <p> 
                    Driven professional with proven record of building relationships, managing 
                    projects, and coaching individuals to success. Adaptive leader with the 
                    ability to work independently or function highly as a member of a team. 
                    Skilled with HTML, CSS, Javascript, and the MERN stack. 
                    Recognized for being level-headed while utilizing critical thinking and 
                    complex problem solving. Skilled at organization and attention to detail. 
                </p>
            </div>

            <div>
                <h4>Competencies</h4>
                <hr/>
                <ul>
                    <li>Experience with object-oriented language Javascript</li>
                    <li>Familiar with web development using the MERN stack</li>
                    <li>Able to work as member of a team on various software development-related projects</li>
                    <li>Follows new developments in industry practices and technologies</li>
                    <li>Constructs concise plans in order to work through problems quickly and efficiently</li>
                    <li>Ability to manage and organize time in order to perform multiple tasks effectively</li>
                </ul>
            </div>

            <div>
                <h4>Education</h4>
                <hr/>
                <div>
                    <p><b>University of Utah Bootcamp 2021</b></p>
                    <p className="experience-description"><i>Software Development</i></p>
                </div>
            </div>

            <div>
                <h4>Experience</h4>
                    <hr/>
                <div>
                    <h5>Signs.com <i>2019-Present</i></h5>
                    <hr/>
                    <div>
                        <p className="experince-head"><i>Customer Experience Lead 2020-2021</i></p>
                        <p className="experience-description">
                            Responsible for ensuring complete customer satisfaction. Handled team
                            audits to ensure the team was meeting stat minimums. Held weekly
                            team meetings and monthly individual meetings to give and receive feedback.
                            Fostered an environment of respect and acceptance. Created improvement
                            plans when needed.
                        </p>
                        <p className="experince-head"><i>Customer Experience Representative</i></p>
                        <p className="experience-description">
                            Responsible for ensuring customer satisfaction. Work as a team and 
                            individual to increase company revenue and rating. Fostered relationships with
                            clients to ensure complete satisfaction as well as ensure return business. 
                        </p>
                    </div>
                </div>
                <div>
                    <h5>El Matador <i>2009-2019</i></h5>
                    <hr/>
                    <div>
                        <p className="experince-head"><i>Manager 2016-2019</i></p>
                        <p className="experience-description">
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