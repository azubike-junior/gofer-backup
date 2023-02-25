import React from "react";
import Button from "../Button";

const Tasks = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 text-sm">
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/pickups.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="pickups"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Pickups
                  </div>
                </div>
              }
              className=" 
                     border border-[#DCDCDC] h-48 w-48 rounded-lg flex flex-col justify-center"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/deliverytruck.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="deliveries"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Deliveries
                  </div>
                </div>
              }
              className=" 
                     border border-[#DCDCDC] h-48 w-48 rounded-lg flex flex-col justify-center"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/shoppingcart.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="shopping"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Shopping
                  </div>
                </div>
              }
              className=" 
                     border border-[#DCDCDC] h-48 w-48 rounded-lg flex flex-col justify-center"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/transportation.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="transportation"
                  />
                  <div className="absolute bottom-1 right-16 px-2 py-1 bg-white text-center">
                    Transportation
                  </div>
                </div>
              }
              className=" 
                     border border-[#DCDCDC] h-48 w-48 rounded-lg flex flex-col justify-center"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/movingservices.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="moving"
                  />
                  <div className="absolute bottom-1 right-16 px-2 py-1 bg-white text-center">
                    Moving Services
                  </div>
                </div>
              }
              className=" 
                     border border-[#DCDCDC] h-48 w-48 rounded-lg flex flex-col justify-center"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
