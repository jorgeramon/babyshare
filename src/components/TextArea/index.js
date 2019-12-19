import React from 'react';

function TextArea({
  id = '',
  text = '',
  value = '',
  placeholder = '',
  footer = '',
  onChange = function(){}
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{ text }</label>
      <textarea className="form-control" id={id} onChange={ onChange } placeholder={ placeholder }>{value}</textarea>
      {
        footer ? <small className="form-text text-muted">{ footer }</small> : <></>
      }
    </div>
  );
}

export default TextArea;
