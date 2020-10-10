import React from 'react';

import './Modal.css';
import Transition from "react-transition-group/cjs/Transition";

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = (props) => {
  return (
      <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
        {state => {
          const classes = ['Modal',
            state === 'entering' ? 'Open'
                : state === 'exiting' ? 'Closed' : null];

          return (
            <div className={classes.join(' ')}>
              <h1>A Modal</h1>
              <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
          );
        }}
      </Transition>
  );
}

export default modal;
