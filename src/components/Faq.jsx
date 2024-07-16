/* eslint-disable react/prop-types */

import { useState } from "react";

const Faq = () => {
  const items = [
    {
      title: "Who is NationalDebt Relief and why should I trust you?",
      body1: "At the core of our client relationships is one simple factor: trust. We know that fostering trust is vital. And it starts by doing more listening than talking. As effective listeners, we can better identify our clients' goals and concerns, then develop debt relief solutions tailored to each client's unique situation.",
      body2Header: "Our commitment to customer care leads the industry. ",
      body2: "We do what we say we're going to do, and always act in our client's best interest. National Debt Relief is proud to be the most respected provider of debt relief services in the country. We're A+-rated and fully accredited with the Better Business Bureau (BBB). And we're proud to be the top-rated Debt Settlement Company by our clients — with tens of thousands of reviews and testimonials that include:",
      list: [
        "TopConsumerReviews – rated #1 for Debt Settlement",
        "TopTenReviews – rated #1 for Debt Settlement",
        "ConsumersAdvocate – rated #1 for Debt Settlement",
        "ConsumerAffairs – rated #1 for Debt Settlement",
        "46, 954 reviews on ConsumerAffairs with a 4.83 out of 5.00 rating",
        "31, 949 reviews on TrustPilot with a 4.8 out of 5 rating"
      ],
      body3Header: "Our track record speaks for itself. ",
      body3: "We help thousands of new clients a month start their path to debt relief – and we've helped hundreds of thousands of clients resolve billions in consumer debt. We take tremendous pride in our industry leadership. We're active, accredited members of the American Association for Debt Resolution (AADR), as well as Platinum Accredited through the IAPDA (International Association of Professional Debt Arbitrators).",
      body4: "We deliver results, and we deliver them the right way."
    },
    {
      title: "What services can you offer?",
      body1: "Beyond our signature Whole Human Finance™ approach to debt relief, our clients have access to a wide network of partners including options for consolidation loans, credit counselling services, bankruptcy referrals, and more. Our team of debt relief experts will review your unique situation and offer solutions based on your situation, your location, and your goals."
    },
    {
      title: "How does Debt Relief work?",
      body1: "Debt Relief is the core of National Debt Relief's Whole Human Finance™ approach. It can cut your monthly payments immediately to relieve cash flow pressure and help you focus on becoming debt-free as inexpensively and quickly as possible.",
      body2Header: "Our program is easy to understand. ",
      body2: "Rather than paying your creditors, you'll deposit a monthly payment to a Dedicated Savings Account, in your name and under your control. As funds build up, we'll contact your creditors to negotiate and agree upon reduced balances. (Because you're no longer paying the creditor, they will likely view getting a reduced amount as better than risking no payment at all.) Then, you'll authorize us to use the funds in your Dedicated Savings Account to pay your creditors the lower, negotiated amounts. As accounts are paid off, they should be reported back as a zero balance."
    },
    {
      title: "Can i afford this?",
      body1: "National Debt Relief goes way beyond making sure you can afford us – we take the time to review your budget to make sure the solution we suggest will actually help take the pressure off. And, because you can customize your deposit schedule, it's easier to feel in control throughout the process."
    },
    {
      title: "How much do your service cost?",
      body1: "National Debt Relief does charge a fee for our service.And, unlike other programs with hardship solutions, our fee is entirely performance- based.We earn nothing for our work until we've achieved the results you want, and you feel great about the savings.",
      body2: "Our fees vary by state and the amount of your debt(about 15 - 25 % of your enrolled debt).Compared to the thousands of dollars in interest you may pay on credit cards while struggling to pay them off, you can still expect to see an impressive amount of savings with National Debt Relief.",
      body3: `While every program differs, here's an example from a recent client: “Mary" came to National Debt Relief owing $22, 800 between credit cards and a personal loan and was paying a little over $1020 / month.Having recently transitioned to a fixed income, her focus was reducing the payment and getting rid of the debt.She set up a $362 / month deposit for an estimated 48 months(4 years) to become debt - free.
      Based on National Debt Relief's plan “Mary's” debt could be resolved for about $17, 300 instead of an estimated $63, 434 based on minimum payments.`
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center py-10 mb-10 w-[845px] mx-auto rounded-2xl">
      <div className="flex"></div>
      <Accordion items={items} />
      <button className="px-8 py-2 rounded-full border-2 border-[#1f2147] hover:bg-[#1f2147] hover:text-white w-fit mx-auto my-5">Learn More</button>
    </div>
  )
}

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if it's already open
    } else {
      setOpenIndex(index); // Open the selected accordion item
    }
  };

  return (
    <div className="divide-y divide-gray-200 w-full rounded-2xl">
      {items.map((item, index) => (
        <div key={index} className="py-5 bg-gray-100 rounded-2xl my-5">
          <button
            className="flex justify-left items-center gap-5 w-full px-4 py-2 text-left"
            onClick={() => toggleItem(index)}
          >
            <svg
              className={`w-6 h-6 transition-transform transform duration-300 ${openIndex === index ? 'rotate-180 text-[#0074e0]' : 'rotate-0'
                }`}
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
            <span className={`${openIndex === index ? "text-2xl text-[#0074e0]" : "text-2xl"}`}>{item.title}</span>
          </button>
          {openIndex === index && (
            <div className="p-4">
              <div className="flex flex-col gap-3 pl-10 pr-5">
                <p className="text-gray-700 text-justify">{item.body1}</p>
                <br />
                <p className="text-gray-700 text-justify"><span className="font-semibold">{item?.body2Header}</span>{item?.body2}</p>
                {item?.list && <ul className="flex flex-col gap-3 pl-5 py-5">
                  {item.list?.map((l, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwlKUa_UV2N_dqO7TZIQbk5l9bbynq352tQ&s" alt="" className="w-3 h-3 rounded-full" />
                      <p className="text-gray-700">{l}</p>
                    </li>
                  ))}
                </ul>}
                <p className="text-gray-700 text-justify pt-2"><span className="font-semibold">{item?.body3Header}</span>{item?.body3}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq