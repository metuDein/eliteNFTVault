"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const images = [
    { src: "/assets/nftsample.jpg", name: "Image 1", price: "$100" },
    { src: "/assets/nftsample.jpg", name: "Image 2", price: "$200" },
    { src: "/assets/nftsample.jpg", name: "Image 3", price: "$300" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Switch image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-[10px]">
      <div className="relative w-full h-96 rounded-[10px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "z-0 transform scale-105"
                : "-z-10 transform scale-90 opacity-60"
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              transform:
                index === currentIndex
                  ? "scale(1.05)"
                  : `scale(0.95) translateX(${
                      index ===
                      (currentIndex - 1 + images.length) % images.length
                        ? "-10%"
                        : index === (currentIndex + 1) % images.length
                        ? "10%"
                        : "0"
                    })`,
            }}
          />
        ))}
      </div>

      {/* Information section below the active image */}
      <div className="mt-4 text-center">
        {images[currentIndex] && (
          <div className="w-[336px]  rounded-[10px]  flex flex-col p-3 items-start justify-start bg-[#ef8bf7]/50">
            <h3 className="mb-2 font-bold">CyberRaft #133</h3>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start justify-between">
                <p>Price :</p>
                <p>4 items left</p>
              </div>
              <div className="flex flex-col items-start justify-between">
                <p>5 ETH </p>

                <p>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-[#f08faf] text-[18px] mr-1"
                  />
                  160
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
