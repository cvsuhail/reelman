/* eslint-disable react/jsx-key */
import React, { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons} from "./Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { Send } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTestimonials = () => {

    const subheadlineBoxRef = useRef()
    const titleRef = useRef()
    const emblaWrapperRef = useRef()

    // GSAP ANIMATIONS

    useEffect(() => {

        // subheadline box animation
        gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" }});

        // headline text animation
        const titleSplit = new SplitText(titleRef.current, { type: "words" });
        gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

        // embla wrapper animation
        gsap.to(emblaWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: emblaWrapperRef.current, start: "top 95%" }});

    }, [])

    // EMBLA CAROUSEL

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true})
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return
    
        onScroll(emblaApi)
        emblaApi
          .on("reInit", onScroll)
          .on("scroll", onScroll)
          .on("slideFocus", onScroll)
    }, [emblaApi, onScroll])

  return (
    <section className="testimonials">
    <div className="testimonials-content">
        <div className="textbox testimonials-content-textbox">
            <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
                <Send className="subheadline-box-icon" />
                <h2 className="small-description grey" >Quality uniforms, delivered</h2>
            </div>
            <div className="titlebox">
                <div className="titlebox-big-gradient" />
                <h1 className="subheadline white" ref={titleRef} >Don&apos;t Take Our Word For It! <br />Hear It From Our Partners.</h1>
            </div>
        </div>
        <div className="opacity-blur" ref={emblaWrapperRef} >
            <div className="testimonials-carousel" ref={emblaRef} >
                <div className="testimonials-carousel-row">
                    <div className="testimonials-item-padding" />
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp1.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Yunus Al Jassim</p>
                                <p className="description grey" >Restaurant Manager</p>
                            </div>
                            <p className="description white" >Reelman Uniforms has transformed our staff&apos;s appearance and confidence. The quality is exceptional and the delivery is always on time. Our customers notice the professional look immediately.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp2.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Susam John</p>
                                <p className="description grey" >Healthcare Director</p>
                            </div>
                            <p className="description white" >The medical uniforms from Reelman are comfortable, durable, and meet all our safety standards. Our staff feels confident and professional, which directly impacts patient trust and satisfaction.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>
                    {/* <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp1.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Emily Carter</p>
                                <p className="description grey" >Hotel General Manager</p>
                            </div>
                            <p className="description white" >Reelman's hospitality uniforms have elevated our brand image significantly. The attention to detail and custom fitting options ensure our staff looks polished and represents our hotel's luxury standards perfectly.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div> */}
                    {/* <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp2.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Michael Chen</p>
                                <p className="description grey" >Retail Store Owner</p>
                            </div>
                            <p className="description white" >Working with Reelman has been a game-changer for our retail business. Their corporate uniforms help us maintain a consistent brand image and our employees love the comfort and style of their workwear.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div> */}
                    {/* <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp2.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Robert Martinez</p>
                                <p className="description grey" >Manufacturing Supervisor</p>
                            </div>
                            <p className="description white" >The industrial workwear from Reelman is built to last. Our team appreciates the safety features and durability, while management loves the cost-effectiveness and reduced replacement frequency.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div> */}
                    {/* <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp1.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Lisa Thompson</p>
                                <p className="description grey" >School Administrator</p>
                            </div>
                            <p className="description white" >Reelman's educational uniforms have created a sense of unity and discipline among our students. The quality is outstanding and the variety of styles accommodates all our different school programs perfectly.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div> */}
                    {/* <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/pfp2.webp" alt="" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >James Wilson</p>
                                <p className="description grey" >Security Company Owner</p>
                            </div>
                            <p className="description white" >Professional security uniforms from Reelman have enhanced our team's authority and presence. The high-visibility options and tactical features give our security personnel the confidence they need to perform their duties effectively.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div> */}
                    <div className="testimonials-item testimonials-item-last" >
                        <div className="testimonials-item-content testimonials-item-content-last">
                            <div className="testimonials-item-last-top">
                                <p className="description white" >Ready to outfit your team?</p>
                            </div>
                            <p className="small-subheadline white" >Let&apos;s discuss your uniform needs.</p>
                            <div className="contact-button-wrapper">
                                <button className="contact-button-white" >
                                    <span>
                                        <span className="contact-button-container-white">
                                            <span className="contact-button-primary-white"></span>
                                            <span className="contact-button-complimentary-white"></span>
                                        </span>
                                    </span>
                                    <span className="description black" >Get a quote</span>
                                </button>
                            </div>
                        </div>
                        <div className="background-gradient-circle-3" />
                        <div className="testimonials-item-grid" />
                    </div>
                    <div className="testimonials-item-padding" />
                </div>
            </div>
        </div>

        <div className="testimonials-content-bottom">
            <div className="testimonials-content-bottom-buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
            <div className="embla__progress">
                <div
                    className="embla__progress__bar"
                    style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                />
            </div>
        </div>
    </div>
</section>
  );
};