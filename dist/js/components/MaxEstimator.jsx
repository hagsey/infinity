import React from 'react';
import {render} from 'react-dom';

class MaxEstimator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weight: 0,
      reps: 0,
      max: '',
      errors: {}
    };

    this.updateMax = this.updateMax.bind(this);
  }

  updateMax() {
    var weight = +this.refs['weight'].value;
    var reps = +this.refs['reps'].value;

    if (isNaN(weight) || isNaN(reps)) {
      this.setState({max: 'Please input valid number'});
    } else {
      var max;

      if (reps === 1) {
        max = weight;
      } else {
        max = Math.round((weight*reps*0.033)+weight);
      }

      if (max > 1000) {
        max = 'Ok, easy there bud.'
      } else {
        max = max + 'lbs';  
      }
      this.setState({max: max});
    }
  }

  render () {
    return (
      <div>
        <h2> 1RM Estimator</h2>
        <div>        
          <input
            placeholder="Enter weight"
            ref="weight"
            type='text'
            onChange={this.updateMax} />
          <span> lbs</span>
        </div>

        <div>
          <input
            placeholder="Enter repetitions"
            ref="reps"
            type='text'
            onChange={this.updateMax} />
          <span> reps</span>
        </div>

        <h4>Estimated 1RM: <span>{this.state.max}</span></h4>

      </div>

    ) 
  }
}

export default MaxEstimator;