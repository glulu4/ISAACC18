// // import {config} from "@/config";
// // import Image from "next/image";
// // import React, {useState, useEffect, useRef} from "react";



// // interface HeroProps {
// //     text?: string
// //     secText?: string;

// // }
// // const Hero = ({text, secText}: HeroProps) => {


// //     const para1 = `
// //     ISAACC18 is a dedicated international network of 
// //     over 200 experienced volunteer anesthesiologists 
// //     and critical care physicians committed to supporting 
// //     the Israeli Anesthesia and Critical Care community with 
// //     clinical staffing, education, and collaborative academic 
// //     partnerships that foster excellence in medical care in 
// //     Israel and around the world.
// //     `

// //     const para2 = `
// //     Working directly with the Israeli Society of 
// //     Anesthesiologists, the Israeli Ministry of Health, 
// //     and department heads in Israel, ISAACC18 aims to 
// //     provide a seamless process for those who would like 
// //     to volunteer (during times of crisis or calm) and 
// //     contribute to Anesthesiology and Critical Care services in Israel.

// //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus voluptatem nesciunt eaque dolorum laboriosam unde! Mollitia facilis, earum, adipisci excepturi ut temporibus eum modi quos saepe in praesentium sequi!

// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus voluptatem nesciunt eaque dolorum laboriosam unde! Mollitia facilis, earum, adipisci excepturi ut temporibus eum modi quos saepe in praesentium sequi!

// //     `

// //     const para3 = `
// //     Future objectives of ISAACC18 include identifying international training opportunities, research collaborations, and professional development.
// //     `

// //     return (
// //         <div className=" min-h-screen w-full z-0 ">

// //             <Image
// //                 className="absolute top-0 left-0 h-full w-full object-cover"
// //                 src="/images/cover2.jpeg"
// //                 alt="ISSAC18"
// //                 width={1920}
// //                 height={1080}

// //             />
// // {/* sm:pt-48 md:pt-52 lg:pt-64 xl:pt-72 */}
// //             <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent text-white px-6 pt-20">

// //                 <div className="flex flex-col text-left items-start justify-start sm:w-3/4 mx-auto">
// //                     {/* <p className="font-serif text-xl text-left mb-6">
// //                         We are {config.name.name}
// //                     </p> */}
// //                     <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
// //                         We are ISAACC18
// //                     </h1>
// //                     <p className="font-serif sm:text-xl mb-6 max-w-5xl">
// //                         {para1}
// //                     </p>
// //                     <p className="font-serif sm:text-xl mb-6 max-w-4xl">
// //                         {para2}
// //                     </p>
// //                     <p className="font-serif sm:text-xl mb-6 max-w-4xl">
// //                         {para3}
// //                     </p>    


// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Hero;



// import {config} from "@/config";
// import Image from "next/image";
// import React from "react";

// interface HeroProps {
//     text?: string;
//     secText?: string;
// }

// const Hero = ({text, secText}: HeroProps) => {
//     const para1 = `
//     ISAACC18 is a dedicated international network of 
//     over 200 experienced volunteer anesthesiologists 
//     and critical care physicians committed to supporting 
//     the Israeli Anesthesia and Critical Care community with 
//     clinical staffing, education, and collaborative academic 
//     partnerships that foster excellence in medical care in 
//     Israel and around the world.
//   `;

//     const para2 = `
//     Working directly with the Israeli Society of 
//     Anesthesiologists, the Israeli Ministry of Health, 
//     and department heads in Israel, ISAACC18 aims to 
//     provide a seamless process for those who would like 
//     to volunteer (during times of crisis or calm) and 
//     contribute to Anesthesiology and Critical Care services in Israel.

//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus voluptatem nesciunt eaque dolorum laboriosam unde! Mollitia facilis, earum, adipisci excepturi ut temporibus eum modi quos saepe in praesentium sequi!

//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus voluptatem nesciunt eaque dolorum laboriosam unde! Mollitia facilis, earum, adipisci excepturi ut temporibus eum modi quos saepe in praesentium sequi!
//   `;

//     const para3 = `
//     Future objectives of ISAACC18 include identifying international training opportunities, research collaborations, and professional development.
//   `;

//     return (
//         <div className="relative w-full min-h-screen z-0">
//             <Image
//                 className="absolute top-0 left-0 h-full w-full object-cover"
//                 src="/images/cover2.jpeg"
//                 alt="ISSAC18"
//                 width={1920}
//                 height={1080}
//                 priority
//             />
//             <div className="relative z-10 flex w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent text-white px-6 pt-20 pb-12 min-h-screen">
//                 <div className="flex flex-col text-left items-start justify-start sm:w-3/4 mx-auto max-w-7xl">
//                     <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
//                         We are ISAACC18
//                     </h1>
//                     <p className="font-serif sm:text-xl mb-6 max-w-5xl">
//                         {para1}
//                     </p>
//                     <p className="font-serif sm:text-xl mb-6 max-w-4xl">
//                         {para2}
//                     </p>
//                     <p className="font-serif sm:text-xl mb-6 max-w-4xl">
//                         {para3}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
import {config} from "@/config";
import Image from "next/image";
import React from "react";

interface HeroProps {
    text?: string;
    secText?: string;
}

const Hero = ({text, secText}: HeroProps) => {
    const para1 = `
    ISAACC18 is a dedicated international network of 
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

    return (
        <div className="relative w-full min-h-screen z-0">
            <Image
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="/images/cover2.jpeg"
                alt="ISSAC18"
                width={1920}
                height={1080}
                priority
            />
            <div className="relative z-10 flex w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent text-white px-6 pt-[200px] pb-12 min-h-screen">
                <div className="flex flex-col text-left items-start justify-start sm:w-3/4 mx-auto max-w-7xl">
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