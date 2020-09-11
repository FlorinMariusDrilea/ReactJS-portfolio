import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import * as emailjs from 'emailjs-com'
import {init} from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


init("user_ug48gVlKhZb8pjDFyeV14");

class Contact extends Component {  
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  sendEmail() {
    window.location.assign("mailto:marius.drilea2016@gmail.com");
  }

  handleSubmit(e) {
    e.preventDefault()
    const {email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail-florin',
      'template_adpcv7p',
       templateParams,
      'user_ug48gVlKhZb8pjDFyeV14'
     ).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("You have sent the email succesfully!");
      }, function(error) {
         console.log('FAILED...', error);
         alert("The email have not been send!");
     })
     this.resetForm()
     
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render () {
    return (
    <div className="contact">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      Please be free to contact me if you have any enquires related to the information described into the website portfolio or if you want to talk about a job position or a possible project that could fit me into it.
      </p>
      <div className="contact-form">
          <h1 className="p-heading1">Contact me</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}                
                placeholder="Write your message here"
              />
            </FormGroup>
<Button variant="primary" type="submit" color="blue">
              Submit
            </Button>
          </Form>
        </div>
        <MDBCol className="map">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152260.66967451829!2d-1.6395382740583975!3d53.39563467905595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e0!3m2!1sen!2sro!4v1599752911458!5m2!1sen!2sro"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="mb-md-0">Sheffield, UK</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="mb-md-0">+447716312297</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1" onclick="sendEmail()">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0">marius.drilea2016@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </div>
    )
  }
}


export default Contact;