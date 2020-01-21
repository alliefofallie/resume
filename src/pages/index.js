import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>

          <div className="social-icons mt-4">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
          </div>
{/*
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
*/}
          <p className="lead mb-3 mt-4">
           idkstuff
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Cloud Operations Engineer</h3>
              <div className="subheading mb-3">Infocyte</div>
              <p>
                Job description here!
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">April 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">OpenStack Engineer</h3>
              <div className="subheading mb-3">Rackspace Hosting</div>
              <p>
                Job stuff here!
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">August 2015 - February 2017</span>
              <br></br>
              <span className="text-secondary">October 2018 - April 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Operations Engineer</h3>
              <div className="subheading mb-3">TeamSnap</div>
              <p>
                job stuff here!
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">April 2017 - October 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Linux Administrator</h3>
              <div className="subheading mb-3">Rackspace Hosting</div>
              <p>
                job stuff here
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">January 2012 - August 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Red Hat Certified Specialist in Ansible Automation</h3>
              <div className="subheading mb-1">certificate id: 120-211-123</div>
              <div>Technologies Used: Ansible 2.3</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Date: March 2019</span>
              <br></br>
              <span className="text-secondary">Current Until: March 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Red Hat Certified Engineer</h3>
              <div className="subheading mb-3">certificate id: 120-211-123</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Date: July 2013</span>
              <br></br>
              <span className="text-secondary">Current Until: March 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Red Hat Certified Engineer</h3>
              <div className="subheading mb-3">certificate id: 120-211-123</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Date: July 2013</span>
              <br></br>
              <span className="text-secondary">Current Until: March 2022</span>
            </div>
          </div>
        </div>



      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            OS & Tools (!! RE-ORGANIZE THIS)
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item dev-icons">
              <i className="fab fa-ubuntu"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-redhat"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-trello"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fas fa-dharmachakra"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fas fa-cloud"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-confluence"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fas fa-database"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-github"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fas fa-users"></i>
            </li>
            <li className="list-inline-item dev-icons">
              <i className="fab fa-slack-hash"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
