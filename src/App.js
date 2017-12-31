import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import './App.css';

class App extends Component {
  render() {
    return (
    <SectionsContainer>
      <Section>
        <div class="App-header">
          <h1 class="App-title">Under Maintenance. Check it out later :)</h1>
        </div>
      </Section>
    </SectionsContainer>
    );
  }
}

export default App;
