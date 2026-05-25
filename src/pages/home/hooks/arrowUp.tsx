import { useEffect, useState } from "react";

export default function arrowUp() {
    const [showScrollToNav, setShowScrollToNav] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
            setShowScrollToNav(window.scrollY > window.innerHeight * 0.15);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);  
  return { showScrollToNav };
}