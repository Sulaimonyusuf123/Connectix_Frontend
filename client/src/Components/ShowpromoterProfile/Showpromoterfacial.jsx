// Showpromoterfacial.jsx
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import back from "../Profile/BuyCoin/back.svg";
import arrow from "../ShowpromoterProfile/ShowpromoterActivities/arrow.png";
import holding from "../ShowpromoterProfile/ShowpromoterActivities/holding hand.svg";

// FacialVerification Component
const FacialVerification = ({ onFaceDetected, videoRef }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Camera Feed */}
      <video ref={videoRef} autoPlay playsInline className="border-4 border-green-500 rounded-full" />

      {/* Circular Overlay */}
      <div
        className="absolute border-4 border-green-500 rounded-full"
        style={{
          width: "300px",
          height: "300px",
          borderWidth: "6px", // Adjust thickness if needed
        }}
      ></div>

      {/* Capture Button */}
      <button
        onClick={onFaceDetected}
        className="absolute mt-[700px] px-4 py-2 bg-blue-800 text-white rounded-lg"
      >
        Capture
      </button>
    </div>
  );
};

const Showpromoterfacial = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cameraImage, setCameraImage] = useState(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // Set up camera access
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };
    startCamera();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFaceDetected = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const capturedImage = canvas.toDataURL("image/png");
      setCameraImage(capturedImage);
      alert("Face detected!");
      sliderRef.slickNext();
    }
  };

  const toggleCalendar = () => setIsOpen((prev) => !prev);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  const getHeading = () => {
    switch (currentSlide) {
      case 0:
        return "Enter your details";
      case 1:
        return "Facial verification";
      case 2:
        return "Facial verification";
      default:
        return "";
    }
  };

  return (
    <div className="font-sans px-4 py-4 h-screen flex flex-col">
      <div className="flex mb-4">
        <button onClick={() => sliderRef.slickPrev()}>
          <img src={back} alt="Back" />
        </button>
        <div className="flex ml-20">
          <h2 className="text-lg font-bold">{getHeading()}</h2>
          <div className="flex space-x-2 ml-4 mt-3 ml-16">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Slider {...settings} ref={setSliderRef}>
          {/* Page 1 - Personal Details */}
          <div className="space-y-4">
            <div className="border-2 p-2 rounded-2xl border-gray-500">
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border-none outline-none"
              />
            </div>
            <div>
              <select className="w-full border-2 p-2 rounded-2xl border-gray-500">
                <option value="">ID Type</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver's License</option>
                <option value="national_id">National ID</option>
              </select>
            </div>
            <div className="border-2 p-2 rounded-2xl border-gray-500">
              <input
                type="text"
                placeholder="ID number"
                className="w-full border-none outline-none"
              />
            </div>
            <div className="space-y-4">
              <div className="relative border-2 p-2 rounded-2xl border-black">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy/MM/dd"
                  className="w-full border-none outline-none pr-10 cursor-pointer"
                  placeholderText="Select a date"
                  open={isOpen}
                  onCalendarClose={() => setIsOpen(false)}
                  onClick={toggleCalendar}
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer"
                  onClick={toggleCalendar}
                >
                  <img src={arrow} alt="Dropdown Arrow" className="w-4 h-4" />
                </span>
              </div>
              <div className="border-2 p-2 rounded-2xl border-gray-500">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-48 border-2 rounded-xl border-gray-400 flex items-center justify-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <p className="text-gray-500"></p>
                )}
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                <button className="absolute z-10 text-gray-800 bg-white px-4 py-2 rounded">
                  Upload Proof of <br /> Address
                </button>
              </div>
            </div>
          </div>

          {/* Page 2 - Confirm ID Information */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mt-4">
              <img src={holding} alt="" className="mx-auto w-48" />
            </div>
            <div className="mt-4">
              <ol className="list-decimal pl-5">
                <li className="mt-4">Make sure you are in a bright environment</li>
                <li className="mt-2">Look directly into your camera and click capture</li>
                <li className="mt-2">Grant permission access to the camera</li>
                <li className="mt-2">Click on continue when ready.</li>
              </ol>
            </div>
          </div>

          {/* Page 3 - Facial Verification */}
          <div className="flex flex-col items-center justify-center h-full">
            <FacialVerification
              onFaceDetected={handleFaceDetected}
              videoRef={videoRef}
            />
            <canvas ref={canvasRef} width="300" height="300" className="hidden" />
            {cameraImage && <img src={cameraImage} alt="Captured Face" className="mt-4" />}
          </div>
        </Slider>
      </div>

      {/* Navigation Buttons */}
      {currentSlide !== 2 && (
        <div className="flex justify-between mt-8 fixed bottom-4 left-4 right-4">
          <button
            className="flex-1 p-3 h-12 text-black border-2 border-gray-800 rounded-xl hover:bg-black hover:text-white"
            onClick={() => sliderRef.slickPrev()}
          >
            Back
          </button>
          <div className="mx-2" />
          <button
            className="flex-1 p-3 h-12 text-white bg-blue-800 rounded-xl"
            onClick={() => sliderRef.slickNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Showpromoterfacial;
