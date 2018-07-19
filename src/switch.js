import React from 'react';
import './switch.css';

function Switch({ on, onClick, className = '', ...props }) {
  var switchClassName = [
    ...className.split(' '),
    'switch',
    on ? 'switch--on' : 'switch--off'
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <label className={switchClassName} aria-label="Switch">
      <input
        type="checkbox"
        checked={on}
        onClick={onClick}
        className="switch__input"
        {...props}
      />
    </label>
  );
}

export default Switch;
