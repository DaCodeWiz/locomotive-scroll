import './Footer.css'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
	// Personal Links

    const footerContainer = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        //container parallax
        gsap.fromTo(footerContainer.current,
            {
                y: () => -window.innerHeight
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: footerContainer.current,
                    scrub: true,
                    start: "center bottom",
                    end: "bottom top",
                },
            }
        )

        //heading scroll trigger opening
        gsap.fromTo(heading0.current,
            { rotation: 6, opacity: 0, y: () => heading0.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: footerContainer.current, start: 'center center' } })

        gsap.fromTo(heading1.current,
            { rotation: 6, opacity: 0, y: () => heading1.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: footerContainer.current, start: 'center center' } })
    }, [])
    
    return (
			<footer className='center' ref={footerContainer}>
				<div id='footer-content' className='content-width column'>
					<h2>
						<div className='anim'>
							<div ref={heading0}>Jake</div>
						</div>
						<div className='anim'>
							<div ref={heading1}>Pearson</div>
						</div>
					</h2>
					<p>
						creativity driven with a<br />
						passionate focus on innovation.
					</p>
					<hr />
					<div id='footer-final-p' className='block'>
						<div className='footer-list'>
							<a href='/#'>jpearsonbusiness@gmail.com</a>
								<a
									href='https://www.linkedin.com/in/jakepearson123/'
									target='_blank'
									rel='noopener noreferrer'>
									LinkedIn
								</a>
							<a
								href='https://www.dribbble.com/jopearson'
								target='_blank'
								rel='noopener noreferrer'>
								Dribbble
							</a>
							<a
								href='https://www.behance.net/jakepearson5'
								target='_blank'
								rel='noopener noreferrer'>
								Behance
							</a>
							<a
								href='https://github.com/DaCodeWiz'
								target='_blank'
								rel='noopener noreferrer'>
								Github
							</a>
							<a
								href="https://instagram.com/jakepeerson"
								target='_blank'
								rel='noopener noreferrer'>
								Instagram
							</a>
							<a href='/#' target='_blank' rel='noopener noreferrer'>
								Payhip
							</a>
						</div>
					</div>
				</div>
				<div className='background'>
					<video
						playsInline=''
						loop='loop'
						muted='muted'
						disablePictureInPicture=''
						className='video'
						autoPlay='autoplay'>
						<source src='/footer-3.mp4' type='video/mp4' />
					</video>
				</div>
			</footer>
		);
}

export default Footer