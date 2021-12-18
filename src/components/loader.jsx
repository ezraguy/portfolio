import React from 'react';
const Loader = ({ loading }) => {
  return (
    <div className={loading ? 'loader-wrap loading' : 'loader-wrap'}>
      <div className="circle"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
};

export default Loader;
