import React, { Component } from 'react';

import lenny from './media/pictures/josueAndLenny.jpg';
import romeo from './media/pictures/josueAndRomeo.jpg';
import ramsey from './media/pictures/josueAndRamsey.jpg';
import me from './media/pictures/me.jpg'
import Resume from './media/documents/josueAlfaro.pdf';

import ImageAvatar from './ImageAvatars';
import MyCard from './MyCard.js';

import FaTwitter from 'react-icons/lib/fa/twitter'
import GithubIcon from 'react-icons/lib/go/mark-github';
import FaInsta from 'react-icons/lib/fa/instagram';
import GotEm from 'react-icons/lib/ti/thumbs-ok';
import EmailIcon from 'react-icons/lib/md/email';

import BlueGrey from 'material-ui/colors/blueGrey'


import './App.css';
const svgStyle = {
  color: BlueGrey[50],
  width: 100,
  height: 500
};

const aboutMe = "Raised in Brookshire, Texas by immigrant parents (from El Salvador)"
+ " and I'm always proud to represent. "
+ "I earned a B.S. in Electrical and Computer Engineering from "
+ "The Univeristy of Texas at Austin in May 2017. "
+ "With focus in Software Engineering and Computer Architecture. ";

const currently = "I'm a Software Engineer contributing to the back-end platform at Honest Dollar. "
  + "When I'm not working, I'm usually doing at least on of the following: "
  + "watching Rick & Morty, Brooklyn Nine-Nine, or It's Always Sunny In Philadelphia, "
  + "eating phenomenal food, "
  + "driving down Lime Creek Road, "
  + "watching twitch streams with my brother (pictured above), "
  + "or listening to latin music!";

const contactMe = "Feel free to reach out in any form of communication. "
  + "I've provided (above) a few social mediums, as well as an email address. "
  + "If interested, peep my resume. (Click on the suit & tie picture above). "
  + "¡Muchas gracias!"

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="headerRowContainer">
          <h1><a style={svgStyle} href="https://twitter.com/jjalfaro9"
                 target="_blank"
                 rel="noopener noreferrer">
            <FaTwitter/>
          </a></h1>
          <h1><a style={svgStyle} href="https://www.instagram.com/jjalfaro9/"
                 target="_blank"
                 rel="noopener noreferrer">
            <FaInsta/>
          </a></h1>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <ImageAvatar
              alt="Josue Alfaro"
              src={me}
            />
          </a>
          <h1><a style={svgStyle} href="mailto:josuejalfaro+website@gmail.com">
            <EmailIcon/>
          </a></h1>
          <h1><a style={svgStyle} href="https://github.com/jjalfaro9"
                 target="_blank"
                 rel="noopener noreferrer">
            <GithubIcon/>
          </a></h1>
        </div>
        <div id="rowContainer" className="App">
          <MyCard id="rowContent"
            image={lenny}
            imageTitle="Lenny Santos & Josue Alfaro"
            title="About"
            about={aboutMe}/>
          <MyCard id="rowContent"
            image={ramsey}
            imageTitle="Ramsey Alfaro & Josue Alfaro"
            title="What's up currently?"
            about={currently}/>
          <MyCard id="rowContent"
            image={romeo}
            imageTitle="Romeo Santos & Josue Alfaro"
            title="Contact"
            about={contactMe}/>
        </div>
        <div id="holaMundo"  ><GotEm /></div>
      </div>
    );
  }
}

export default App;
