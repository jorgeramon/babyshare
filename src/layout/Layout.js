import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="p-3">
        { children }
      </div>
    </>
  );
}

export default Layout;
