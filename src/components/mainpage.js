import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class MainPage extends Component {
    render() {
        return (
            <div style ={{margin:'auto'}}>
                <Grid className ="landing-color">
                    <Cell col={12}>
                    {/* <img src={require('F:/Poze/profile.png')}
                        alt="avatar"
                        
        />           */}
                        <div className="banner-text">
                            <h1>Gradute in Computer Science</h1>
                            <hr/>

                            <p>Python | Java | C++ | C# | React | Ruby on Rails | Javascript </p>
                            
                            <div className = "social-links">

                                {/* GitHub */}
                                <a href="https://github.com/FlorinMariusDrilea" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true"/>
                                </a>

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/florin-drilea-b17397174/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/marius_drilea98/?hl=ro" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default MainPage;