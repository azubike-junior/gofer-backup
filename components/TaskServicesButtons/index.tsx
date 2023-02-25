import React from "react";
import { TaskBtnProps } from "../../types";

export default function TaskServicesButton({ image, description }) {
  return (
    <div className="options">
      <a href="#">
        <button>
          <img src={image} alt="" />
          <p>{description}</p>
        </button>
      </a>
    </div>
  );
}
