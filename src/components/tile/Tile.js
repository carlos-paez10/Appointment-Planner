import React from "react";

export const Tile = (props) => {
  const object=props.info;
  const values= Object.values(object)
  const mapRender= values.map((item,index)=>  { 
    let className;
    if(index===0){
     className='tile-tile'
    }else{
      className='tile'
    }
    
    return <p className={className} key={index}>{item}</p>
  });
  
  return (
    <div className="tile-container">
    {mapRender}
    </div>
  );
};
