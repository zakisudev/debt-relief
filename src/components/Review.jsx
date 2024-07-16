/* eslint-disable react/prop-types */
const Review = () => {
  return (
    <div className='w-full bg-gray-100 flex flex-col items-center justify-center py-10 mb-10 mx-auto h-[378px]'>
      <h2 className='text-4xl font-bold text-center text-[#1f2147]'>Top-Notch Reviews From Our Top-Notch Clients</h2>
      <div className="flex gap-10 my-8">
        <div className="flex flex-col gap-3 justify-center items-center rounded-xl bg-white w-[240px] h-[170px]">
          <img src="https://www.nationaldebtrelief.com/wp-content/uploads/2021/09/google.svg" alt="" />
          <div className="flex gap-1">
            <img src="/5-star.svg" alt="" className="h-7" />
          </div>
          <p className="font-light"><span className="font-bold">4.6</span> - 2,000 + Reviews</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-xl bg-white w-[240px] h-[170px]">
          <img src="https://www.nationaldebtrelief.com/wp-content/uploads/2021/09/consumer-affairs.svg" alt="" />
          <div className="flex gap-1">
            <img src="/5-star.svg" alt="" className="h-7" />
          </div>
          <p className="font-light"><span className="font-bold">4.82</span> – 46,000+ Reviews</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center rounded-xl bg-white w-[240px] h-[170px]">
          <img src="https://www.nationaldebtrelief.com/wp-content/uploads/2021/09/trust-pilot.svg" alt="" />
          <div className="flex gap-1">
            <img src="/5-star.svg" alt="" className="h-7" />
          </div>
          <p className="font-light"><span className="font-bold">4.8</span> - 31,000 + Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Review