"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionIndustries = () => {
    const subheadlineBoxRef1 = useRef();
    const subtitleRef1 = useRef();
    const subdescriptionRef1 = useRef();
    const industryImageRef1 = useRef();
    const industryImageRef2 = useRef();
    const industryImageRef3 = useRef();
    const industryImageRef4 = useRef();

    useEffect(() => {
        // industry images
        gsap.fromTo(industryImageRef1.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef1.current, start: "top bottom", end: "center center", scrub: true } });
        gsap.fromTo(industryImageRef2.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef2.current, start: "top bottom", end: "center center", scrub: true } });
        gsap.fromTo(industryImageRef3.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef3.current, start: "top bottom", end: "center center", scrub: true } });
        gsap.fromTo(industryImageRef4.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef4.current, start: "top bottom", end: "center center", scrub: true } });

        // subheadline box animation
        gsap.to(subheadlineBoxRef1.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef1.current, start: "top 95%" }});

        // subtitle text animation
        const subtitleSplit1 = new SplitText(subtitleRef1.current, { type: "words" });
        gsap.fromTo(subtitleSplit1.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%" } });

        // description text animation
        const subdescriptionSplit1 = new SplitText(subdescriptionRef1.current, { type: "words" });
        gsap.fromTo(subdescriptionSplit1.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef1.current, start: "top 95%" } });
    }, []);

    return (
        <div className="works-industries">
            <div className="works-subtextbox">
                <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef1}>
                    <Zap className="subheadline-box-icon" />
                    <h2 className="small-description grey">Industries we serve</h2>
                </div>
                <div className="titlebox">
                    <div className="titlebox-medium-gradient" />
                    <h1 className="subheadline white" ref={subtitleRef1}>We serve diverse industries <br /> across Abu Dhabi and UAE</h1>
                </div>
                <p className="description grey" ref={subdescriptionRef1}>Our uniform specialists have served businesses across various sectors.<br /> They understand industry requirements and deliver solutions that enhance professionalism and brand image.</p>
            </div>
            <div className="works-industries-container">
                <div className="works-industries-divider" />
                <div className="works-industries-item">
                    <div className="works-industries-item-left">
                        <h2 className="small-subheadline white">Healthcare & Medical</h2>
                    </div>
                    <div className="works-industries-item-right">
                        <div className="works-industries-item-right-imagebox" ref={industryImageRef1}>
                            <img src="/images/test19.jpg" className="works-industries-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="works-industries-divider" />
                <div className="works-industries-item">
                    <div className="works-industries-item-left">
                        <h2 className="small-subheadline white">Hospitality & Tourism</h2>
                    </div>
                    <div className="works-industries-item-right">
                        <div className="works-industries-item-right-imagebox" ref={industryImageRef2}>
                            <img src="/images/test18.jpg" className="works-industries-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="works-industries-divider" />
                <div className="works-industries-item">
                    <div className="works-industries-item-left">
                        <h2 className="small-subheadline white">Education & Schools</h2>
                    </div>
                    <div className="works-industries-item-right">
                        <div className="works-industries-item-right-imagebox" ref={industryImageRef3}>
                            <img src="/images/test14.jpg" className="works-industries-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="works-industries-divider" />
                <div className="works-industries-item">
                    <div className="works-industries-item-left">
                        <h2 className="small-subheadline white">Construction & Industrial</h2>
                    </div>
                    <div className="works-industries-item-right">
                        <div className="works-industries-item-right-imagebox" ref={industryImageRef4}>
                            <img src="/images/test17.jpg" className="works-industries-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="works-industries-divider" />
            </div>
        </div>
    );
};
