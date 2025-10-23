"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from 'lenis/react';

export const Navigation = () => {

    // ANIMATIONS

    const navigationBar = useRef()
    const navigationBarCenter = useRef()
    const navigationBarCenterRef1 = useRef()
    const navigationBarCenterRef2 = useRef()
    const navigationBarCenterRef3 = useRef()
    const navigationBarCenterRef4 = useRef()

    useLayoutEffect(() => {
        gsap.to(navigationBar.current, { opacity: 1, rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", duration: 0.75, ease: 'power1', delay: 0.75 })
        gsap.fromTo(navigationBar.current, { width: "25%" }, { width: "100%", duration: 0.75, ease: "power1", delay: 1.75 })
        gsap.fromTo(navigationBarCenter.current, { display: "none" }, { display: "flex", duration: 0.01, delay: 1.75 })
        gsap.to(navigationBarCenterRef1.current, { opacity: 1, duration: 1, delay: 1.75 })
        gsap.to(navigationBarCenterRef2.current, { opacity: 1, duration: 1, delay: 1.85 })
        gsap.to(navigationBarCenterRef3.current, { opacity: 1, duration: 1, delay: 1.95 })
        gsap.to(navigationBarCenterRef4.current, { opacity: 1, duration: 1, delay: 2.05 })
    }, [])

    // NAVIGATION

    const lenis = useLenis();
  
    const handleScrollToSection = (sectionId) => {
        if (lenis) {
            lenis.scrollTo(`#${sectionId}`, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        }
    };

  return (
    <div className="navigation-wrapper">
        <div className="navigation-inside" ref={navigationBar} >
            <div className="navigation-inside-left">
                <img src="/images/logo.png" className="navigation-inside-left-image" alt="ReelMan Uniforms" />
            </div>
            <div className="navigation-inside-big" ref={navigationBarCenter} >
                <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef1} onClick={() => handleScrollToSection('home')} >Home</p>
                <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef2} onClick={() => handleScrollToSection('about')} >About</p>
                <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef3} onClick={() => handleScrollToSection('works')} >Works</p>
                {/* <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef4} onClick={() => handleScrollToSection('casestudies')} >Case Studies</p> */}
            </div>
            <div className="navigation-inside-right">
                <button className="button button-navigation button-transparent-border" onClick={() => handleScrollToSection('contact')} >
                    <div className="button-content">
                        <span className="small-description">Contact Us</span>
                        <span className="small-description">Contact Us</span>
                    </div>
                    <div className="button-circle button-circle-white">
                        <ArrowUpRight className="button-icon" />
                    </div>
                </button>
            </div>
            <div className="navigation-inside-right-mobile">
                <div className="navigation-inside-right-mobile-line" />
                <div className="navigation-inside-right-mobile-line" />
                <div className="navigation-inside-right-mobile-line" />
            </div>
        </div>
    </div>
  );
};