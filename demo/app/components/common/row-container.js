import React from 'react';

export default (props) => {
  return(
    <div className="row">
      <div  className="col-sm-12 col-md-12 col-lg-12">
        {props.children}
      </div>
    </div>
  )
};