import React, { Component } from 'react';
import './App.css';
import {Header, Navigation, Drawer, Content, Layout, Footer} from 'react-mdl';
import {MDBContainer, MDBFooter } from "mdbreact";
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Florin Marius Drilea" scroll>
                  <Navigation>
                      <Link to="/">About me</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="My portfolio">
                  <Navigation>
                      <Link to="/">About me</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
              <Footer className="footer">
              <MDBFooter className="font-small">
      <MDBContainer fluid className="text-center">
      </MDBContainer>
      <div>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Florin Marius Drilea. All Rights Reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
              </Footer>
          </Layout>
      </div>
      );
    }
}

export default App;