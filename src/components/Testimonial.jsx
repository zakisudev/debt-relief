import { Carousel } from "react-responsive-carousel"
import TestimonialCard from "./TestimonialCard"

const Testimonial = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-5 py-10 mb-10">
      <h2 className="text-[3.2rem] font-bold text-balance max-w-[880px] mx-auto text-center text-[#0074e0] leading-tight">We&apos;ve Transformed The Lives Of Hundreds Of Thousands Of People</h2>
      <p className="text-lg text-wrap max-w-[880px] mx-auto text-center">
        “Our mission is helping you get your life back, enabling you to enjoy life freely. With our dedicated team of experts, we strive tirelessly to make a substantial and lasting difference in your journey towards debt relief.”
      </p>
      <div className="flex gap-2 items-center mb-5">
        <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2024/04/alex-k-signature.png" alt="" />
      </div>
      <Carousel
        centerMode
        centerSlidePercentage={35}
        emulateTouch
        infiniteLoop
        autoPlay={true}
        interval={3000}
        showArrows={true}
        showIndicators={true}
        dynamicHeight={false}
        showThumbs={false}
        className="w-full testimonial scroll-smooth"
      >
        <TestimonialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/tatiana-640x285.jpeg"
          par='Tatiana C., Doting mom to 3 boys'
          blockquote="“National Debt Relief changed not only my life, my family life, because now I can spend more time at home.”"
          totalDebt="18,453"
          monthlyPayment="394"
          programLength="36"
          totalSavings="3,724"
          nameAndPercentage="Tatiana saved 20% on her debt"
        />
        <TestimonialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/jaime-640x285.jpg"
          par='Jaime B., Private pilot, devoted husband'
          blockquote="“Our life started to get less complicated because the burden of debt is hard to carry.”"
          totalDebt="34,728"
          monthlyPayment="546"
          programLength="46"
          totalSavings="10,648"
          nameAndPercentage="Jaime saved 31% on his debt"
        />
        <TestimonialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/angelic-640x285.jpeg"
          par='Angelic B., Singer with the St. Louis Symphony Orchestra'
          blockquote="“I&apos;ll tell my story to anyone that wants;I have no shame whatsoever. National Debt Relief saved me so I can live my best life now!”"
          totalDebt="43,144"
          monthlyPayment="813"
          programLength="44"
          totalSavings="11,861"
          nameAndPercentage="Angelic saved 27% on her debt"
        />
        <TestimonialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/04/david-640x285.jpeg"
          par="David N., Cat lover, tattoo aficionado"
          blockquote="“It increased my confidence. Because you were able to identify a problem, set a goal, make a plan and then achieve the goal.”"
          totalDebt="36,883"
          monthlyPayment="699"
          programLength="38"
          totalSavings="13,928"
          nameAndPercentage="David saved 38% on his debt"
        />
      </Carousel>
      <button className="px-8 py-2 my-10 rounded-full border-2 border-[#1f2147]">Let&apos;s Start Now</button>
    </div>
  )
}

export default Testimonial