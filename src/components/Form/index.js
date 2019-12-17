import React from 'react';

function Form({ onSubmit = function(){}, children }) {

  const _onSubmit = function (event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={ _onSubmit }>
      { children }
    </form>
  );
}

export default Form;
