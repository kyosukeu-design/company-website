"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = ["/top4.jpg", "/top2.jpg", "/top3.jpg"];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}
      {/* 左側を暗くするグラデーションオーバーレイ */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%)"
      }} />

      {/* インジケーター */}
      <div className="absolute bottom-5 right-6 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === current ? "#ffffff" : "rgba(255,255,255,0.45)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
