import { Carousel } from "react-responsive-carousel"
import EssentialCard from "./EssentialCard"

const EssentialReading = () => {
  return (
    <div className="flex flex-col py10 mb-10 w-full justify-center items-center bg-gray-100 pb-10">
      <h2 className="text-center font-semibold text-5xl py-10">Essential Reading</h2>
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
        className="w-full reading scroll-smooth"
      >
        <EssentialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2024/07/Nascar-Chicago-NDR-weekend-1080x608.png"
          title="National Debt Relief Teams Up with NASCAR Chicago Street Race"
        />
        <EssentialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2024/06/group-of-students-running-at-school-2023-11-27-05-23-36-utc-1080x608.jpg"
          title="What They Don&apos;t Teach You in School About Money: Investing 101"

        />
        <EssentialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2015/10/couple-using-tablet-computer-2022-01-17-17-04-43-utc-1080x608.jpg"
          title="Mastering Credit Management: Your Key to Unlocking a World of Financial Opportunities"
        />
        <EssentialCard
          imgSrc="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2024/06/iStock-1402495372-1080x608.jpg"
          title="Managing Summer Childcare Costs with Credit Cards "
        />
      </Carousel>
      <button className="px-8 py-2 rounded-full border-2 border-[#1f2147] hover:bg-[#1f2147] hover:text-white w-fit mx-auto my-5">Read More</button>
    </div>
  )
}

export default EssentialReading