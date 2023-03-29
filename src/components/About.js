import React from 'react';
import myImg from '../img/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Augustine.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            an aspiring developer, yet still in progress learning skills such as{" "}
            <br />, <b>Web Responsive</b>,<b>Frontend Web dev</b>,{" "}
            <b>Software Dev</b>,<br /> <b>Moblile Application</b> and{" "}
            <b>Graphics Design</b>.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center mx-auto rounded"
            alt="hero"
            src={myImg}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="container flex justify-center  mx-auto">
        <a className=" " href="https://www.facebook.com/">
          <FontAwesomeIcon className="fa-3x mx-auto px-5" icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/">
          <FontAwesomeIcon className="fa-3x px-5" icon={faTwitter} />
        </a>
        <a href="https://github.com/augustinemapheto">
          <FontAwesomeIcon className="fa-3x px-5" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/-mmapheto-ma-5623431a2">
          <FontAwesomeIcon className="fa-3x px-5" icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}

export default About