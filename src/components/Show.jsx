import React from "react";
import { datas } from "../dumy/data";

const show = () => {
  return (
    <div>
      {datas.map((item, index) => (
        <div key={index}>
          {" "}
          <img src={item.image} alt="" />
          <span>{item.follower}</span> <span>{item.following}</span>
        </div>
      ))}
    </div>
  );
};

export default show;
