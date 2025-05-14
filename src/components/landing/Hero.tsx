"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

const Hero = () => {
    const para1 = `
    ISAACC18, International Support Of Anaesthesia And Critical Care in Israel is a dedicated international network of
    over 200 experienced volunteer anesthesiologists 
    and critical care physicians committed to supporting 
    the Israeli Anesthesia and Critical Care community with 
    clinical staffing, education, and collaborative academic 
    partnerships that foster excellence in medical care in 
    Israel and around the world.
  `;

    const para2 = `
    Working directly with the Israeli Society of 
    Anesthesiologists, the Israeli Ministry of Health, 
    and department heads in Israel, ISAACC18 aims to 
    provide a seamless process for those who would like 
    to volunteer (during times of crisis or calm) and 
    contribute to Anesthesiology and Critical Care services in Israel.

  `;

    const para3 = `
    Future objectives of ISAACC18 include identifying international training opportunities, research collaborations, and professional development.
  `;
    const [current, setCurrent] = useState(0);

    // const images = [
    //     "/images/cover2.jpeg",
    //     "/images/cover3.jpg",
    //     "/images/cover4.jpeg",
    // ];

    const images = [
        "/images/cover/cover-a-1.jpeg",
        "/images/cover/cover-a-2.jpg",
        "/images/cover/cover-a-3.jpg",
        "/images/cover/cover-a-4.jpg",

    ];

    // Advance the index every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative w-full min-h-screen z-0">


            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`slide-${i}`}
                    fill
                    className={`
              object-cover
              transition-opacity duration-[3000ms] ease-in-out
              ${i === current ? "opacity-100" : "opacity-0"}
            `}
                    priority={i === 0}
                />
            ))}
            
            {/* bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent */}
            <div className="relative z-10 flex w-full flex-col justify-center bg-black bg-opacity-70 text-white px-6 pb-12 min-h-screen">
                <div className="flex flex-col text-left items-start justify-start sm:w-3/4 mx-auto max-w-7xl space-y-6">
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        We are ISAACC18
                    </h1>
                    <p className="font-serif sm:text-xl mb-6 max-w-5xl">
                        {para1}
                    </p>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
                        {para2}
                    </p>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
                        {para3}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

// import Image from "next/image";
// import React, {useState, useEffect} from "react";



// const Hero = () => {
//     const [current, setCurrent] = useState(0);

//     // Advance the index every 5s
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     const para1 = `…`;
//     const para2 = `…`;
//     const para3 = `…`;

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* Image stack */}
//             <div className="absolute inset-0">
//                 {images.map((src, i) => (
//                     <Image
//                         key={i}
//                         src={src}
//                         alt={`slide-${i}`}
//                         fill
//                         className={`
//               object-cover
//               transition-opacity duration-1000 ease-in-out
//               ${i === current ? "opacity-100" : "opacity-0"}
//             `}
//                         priority={i === 0}
//                     />
//                 ))}
//             </div>

//             {/* Text overlay */}
//             <div className="relative z-10 flex w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent text-white px-6 pt-[200px] pb-12 min-h-screen">
//                 <div className="sm:w-3/4 mx-auto max-w-7xl">
//                     <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
//                         We are ISAACC18
//                     </h1>
//                     <p className="font-serif sm:text-xl mb-6">{para1}</p>
//                     <p className="font-serif sm:text-xl mb-6">{para2}</p>
//                     <p className="font-serif sm:text-xl mb-6">{para3}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
