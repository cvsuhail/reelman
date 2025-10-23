"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowUpRight, Zap, X } from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../works/works.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionCaseStudies = () => {

    // MODAL STATE
    const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ANIMATIONS
    const subtitleRef = useRef()
    const subdescriptionRef = useRef()
    const carouselWrapperRef = useRef()
    const subheadlineBoxRef = useRef()
    const cursor = useRef()
    const [showCursor, setShowCursor] = useState(false)

    // CASE STUDY DATA
    const caseStudies = [
        {
            id: 1,
            category: "Corporate",
            title: "Corporate Uniform Success",
            description: "How we transformed a leading Abu Dhabi corporation's professional image with custom-tailored uniforms.",
            image: "/casestudy/cs1.jpg",
            details: {
                client: "Abu Dhabi Investment Authority",
                duration: "6 months",
                teamSize: "50+ employees",
                challenge: "The client needed a complete uniform overhaul to reflect their prestigious position in the financial sector while ensuring comfort for long working hours.",
                solution: "We designed custom-tailored suits using premium fabrics with moisture-wicking technology, incorporating the company's brand colors subtly through accessories and ties.",
                results: "95% employee satisfaction rate, 40% reduction in uniform complaints, enhanced professional image leading to increased client confidence.",
                features: ["Custom tailoring", "Premium fabrics", "Brand integration", "Comfort optimization", "Durability testing"]
            }
        },
        {
            id: 3,
            category: "Education",
            title: "School Uniform Excellence",
            description: "Designing durable, stylish school uniforms for Abu Dhabi's leading educational institutions.",
            image: "/casestudy/cs6.jpg",
            details: {
                client: "American School of Abu Dhabi",
                duration: "3 months",
                teamSize: "500+ students",
                challenge: "Creating uniforms that are durable enough for active children, weather-appropriate for UAE climate, and maintain a professional appearance throughout the school year.",
                solution: "Developed reinforced uniforms using high-quality cotton blends with stain-resistant treatment, multiple size options for growing children, and seasonal variations for comfort.",
                results: "90% parent satisfaction, 70% reduction in uniform replacement requests, improved school pride and student confidence.",
                features: ["Stain-resistant treatment", "Reinforced construction", "Size flexibility", "Seasonal variations", "Easy maintenance"]
            }
        },
        {
            id: 2,
            category: "Healthcare",
            title: "Medical Center Transformation",
            description: "Creating comfortable, professional medical uniforms for a major Abu Dhabi healthcare facility.",
            image: "/casestudy/cs2.jpg",
            details: {
                client: "Sheikh Khalifa Medical City",
                duration: "4 months",
                teamSize: "200+ medical staff",
                challenge: "Designing uniforms that meet strict medical hygiene standards while providing comfort for 12-hour shifts and easy identification of different departments.",
                solution: "Developed antimicrobial fabric uniforms with color-coded department identification, ergonomic design for constant movement, and easy-care properties for frequent washing.",
                results: "100% compliance with medical standards, 60% reduction in uniform-related discomfort reports, improved staff morale and patient trust.",
                features: ["Antimicrobial fabric", "Color-coded departments", "Ergonomic design", "Easy-care properties", "Hygiene compliance"]
            }
        },
        {
            id: 4,
            category: "Hospitality",
            title: "Luxury Hotel Uniforms",
            description: "Creating elegant uniforms for a 5-star hotel chain across the UAE, enhancing guest experience.",
            image: "/casestudy/cs7.jpg",
            details: {
                client: "Emirates Palace Hotel",
                duration: "8 months",
                teamSize: "300+ staff",
                challenge: "Designing luxury uniforms that reflect the hotel's opulent brand while ensuring comfort for staff working in various departments from front desk to housekeeping.",
                solution: "Created department-specific uniform collections using premium materials, incorporating traditional Emirati design elements with modern functionality, and ensuring each uniform tells the hotel's luxury story.",
                results: "Enhanced guest experience scores by 25%, increased staff pride and retention, received recognition from luxury hospitality awards.",
                features: ["Luxury materials", "Department-specific design", "Cultural integration", "Brand storytelling", "Premium finishing"]
            }
        }
    ];

    // MODAL HANDLERS
    const handleReadMore = (caseStudy) => {
        setSelectedCaseStudy(caseStudy);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCaseStudy(null);
        document.body.style.overflow = 'unset';
    };

    // MODAL ANIMATION
    useEffect(() => {
        if (isModalOpen && selectedCaseStudy) {
            // Overlay animation
            gsap.fromTo('.modal-overlay',
                {
                    opacity: 0,
                    backdropFilter: 'blur(0px) saturate(1)'
                },
                {
                    opacity: 1,
                    backdropFilter: 'blur(25px) saturate(1.2)',
                    duration: 0.5,
                    ease: 'power2.out'
                }
            );

            // Content animation with more sophisticated timing
            gsap.fromTo('.modal-content',
                {
                    scale: 0.7,
                    opacity: 0,
                    y: 80,
                    rotationX: 15,
                    filter: 'blur(20px)'
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    filter: 'blur(0px)',
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Staggered animation for modal elements
            gsap.fromTo('.modal-header, .modal-body',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.4,
                    stagger: 0.1
                }
            );
        }
    }, [isModalOpen, selectedCaseStudy]);

    // KEYBOARD SUPPORT
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                handleCloseModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    useEffect(() => {

        // case studies wrapper animation
        gsap.to(carouselWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%" } });

        // subheadline box animation
        gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

        // subtitle text animation
        const subtitleSplit = new SplitText(subtitleRef.current, { type: "words" });
        gsap.fromTo(subtitleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef.current, start: "top 95%" } });

        // description text animation
        const subdescriptionSplit = new SplitText(subdescriptionRef.current, { type: "words" });
        gsap.fromTo(subdescriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef.current, start: "top 95%" } });

    }, [])

    // FOLLOWING CURSOR
    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        const speed = 0.05;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const animate = () => {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;

            cursorX += distX * speed;
            cursorY += distY * speed;

            if (cursor.current) {
                cursor.current.style.left = `${cursorX}px`;
                cursor.current.style.top = `${cursorY}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (showCursor) {
            gsap.to(cursor.current, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power3.out',
            });
        } else {
            gsap.to(cursor.current, {
                autoAlpha: 0,
                scale: 0,
                duration: 0.3,
                ease: 'power3.in',
            });
        }
    }, [showCursor]);

    const handleMouseEnter = () => {
        setShowCursor(true);
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
    };

    // EMBLA CAROUSEL
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

    const [scrollProgress, setScrollProgress] = useState(0);

    const {
        prevBtnDisabled: prevBtnDisabled,
        nextBtnDisabled: nextBtnDisabled,
        onPrevButtonClick: onPrevButtonClick,
        onNextButtonClick: onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const onScroll = useCallback((emblaApi, setProgress) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setProgress(progress * 100);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        const handleScroll = () => onScroll(emblaApi, setScrollProgress);
        handleScroll();
        emblaApi.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);

        return () => emblaApi.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
    }, [emblaApi, onScroll]);

    return (
        <section id="about">
            <div className="works-casestudies">
                <div className="textbox">
                    <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
                        <Zap className="subheadline-box-icon" />
                        <h2 className="small-description grey" >Previous Works</h2>
                    </div>
                    <div className="titlebox">
                        <div className="titlebox-medium-gradient" />
                        <h1 className="subheadline white" ref={subtitleRef} >We have a diverse portfolio of <br /> successful uniform projects</h1>
                    </div>
                    <p className="description grey" ref={subdescriptionRef} >Our case studies showcase how we&apos;ve helped businesses across Abu Dhabi enhance their professional image through quality uniforms.</p>
                </div>
                <div className="casestudies-carousel-wrapper opacity-blur" ref={carouselWrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <div className="casestudies-carousel" ref={emblaRef} >
                        <div className="casestudies-carousel-row">
                            {caseStudies.map((caseStudy) => (
                                <div key={caseStudy.id} className="casestudies-item" >
                                    <div className="casestudies-item-content">
                                        <div className="casestudies-item-content-textbox">
                                            <div className="subheadline-box" >
                                                <Zap className="subheadline-box-icon" />
                                                <h2 className="small-description grey" >{caseStudy.category}</h2>
                                            </div>
                                            <h3 className="small-subheadline white" >{caseStudy.title}</h3>
                                            <p className="description grey" >{caseStudy.description}</p>
                                        </div>
                                        <div className="casestudies-item-content-imagebox" >
                                            <div
                                                className="button casestudies-item-content-imagebox-button"
                                                onClick={() => handleReadMore(caseStudy)}
                                            >
                                                <div className="button-content">
                                                    <span className="small-description white">Read More</span>
                                                    <span className="small-description white">Read More</span>
                                                </div>
                                                <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" />
                                            </div>
                                            <img src={caseStudy.image} className="casestudies-item-content-image" alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="casestudies-item-padding" />
                        </div>
                    </div>
                    <div className="casestudies-carousel-bottom">
                        <div className="casestudies-carousel-bottom-buttons">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>
                        <div className="embla__progress">
                            <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }} />
                        </div>
                    </div>
                </div>

                <div className="hover-cursor" ref={cursor}>
                    <p className="small-description white" >Drag</p>
                </div>

                {/* MODAL */}
                {isModalOpen && selectedCaseStudy && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <X className="modal-close-icon" />
                            </button>

                            <div className="modal-header">
                                <div className="modal-category">
                                    <Zap className="modal-category-icon" />
                                    <span className="small-description grey">{selectedCaseStudy.details.client}</span>
                                </div>
                                <h2 className="modal-title white">{selectedCaseStudy.title}</h2>
                                <p className="modal-subtitle grey">{selectedCaseStudy.description}</p>
                            </div>

                            <div className="modal-body">
                                <div className="modal-image-container">
                                    <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} className="modal-image" />
                                </div>

                                <div className="modal-details">
                                    <div className="modal-info-grid">
                                        <div className="modal-info-item">
                                            <span className="modal-info-label grey">Duration</span>
                                            <span className="modal-info-value white">{selectedCaseStudy.details.duration}</span>
                                        </div>
                                        <div className="modal-info-item">
                                            <span className="modal-info-label grey">Team Size</span>
                                            <span className="modal-info-value white">{selectedCaseStudy.details.teamSize}</span>
                                        </div>
                                    </div>

                                    <div className="modal-section">
                                        <h3 className="modal-section-title white">Challenge</h3>
                                        <p className="modal-section-text grey">{selectedCaseStudy.details.challenge}</p>
                                    </div>

                                    <div className="modal-section">
                                        <h3 className="modal-section-title white">Solution</h3>
                                        <p className="modal-section-text grey">{selectedCaseStudy.details.solution}</p>
                                    </div>

                                    <div className="modal-section">
                                        <h3 className="modal-section-title white">Results</h3>
                                        <p className="modal-section-text grey">{selectedCaseStudy.details.results}</p>
                                    </div>

                                    <div className="modal-section">
                                        <h3 className="modal-section-title white">Key Features</h3>
                                        <div className="modal-features">
                                            {selectedCaseStudy.details.features.map((feature, index) => (
                                                <div key={index} className="modal-feature-tag">
                                                    <span className="small-description white">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
