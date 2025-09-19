"use client";
// import { useState } from "react";
import { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs";
import WhyFinsbeeContent from "./WhyFinsbee";
import FaqContent from "./FaqContent";
import Sidebar from "./Sidebar";
// import "../styles/index.css";

const whyFinsbeeFeatures = [
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "100% Digital Journey",
    description: "Complete application to disbursement digitally from anywhere",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "No Collateral Required",
    description: "Get approved without pledging any assets as security",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Flexible Repayment",
    description: "Choose repayment terms from 1-5 years that fit your budget",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "No Prepayment Penalties",
    description: "Pay off your loan early without additional charges after 6 months",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Minimal Documentation",
    description: "Simple application process with basic KYC requirements",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Special Rates",
    description: "Existing customers enjoy preferential interest rates",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "100% Digital Journey",
    description: "Complete application to disbursement digitally from anywhere",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "No Collateral Required",
    description: "Get approved without pledging any assets as security",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Flexible Repayment",
    description: "Choose repayment terms from 1-5 years that fit your budget",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "No Prepayment Penalties",
    description: "Pay off your loan early without additional charges after 6 months",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Minimal Documentation",
    description: "Simple application process with basic KYC requirements",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Special Rates",
    description: "Existing customers enjoy preferential interest rates",
  },
];

const faqItems = [
  {
    id: "item-1",
    question: "What exactly is Finsbee Consultation?",
    answer: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    id: "item-2",
    question: "How is Finsbee different from banks or agents?",
    answer: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    id: "item-3",
    question: "What are your plans and pricing?",
    answer: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    id: "item-4",
    question: "Can you help me secure a lower interest rate?",
    answer: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    id: "item-5",
    question: "Is my information safe?",
    answer: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
];



export default function Home() {
  const [activeTab, setActiveTab] = useState("why-finsbee");
  const [expandedFaq, setExpandedFaq] = useState("item-1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const sectionRefs = {
    "why-finsbee": useRef(null),
    faq: useRef(null),
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  useEffect(() => {
    const options = { root: null, threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-tab-id");
          if (id && id !== activeTab) {
            setActiveTab(id);
          }
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [activeTab]);

  return (
    <div className="relative flex gap-8 mx-25 py-10 bg-white  ">
      {/* Main Content */}
      <div className="w-[788px] flex-1">
        {/* Sticky Header at top-9 */}
        {/* Sticky Header */}
<div className="sticky top-0 pt-10 z-30 bg-white border-b border-purple-100 ">
  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
</div>

{/* Content Wrapper */}
<div className="relative z-0 bg-gray-50 border border-purple-100 rounded-b-2xl pt-8 pb-4 px-4 space-y-24">
  <section
    ref={sectionRefs["why-finsbee"]}
    data-tab-id="why-finsbee"
    className="min-h-[100vh]"
  >
    <WhyFinsbeeContent features={whyFinsbeeFeatures} />
  </section>

  <section
    ref={sectionRefs.faq}
    data-tab-id="faq"
    className=""
  >
    <FaqContent
      faqItems={faqItems}
      expandedFaq={expandedFaq}
      toggleFaq={toggleFaq}
    />
  </section>
</div>

      </div>

      {/* Sidebar Sticky at top-0 */}
      <div className="sticky top-0 pt-9 self-start h-fit">
        <Sidebar
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
    </div>
  );
}