const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-10 mb-10">
      <h2 className="text-4xl font-bold mb-5">How It Works</h2>
      <p className="text-2xl font-semibold">You&apos;re ain control, our debt experts do  the work</p>
      <div className="flex gap-10 mt-10">
        <div className="flex flex-col items-center justify-start h-[211px]">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2022/04/talk-to-us.svg" alt="" className="w-[60px] h-[60px]" />
          <p className="text-2xl mt-5">Talk to us for a free consultation</p>
          <p className="text-md font-light text-center max-w-[300px] max-h-[60px]">Tell us your situation, then find out your debt relief options – no obligation.</p>
        </div>
        <div className="flex flex-col items-center justify-start h-[211px]">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/optimized/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2022/04/affordable-plan.svg" alt="" className="w-[60px] h-[60px]" />
          <p className="text-2xl mt-5">We create an affordable plan that works for you</p>
          <p className="text-md font-light text-center max-w-[300px]">Approve your plan, personalized from our suite of products.</p>
        </div>
        <div className="flex flex-col items-center justify-start h-[211px]">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/source/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2022/02/performance-money-increase@250x250.svg" alt="" className="w-[60px] h-[60px]" />
          <p className="text-2xl mt-5">Get out of debt faster than you think</p>
          <p className="text-md font-light text-center max-w-[300px]">Get back to financial stability and living your life within 24-48 months.</p>
        </div>

      </div>
      <button className="px-8 py-2 rounded-full border-2 border-[#1f2147] hover:bg-[#1f2147] hover:text-white">Learn More</button>
    </div>
  )
}

export default HowItWorks