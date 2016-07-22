import React from 'react';
import Random from '../lib/Random';

class Problem extends React.Component {
  constructor(props) {
    super(props);

    this.problem = this.generateProblem();
  }

  generateProblem() {
    const randomizer = new Random;
    return randomizer.generate(4, 9);
  }

  displayProblem() {
    return this.problem.join(' ');
  }

  render() {
    return(
      <div className='problem-component'>
        <p className='problem-instructions'>
          Use all four numbers exactly one time, in conjunction with the
          operations of addition (+), subtraction (-), multiplication (*), and
          division (/), to yield a result of 24.
        </p>
        <div className='problem'>{this.displayProblem()}</div>
        <form>
          <input autoFocus></input>
        </form>
      </div>
    );
  }
}

export default Problem;
