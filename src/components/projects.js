import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ativeTab:0
        };
    }

    toogleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'black' }} ><center>The placement of Air Pollution Sensors in Kampala using a Clustering Approach</center></CardTitle>
                    <CardText>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                      <center><Button colored>GitHub</Button></center>
                    </CardActions>
                  </Card>
                </div>
            )
        } else if(this.state.activeTab ===1) {
            return(
                <div className="projects-grid">
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'black' }} ><center>UniCredit Services Project</center></CardTitle>
                    <CardText>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                      <center><Button colored>GitHub</Button></center>
                    </CardActions>
                  </Card>
                </div>
            )
        } else if(this.state.activeTab ===2) {
            return(
                <div className="projects-grid">
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'black' }} ><center>Snake Game in C++</center></CardTitle>
                    <CardText>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                      <center><Button colored>GitHub</Button></center>
                    </CardActions>
                  </Card>
                </div>
            )
       }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>University</Tab>
                    <Tab>Professional</Tab>
                    <Tab>Personal</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toogleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;