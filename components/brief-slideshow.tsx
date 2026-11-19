"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Brief } from "@/data/briefs";

type BriefSlide = Pick<
  Brief,
  "slug" | "number" | "title" | "subtitle" | "category" | "image" | "imageAlt"
>;

export function BriefSlideshow({ slides }: { slides: BriefSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (
      isPaused ||
      isHovered ||
      hasFocus ||
      slides.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [hasFocus, isHovered, isPaused, slides.length]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % slides.length);
  }

  return (
    <section
      aria-label="Featured BriefOS stories"
      aria-roledescription="carousel"
      className="brief-slideshow"
    >
      <div
        className="brief-slideshow-frame"
        onBlurCapture={() => setHasFocus(false)}
        onFocusCapture={() => setHasFocus(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          alt={activeSlide.imageAlt}
          className="brief-slideshow-image"
          fill
          key={activeSlide.slug}
          priority={activeIndex === 0}
          sizes="(max-width: 820px) 100vw, 1200px"
          src={activeSlide.image}
        />
        <div aria-hidden="true" className="brief-slideshow-scrim" />
        <div className="brief-slide-copy">
          <p className="brief-slide-kicker">
            Brief {activeSlide.number} <span aria-hidden="true">·</span>{" "}
            {activeSlide.category}
          </p>
          <h2>
            <Link href={`/brief/${activeSlide.slug}`}>{activeSlide.title}</Link>
          </h2>
          <p className="brief-slide-subtitle">{activeSlide.subtitle}</p>
        </div>
        <div className="brief-slideshow-controls">
          <button
            aria-label="Previous brief"
            className="brief-slide-arrow"
            onClick={showPrevious}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <span aria-live="polite" className="brief-slide-count">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <button
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            aria-pressed={isPaused}
            className="brief-slide-pause"
            onClick={() => setIsPaused((paused) => !paused)}
            type="button"
          >
            {isPaused ? "PLAY" : "PAUSE"}
          </button>
          <button
            aria-label="Next brief"
            className="brief-slide-arrow"
            onClick={showNext}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <p className="brief-slideshow-caption">Five briefs. Signals in motion.</p>
    </section>
  );
}
