"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const SectionSticky = () => {
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const item4Ref = useRef(null);

    useEffect(() => {
        const refs = [item1Ref, item2Ref, item3Ref, item4Ref];

        refs.forEach((ref, position) => {
            const el = ref.current;
            const isLast = position === refs.length - 1;

            gsap.set(el, { willChange: "transform, filter" });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'center center',
                    end: '350%',
                    scrub: true,
                },
            });

            timeline
                .to(el, {
                    ease: 'none',
                    startAt: { filter: 'blur(0px)' },
                    filter: isLast ? 'blur(0px)' : 'blur(3px)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'center center',
                        end: '+=100%',
                        scrub: true,
                    },
                }, 0)
                .to(el, {
                    ease: 'none',
                    scale: isLast ? 1 : 0.55,
                    yPercent: isLast ? 0 : -45,
                }, 0);
        });
    }, []);

    return (
        <div className="about-sticky-container">
            <div className="about-sticky-item" ref={item1Ref}>
                <div className="about-sticky-item-left">
                    <div className="about-sticky-item-left-textbox">
                        <h1 className="headline white">Tailored to<br /> Perfection</h1>
                        <p className="description about-sticky-item-left-textbox-description grey">
                            Our professional uniform tailoring service in the UAE ensures every piece fits your team perfectly. From corporate uniforms to hospitality attire, each uniform is crafted with precision, giving your staff a polished, professional appearance that leaves a lasting impression.
                        </p>
                    </div>
                    <h1 className="headline white">(01)</h1>
                </div>
                <div className="about-sticky-item-right">
                    <div className="about-sticky-item-right-imagebox">
                        <img src="/images/mockup4.jpg" className="about-sticky-item-right-image" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-sticky-item" ref={item2Ref}>
                <div className="about-sticky-item-left">
                    <div className="about-sticky-item-left-textbox">
                        <h1 className="headline white">Comfort Meets Quality</h1>
                        <p className="description about-sticky-item-left-textbox-description grey">
                            We use high-quality, breathable fabrics designed for the UAE climate, so your employees stay comfortable during long shifts. Durable and stylish, our uniforms combine practicality with elegance, making them ideal for hotels, offices, and service industries.
                        </p>
                    </div>
                    <h1 className="headline white">(02)</h1>
                </div>
                <div className="about-sticky-item-right">
                    <div className="about-sticky-item-right-imagebox">
                        <img src="/images/mockup12.jpg" className="about-sticky-item-right-image" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-sticky-item" ref={item3Ref}>
                <div className="about-sticky-item-left">
                    <div className="about-sticky-item-left-textbox">
                        <h1 className="headline white">Fast & Reliable Delivery</h1>
                        <p className="description about-sticky-item-left-textbox-description grey">
                            Whether you need uniforms for a small office or a large organization, we handle bulk orders efficiently and guarantee on-time delivery. Our seamless process ensures your team is ready on schedule without compromising quality.
                        </p>
                    </div>
                    <h1 className="headline white">(03)</h1>
                </div>
                <div className="about-sticky-item-right">
                    <div className="about-sticky-item-right-imagebox">
                        <img src="/images/mockup7.jpg" className="about-sticky-item-right-image" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-sticky-item" ref={item4Ref}>
                <div className="about-sticky-item-left">
                    <div className="about-sticky-item-left-textbox">
                        <h1 className="headline white">Your Brand, Your Style</h1>
                        <p className="description about-sticky-item-left-textbox-description grey">
                        We offer complete customization for your uniforms, including company logos, colors, and unique design elements. Strengthen your brand identity while ensuring your team looks professional and cohesive in every setting.
                        </p>
                    </div>
                    <h1 className="headline white">(04)</h1>
                </div>
                <div className="about-sticky-item-right">
                    <div className="about-sticky-item-right-imagebox">
                        <img src="/images/mockup11.jpg" className="about-sticky-item-right-image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
