"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = () => {
    // ANIMATIONS

    const titleRef = useRef()
    const titleRef2 = useRef()
    const descriptionRef = useRef()
    const lineRef = useRef()
    const itemRefs = useRef([]);

    const teamMembers = [
        { name: "Ahmed Al-Mansouri", title: "Founder & CEO" },
        { name: "Sarah Johnson", title: "Head of Design" },
        { name: "Mohammed Hassan", title: "Production Manager" },
        { name: "Fatima Al-Zahra", title: "Quality Control Director" },
        { name: "David Chen", title: "Sales Director" },
        { name: "Aisha Rahman", title: "Customer Relations Manager" },
    ];

    useEffect(() => {

        // title animation
        const titleSplit = new SplitText(titleRef.current, { type: "chars" });
        gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

        // description animation
        gsap.to(descriptionRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.6 })

        // line animation
        gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, delay: 0.5 })

        // title 2 animation
        const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
        gsap.fromTo(titleSplit2.words, { 'will-change': 'opacity', filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: titleRef2.current, start: "top 95%", end: "bottom center", scrub: true } });

        // team member boxes animations
        itemRefs.current.forEach((item, index) => {
            gsap.fromTo(item, 
              { yPercent: 100, opacity: 0, filter: "blur(8px)" },
              {
                yPercent: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.75,
                delay: index * 0.2,
                ease: "power3",
                scrollTrigger: {
                  trigger: ".five-content",
                  start: "top bottom"
                }
              }
            );
          });

      }, [])

    // STICKY SECTION

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
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
            <div className="about-content-top">
                <div className="about-content-textbox">
                    <div className="titlebox">
                        <div className="titlebox-gradient" />
                        <h1 className="headline white" ref={titleRef} >Your Partner in Professional Uniform Solutions</h1>
                    </div>
                    <p className="description grey opacity-blur" ref={descriptionRef} >For over a decade, ReelMan has been the preferred uniform supplier for businesses across Abu Dhabi and the UAE. We specialize in creating custom uniforms that reflect your brand identity while ensuring maximum comfort and functionality for your team.</p>
                </div>
                <div className="about-divider" ref={lineRef} />
            </div>
            <div className="about-team">
                <div className="about-team-container">
                    {teamMembers.map((member, index) => (
                        <div className="about-team-item" key={index} ref={el => itemRefs.current[index] = el} >
                            <p className="description white" >{member.name}</p>
                            <p className="description white" >{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-divider" />
            <div className="about-whyus" >
                <p className="description about-whyus-description grey" >Why us</p>
                <p className="subheadline about-whyus-subheadline white" ref={titleRef2} >At ReelMan, we embody excellence in uniform manufacturing — quality-focused, innovative, and committed to delivering the best. We don&apos;t just create uniforms; we partner with our clients to elevate their brand image through professional workwear solutions. From corporate offices to industrial sites, every uniform we create is an opportunity to enhance professionalism, ensure comfort, and make a lasting impression.</p>
            </div>
            <div className="about-divider" />
            <div className="about-sticky-container">
				<div className="about-sticky-item" ref={item1Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h1 className="headline white" >Custom <br /> Tailoring</h1>
                            <p className="description about-sticky-item-left-textbox-description grey" >Unlock the power of perfect fit with our custom tailoring services. Whether you need corporate uniforms or industrial workwear, our team combines traditional craftsmanship with modern techniques to create uniforms that perfectly represent your brand.</p>
                        </div>
                        <h1 className="headline white" >(01)</h1>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/mockup4.webp" className="about-sticky-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item2Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h1 className="headline white" >Premium Materials</h1>
                            <p className="description about-sticky-item-left-textbox-description grey" >Harness the potential of premium fabrics to elevate your uniforms with our quality materials. By integrating the finest textiles and innovative fabrics, we help you achieve durability and comfort that stands out in any professional environment.</p>
                        </div>
                        <h1 className="headline white" >(02)</h1>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/mockup12.webp" className="about-sticky-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item3Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h1 className="headline white" >Brand Embroidery</h1>
                            <p className="description about-sticky-item-left-textbox-description grey" >Step into the future of professional branding with our embroidery services. We create stunning logos and designs that allow your team to showcase your brand identity in professional ways, merging style and functionality seamlessly.</p>
                        </div>
                        <h1 className="headline white" >(03)</h1>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/mockup7.webp" className="about-sticky-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item4Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h1 className="headline white" >Fast Delivery</h1>
                            <p className="description about-sticky-item-left-textbox-description grey" >Transform your uniform needs into reality with our fast delivery service. From emergency orders to bulk production, we add that extra layer of reliability that keeps your business running smoothly.</p>
                        </div>
                        <h1 className="headline white" >(04)</h1>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/mockup11.webp" className="about-sticky-item-right-image" alt="" />
                        </div>
                    </div>
                </div>
			</div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};