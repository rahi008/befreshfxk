"use client";
import { useState, useEffect } from "react";
import Image from "@/app/components/imge";
import "./slider.css";

const images = [
  "/carousel/banner1.jpg",
  "/carousel/banner2.jpg",
  "/carousel/banner3.jpg",
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="featuredImageWrapper">
        {images.map((image, index) => (
          <Image
            key={index}
            unoptimized={true}
            src={image}
            alt={`Image ${index + 1}`}
            fill
            priority
            className={index === currentIndex ? "opacity-100" : "opacity-0"}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
