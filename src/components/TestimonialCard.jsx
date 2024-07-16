/* eslint-disable react/prop-types */
const TestimonialCard = ({
  imgSrc,
  par,
  blockquote,
  totalDebt,
  monthlyPayment,
  programLength,
  totalSavings,
  nameAndPercentage }) => {
  return (
    <div className="flex flex-col justify-stretch items-center gap-10 min-w-[350px] w-full max-w-[620px] shadow-xl pb-10 h-full bg-white rounded-2xl">
      <img src={imgSrc} alt="" className="h-[276px] rounded-t-2xl w-full" />
      <p className="text-gray-500">{par}</p>
      <blockquote className="px-10 text-center">
        <p className="text-4xl">{blockquote}</p>
      </blockquote>
      <div className="flex justify-between items-center gap-2 w-full mt-10">
        <div className="flex flex-col text-center border-r-2 border-gray-300 px-7 h-20">
          <p className="text-sm font-semibold">Total Debt</p>
          <p className="text-xl font-semibold whitespace-nowrap">${totalDebt}</p>
        </div>
        <div className="flex flex-col text-center border-r-2 border-gray-300 px-7 h-20">
          <p className="text-sm font-semibold">Monthly Payment</p>
          <p className="text-xl font-semibold whitespace-nowrap">${monthlyPayment}</p>
        </div>
        <div className="flex flex-col text-center border-r-2 border-gray-300 px-3 h-20">
          <p className="text-sm font-semibold whitespace-nowrap">Program Length</p>
          <p className="text-xl font-semibold whitespace-nowrap">{programLength} Months</p>
        </div>
        <div className="flex flex-col text-center px-7 h-20">
          <p className="text-sm font-semibold">Total Savings</p>
          <p className="text-xl font-semibold whitespace-nowrap">${totalSavings}</p>
        </div>
      </div>
      <p className="text-center text-2xl text-[#0074e0] font-semibold">{nameAndPercentage}</p>
    </div>
  )
}

export default TestimonialCard