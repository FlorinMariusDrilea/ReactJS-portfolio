import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className = "resume">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('F:/Poze/profile.png')}
                alt="avatar"
                style={{}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Florin Marius Drilea</h2>
            <h4 style={{color: 'grey'}}>Graduate Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2'}}/>
            <p>Reliable developer with a degree in Computer Science and background in different
            programming languages and Project Management activities. Hard-working and team
            working person with a lot of experience during my degree. I am also a qualified referee.</p>
            <hr style={{borderTop: '3px solid #833fb2'}}/>
            <h5>Address</h5>
            <p>34 Edward St., IQ Brocco, Sheffield</p>
            <h5>Phone</h5>
            <p>+447716312297</p>
            <h5>Email</h5>
            <p>marius.drilea2016@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2020}
              schoolName="University of Sheffield"
              schoolDescription="I entered in 2017 into the University of Sheffield into the Computer Sience field, studying lots of
              programming languages and different concepts of this field that helped me a lot improve into this field of work. I recieved a 2.1
              in the end, after the 3 years of this course."
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
            startYear={2018}
            endYear={2020}
            jobName="Student Ambassador - University of Sheffield"
            jobDescription="Giving information to other people that want to visit or come to the University of
            Sheffield in the future. Organizing tours and presenting our building to other people.
            "
            />
            <Experience
              startYear={'July ' + 2019}
              endYear={'October ' + 2019}
              jobName="Junior Java Developer - Internship at Unicredit Services, Iasi, Romania"
              jobDescription="I worked in an internship program at UniCredit Services, where we developed a project
              named TFO (Trade Finance). We worked in Java 8 and with used different data sets
              to transfer the data from the reading of an OCR program to different locations."
              />

              <Experience
              startYear={'July ' + 2020}
              endYear={'September ' + 2020}
                jobName="Game Server Developer - Crucible, Sheffield"
                jobDescription="I was working as a game server developer in this company in order to get the game engine and
                server developing of different types of slot games using a GDM game engine."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={100}
                />
                <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                    skill="C++"
                    progress={50}
                    />
                    <Skills
                      skill="JavaScript"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;