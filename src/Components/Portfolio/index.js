import React from 'react';

const Portfolio = () => {
    return(
        <section>           
            <div className="container">
                <div className="row justify-content-start">
                    <div classname ="col-6">
                        <img
                            src={require('../../assets/images/projects/0.png').default}
                            alt='project name here'
                        />
                    </div>
                    <div className="col-6">
                        <img
                            src={require('../../assets/images/projects/1.png').default}
                            alt='project name here'
                        />
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-6">
                        <img
                            src={require('../../assets/images/projects/2.png').default}
                            alt='project name here'
                        />
                    </div>
                    <div className="col-6">
                    <img
                        src={require('../../assets/images/projects/3.png').default}
                        alt='project name here'
                    />
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-6">
                        <img
                            src={require('../../assets/images/projects/4.png').default}
                            alt='project name here'
                        />
                    </div>
                    <div className="col-6">
                        <img
                            src={require('../../assets/images/projects/5.png').default}
                            alt='project name here'
                        />
                    </div>
                </div>       
            </div>
        </section>
    );
};

export default Portfolio;