import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/dboothe92">

                <img 
                    src={require('../../assets/images/footer/GitHub.svg').default} 
                    alt="GitHub Logo/Link" 
                />
            </a>

            <a  
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/danbraunbergerdeveloper/">

                <img
                    src={require('../../assets/images/footer/linkedIn.svg').default}
                    alt="LinkedIn Logo/Link"
                />
            </a>
        </footer>
    );
};

export default Footer;