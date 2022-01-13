import React, {useEffect, useRef} from 'react'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import 'locomotive-scroll/src/locomotive-scroll.scss'
import '../styles/styles.scss'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs'
import { TweenMax } from 'gsap/gsap-core'


gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const dataContent = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1640725929731-997dd8d6b8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque laborum hic itaque tempora expedita sequi illo odio sed impedit consectetur id minima sint magnam dicta voluptates, eum, vero dolore. Morbi auctor velit a porttitor viverra. Nullam rhoncus tellus vitae facilisis. Pellentesque urna metus Ut iaculis velit ut ante luctus semper.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1640721641081-da225d9b8621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        content: "",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1640721641081-da225d9b8621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque laborum hic itaque tempora expedita sequi illo odio sed impedit consectetur id minima sint magnam dicta voluptates, eum, vero dolore. Morbi auctor velit a porttitor viverra. Nullam rhoncus tellus vitae facilisis. Pellentesque urna metus Ut iaculis velit ut ante luctus semper.",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1640927781187-8e6fdd944737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque laborum hic itaque tempora expedita sequi illo odio sed impedit consectetur id minima sint magnam dicta voluptates, eum, vero dolore. Morbi auctor velit a porttitor viverra. Nullam rhoncus tellus vitae facilisis. Pellentesque urna metus Ut iaculis velit ut ante luctus semper.",
    },
]

const Home = () => {
    const main = useRef(null)

    useEffect(() => {

        let bodyScrollBar = Scrollbar.init(document.querySelector(".scroller"), {
            damping: 0.07,
        })

        ScrollTrigger.scrollerProxy(".scroller", {
            scrollTop(value) {
                if (arguments.length) {
                bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            },
        })

        bodyScrollBar.addListener(ScrollTrigger.update)

        // Text animation
        var textWrapper = document.querySelector('.headTitle');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline().add({
            targets: ".headTitle .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 600 + 30 * i,
        })

        gsap.from(".top div p", 1, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.1
        })

        gsap.from(".headTxt", 2, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".imgBg", 3, {
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".itemTxt", 4, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".headTitle2", 5, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".itemTxtTwo", 6, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".headTitle3", 6, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".itemTxtThree", 6, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".imgBg2", 6, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".footer", 6, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })
        
        // Parallax
        gsap.to('.imgBg', {
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.with-parallax',
                start: 'top bottom',
                scrub: true,
            }
        });

        gsap.to('.imgBg2', {
            // x:
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.with-parallax',
                start: 'top bottom',
                scrub: true,
            }
        });

        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".imgWrap2",
              scroller: ".scroller",
              scrub: true,
              pin: false,
            },
        })

        tl.from(".imgBg2", {
            yPercent: -15,
            ease: "none",
        }).to(".imgBg2", {
            yPercent: 15,
            ease: "none",
        })

        TweenMax.from(".scroll", 1, {
            opacity: 0,
            ease: "SteppedEase.config(1)",
            repeat: -1,
            repeatDelay: 0.2,
            delay: 7.8,
        })

    }, [])

    return (

        <main>
            <div className="top">
                <div className="flex flex-wrap justify-between">
                    <p className="font-robo font-normal text-white">Kanghee Kim</p>
                    <p className="font-robo font-normal text-white">Latest</p>
                    <p className="font-robo font-normal text-white">Works</p>
                    <p className="font-robo font-normal text-white">Info</p>
                    <p></p>
                </div>
            </div>

            <div className="head flex flex-col justify-between">
                <h1 className="font-dm text-white tab:mt-14 headTitle">
                    <span>Kanghee Kim®</span>
                </h1>
                <p className="tab:mt-6 flex flex-auto font-pop font-normal text-white headTxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi vitae consectetur sint autem harum, molestiae sapiente voluptatibus nulla alias quasi aperiam.</p>
                <div className="scroll">
                    <p className="tab:mt-6 font-pop font-normal text-white">scroll</p>
                </div>
            </div>

            <div className="space"></div>

            <div className="infoImg with-parallax">
                <div className="flex flex-wrap justify-between">
                    {dataContent.map((item, index) => {
                        const {id, img, content} = item
                        return(
                            <>
                                <div className="lg:w-23 tab:w-48 tab:my-6 sp:w-100 flexItem">
                                    <div className="item" key={id}>
                                        <div className="imgWrap">
                                            {/* <div className="imgBg" style={{backgroundImage: `url(${img})`}}></div> */}
                                            <img src={img} className="imgBg"/>
                                        </div>
                                        <p className="font-robo font-normal text-white mt-4 itemTxt">{content}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

            <div className="space3"></div>

            <div className="infoContent">
                <div className="flex flex-wrap justify-between">
                    <div className="lg:w-4/12 item"></div>
                    <div className="lg:w-8/12 item">
                        <h2 className="font-dm text-white headTitle2">
                            <span>Lorem ipsum dolor amet consectetur adipisicing elit</span>
                        </h2>
                        <p className="tab:mt-10 font-pop font-normal text-white mt-10 itemTxtTwo">
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex laboriosam, iusto suscipit, doloribus odio perferendis magnam necessitatibus ullam obcaecati, a repudiandae. At tempora soluta beatae iure consectetur, unde, minus nam quisquam illo sequi excepturi delectus consequatur dolorum accusantium vero reiciendis sint non officia enim aut deleniti nesciunt recusandae! Aperiam, officiis. Sequi vitae consectetur sint autem harum, molestiae sapiente voluptatibus nulla alias quasi aperiam.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="space3"></div>

            <div className="closing with-parallax">
                <h1 className="tab:mt-10 font-dm text-white headTitle3">
                    <span>Keep things simple!</span>
                </h1>
                <div className="space3 dsNone"></div>
                <div className="flex flex-wrap justify-between">
                    <div className="lg:w-8/12 tab:w-full">
                        <p className="tab:mt-10 tab:mb-10 font-pop font-normal text-white itemTxtThree">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi vitae consectetur sint autem harum, molestiae sapiente voluptatibus nulla alias quasi aperiam, doloribus odio perferendis magnam necessitatibus ullam obcaecati.</span>
                        </p>
                    </div>
                    <div className="lg:w-4/12">
                        <div className="spin itemTxtThree">
                            <svg viewBox="0 0 500 500">
                                <defs>
                                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="circle">
                                    <animateTransform
                                        attributeName="transform"
                                        begin="0s"
                                        dur="15s"
                                        type="rotate"
                                        from="0 250 250"
                                        to="360 250 250"
                                        repeatCount="indefinite"
                                    />
                                    </path>
                                </defs>
                                <text dy="90">
                                    <textPath href="#circle" className="dm">Lorem ipsum dolor sit amet consectetur adipisicing elit</textPath>
                                </text>
                            </svg>
                            <span className="text-white">►</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="imgWrap2">
                            {/* <img src="https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="imgBg2" /> */}
                            <div className="imgBg2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab:mt-2 mb-2 footer">                
                <div className="space4"></div>
                <div className="flex flex-wrap justify-between">
                    <p className="font-robo font-normal text-white">Kanghee Kim</p>
                    <p className="font-robo font-normal text-white">New Year 2022</p>
                    <p className="tab:mt-5 font-robo font-normal text-white">By: Jeffone Audric Russel</p>
                </div>                
            </div>

        </main>   
    )
}

export default Home
