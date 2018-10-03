import React from 'react';

export default class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <header className="header">
                    <h1 className="title">Jean Louis Salbego</h1>
                    <h3 className="subtitle">Full Stack Developer</h3>
                </header>
                <p className="icons">
                    <a href="https://github.com/jlouiss/jlouiss.github.io" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeanlouissalbego" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x"/>
                    </a>
                    <a href="https://twitter.com/jlsalbego" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-2x"/>
                    </a>
                    <a href="https://codepen.io/JLouisS" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-codepen fa-2x"/>
                    </a>
                    <a href="https://www.freecodecamp.org/jlouiss" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-free-code-camp fa-2x"/>
                    </a>
                    <a href="http://instagram.com/jeanlouissalbego" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"/>
                    </a>
                </p>
                <small className="footer">
                    Please, follow the github link to find more about me.
                    {/* HIRE ME!!! */}
                </small>
            </React.Fragment>
        );

    }

}
