import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              {" "}
              Show navigation{" "}
            </a>{" "}
            <a className="mobile-btn" href="#" title="Hide navigation">
              {" "}
              Hide navigation{" "}
            </a>{" "}
            <ul id="nav" className="nav">
              <li className="current">
                {" "}
                <a className="smoothscroll" href="#home">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="smoothscroll" href="#about">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="smoothscroll" href="#resume">
                  {" "}
                  Resume{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="smoothscroll" href="#portfolio">
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="smoothscroll" href="#testimonials">
                  {" "}
                  Testimonials{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="smoothscroll" href="#contact">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>{" "}
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline"> This is 'YounHS' </h1>{" "}
              <h3>
                {" "}
                I'm a <span>SoftWare Engineer</span> and <span>Data Engineer</span> who is oriented toward <span>Data Science</span>. I have experience in open source analysis, so I can learn new technology quickly. I like to analyze and visualize various data.
                {" "}
              </h3>{" "}
              <hr />
              <ul className="social">
                {" "}
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          {" "}
                          <i className={item.className}> </i>
                        </a>
                      </li>
                    );
                  })}{" "}
              </ul>{" "}
            </div>{" "}
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              {" "}
              <i className="icon-down-circle"> </i>
            </a>
          </p>
        </header>{" "}
      </React.Fragment>
    );
  }
}
