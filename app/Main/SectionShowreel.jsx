/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionShowreel = () => {

  const videoRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();

  useEffect(() => {

    gsap.to(videoRef.current, { rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", scrollTrigger: { trigger: ".showreel", start: "top bottom", end: "top top", scrub: true, markers: false } })

    gsap.to(showreelItemRef1.current, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" }});
    gsap.to(showreelItemRef2.current, { delay: 0.1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" }});
    gsap.to(showreelItemRef3.current, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" }});
    gsap.to(showreelItemRef4.current, { delay: 0.3, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" }});
  }, []);

  return (
    <section className="showreel" id="works">
      <div className="showreel-content">
        <div className="showreel-content-container" >
          <div ref={videoRef} className="showreel-content-videobox" >
            <div className="background">
              <div className="trail"></div>
            </div>
            <video 
              src="/videos/tailoring.mp4" 
              className="showreel-content-video" 
              autoPlay 
              muted 
              playsInline 
              data-wf-ignore="true" 
              preload="auto" 
              loop 
            />
          </div>
        </div>
        {/* <div className="showreel-content-row">
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef1} >
            <img src="/logos/awwwards.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef2} >
            <img src="/logos/cssbestui.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef3} >
            <img src="/logos/cssbestinnovation.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
          <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef4} >
            <img src="/logos/cssbestux.svg" className="showreel-content-row-item-image" alt="" />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div> */}
      </div>
    </section>
  );
};