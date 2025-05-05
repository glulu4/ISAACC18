// import {config} from "@/config";
// import Link from "next/link";
// import {FunctionComponent} from "react";

import {config} from "@/config"
import Image from "next/image"
import {FunctionComponent} from "react"

// export const Footer: FunctionComponent = () => {
//   return (
//     <footer className="mt-8 md:mt-16 bg-blue-900 text-white font-semibold p-8 lg:p-8">
//       <div className="flex flex-1 items-center justify-around font-serif">
//         <div className="text-sm ">
//           {config.name.name} ©  {new Date().getFullYear()}
//         </div>
//         <div className="text-xs hidden lg:block">
//           <Link
//             href={`/`}
//           >
//             Apply Now
//           </Link>
//         </div>

//       </div>

//     </footer>
//   );
// };

const navigation = {
  right: [
    {name: 'Israel Society of Anesthesiologists', },
    {name: 'Analytics', },
    {name: 'International Board of Directors', bold: true},
    {name: 'Dr. One', },
    {name: 'Dr. Two', },


  ],
  middle: [
    {name: 'Israel Ministry of Health', href: 'https://www.gov.il/en/departments/ministry_of_health/govil-landing-page', bold: false},
    {name: "Nefesh B'Nefesh", href: 'https://www.nbn.org.il'},

  ],
  contact: [
    {name: 'Israel • U.S.A • Australia', bold: false},
    {
      name: 'contact@isaacc18.org',},
    {name: '501c3', },
    {name: 'Donate Now', href: 'https://buy.stripe.com/5kA15W4iQfdv0XSbII'},
  ],
}

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">

        {/* <div className="flex justify-around w-full bg-slate-500"> */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 font-serif justify-center align-middle">
            {/* Column 1 */}
            <div>
              <h3 className=" font-semibold text-body2 text-white mb-6">ISAACC18</h3>

              <ul role="list" className="space-y-4">
                {navigation.right.map((item) => (
                  <li key={item.name}>
                    <p className={`sm:text-xl text-gray-100 hover:text-white ${item.bold ? "font-bold text-white" : ""}`}>
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
            <h3 className="text-sm/6 font-semibold text-body2  text-white mb-6">Affiliations</h3>
              <ul role="list" className="space-y-4">
                {navigation.middle.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className={`sm:text-xl text-gray-100 hover:text-white ${item.bold ? "font-bold text-white" : ""}`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="justify-end">
            <h3 className="text-sm/6 font-semibold text-white text-body2 mb-6">Contact Us</h3>
              <ul role="list" className="space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className={`sm:text-xl text-gray-100 hover:text-white ${item.bold ? "font-bold text-white" : ""}`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        {/* </div> */}



        {/* <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm/6 font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm/6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:w-56 sm:text-sm/6"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}


        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-center">
 
          <p className="mt-8 text-sm/6 text-center text-gray-100 md:order-1 md:mt-0 font-serif">
            {config.name.name} ©  {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
