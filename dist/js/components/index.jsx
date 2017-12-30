import React from 'react';
import {render} from 'react-dom';
import MaxEstimator from './MaxEstimator.jsx';

const collection = {
  general: [
    "I think you underestimate yourself",
    "Your logic is poor",
    "Never heard that before",
    "That doesn't even make sense",
    "Tell someone who cares",
    "That's just stupid."
  ],
  blame: [
    "Don't blame them.",
    "Actually, no. It was still your fault."
  ],
  money: [
    "Pushups are free",
    "Squats cost nothing",
    "I didn't know you needed to have a line of credit to move your body",
    "Which is why you NEVER go out to eat, right?"
  ],
  time: [
    "If you had time to poop, you had time to squat.",
    "1 minute of training is more than you did today. Start there.",
    "It doesn't have to be an hour"
  ],
  health: [
    "Movement is medicine.",
    "Squats heal.",
    "Doing nothing is riskier for your health",
    "Aw muffin, can I get you a bandaid?"
  ]
};

const time_regex = /time/;
const money_regex = /money|afford|cost|costs|expensive/;
const blame_regex = /wife|dog|cat|pet|girlfriend|boyfriend|husband|children|kids|kid|child/;
const health_regex = /injured|injury|hurt|hurts|injuries|hospital|pain|flu|sick/;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      advice: ''
    }

    this.getAdvice = this.getAdvice.bind(this);
    this.selectByCategory = this.selectByCategory.bind(this);
  }

  selectByCategory(str) {
    var list = collection[str];

    return list[Math.floor(Math.random()*list.length)];
  }


  getAdvice() {
    var excuse = this.refs['excuse'].value,
        category,
        advice;

    if (excuse.length === 0) {
      this.setState({advice: "I can't hear you."});
      
    } else {
      if (time_regex.test(excuse)) {
        advice = this.selectByCategory('time');
      } else if (blame_regex.test(excuse)) {
        advice = this.selectByCategory('blame');
      } else if (money_regex.test(excuse)) {
        advice = this.selectByCategory('money');
      } else if (health_regex.test(excuse)) {
        advice = this.selectByCategory('health');
      } else {
        advice = this.selectByCategory('general');
      }

      this.setState({advice: advice});
    }
  }

  render () {

    return (
      <div>
        <p>I didn't train today because...</p>
         <div className="input-group">
          <input
            placeholder="Enter lame excuse here"
            ref="excuse"
            type='text' />
          <div 
            className="btn btn-alpha"
            onClick={this.getAdvice}>
            Get help
          </div>
        </div>
        <p>{this.state.advice}</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
