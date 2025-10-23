"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionWhyUs = () => {
    const titleRef2 = useRef();

    useEffect(() => {
        // title 2 animation
        const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
        gsap.fromTo(titleSplit2.words, { 
            'will-change': 'opacity', 
            filter: 'blur(8px)', 
            opacity: 0 
        }, { 
            opacity: 1, 
            filter: 'blur(0px)', 
            stagger: 0.025, 
            ease: 'sine', 
            scrollTrigger: { 
                trigger: titleRef2.current, 
                start: "top 95%", 
                end: "bottom center", 
                scrub: true 
            } 
        });
    }, []);

    return (
        <div className="about-whyus">
            <p className="description about-whyus-description grey">Why us</p>
            <p className="subheadline about-whyus-subheadline white" ref={titleRef2}>
                At ReelMan, we embody excellence in uniform manufacturing — quality-focused, innovative, and committed to delivering the best. We don&apos;t just create uniforms; we partner with our clients to elevate their brand image through professional workwear solutions. From corporate offices to industrial sites, every uniform we create is an opportunity to enhance professionalism, ensure comfort, and make a lasting impression.
            </p>
        </div>
    );
};
