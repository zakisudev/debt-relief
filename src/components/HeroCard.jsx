/* eslint-disable react/prop-types */
const HeroCard = ({ imgSrc, name, quote, totalDebt, monthlyPayment, programLength, totalSavings }) => {
  return (
    <div className="w-full flex min-h-[780px] justify-start items-center">
      <div className="flex w-1/2 items-center h-[780px] bg-contain bg-center">
        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-1/2 mx-auto items-center justify-center bg-[#1f2147] h-[780px] text-white">
        <p className="mb-10">{name}</p>
        <p className="text-3xl mb-5 text-center max-w-[60%] italic font-bold leading-relaxed">{quote}</p>
        <a href="/apply" className="flex items-center gap-3 px-7 py-2 rounded-full bg-[#0074e0]">
          Apply Now
          <svg width="12" className="flex items-center svg-inline--fa fa-chevron-right bg-white text-black rounded-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-150 -50 650 650" data-fa-i2svg=""><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
        </a>
        <div className="flex flex-col my-8">
          <div className="flex gap-7">
            <div className="flex flex-col justify-center items-center  px-6 h-20 border-r-2 border-gray-600">
              <p className="text-[0.7rem] text-gray-200">Total Debt</p>
              <p className="text-xl text-[#26baa3]">${totalDebt}</p>
            </div>
            <div className="flex flex-col justify-center items-center  px-6 h-20 border-r-2 border-gray-600">
              <p className="text-[0.7rem] text-gray-200">Monthly Payment</p>
              <p className="text-xl text-[#26baa3]">${monthlyPayment}</p>
            </div>
            <div className="flex flex-col justify-center items-center  px-6 h-20 border-r-2 border-gray-600">
              <p className="text-[0.7rem] text-gray-200">Program Length</p>
              <p className="text-xl text-[#26baa3]">{programLength} Months</p>
            </div>
            <div className="flex flex-col justify-center items-center  px-6 h-20">
              <p className="text-[0.7rem] text-gray-200">Total Savings</p>
              <p className="text-xl text-[#26baa3]">${totalSavings}</p>
            </div>
          </div>
          <p className="text-xl text-center text-[#26baa3] mt-2 font-bold"> Andrea saved 29% on her debt </p>
        </div>
      </div>
    </div>
  )
}

export default HeroCard