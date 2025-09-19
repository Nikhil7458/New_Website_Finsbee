
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     const loanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction }) => (
//         <motion.div
//             className={`flex flex-col h-40 ${direction}  gap-2.5 w-full`}
//             initial={{ scale: 0.1, opacity: 0, x: 0, rotate: 0 }} // Start from center (phone position)
//             animate={
//                 isActive
//                     ? { scale: 1, opacity: 1, x: 0, rotate: 0 }
//                     : { scale: 0.1, opacity: 0.1, x: 0, rotate: 0 }
//             }
//             transition={{
//                 duration: 0.7, // Faster animation
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70, // Faster spring
//                 damping: 20,
//             }}
//         >
//             <div className="relative ">
//                 <div className="absolute w-[264px] h-32 top-[5px]   rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${isActive ? "opacity-100" : "opacity-10"
//                         }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";
//     const centerDirection = "items-center justify-center ";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                             backgroundColor: "#fbbf24",
//                             x: 0,
//                             y: 0,
//                             width: "312px",
//                             height: "120px",
//                             top: isTop ? "154px" : "344px",
//                             left: isTop ? "70px" : "10rem",
//                             boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                         }
//                         : {
//                             backgroundColor: "rgba(249, 250, 251, 0.95)",
//                             x: 0,
//                             y: 0,
//                             width: "312px",
//                             height: "120px",
//                             top: isTop ? "154px" : "344px",
//                             left: isTop ? "70px" : "10rem",
//                             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                         }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {/* Shadow overlay for active state */}
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}

//                 <div
//                     className={`flex items-center justify-between  w-full h-full relative z-10`}
//                 >
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                     }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     return (
//         <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container - Dynamic based on active side */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "left"
//                                     ? leftDirection
//                                     : "w-[456px]  opacity-10 items-end "
//                                 }`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: activeSide === "left" ? 1 : 0.1 }}
//                             transition={{ duration: 0.7 }}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                                 ? "items-start -mt-25"
//                                                 : "items-end -mt-20"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "right"
//                                     ? rightDirection
//                                     : "w-[456px] -mr-[430px] opacity-10 items-start"
//                                 }`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: activeSide === "right" ? 1 : 0.1 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                                 ? "items-end -mt-20"
//                                                 : "items-start pl-16 -mt-20  -ml-[7rem]"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Center Phone Image - Always present */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {/* Background Card - Shifts first and stays underneath */}

//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem", // only slide left
//                                             top: "11rem", // fixed
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem", // only slide left
//                                             top: "23rem", // fixed
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{
//                                             zIndex: 0.9, // Below the default cards (z-10)
//                                         }}
//                                     />
//                                 )}

//                                 {/* Top Card - Click to activate left side */}
//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{
//                                         zIndex: 15, // Below the default cards (z-10)
//                                     }}
//                                 />

//                                 {/* Bottom Card - Click to activate right side */}
//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{
//                                         zIndex: 15, // Below the default cards (z-10)
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label based on active side */}

//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                         ? 224
//                                         : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                         ? 226
//                                         : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             // 👉 Special case: Arrow first, then text
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             // 👉 Default: Text first, then arrow
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${activeSide === "right" ? "-mt-1" : ""
//                                         }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                             ? "Loan Option"
//                                             : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                                 ? "-ml-3"
//                                                 : ""
//                                         }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     const loanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction }) => (
//         <div
//             className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
//         >
//             <div className="relative">
//                 <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
//                         isActive ? "opacity-100" : "opacity-10"
//                     }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";
//     const centerDirection = "items-center justify-center";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                               backgroundColor: "#fbbf24",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                           }
//                         : {
//                               backgroundColor: "rgba(249, 250, 251, 0.95)",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                           }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}
//                 <div className="flex items-center justify-between w-full h-full relative z-10">
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
//                                     isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                 }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     // Animation variants for the loan card groups
//     const loanCardVariants = {
//         hidden: {
//             x: 299, // Center of the phone
//             y: 50,  // Top of the phone
//             opacity: 0,
//             scale: 0.5,
//         },
//         left: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         right: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.3,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "left" ? leftDirection : "w-[456px] opacity-10 items-end"}`}
//                             variants={loanCardVariants}
//                             initial="hidden"
//                             animate={activeSide === "left" ? "left" : "inactive"}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                             ? "items-start -mt-25"
//                                             : "items-end -mt-20"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "right" ? rightDirection : "w-[456px] -mr-[430px] opacity-10 items-start"}`}
//                             variants={loanCardVariants}
//                             initial="hidden"
//                             animate={activeSide === "right" ? "right" : "inactive"}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                             ? "items-end -mt-20"
//                                             : "items-start pl-16 -mt-20 -ml-[7rem]"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Center Phone Image */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem",
//                                             top: "11rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem",
//                                             top: "23rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />

//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label */}
//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                     ? 224
//                                     : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                     ? 226
//                                     : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
//                                         activeSide === "right" ? "-mt-1" : ""
//                                     }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                         ? "Loan Option"
//                                         : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${
//                                         activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                             ? "-ml-3"
//                                             : ""
//                                     }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     const loanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction }) => (
//         <div
//             className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
//         >
//             <div className="relative">
//                 <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
//                         isActive ? "opacity-100" : "opacity-10"
//                     }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";
//     const centerDirection = "items-center justify-center";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                               backgroundColor: "#fbbf24",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                           }
//                         : {
//                               backgroundColor: "rgba(249, 250, 251, 0.95)",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                           }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}
//                 <div className="flex items-center justify-between w-full h-full relative z-10">
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
//                                     isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                 }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     // Animation variants for the loan card groups
//     const loanCardVariants = {
//         hidden: {
//             x: 299, // Center of the phone
//             y: 50,  // Top of the phone
//             opacity: 0,
//             scale: 0.5,
//         },
//         left: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         right: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.3,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "left" ? leftDirection : "w-[456px] opacity-10 items-end"}`}
//                             variants={loanCardVariants}
//                             initial="hidden"
//                             animate={activeSide === "left" ? "left" : "inactive"}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                             ? "items-start -mt-25"
//                                             : "items-end -mt-20"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "right" ? rightDirection : "w-[456px] -mr-[430px] opacity-10 items-start"}`}
//                             variants={loanCardVariants}
//                             initial="hidden"
//                             animate={activeSide === "right" ? "right" : "inactive"}
//                         >
//                             {loanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                             ? "items-end -mt-20"
//                                             : "items-start pl-16 -mt-20 -ml-[7rem]"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Center Phone Image */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem",
//                                             top: "11rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem",
//                                             top: "23rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />

//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label */}
//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                     ? 224
//                                     : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                     ? 226
//                                     : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
//                                         activeSide === "right" ? "-mt-1" : ""
//                                     }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                         ? "Loan Option"
//                                         : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${
//                                         activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                             ? "-ml-3"
//                                             : ""
//                                     }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     // Loan cards for left side (unchanged)
//     const leftLoanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     // New loan cards for right side (different content)
//     const rightLoanCards = [
//         {
//             title: "Auto Loan",
//             description:
//                 "Finance your new or used vehicle with competitive rates and flexible terms.",
//         },
//         {
//             title: "Education Loan",
//             description:
//                 "Fund your studies or your child's education with affordable loan options.",
//         },
//         {
//             title: "Travel Loan",
//             description:
//                 "Plan your dream vacation with easy financing and manageable repayments.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction }) => (
//         <motion.div
//             className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
//             variants={loanCardVariants}
//             initial="hidden"
//             animate={isActive ? "visible" : "inactive"}
//         >
//             <div className="relative">
//                 <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
//                         isActive ? "opacity-100" : "opacity-10"
//                     }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";
//     const centerDirection = "items-center justify-center";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                               backgroundColor: "#fbbf24",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                           }
//                         : {
//                               backgroundColor: "rgba(249, 250, 251, 0.95)",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                           }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}
//                 <div className="flex items-center justify-between w-full h-full relative z-10">
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
//                                     isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                 }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     // Animation variants for loan cards
//     const loanCardVariants = {
//         hidden: {
//             x: 299, // Center of the phone
//             y: 50,  // Top of the phone
//             opacity: 0,
//             scale: 0.5,
//         },
//         visible: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             x: 299, // Return to center on exit
//             y: 50,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     // Animation variants for left column (group animation)
//     const leftColumnVariants = {
//         hidden: {
//             x: 299,
//             y: 50,
//             opacity: 0,
//             scale: 0.5,
//         },
//         left: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             x: 299,
//             y: 50,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen w-[90rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "left" ? leftDirection : "w-[456px] opacity-10 items-end"}`}
//                             variants={leftColumnVariants}
//                             initial="hidden"
//                             animate={activeSide === "left" ? "left" : "inactive"}
//                         >
//                             {leftLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                             ? "items-start -mt-25"
//                                             : "items-end -mt-20"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "right" ? rightDirection : "w-[456px] -mr-[430px] opacity-10 items-start"}`}
//                             variants={leftColumnVariants}
//                             initial="hidden"
//                         >
//                             {rightLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                             ? "items-end -mt-20"
//                                             : "items-start pl-16 -mt-20 -ml-[7rem]"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Center Phone Image */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[503px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem",
//                                             top: "11rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shorectangle"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem",
//                                             top: "23rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />

//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label */}
//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                     ? 224
//                                     : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                     ? 226
//                                     : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
//                                         activeSide === "right" ? "-mt-1" : ""
//                                     }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                         ? "Loan Option"
//                                         : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${
//                                         activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                             ? "-ml-3"
//                                             : ""
//                                     }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     // Loan cards for left side (unchanged)
//     const leftLoanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     // New loan cards for right side (different content)
//     const rightLoanCards = [
//         {
//             title: "Auto Loan",
//             description:
//                 "Finance your new or used vehicle with competitive rates and flexible terms.",
//         },
//         {
//             title: "Education Loan",
//             description:
//                 "Fund your studies or your child's education with affordable loan options.",
//         },
//         {
//             title: "Travel Loan",
//             description:
//                 "Plan your dream vacation with easy financing and manageable repayments.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction }) => (
//         <motion.div
//             className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
//             variants={loanCardVariants}
//             initial="hidden"
//             animate={isActive ? "visible" : "inactive"}
//         >
//             <div className="relative">
//                 <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
//                         isActive ? "opacity-100" : "opacity-10"
//                     }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";
//     const centerDirection = "items-center justify-center";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                               backgroundColor: "#fbbf24",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                           }
//                         : {
//                               backgroundColor: "rgba(249, 250, 251, 0.95)",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                           }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}
//                 <div className="flex items-center justify-between w-full h-full relative z-10">
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
//                                     isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                 }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     // Animation variants for loan cards
//     const loanCardVariants = {
//         hidden: {
//             x: 299, // Center of the phone
//             y: 50,  // Top of the phone
//             opacity: 0,
//             scale: 0.5,
//         },
//         visible: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             x: 299, // Return to center on exit
//             y: 50,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     // Animation variants for left column (group animation)
//     const leftColumnVariants = {
//         hidden: {
//             x: 299,
//             y: 50,
//             opacity: 0,
//             scale: 0.5,
//         },
//         left: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//         inactive: {
//             x: 299,
//             y: 50,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "left" ? leftDirection : "w-[456px] opacity-10 items-end"}`}
//                             variants={leftColumnVariants}
//                             initial="hidden"
//                             animate={activeSide === "left" ? "left" : "inactive"}
//                         >
//                             {leftLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                             ? "items-start -mt-25"
//                                             : "items-end -mt-20"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <motion.div
//                             className={`flex flex-col w-[390px] ${activeSide === "right" ? rightDirection : "w-[456px] -mr-[430px] opacity-10 items-start"}`}
//                         >
//                             {rightLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                             ? "items-end -mt-20"
//                                             : "items-start pl-16 -mt-20 -ml-[7rem]"
//                                     }
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Center Phone Image */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem",
//                                             top: "11rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shorectangle"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem",
//                                             top: "23rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />

//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label */}
//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                     ? 224
//                                     : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                     ? 226
//                                     : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
//                                         activeSide === "right" ? "-mt-1" : ""
//                                     }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                         ? "Loan Option"
//                                         : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${
//                                         activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                             ? "-ml-3"
//                                             : ""
//                                     }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const MobileBox = () => {
//     const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

//     // Loan cards for left side
//     const leftLoanCards = [
//         {
//             title: "Personal Loan",
//             description:
//                 "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
//         },
//         {
//             title: "Business Loan",
//             description:
//                 "Expand your business, purchase equipment, or manage cash flow needs.",
//         },
//         {
//             title: "Home Loan",
//             description:
//                 "Purchase your dream home or refinance existing mortgage at best rates.",
//         },
//     ];

//     // Loan cards for right side
//     const rightLoanCards = [
//         {
//             title: "Auto Loan",
//             description:
//                 "Finance your new or used vehicle with competitive rates and flexible terms.",
//         },
//         {
//             title: "Education Loan",
//             description:
//                 "Fund your studies or your child's education with affordable loan options.",
//         },
//         {
//             title: "Travel Loan",
//             description:
//                 "Plan your dream vacation with easy financing and manageable repayments.",
//         },
//     ];

//     const loanOptions = [
//         {
//             icon: "/landing_page/coin.svg",
//             label: "Personal Loan",
//         },
//         {
//             icon: "/landing_page/building.svg",
//             label: "Business Loan",
//         },
//         {
//             icon: "/landing_page/security-card.svg",
//             label: "Loan Against Security",
//         },
//     ];

//     // Common structure for loan card
//     const LoanCard = ({ card, isActive, direction, index, isRight = false }) => (
//         <motion.div
//             className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
//             variants={isRight ? rightCardVariants : leftCardVariants}
//             custom={index}
//             initial="hidden"
//             animate={isActive ? "visible" : "inactive"}
//         >
//             <div className="relative">
//                 <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
//                 <div
//                     className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
//                         isActive ? "opacity-100" : "opacity-10"
//                     }`}
//                 >
//                     <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
//                         {card.title}
//                     </div>
//                     <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
//     const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";

//     const DefaultCard = ({ isTop, isActive, onClick }) => {
//         const baseClass =
//             "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
//         const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
//         const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

//         return (
//             <motion.div
//                 className={`${baseClass} ${isTop ? topPos : bottomPos}`}
//                 initial={{
//                     backgroundColor: "rgba(249, 250, 251, 0.95)",
//                     x: 0,
//                     y: 0,
//                 }}
//                 animate={
//                     isActive
//                         ? {
//                               backgroundColor: "#fbbf24",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
//                           }
//                         : {
//                               backgroundColor: "rgba(249, 250, 251, 0.95)",
//                               x: 0,
//                               y: 0,
//                               width: "312px",
//                               height: "120px",
//                               top: isTop ? "154px" : "344px",
//                               left: isTop ? "70px" : "10rem",
//                               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                           }
//                 }
//                 transition={{
//                     duration: 0.7,
//                     ease: "easeInOut",
//                     type: "tween",
//                 }}
//                 onClick={onClick}
//                 style={{
//                     left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
//                     top: isTop ? "154px" : "344px",
//                 }}
//             >
//                 {isActive && (
//                     <motion.div
//                         className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.7 }}
//                         transition={{ duration: 0.2, delay: 0.1 }}
//                     />
//                 )}
//                 <div className="flex items-center justify-between w-full h-full relative z-10">
//                     {loanOptions.map((option, index) => (
//                         <div
//                             key={`${isTop ? "top" : "bottom"}-${index}`}
//                             className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
//                         >
//                             <div
//                                 className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
//                                     isActive
//                                         ? "bg-yellow-100 border-orange-100"
//                                         : "bg-white/50 border-purple-100"
//                                 }`}
//                             >
//                                 <img className="w-7 h-7" alt={option.label} src={option.icon} />
//                             </div>
//                             <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
//                                 {option.label}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </motion.div>
//         );
//     };

//     // Animation variants for left cards (top card)
//     const leftCardVariants = {
//         hidden: {
//             x: 299, // Center of the phone
//             y: 154, // Top card position
//             opacity: 0,
//             scale: 0.5,
//         },
//         visible: (index) => ({
//             x: index === 0 ? -300 : index === 1 ? -350 : -250,
//             y: index === 0 ? 0 : index === 1 ? 100 : 200,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//                 delay: index * 0.1,
//             },
//         }),
//         inactive: {
//             x: 299,
//             y: 154,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     // Animation variants for right cards (bottom card) - Modified to animate from center
//     const rightCardVariants = {
//         hidden: {
//             x: -299, // Center of the phone
//             y: 344, // Bottom card position
//             opacity: 0,
//             scale: 0.5,
//         },
//         visible: (index) => ({
//             x: index === 0 ? 300 : index === 1 ? 350 : 250,
//             y: index === 0 ? 0 : index === 1 ? 100 : 200,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//                 delay: index * 0.1,
//             },
//         }),
//         inactive: {
//             x: 299,
//             y: 344,
//             opacity: 0.1,
//             scale: 0.5,
//             transition: {
//                 duration: 0.7,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 70,
//                 damping: 20,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
//             <div className="relative w-full h-[1047px] pt-8">
//                 <div className="relative h-[1047px]">
//                     {/* Background Circle */}
//                     <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
//                         <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
//                     </div>

//                     {/* Loan Cards Container */}
//                     <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
//                         {/* Left Column - Active when top clicked */}
//                         <div className={`flex flex-col w-[390px] ${activeSide === "left" ? leftDirection : "w-[456px] opacity-10 items-end"}`}>
//                             {leftLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`left-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "left"}
//                                     direction={
//                                         index === 0
//                                             ? "items-end"
//                                             : index === 1
//                                             ? "items-start -mt-25"
//                                             : "items-end -mt-20"
//                                     }
//                                     index={index}
//                                 />
//                             ))}
//                         </div>

//                         {/* Right Column - Active when bottom clicked */}
//                         <div className={`flex flex-col w-[390px] ${activeSide === "right" ? rightDirection : "w-[456px] -mr-[430px] opacity-10 items-start"}`}>
//                             {rightLoanCards.map((card, index) => (
//                                 <LoanCard
//                                     key={`right-${index}`}
//                                     card={card}
//                                     isActive={activeSide === "right"}
//                                     direction={
//                                         index === 0
//                                             ? "items-start -ml-[3rem]"
//                                             : index === 1
//                                             ? "items-end -mt-20"
//                                             : "items-start pl-16 -mt-20 -ml-[7rem]"
//                                     }
//                                     index={index}
//                                     isRight={true}
//                                 />
//                             ))}
//                         </div>

//                         {/* Center Phone Image */}
//                         <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
//                             <div
//                                 className="relative h-[590px] bg-cover bg-center bg-no-repeat"
//                                 style={{ backgroundImage: "url(/landing_page/m1.png)" }}
//                             >
//                                 {activeSide === "left" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "3rem",
//                                             top: "11rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 {activeSide === "right" && (
//                                     <motion.div
//                                         className="relative bg-white rounded-2xl w-[312px] h-[120px] shadow-lg shadow-black/25"
//                                         initial={{ opacity: 0, top: "23rem", left: "10rem" }}
//                                         animate={{
//                                             opacity: 0.7,
//                                             left: "11.7rem",
//                                             top: "23rem",
//                                         }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 70,
//                                             damping: 18,
//                                         }}
//                                         style={{ zIndex: 0.9 }}
//                                     />
//                                 )}

//                                 <DefaultCard
//                                     isTop={true}
//                                     isActive={activeSide === "left"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "left" ? "none" : "left")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />

//                                 <DefaultCard
//                                     isTop={false}
//                                     isActive={activeSide === "right"}
//                                     onClick={() =>
//                                         setActiveSide(activeSide === "right" ? "none" : "right")
//                                     }
//                                     style={{ zIndex: 15 }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Dynamic Arrow/Label */}
//                     <motion.div
//                         key={activeSide}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute flex items-start"
//                         style={{
//                             top:
//                                 activeSide === "none"
//                                     ? 232
//                                     : activeSide === "right"
//                                     ? 224
//                                     : 452,
//                             left:
//                                 activeSide === "none"
//                                     ? 235
//                                     : activeSide === "right"
//                                     ? 226
//                                     : 785,
//                         }}
//                     >
//                         {activeSide === "left" ? (
//                             <>
//                                 <img
//                                     className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
//                                     alt="Arrow"
//                                     src="/landing_page/arrow1.svg"
//                                 />
//                                 <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
//                                     more loan
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
//                                         activeSide === "right" ? "-mt-1" : ""
//                                     }`}
//                                 >
//                                     {activeSide === "none"
//                                         ? "Click here"
//                                         : activeSide === "right"
//                                         ? "Loan Option"
//                                         : ""}
//                                 </div>
//                                 <img
//                                     className={`w-[45px] h-[37px] z-0 object-cover ${
//                                         activeSide === "right"
//                                             ? "-ml-3.5"
//                                             : activeSide === "none"
//                                             ? "-ml-3"
//                                             : ""
//                                     }`}
//                                     alt="Arrow"
//                                     src={
//                                         activeSide === "right"
//                                             ? "/landing_page/arrow2.svg"
//                                             : "/landing_page/arrow1.svg"
//                                     }
//                                 />
//                             </>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const MobileBox = () => {
    const [activeSide, setActiveSide] = useState("none"); // 'none', 'left', 'right'

    // Loan cards for left side (unchanged)
    const leftLoanCards = [
        {
            title: "Personal Loan",
            description:
                "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction.",
        },
        {
            title: "Business Loan",
            description:
                "Expand your business, purchase equipment, or manage cash flow needs.",
        },
        {
            title: "Home Loan",
            description:
                "Purchase your dream home or refinance existing mortgage at best rates.",
        },
    ];

    // New loan cards for right side (different content)
    const rightLoanCards = [
        {
            title: "Auto Loan",
            description:
                "Finance your new or used vehicle with competitive rates and flexible terms.",
        },
        {
            title: "Education Loan",
            description:
                "Fund your studies or your child's education with affordable loan options.",
        },
        {
            title: "Travel Loan",
            description:
                "Plan your dream vacation with easy financing and manageable repayments.",
        },
    ];

    const loanOptions = [
        {
            icon: "/landing_page/coin.svg",
            label: "Personal Loan",
        },
        {
            icon: "/landing_page/building.svg",
            label: "Business Loan",
        },
        {
            icon: "/landing_page/security-card.svg",
            label: "Loan Against Security",
        },
    ];

    // Common structure for loan card
    const LoanCard = ({ card, isActive, direction }) => (
        <motion.div
            className={`flex flex-col h-40 ${direction} gap-2.5 w-full`}
            variants={loanCardVariants}
            initial="hidden"
            animate={isActive ? "visible" : "inactive"}
        >
            <div className="relative">
                <div className="absolute w-[264px] h-32 top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
                <div
                    className={`w-[264px] h-32 bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
                        isActive ? "opacity-100" : "opacity-10"
                    }`}
                >
                    <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
                        {card.title}
                    </div>
                    <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
                        {card.description}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const leftDirection = "items-end pl-4 pr-0 gap-30 mr-[50rem]";
    const rightDirection = "items-start pr-4 gap-30 ml-[40rem]";

    const DefaultCard = ({ isTop, isActive, onClick }) => {
        const baseClass =
            "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
        const topPos = "top-[154px] left-[70px] w-[312px] h-[120px]";
        const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[120px]";

        return (
            <motion.div
                className={`${baseClass} ${isTop ? topPos : bottomPos}`}
                initial={{
                    backgroundColor: "rgba(249, 250, 251, 0.95)",
                    x: 0,
                    y: 0,
                }}
                animate={
                    isActive
                        ? {
                              backgroundColor: "#fbbf24",
                              x: 0,
                              y: 0,
                              width: "312px",
                              height: "120px",
                              top: isTop ? "154px" : "344px",
                              left: isTop ? "70px" : "10rem",
                              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
                          }
                        : {
                              backgroundColor: "rgba(249, 250, 251, 0.95)",
                              x: 0,
                              y: 0,
                              width: "312px",
                              height: "120px",
                              top: isTop ? "154px" : "344px",
                              left: isTop ? "70px" : "10rem",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }
                }
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    type: "tween",
                }}
                onClick={onClick}
                style={{
                    left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
                    top: isTop ? "154px" : "344px",
                }}
            >
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    />
                )}
                <div className="flex items-center justify-between w-full h-full relative z-10">
                    {loanOptions.map((option, index) => (
                        <div
                            key={`${isTop ? "top" : "bottom"}-${index}`}
                            className="flex flex-col w-24 h-[108px] items-center gap-3 p-2 rounded-2xl"
                        >
                            <div
                                className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${
                                    isActive
                                        ? "bg-yellow-100 border-orange-100"
                                        : "bg-white/50 border-purple-100"
                                }`}
                            >
                                <img className="w-7 h-7" alt={option.label} src={option.icon} />
                            </div>
                            <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
                                {option.label}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        );
    };

    // Animation variants for loan cards
    // const loanCardVariants = {
    //     hidden: {
    //         x: 299, // Center of the phone
    //         y: 50,
    //         opacity: 0,
    //         scale: 0.5,
    //     },
    //     visible: {
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         scale: 1,
    //         transition: {
    //             duration: 0.7,
    //             ease: "easeOut",
    //             type: "spring",
    //             stiffness: 70,
    //             damping: 20,
    //         },
    //     },
    //     inactive: {
    //         x: 299,
    //         y: 50,
    //         opacity: 0.1,
    //         scale: 0.5,
    //         transition: {
    //             duration: 0.7,
    //             ease: "easeOut",
    //             type: "spring",
    //             stiffness: 70,
    //             damping: 20,
    //         },
    //     },
    // };

    // Animation variants for loan cards (no scaling)
const loanCardVariants = {
    hidden: {
        x: 299, // center of phone
        y: 50,
        opacity: 0.2, // little visibility
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1, // fully visible
        transition: {
            duration: 0.7,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
            damping: 20,
        },
    },
    inactive: {
        x: 299, // back to center
        y: 50,
        opacity: 0.2, // little visibility again
        transition: {
            duration: 0.7,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
            damping: 20,
        },
    },
};


    // Left column animation
    // const leftColumnVariants = {
    //     hidden: {
    //         x: 299,
    //         y: 50,
    //         opacity: 0,
    //         scale: 1,
    //     },
    //     left: {
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         scale: 1,
    //         transition: {
    //             duration: 0.7,
    //             ease: "easeOut",
    //             type: "spring",
    //             stiffness: 70,
    //             damping: 20,
    //         },
    //     },
    //     inactive: {
    //         x: 299,
    //         y: 50,
    //         opacity: 0.1,
    //         scale: 0.5,
    //         transition: {
    //             duration: 0.7,
    //             ease: "easeOut",
    //             type: "spring",
    //             stiffness: 70,
    //             damping: 20,
    //         },
    //     },
    // };

    // Right column animation (mirrored from left)
    const rightColumnVariants = {
  hidden: { x: -550, y: 50, opacity: 1 }, // was -399, now shifted closer
  right: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
  inactive: {
    x: -550, // was -299, shifted closer
    y: 50,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

    // Left column animation (no scaling)
const leftColumnVariants = {
    hidden: { x: 100, y: 50, opacity: 1 },
    left: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            type: "spring",
            stiffness: 70,
            damping: 20,
        },
    },
    inactive: { x: 100, y: 50, opacity: 1 },
};

// Right column animation (mirrored, no scaling)
// const rightColumnVariants = {
//     hidden: { x: "-350", y: 50, opacity: 0.2 },
//     right: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.7,
//             ease: "easeOut",
//             type: "spring",
//             stiffness: 70,
//             damping: 20,
//         },
//     },
//     inactive: { x: -299, y: 50, opacity: 0.2 },
// };


    return (
        <div className="min-h-screen w-[70rem] bg-gray-50 relative overflow-hidden">
            <div className="relative w-full h-[1047px] pt-8">
                <div className="relative h-[1047px]">
                    {/* Background Circle */}
                    <div className="absolute top-[187px] left-[140px] flex items-center justify-center p-2.5">
                        <div className="w-[840px] h-[840px] bg-purple-50 rounded-full" />
                    </div>

                    {/* Loan Cards Container */}
                    <div className="absolute top-0 left-0 w-full h-[640px] flex items-center justify-center">
                        {/* Left Column */}
                        <motion.div
                            className={`flex flex-col w-[390px] ${
                                activeSide === "left"
                                    ? leftDirection
                                    : "w-[456px] opacity-10 items-end"
                            }`}
                            variants={leftColumnVariants}
                            initial="hidden"
                            animate={activeSide === "left" ? "left" : "inactive"}
                        >
                            {leftLoanCards.map((card, index) => (
                                <LoanCard
                                    key={`left-${index}`}
                                    card={card}
                                    isActive={activeSide === "left"}
                                    direction={
                                        index === 0
                                            ? "items-end"
                                            : index === 1
                                            ? "items-start -mt-25"
                                            : "items-end -mt-20"
                                    }
                                />
                            ))}
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            className={`flex flex-col w-[390px] ${
                                activeSide === "right"
                                    ? rightDirection
                                    : "w-[456px] -ml-[430px] opacity-10 items-start"
                            }`}
                            variants={rightColumnVariants}
                            initial="hidden"
                            animate={activeSide === "right" ? "right" : "inactive"}
                        >
                            {rightLoanCards.map((card, index) => (
                                <LoanCard
                                    key={`right-${index}`}
                                    card={card}
                                    isActive={activeSide === "right"}
                                    direction={
                                        index === 0
                                            ? "items-start -ml-[3rem]"
                                            : index === 1
                                            ? "items-end -mt-20"
                                            : "items-start pl-16 -mt-20 -ml-[7rem]"
                                    }
                                />
                            ))}
                        </motion.div>

                        {/* Center Phone Image */}
                        <div className="absolute w-[480px] h-[601px] top-[50px] left-[299px]">
                            <div
                                className="relative h-[590px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url(/landing_page/m1.png)" }}
                            >
                                {activeSide === "left" && (
                                    <motion.div
                                        className="relative bg-white rounded-2xl w-[312px] h-[120px]"
                                        initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
                                        animate={{
                                            opacity: 0.7,
                                            left: "3rem",
                                            top: "11rem",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 18,
                                        }}
                                    />
                                )}

                                {activeSide === "right" && (
                                    <motion.div
                                        className="relative bg-white rounded-2xl w-[312px] h-[120px]"
                                        initial={{ opacity: 0, left: "11rem", top: "23rem" }}
                                        animate={{
                                            opacity: 0.7,
                                            left: "11.5rem",
                                            top: "23rem",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 18,
                                        }}
                                    />
                                )}

                                {/* Default Cards */}
                                <DefaultCard
                                    isTop={true}
                                    isActive={activeSide === "left"}
                                    onClick={() =>
                                        setActiveSide(activeSide === "left" ? "none" : "left")
                                    }
                                />
                                <DefaultCard
                                    isTop={false}
                                    isActive={activeSide === "right"}
                                    onClick={() =>
                                        setActiveSide(activeSide === "right" ? "none" : "right")
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Arrow/Label */}
                    <motion.div
                        key={activeSide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute flex items-start"
                        style={{
                            top:
                                activeSide === "none"
                                    ? 232
                                    : activeSide === "right"
                                    ? 224
                                    : 452,
                            left:
                                activeSide === "none"
                                    ? 235
                                    : activeSide === "right"
                                    ? 226
                                    : 785,
                        }}
                    >
                        {activeSide === "left" ? (
                            <>
                                <img
                                    className="w-[45px] h-[37px] z-0 object-cover -ml-[13px]"
                                    alt="Arrow"
                                    src="/landing_page/arrow1.svg"
                                />
                                <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
                                    more loan
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
                                        activeSide === "right" ? "-mt-1" : ""
                                    }`}
                                >
                                    {activeSide === "none"
                                        ? "Click here"
                                        : activeSide === "right"
                                        ? "Loan Option"
                                        : ""}
                                </div>
                                <img
                                    className={`w-[45px] h-[37px] z-0 object-cover ${
                                        activeSide === "right"
                                            ? "-ml-3.5"
                                            : activeSide === "none"
                                            ? "-ml-3"
                                            : ""
                                    }`}
                                    alt="Arrow"
                                    src={
                                        activeSide === "right"
                                            ? "/landing_page/arrow2.svg"
                                            : "/landing_page/arrow1.svg"
                                    }
                                />
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
