import React from "react";
import Button from "../Button";

const Services = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 text-sm">
        <div className="flex flex-col">
          <div className="relative">
            <Button
              child={
                <div className="flex flex-col items-center">
                  <img
                    src="/errandIcons/gardening.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="gardening"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Gardening
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
                    src="/errandIcons/baby.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="baby"
                  />
                  <div className="absolute bottom-1 right-16 px-2 py-1 bg-white text-center">
                    Baby Sitting
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
                    src="/errandIcons/laundry.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="laundry"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Laundry
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
                    src="/errandIcons/cleaning.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="cleaning"
                  />
                  <div className="absolute bottom-1 right-24 px-2 py-1 bg-white text-center">
                    Cleaning
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
                    src="/errandIcons/readingandwriting.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="reading"
                  />
                  <div className="absolute bottom-1 right-16 px-2 py-1 bg-white text-center">
                    Reading/Writing
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
                    src="/errandIcons/tailoring.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="tailoring"
                  />
                  <div className="absolute bottom-1 right-16 px-2 py-1 bg-white text-center">
                    Fashion/Tailoring
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
                    src="/errandIcons/mechanic.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="mechanic"
                  />
                  <div className="absolute bottom-1 right-20 px-2 py-1 bg-white text-center">
                    Auto Services
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
                    src="/errandIcons/catering.svg"
                    className="mb-10 mx-10 justify-center"
                    alt="catering"
                  />
                  <div className="absolute bottom-1 right-14 px-2 py-1 bg-white text-center">
                    Catering Services
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

export default Services;
