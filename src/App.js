import React, { Component } from 'react';

import lenny from './media/pictures/josueAndLenny.jpg';
import romeo from './media/pictures/josueAndRomeo.jpg';
import hotones from './media/pictures/hotOnes.jpg';
import me from './media/pictures/moreProfessionalMe.jpg'
import Resume from './media/documents/josuejalfaro.pdf';

import ImageAvatar from './ImageAvatars';
import MyCard from './MyCard.js';

import FaTwitter from 'react-icons/lib/fa/twitter'
import GithubIcon from 'react-icons/lib/go/mark-github';
import FaInsta from 'react-icons/lib/fa/instagram';
import EmailIcon from 'react-icons/lib/md/email';

import color from 'material-ui/colors/lime'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';

const svgStyle = {
  color: color[200],
  width: 100,
  height: 500
};

const aboutMe = "I'm a first generation citizen to proud Salvadoran (🇸🇻) parents! 😃"
+ "Thanks to them I've learned true definition of working hard, perseverance, importance of an education, and how to survive. "
+ "I like to think that I'm a nice and thoughtful person spreading happiness and cheer in this world. "
+ "I also enjoy placing myself in situations that are out of my comfort zone. I believe it allows me to grow and appreciate "
+ "experiences that I would have not tried in the first place. "


const currently = "I'm graduating in May 2020 with a M.S. in Computer Science focused in deep learning and natural language processing. "
+ "I'm actively looking for full time machine learning engineering roles as well as software engineering roles! "


const contactMe = "Feel free to reach out in any form of communication. "
  + "I've provided (above) a few social mediums, as well as an email address. "
  + "If interested, peep my resume. (Click on the middle picture of me with shades on, above). "
  + "¡Muchas gracias!"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
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
            <a href={Resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'#1A00AD'}}>
              <ImageAvatar
                alt="Josue Alfaro"
                src={me}
              />
              <p> Resume⤴ </p>
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
          <div id="rowContainer">
            <MyCard id="rowContent"
              image={lenny}
              imageTitle="Lenny Santos & Josue Alfaro"
              title="About"
              about={aboutMe}/>
            <MyCard id="rowContent"
              image={hotones}
              imageTitle="Friends & Josue Alfaro"
              title="What's up currently?"
              about={currently}/>
            <MyCard id="rowContent"
              image={romeo}
              imageTitle="Romeo Santos & Josue Alfaro"
              title="Contact"
              about={contactMe}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette:  {
    text: {
        primary: "#1A00AD"
      },
  }
});


export default App;
