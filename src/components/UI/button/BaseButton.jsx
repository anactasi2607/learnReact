import React from 'react';
import classes from './BaseButton.module.css'

const BaseButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
}

export default BaseButton;