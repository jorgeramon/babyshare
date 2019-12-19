import React from 'react';

function Select({
  id = '',
  text = '',
  value = '',
  defaultOption = '',
  options = [],
  placeholder = '',
  onChange = function(){}
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{ text }</label>
      <select class="form-control" id={id} value={value} onChange={ onChange }>
        {
          defaultOption ? <option>{ defaultOption }</option> : <></>
        }
        {
          options.map(option => (
            <option value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;
