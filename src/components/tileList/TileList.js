import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (props) => {

  const {object}=props;

  const tiles= props.object?.map((info,index)=> <Tile info={info} key={index}/>);


  return (
    <div>
      {tiles}
    </div>
  );
};
