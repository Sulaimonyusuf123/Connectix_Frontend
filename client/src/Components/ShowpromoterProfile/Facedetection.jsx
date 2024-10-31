import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const Facedetection = ({ onFaceDetected }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [detectedFace, setDetectedFace] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = `${window.location.origin}/models`;

      try {
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        ]);

        setModelsLoaded(true);
        startVideo();
      } catch (error) {
        console.error('Error loading face-api models:', error);
      }
    };

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
        alert('Please allow camera access in your browser settings.');
      }
    };

    let detectionInterval;
    const detectFace = () => {
      const video = videoRef.current;

      detectionInterval = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video)
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (detections.length > 0) {
          const { box } = detections[0];
          setDetectedFace(box);
          onFaceDetected();
        } else {
          setDetectedFace(null);
        }
      }, 100);
    };

    if (modelsLoaded) {
      detectFace();
    } else {
      loadModels();
    }

    return () => clearInterval(detectionInterval);
  }, [modelsLoaded, onFaceDetected]);

  // Draw the detected face only if it exists
  const drawFace = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (detectedFace) {
      const ctx = canvas.getContext('2d');
      const { x, y, width, height } = detectedFace;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(video, x, y, width, height, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  };

  useEffect(() => {
    drawFace();
  }, [detectedFace]);

  return (
    <div className="flex flex-col items-center justify-center mt-24 relative">
      {/* Circular Overlay */}
      <div className="relative">
        <div
          className="absolute border-4 border-green-500 rounded-full"
          style={{
            width: "300px",
            height: "300px",
            zIndex: 2,
          }}
        ></div>
        
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="border-4 border-green-500 rounded-full"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%", // Ensures circular shape
            objectFit: "cover", // Ensure the video covers the circle properly
          }}
        />
        
        {/* Canvas for Face Detection */}
        <canvas
          ref={canvasRef}
          width="300"
          height="300"
          className="absolute top-0 left-0"
          style={{
            zIndex: 1,
            borderRadius: "50%", // Maintain circular shape
            clipPath: "circle(50%)", // Crop to circle
          }}
        />
      </div>
    </div>
  );
};

export default Facedetection;
