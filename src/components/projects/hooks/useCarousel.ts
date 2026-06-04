import { useState } from 'react';

interface UseCarouselProps {
  totalItems: number;
}

export function useCarousel({ totalItems }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
  };
}
