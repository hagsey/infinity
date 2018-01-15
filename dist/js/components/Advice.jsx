import React from 'react';

const collection = {
  general: [
    "Is that even a training question?",
    "That doesn't even make sense.",
    "This question requires a priest.",
    "Let me get back to you on that one.",
    "One sec...Googling..."
  ],
  performance: [
    "I'm not sure but bicep curls will likely help.",
    "Let me Google that. Hold on...",
    "Run hills."
  ],
  depends: [
    "It depends. Sorry if I've left you unsatisfied.",
    "At times yes, at times no. I'll need a little more info."
  ],
  vegan: [
    "Vegans are not to be trusted.",
    "Did you know that in some countries, vegans aren't allowed to vote?",
    "I'm not sure but wouldn't it be funny if scientists discovered that kale plants had souls? That'd spice things up."
  ],
  keto: [
    "Yeah...live off of bacon and butter. See how that works for ya.",
    "Keto is extreme. Most people don't need extreme, but it feeds their 'I'm a unique snowflake' complex.",
    "I'm not sure but technically a bacon and cream cheese sandwich deep fried in butter would be OK for the keto folks. That's weird."
  ],
  paleo: [
    "You know cavemen probably had shit lives, right?",
    "I'm not sure, but I've noticed a lot of Paleo advocates wearing $600 GPS watches.",
    "Yeah...that orange is definitely bad for you."
  ],
  lose: [
    "The battle is in the kitchen, not the gym.",
    "Obviously you haven't heard about the magic of putting butter in your coffee.",
    "Spinach.",
    "Stop eating crap."
  ],
  injury: [
    "If it hurts, stop doing it.",
    "Learn, but don't self-diagnose. Get assessed by a professional."
  ],
  habit: [
    "Do less than you think",
    "If you're consulting a random webpage for life advice, you need actual help.",
    "Here's the secret: Consistency + patience = results."
  ],
  how: [
    "I'm not sure but more sleep and fewer cookies will help.",
    "Squats would be a good start."
  ],
  sick: [
    "Don't train. Rest, then give it another day.",
    "Unless it's a minor sniffle, rest."
  ],
  muscle: [
    "Train hard, eat harder.",
    "Lift, eat, sleep.",
    "Volume rules."
  ]
};

const performance_regex = /better|fast|strong|lean|get fit|improve/;
const depends_regex =     /should i/;
const lose_regex =        /lose weight|lose fat|skinny|fit into|fit in to/;
const vegan_regex =       /vegan|plant based/;
const paleo_regex =       /paleo|primal/;
const keto_regex =        /keto|ketogenic|low carb|LCHF|lchf/;
const muscle_regex =      /jacked|get big|swole|muscle|mass/;
const injury_regex =      /injured|injury|hurt|hurts|injuries|pain/;
const habit_regex =       /consistent|discipline/;
const how_regex =         /how do|how can|how does|how will/;
const sick_regex =        /flu|sick|ill|i have a cold/;

class Advice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      advice: 'Eric says...'
    }

    this.getAdvice = this.getAdvice.bind(this);
    this.selectByCategory = this.selectByCategory.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  selectByCategory(str) {
    var list = collection[str];

    return list[Math.floor(Math.random()*list.length)];
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.getAdvice();
    }
  }

  getAdvice() {
    var question = this.refs['question'].value.toLowerCase(),
        category,
        advice;

    if (question.length === 0) {
      this.setState({advice: "You have to type something, genius."});
      
    } else {

      if (vegan_regex.test(question)) {
        advice = this.selectByCategory('vegan');
      } else if (keto_regex.test(question)) {
        advice = this.selectByCategory('keto');
      } else if (paleo_regex.test(question)) {
        advice = this.selectByCategory('paleo');
      } else if (depends_regex.test(question)) {
        advice = this.selectByCategory('depends');
      } else if (performance_regex.test(question)) {
        advice = this.selectByCategory('performance');
      } else if (lose_regex.test(question)) {
        advice = this.selectByCategory('lose');
      } else if (muscle_regex.test(question)) {
        advice = this.selectByCategory('muscle');
      } else if (habit_regex.test(question)) {
        advice = this.selectByCategory('habit');
      } else if (injury_regex.test(question)) {
        advice = this.selectByCategory('injury');
      } else if (sick_regex.test(question)) {
        advice = this.selectByCategory('sick');
      } else if (how_regex.test(question)) {
        advice = this.selectByCategory('how');
      } else {
        advice = this.selectByCategory('general');
      }

      this.setState({advice: advice});
    }
  }

  render () {
    return (
      <div>
         <div className="input-group">
          <input
            placeholder="Ask me anything"
            ref="question"
            onKeyPress={this.handleKeyPress}
            type='text' />
          <div 
            className="btn"
            onClick={this.getAdvice}>
            Ask
          </div>
        </div>
        <p><i style={{marginRight:5 + 'px'}} className="fa fa-quote-left"></i><span>{this.state.advice}</span></p>

      </div>
    );
  }
}

export default Advice;