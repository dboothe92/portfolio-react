import React from 'react';

const Portfolio = () => {
    return(
        <section>           
            <div className="flex-row">
                <img
                    src={require('../../assets/images/projects/0.png').default}
                    alt='project name here'
                />
                <img
                    src={require('../../assets/images/projects/1.png').default}
                    alt='project name here'
                />
                <img
                    src={require('../../assets/images/projects/2.png').default}
                    alt='project name here'
                />
                <img
                    src={require('../../assets/images/projects/3.png').default}
                    alt='project name here'
                />
                <img
                    src={require('../../assets/images/projects/4.png').default}
                    alt='project name here'
                />
                <img
                    src={require('../../assets/images/projects/5.png').default}
                    alt='project name here'
                />
            </div>
        </section>
    );
};

export default Portfolio;