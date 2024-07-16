/* eslint-disable react/prop-types */
const EssentialCard = ({ imgSrc, title }) => {
  return (
    <div className="rounded-2xl flex flex-col gap-5 min-w-[350px] max-w-[620px]">
      <a href="#">
        <img src={imgSrc} alt="" className="w-full rounded-t-2xl max-h-[350px]" />
      </a>
      <a href="#">
        <h3 className="text-left px-5 text-3xl font-bold">{title}</h3>
      </a>
      <a href="#" className="border-b ml-5 w-fit border-gray-800">Read More</a>
    </div>
  )
}

export default EssentialCard