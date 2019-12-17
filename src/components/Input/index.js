import React from 'react';

function Input({
  id = '',
  text = '',
  value = '',
  placeholder = '',
  type = 'text',
  footer = '',
  onChange = function(){}
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{ text }</label>
      <input type={ type } className="form-control" id={id} onChange={ onChange } value={ value } placeholder={ placeholder }/>
      {
        footer ? <small className="form-text text-muted">{ footer }</small> : <></>
      }
    </div>
  );
}

export default Input;
