import React from "react";
// import { Data } from "./Data";

const Filter = ({ data, cat, Filterbtn }) => {
  // console.log(data);
  return (
    <div className="">
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto text-white h1">App Store</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="pt-5" align="center">
            {cat.map((val) => {
              // console.log(val);
              return (
                <button
                  key={val.id}
                  className="btn btn-primary mx-2"
                  onClick={() => Filterbtn(val.category)}
                >
                  {val.category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row py-5 align-items-center">
          {data.map((item) => {
            return (
              <div class="col-3 text-center ">
                <div className="py-3" key={item.id}>
                  <div className="card w-100 h-100">
                    <div className="card-body">
                      <img src={item.img} alt="" className="w-50" />
                      <h5 className="card-title py-3">{item.name}</h5>
                      <p className="card-text">{item.price}.</p>
                      <a href="#" className="btn btn-primary w-50">
                        add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
