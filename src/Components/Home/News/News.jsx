import './News.css'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import img1 from '../../../imgs/nasa-n463SoeSiVY-unsplash.jpg'
import img2 from '../../../imgs/sebastien-bourguet-ZI1FT0B68K8-unsplash.jpg'
import img3 from '../../../imgs/casey-olsen-2s11AHnb_SU-unsplash.jpg'
import img4 from '../../../imgs/video1.mp4'

gsap.registerPlugin(ScrollTrigger)

const News = () => {

    const wrapper = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        //Image 0
        gsap.to(wrapper.current, {
            y: () => window.innerWidth * .15,
            scrollTrigger: { trigger: wrapper.current, scrub: true, end: 'bottom' }
        })

        //Image 1
        gsap.to(image1.current, {
            x: () => -window.innerWidth * .06,
            y: () => -window.innerWidth * .03,
            scrollTrigger: { trigger: image1.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 2
        gsap.to(image2.current, {
            x: () => window.innerWidth * .1,
            y: () => -window.innerWidth * .03,
            scrollTrigger: { trigger: image2.current, scrub: .98, start: 'top bottom', end: 'bottom top', endTrigger: wrapper.current }
        })

        //Image 3
        gsap.to(image3.current, {
            x: () => -window.innerWidth * .18,
            scrollTrigger: { trigger: image3.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //Image 4
        gsap.to(image4.current, {
            x: () => window.innerWidth * .13,
            scrollTrigger: { trigger: image4.current, scrub: .98, start: 'top bottom', end: 'bottom top' }
        })

        //heading scroll trigger opening
        gsap.fromTo(heading0.current,
            { rotation: 6, opacity: 0, y: () => heading0.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })

        gsap.fromTo(heading1.current,
            { rotation: 6, opacity: 0, y: () => heading1.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: heading1.current, start: 'center bottom' } })
    }, [])

    return (
			<div id='news-container' className='center column'>
				<div id='news-media-container' ref={wrapper}>
					<div className='news-media'>
						<picture type='image'>
							<source type='image/webp' srcSet={img1} />
							<img
								src={img1}
								width='748'
								height='1278'
								loading='lazy'
								alt='a rocket'
							/>
						</picture>
					</div>
					<div className='news-media' ref={image1}>
						<picture type='image'>
							<source
								src='https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
								type='image/webp'/>
							<img src='https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							width='750'
							height='1000'
							loading='lazy'
							alt='a rocket' />
						</picture>
					</div>
					<div className='news-media' ref={image2}>
						<picture id='3643671' type='image' data-v-4a179df6=''>
							<source
								type='image/webp'
								srcSet={img2}
								sizes='(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px'
							/>
							<img
								src={img3}
								srcSet='https://img2.storyblok.com/270x383/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 270w, https://img2.storyblok.com/350x497/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 350w, https://img2.storyblok.com/550x781/filters:format(jpeg):quality(70)/f/133769/348x494/21becfd449/home-news-3.jpg 550w'
								sizes='(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px'
								width='348'
								height='494'
								alt='a guy holding a camera'
								loading='lazy'
							/>
						</picture>
					</div>
					<div className='news-media' ref={image3}>
						<picture type='image'>
							<source
								type='image/webp'
								srcSet={img3}
								sizes='(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px'
							/>
							<img
								src='https://img2.storyblok.com/550x369/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg'
								srcSet='https://img2.storyblok.com/270x181/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 270w, https://img2.storyblok.com/350x235/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 350w, https://img2.storyblok.com/550x369/filters:format(jpeg):quality(70)/f/133769/758x508/8a1ff60d00/home-news-4.jpg 550w'
								sizes='(max-width: 1024px) 270px, (max-width: 1280px) 350px, 550px'
								width='758'
								height='508'
								alt='welcome sign'
								loading='lazy'
							/>
						</picture>
					</div>
					<div className='news-media' ref={image4}>
						<video
							playsInline=''
							loop='loop'
							muted='muted'
							autoPlay='autoPlay'
							disablePictureInPicture=''>
							<source src={img4} type='video/mp4' />
						</video>
					</div>
				</div>
				<div className='row'>
					<svg
						viewBox='0 0 12 12'
						fill='#fff'
						xmlns='http://www.w3.org/2000/svg'
						className='icon'
						data-v-669b4a84=''>
						<path d='M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z'></path>
					</svg>
					<p className='news-small-heading'>popularity</p>
				</div>
				<h2>
					<div className='anim'>
						<div ref={heading0}>let's</div>
					</div>
					<div className='anim'>
						<div ref={heading1}>talk</div>
					</div>
				</h2>
				<p className='news-text'>
					i am interested in working with you,
					<br />
					any inquiries or requests are welcome to contact me.
				</p>
			</div>
		);
}

export default News