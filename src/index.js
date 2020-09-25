import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div className="gallery">
      <div className="photo">
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img>
      </div>
      <div className="photo">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img>
      </div>
      <div className="photo">
        <img
          src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
