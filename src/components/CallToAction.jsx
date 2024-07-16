const CallToAction = () => {
  return (
    <div className="flex flex-col max-w-[40%] items-center justify-center mx-auto mb-10">
      <h2 className="text-4xl text-center font-bold text-balance text-[#1f2147]">Get A Free, No-Obligation Debt Relief Consultation</h2>
      <ul className="flex flex-col gap-5 text-left text-[#1f2147] mt-5">
        <li className="flex gap-2">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/source/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/05/check-light-blue-small.svg" alt="" className="w-4" />
          <span>Get A Free Savings Estimate Today</span>
        </li>
        <li className="flex gap-2">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/source/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/05/check-light-blue-small.svg" alt="" className="w-4" />
          <span>See How Quickly You Can Be Debt Free</span>
        </li>
        <li className="flex gap-2">
          <img src="https://cdn-jnjbn.nitrocdn.com/GWDIEzxFkLCKQMTJOvFMAOCVLqdGBlyP/assets/images/source/rev-4de30eb/www.nationaldebtrelief.com/wp-content/uploads/2023/05/check-light-blue-small.svg" alt="" className="w-4" />
          <span>No Fees Until Your Accounts Are Settled</span>
        </li>
      </ul>
      <div className="flex gap-4 relative my-10">
        <select
          name="debt_owed"
          id="debt_owed"
          className="px-12 py-5 mr-3 text-left rounded-lg border-2 border-[#1f2147] mx-auto focus:border-[#0074e0]">
          <option value="" selected="selected" className="gf_placeholder">Your Estimated Debt Owed</option>
          <option value="$0 - $4,999">$0 – $4,999</option><option value="$5,000 - $7,499">$5,000 – $7,499</option>
          <option value="$7,500 - $9,999">$7,500 – $9,999</option>
          <option value="$10,000 - $14,999">$10,000 – $14,999</option><option value="$15,000 - $19,999">$15,000 – $19,999</option>
          <option value="$20,000 - $29,999">$20,000 – $29,999</option>
          <option value="$30,000 - $39,999">$30,000 – $39,999</option>
          <option value="$40,000 - $49,999">$40,000 – $49,999</option>
          <option value="$50,000 - $59,999">$50,000 – $59,999</option>
          <option value="$60,000 - $69,999">$60,000 – $69,999</option>
          <option value="$70,000 - $79,999">$70,000 – $79,999</option>
          <option value="$80,000 - $89,999">$80,000 – $89,999</option>
          <option value="$90,000 - $99,999">$90,000 – $99,999</option><option value="$100,000+">$100,000+</option>
        </select>
        <div className="select-wrapper"></div>
      </div>
      <div className="flex px-7 py-2 bg-[#0074e0] text-white rounded-full font-bold mb-10"><button>Submit</button></div>
    </div>
  )
}

export default CallToAction