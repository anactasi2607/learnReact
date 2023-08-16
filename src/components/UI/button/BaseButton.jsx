import React from 'react';
import classes from './BaseButton.module.css'

const BaseButton = ({children, ...props}) => {
  const {customClasses, ...prepareProps} = props;
  const rootClasses = [classes.button, customClasses];

  return (
    <button {...prepareProps} className={rootClasses.join(' ')}>
      {children}
    </button>
  );
}

export default BaseButton;