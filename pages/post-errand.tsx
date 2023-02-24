import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import Button from "../components/Button";
import Tasks from "../components/ErrandTasks";
import Services from "../components/ErrandServices";
import StepProgressBar from "../components/ProgressBar";
import Map from "../components/GoogleMaps";
import Footer from "../components/Footer";

export default function postErrand() {
  const router = useRouter();
  return (
    <div className="bg-white h-full font-inter ">
      <section className="flex px-12 border-b-4 border-b-gray-300 mb-10">
        <div className="flex items-center w-full mt-8 mb-4">
          <p className="flex-1 font-bold leading-43 text-3xl text-black">
            Gofer
          </p>
          <Button
            child="Get Started"
            className="bg-white text-blue rounded-lg border-[#A5B6DE] py-2 px-3 w-40 border-1 text-xs text-blue-500 ml-auto"
            onClick={() => {}}
          />
        </div>
      </section>
      <main className="w-full  px-28 pb-14">
        <div className="border-b-1 border-blue mb-5 font-bold text-lg leading-9">
          <p className="mb-2">
            Create Errand <span className="mx-2">{">"}</span>
            <span className="text-blue-500 ">Select Category</span>
          </p>
        </div>
        <div className="flex flex-row gap-20">
          <div className=" flex h-12 w-28 m-4">
            <h1 className="text-5xl font-advent-bold tracking-tight leading-12">
              01
            </h1>
            <p className="flex items-center ml-1 text-sm">Select Category</p>
          </div>
          <div className=" flex h-12 w-28 m-4">
            <h1 className="text-5xl font-advent-bold tracking-tight leading-12">
              02
            </h1>
            <p className="flex items-center ml-1 text-sm">Errand Details</p>
          </div>
          <div className=" flex h-12 w-28 m-4">
            <h1 className="text-5xl font-advent-bold tracking-tight leading-12">
              03
            </h1>
            <p className="flex items-center ml-1 text-sm">Errand Location</p>
          </div>
          <div className=" flex h-12 w-28 m-4">
            <h1 className="text-5xl font-advent-bold tracking-tight leading-12">
              04
            </h1>
            <p className="flex items-center ml-1 text-sm">Errand Finances</p>
          </div>
          <div className=" flex h-12 w-28 m-4">
            <h1 className="text-5xl font-advent-bold tracking-tight leading-12">
              05
            </h1>
            <p className="flex items-center ml-1 text-sm">Errand Review</p>
          </div>
        </div>
        <div className="flex">
          <StepProgressBar />
        </div>
        <div className="">
          <h1 className="">Errand Category</h1>
          <p className="mt-8 mb-4">Tasks</p>
          <div>
            <Tasks />
          </div>
          <p className="my-8">Services</p>
          <div>
            <Services />
          </div>
          <div className="flex justify-center items-center mt-14 space-x-8">
            <Button
              child="Previous Page"
              className="bg-[#243763]  border border-blue-700 text-base text-white
                     p-2 rounded px-4 py-2"
              onClick={() => {}}
            />
            <Button
              child={
                <>
                  Proceed to Errand Details
                  <img
                    src="/errandIcons/arrowproceed.svg"
                    className="ml-4 w-4 h-4"
                    alt=""
                  />
                </>
              }
              className="bg-[#243763]  border border-blue-700 text-base text-white
                     p-2 rounded px-4 py-2"
              onClick={() => {}}
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
