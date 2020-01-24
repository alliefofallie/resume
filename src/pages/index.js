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
          Linux lover with a sponge brain turned Ops Engineer. <br></br>Queen of the Cloud seeking entrance to the InfoSec kingdom. <i class="far fa-star"></i>
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="download mt-5">
          <i class="fas fa-asterisk fa-xs"></i>   acquire as <a href="/assets/AllieBarnes-resume.pdf" target="_blank">PDF!</a>
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
                <ul className="fa-ul mb-0 ex-ul">
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Maintain & deliver infrastructure DevOps roadmap
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Manage AWS-hosted infrastructure & services (EC2, ECS, etc.)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Lead & mentor other Operations team members (small team)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Research & test architectural options/solutions in infrastruture
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Write & maintain playbooks to automate infrastructure provisioning & management (creating/configuring instances, database server backups, etc.)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Deliver monitoring & log analytics solutions to environment
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Maintain & eliminate technical debt across environment
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Develop internal documentation regarding infrastructure
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Speaking about product layout and features at IIA/ISACA Chicago 2019
                  </li>
                </ul>



            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">April 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">OpenStack Engineer</h3>
              <div className="subheading mb-3">Rackspace Hosting</div>
                <ul className="fa-ul mb-0 ex-ul">
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Operating, updating, and troubleshooting Red Hat OpenStack and OpenStack-Ansible distributions
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Providing subject-matter expertise to the team on Red Hat OpenStack, including spreading knowledge such as developing documentation and presenting BrownBag sessions
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Hands-on experience with Pacemaker & managed services on Red Hat OpenStack
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Network troubleshooting cloud environments inside of net namespaces & across physical network interfaces
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Operation, administration, troubleshooting of different container types on different OpenStack distributions
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Basic administration & troubleshooting of environments with Ceph storage deployments
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Troubleshooting core & supporting OpenStack services
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Performed numerous OpenStack deployments of Red Hat OpenStack
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    At-scale management of OpenStack cloud environments with Ansible
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Assisted with RHOSP product evaluation & bug reporting (to Red Hat QA team)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Contributed to providing internal documentation for Red Hat OpenStack & Ceph Object Storage
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Provided technical information contributing to public-facing articles relating to OpenStack
                  </li>
                </ul>

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
                <ul className="fa-ul mb-0 ex-ul">
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Wrote playbooks with Ansible playbooks to automate infrastructure management and operations tasks
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Implementation & management of Docker containers hosting microservices to be deployed into Kubernetes
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Work on-call shifts & respond to alarms/incidents
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Provide company IT Support (VPN management, email administration, etc.)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Administration & troubleshooting of F5 load balancers (at client-level)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Automation of deployment & implementation of monitoring & log analytics tool (DataDog)
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Implementation, administration, and troubleshooting of Kubernetes cluster
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Automated creation & management of infrastructure with Terraform
                  </li>
                </ul>


            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">April 2017 - October 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Linux Administrator</h3>
              <div className="subheading mb-3">Rackspace Hosting</div>

                <ul className="fa-ul mb-0 ex-ul">
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Began with very little experience in tech; was accepted into Rackspace's "Team New Talent" program for incoming Rackers to gain enough Linux experience to successfully support customers in a hosted environment
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Managed large enterprise linux environments for Rackspace's largest (F1000) customers
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Respond to customer requests regarding dedicated & cloud-hosted Linux environments via phone calls & ticketing system
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Respond to monitoring alarms related to server resource consumption issues such as high CPU, low-disk availability, etc.
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Wrote and quality-checked maintenance plans for scheduled customer downtime events
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Reported issues & product feedback with internal automation systems
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Served as escalation point to other Linux adminstrators on team, routinely mentored peers & new Rackers
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Routinely participated in mentoring newcomers to the Linux community in CyberPatriot & with Rackspace Cloud Academy's "Linux for Ladies" program
                  </li>
                  <li>
                    <i className="fa-exp-li fa fa-bolt"></i>
                    Screened potential Linux candidates for consideration via phone-screen and face-to-face interviews
                  </li>
                </ul>



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
        id="certifications"
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
              <h3 className="mb-0">Red Hat Certified System Administrator</h3>
              <div className="subheading mb-3">certificate id: 120-211-123</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">Date: December 2012</span>
              <br></br>
              <span className="text-secondary">Current Until: March 2022</span>
            </div>
          </div>

<br></br>
<br></br>
<br></br>

          <h4 className="mb-2 text-warning">inactive certifications:</h4>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0 font-italic">Red Hat Certificate of Expertise in Server Hardening</h3>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-light">Date: April 2015 - April 2018</span>
            </div>
          </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0 font-italic">Red Hat Certified System Administrator in Red Hat OpenStack</h3>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-light">Date: February 2016 - February 2019</span>
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
              <i className="fas fa-code"></i>
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
              <i className="fab fa-slack-hash"></i>
            </li>
          </ul>

        <div className="subheading2 mb-3">hands-on experience:</div>
          <ul className="fa-ul mb-0 sk-ul">
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Maintaining entire cloud infrastructure and resources of startup environment
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementing basic environmental necessities such as monitoring health-checks, log analytics, and resource provisioning automation
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Responding to on-call shifts, alarms, and incidents with PagerDuty & Slack
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Writing automation tasks via Ansible for infrastructure mangement, application deployments, etc.
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Managing infrastructure resources across various cloud platforms (Google, AWS, Rackspace/OpenStack)
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementation & configuration of Kubernetes on different cloud platforms (Google, AWS)
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Writing service deployments for applications into Kubernetes
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementation, operation, troubleshooting of different container platforms (LXC, Docker in self-hosted, Kubernetes, and AWS ECS environments)
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Using Terraform to automate infrastructure management across different hosting providers
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementing, managing, creating dashboards on analytics platforms such as DataDog, Kibana, Grafana
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Automation of analytics software such as DataDog with Ansible
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Configuring pipelines in Spinnaker to assist with automated CI/CD deployments to Kubernetes
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementing & managing OpenVPN to run a self-hosted company VPN server
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Implementing OpenStack deployments using automated tools like Ironic, Heat, Puppet, and Ansible
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Management & troubleshooting cloud services such as Nova, Glance, Ironic, Heat, Neutron, Cinder, Swift, Ceph, Keystone, etc.
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Management & troubleshooting of core supporting technologies in cloud environments such as RabbitMQ, Galera, HAproxy, memcache, OpenvSwitch/Linux bridges, MySQL
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Tuning F5 connection pools to improve performance based on resource consumption
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Network management & troubleshooting in cloud and dedicated hosting environments
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Server-side management of database platforms such as MySQL & PostgreSQL
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Writing technical documentation to be consumed by non-technical audiences, internal & external
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Infrastructure-side deployment of Ruby/Elixir-based microservices
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Server & container-level management of resources hosting NodeJS applications
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Heavy experience managing AWS services (EC2, ECS, Route53, CloudWatch, CloudTrail, GuardDuty, etc.)
            </li>
            <li>
              <i className="fa-exp-li fa fa-bolt"></i>
              Basic experience securing environments at the infrastruture-level (firewall)
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
          <h2 className="mb-4">Interests</h2>
          <p className="interests">
          You can usually find me at the keyboard, either participating in CTF challenges/competitions, helping to maintain the <a href="https://twitter.com/ctf_circle" target="_blank">CTF Circle</a>, or volunteering & serving as interim CTO of <a href="https://badassarmy.org/" target="_blank">BADASS ARMY</a>, a non-profit dedicated to supporting victims of revenge porn.
          </p>
          <br></br>
          <p className="interests">
          When I'm AFK, I enjoy attending/speaking at InfoSec & Open-Source community conferences, including local community meetups such as Dallas Hackers Association. Outside of hacking community activities, I enjoy going to concerts & spending time with my animals. <i class="far fa-grin-beam fa-1x"></i>
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="communitytalks"
      >
        <div className="w-100">
          <h2 className="mb-5">Community Talks</h2>
          <ul className="fa-ul mb-0 ct-ul">
            <li>
              <i className="fa-li fas fa-angle-right"></i>
              Confessions of a SysAd (Linux Edition)
              <p className="li-talks">
              BSidesRGV, BSidesSA, Texas Linux Fest, BSidesBCS (Feb 2020), NOLAcon (May 2020)
              <br></br>
              Watch <a href="https://www.youtube.com/watch?v=AEVHUqD4wUM">here!</a>
              </p>
            </li>
            <li>
              <i className="fa-li fas fa-angle-right"></i>
              From Zero to Hero: Going From Dropout to Engineer in > Decade
            </li>
              <p className="li-talks">
              Texas Cyber Summit
              </p>
            <li>
              <i className="fa-li fas fa-angle-right"></i>
              Naked & Unafraid: Keeping Your Private Pics Private
            </li>
              <p className="li-talks">
              Dallas Hackers Assocation
              </p>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
