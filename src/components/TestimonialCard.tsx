// import {QuoteIcon} from "lucide-react";
// import Image from "next/image";

// interface TestimonialCardProps {
//     imageSrc: string;
//     quote: string;
//     name: string;
//     location: string;
// }

// export default function Testimonials({

// }: TestimonialCardProps) {
//     return (
//         <div className="relative bg-gray-900 rounded-2xl">
//             <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 rounded-t-2xl sm:rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-tr-none">
//                 <Image
//                     fill
//                     // width={200}
//                     // height={300}
//                     alt=""
//                     src={"/images/img2.jpg"}
//                     className="size-full object-cover"
//                 />
//                 <svg
//                     viewBox="0 0 926 676"
//                     aria-hidden="true"
//                     className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
//                 >
//                     <path
//                         d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
//                         fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
//                         fillOpacity=".4"
//                     />
//                     <defs>
//                         <linearGradient
//                             id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
//                             x1="926.392"
//                             x2="-109.635"
//                             y1=".176"
//                             y2="321.024"
//                             gradientUnits="userSpaceOnUse"
//                         >
//                             <stop stopColor="#776FFF" />
//                             <stop offset={1} stopColor="#FF4694" />
//                         </linearGradient>
//                     </defs>
//                 </svg>
//             </div>
//             <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
//                 <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">

//                     <div>
//                         <QuoteIcon className="h-6 w-6 text-indigo-400" />
//                         <p className="mt-2 text-2xl font-serif font-semibold tracking-tight text-white sm:text-3xl">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, porro repudiandae vero voluptas nisi. Non culpa fugit dolorum vitae, vel explicabo omnis reprehenderit, nam aliquid accusantium nulla in deleniti?
//                         </p>
//                     </div>
 
//                     <p className="mt-6 text-base/7 text-gray-300">
//                         Gabriel Lulu
//                     </p>

//                     <p className="text-base/7 font-sans font-semibold text-indigo-400">
//                        Web Designer
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import {QuoteIcon} from "lucide-react";
// import Image from "next/image";

// interface TestimonialCardProps {
//     quote: string;
//     name: string;
//     location: string;
// }

// export default function Testimonials({
//     quote,
//     name,
//     location

// }: TestimonialCardProps) {
//     return (
//         <div className="relative bg-gray-900 rounded-2xl ">
//             <div className=" mx-auto max-w-7xl lg:px-8 lg:py-40">

//                     <div>
//                         <QuoteIcon className="h-8 w-8 text-blue-400" />
//                         <p className="mt-2 text-2xl font-serif font-semibold tracking-tight text-white sm:text-3xl">
//                             {quote}
//                         </p>
//                     </div>

//                     <p className="mt-6 text-lg/7 text-gray-300">
//                         {name}
//                     </p>

//                     <p className="text-lg/7 font-sans font-semibold text-blue-400">
//                         {location}
//                     </p>
//             </div>
//         </div>
//     )
// }
import {QuoteIcon} from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    name: string;
    location: string;
}

export default function Testimonials({
    quote,
    name,
    location,
}: TestimonialCardProps) {
    return (
        <div className="relative bg-gray-900 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[400px]">
            <div>
                <QuoteIcon className="h-8 w-8 text-blue-400" />
                <p className="mt-2 text-xl md:text-3xl font-serif font-semibold tracking-tight text-white sm:text-2xl">
                    {quote}
                </p>
            </div>
            <div className="mt-6">
                <p className="text-lg text-gray-300">{name}</p>
                <p className="text-lg font-sans font-semibold text-blue-400">
                    {location}
                </p>
            </div>
        </div>
    );
}
