import React, { Component } from "react";
// import Background from "./images/bronx.jpg";

// const headerStyle = {
//   backgroundImage: `url(${Background})`,
//   backgroundSize: "cover",
//   overflow: "hidden"
// };

const headerStyle = {
  // backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  overflow: "hidden"
};

class Header extends Component {
  render() {
    return (
      <div>
        {/* <header style={headerStyle} className="py-5 mb-5"> */}
        <header style={headerStyle} className="py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1>EduRator</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
