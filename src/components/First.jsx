import React from "react";
import { Row, Col } from "react-bootstrap";
import { datas } from "../dumy/data";

const First = () => {
  return (
    <div>
      {datas.map((item, index) => (
        <Card style={{ width: "5rem" }}>
          <div className="row">
            <div className="col-md">
              {" "}
              <img src={item.image} alt="" className="w-100" />
            </div>
            <div className="col-md">
              {item.username}
              <p>{item.follower}</p>
              <div></div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default First;
