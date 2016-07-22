import React from 'react';

class Instructions extends React.Component {
  render() {
    console.log('test');
    return (
      <div className="jumbotron instructions-component">
        <h2>How to Play</h2>
        <p>Use all four numbers exactly one time, in conjunction with the
          operators of addition (+), subtraction (-), multiplication (*),
          and division (/), to yield a result of <strong>24</strong>.
        </p>
      </div>
    );
  }
}

export default Instructions;
