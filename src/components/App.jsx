import React, { Component } from 'react';

import { Container } from './App.styled'

import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions.js'
import { Section } from '../components/Section/Section'
import { Statistics } from '../components/Statistics/Statistics'
import { Notification} from '../components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  };

  onLeavingFeedback = (option) => {
    this.setState = prevState => {
      return {
    [option]: prevState[option] + 1,
      };
    };
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={Object.keys(this.state) } onLeaveFeedback={this.onLeavingFeedback } />
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} />
          <Notification message={"There is no feedback"} />
        </Section>
      </Container>
    )
  }
}

// total={ } positivePercentage={ } 

export default App;