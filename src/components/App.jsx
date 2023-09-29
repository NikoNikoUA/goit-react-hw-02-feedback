import React, { Component } from 'react';

import { Feedback } from '../components/Feedback/Feedback'
import { Container} from './App.styled'

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  };

  onAddingFeedback = () => {
     this.setState = prevState => {
           return {
    
      };
    };
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Feedback onAddingFeedback={this.onAddingFeedback} good={good} neutral={neutral} bad={bad} mainTitle={'Please leave feedback'} title={'Statistics'} />
        </Container>
    );
  }
}

export default App;