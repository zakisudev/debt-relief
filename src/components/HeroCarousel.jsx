import HeroCard from "./HeroCard"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HeroCarousel = () => {
  return (
    <Carousel
      emulateTouch
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      centerMode
      infiniteLoop
      centerSlidePercentage={100}
    >
      <HeroCard
        imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/NDR_2023_03_SELECTS137-2-1-2048x1136.jpg"
        name="Andrea A."
        quote="“Being able to trust them to do their job allows you to take care of what&apos;s important in your life.”"
        totalDebt="51,361"
        monthlyPayment="684"
        programLength="53"
        totalSavings="15,068"
      />

      <HeroCard
        imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/angelic-2048x1136.jpeg"
        name="Angelic B."
        quote="“I&apos;ll tell my story to anyone that wants; I have no shame whatsoever. National Debt Relief saved me so I can live my best life now!”"
        totalDebt="43,144"
        monthlyPayment="813"
        programLength="44"
        totalSavings="11,861"
      />

      <HeroCard
        imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/Eric_thumbnail.jpg"
        name="Eric H."
        quote="“I&apos;ve been in a combat environment, and there you have a team … National Debt Relief started working with me and suddenly, I had my team. I had my support structure to push myself forward.”"
        totalDebt="47,519"
        monthlyPayment="765"
        programLength="53"
        totalSavings="17,754"
      />
    </Carousel>
  )
}

export default HeroCarousel