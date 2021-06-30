import React, { Component, useState } from "react";
import ModalSentUser from "../components/ModalSentUser";

export default function UserCard(userName) {
  const [count, setCount] = useState(0);

  const images = [
    "https://assetgame.roblox.com/Thumbs/Avatar.ashx?username=gjkgjk&width=250&height=250",
    "/images/Avatar.png",
    "/images/Avatar-1.png",
    "/images/Avatar-2.png",
    "/images/Avatar-3.png",
  ];

  const increment = () => {
    setCount(count + 1);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className=" min-h-screen bg-gradient-to-br from-green-400 to-blue-800 text-gray-100">
      <div className="flex py-32 px-72 ">
        <div className="relative bg-gray-700 shadow-lg sm:rounded-2xl px-52 pb-36 pt-24 ">
          <div className="text-5xl font-semibold pt-8 pl-28">Is This You?</div>
          <div className="py-8 px-24 items-center">
            <img src={images[getRandomInt(4)]} className="items-center" />
            <div classname="my-10">
              <p className="py-4 pl-8 text-lg font-semibold">
                Please confirm this is you!
              </p>
            </div>
            <div classname="space-y-6">
              <ModalSentUser></ModalSentUser>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
