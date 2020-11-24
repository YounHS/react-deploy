import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.phone}</span>
                  <br></br>
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a class="button" href="https://github.com/YounHS/">
                    <i class="fa fa-external-link-square">
                    </i>
                    Go YounHS github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
