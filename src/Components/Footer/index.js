import React from 'react';

const Footer = () => {
    return(
        <footer className="fixed-bottom text-center py-4">
            <a target="_blank" rel="noreferrer" href="https://github.com/dboothe92">
                <img 
                    src={require('../../assets/images/footer/github-01.png').default} 
                    alt="GitHub Logo/Link" 
                    height="30em"
                />
            </a>
            <a className="px-5" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danbraunbergerdeveloper/">
                <img
                    src={require('../../assets/images/footer/linkedIn-01.png').default}
                    alt="LinkedIn Logo/Link"
                    height="30em"
                />
            </a>
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/14945698/dan-boothe">
                <img
                    src={require('../../assets/images/footer/stackOverflow-01.png').default}
                    alt="Stacked Overflow Logo/Link"
                    height="30em"
                />
            </a>
        </footer>
    );
};

export default Footer;