import "./Footer.scss";
import React from 'react';
const Footer= props => {
    return (
        <footer>
            <div>
                <a href="https://github.com/john-lasala" target="_blank" class="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/johnblasala/" target="_blank" class="fa fa-linkedin"></a>
                <a href="mailto:johnblasala@gmail.com" class="fa fa-envelope"></a>
            </div>
        </footer>
    );
};

export default Footer;