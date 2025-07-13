import React from "react";

function TeamCard({ name, id, img }) {
  return (
    <div className="card text-center shadow-sm">
      <img
        src={`/images/${img}`}
        className="card-img-top rounded-circle mx-auto mt-3"
        alt={name}
        style={{ width: "80px", height: "80px" }}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">ID: {id}</p>
      </div>
    </div>
  );
}

export default TeamCard;
