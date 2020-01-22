import React, { Component } from "react";
//Photo Imports
import RatingIcon from "./images/iconsets/PNG/512/2620506 - employee_job rating_seeker unemployee_work.png";

//add scraper function

class Features extends Component {
  render() {
    return (
      <div className="row mx-auto">
        <div className="col-lg-3 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-center">Ratings</h4>
              <img className="card-img-top" src={RatingIcon} alt="" />
            </div>
            <div className="card-body">
              <p className="card-text text-center">
                Find out what teachers have to say!
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-center">Card title</h4>
            </div>
            <img
              className="card-img-top"
              src="http://placehold.it/300x200"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque sequi doloribus.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-center">Card title</h4>
            </div>
            <img
              className="card-img-top"
              src="http://placehold.it/300x200"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque sequi doloribus.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title text-center">Card title</h4>
            </div>
            <img
              className="card-img-top"
              src="http://placehold.it/300x200"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque sequi doloribus.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
