import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Card Title I"
                cardText="Lorem Ipsum Text I"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/227/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title II"
                cardText="Lorem Ipsum Text II"
                updatedTime="Last updated 2 mins ago"
                image="https://picsum.photos/id/167/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title III"
                cardText="Lorem Ipsum Text III"
                updatedTime="Last updated 3 mins ago"
                image="https://picsum.photos/id/1041/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
