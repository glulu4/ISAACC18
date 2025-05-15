
import {config} from "@/config"
import {FunctionComponent} from "react"



const navigation = {
  right: [
    // {name: 'Analytics', },
    {name: 'International Board of Directors', bold: true},
    {name: 'Professor Ron E. Samet, MD', },
    {name: 'Dr. Dan Zeloof, MD', },
    {name: 'Professor Suzanne Karan, MD', },
    {name: 'Dr. Leonardo Gendzel, MD', },
    {name: 'Professor Joel Symons, MD', },
    {name: 'Professor Ruthi Landau, MD', },
    {name: 'line-break', },
    {name: 'Israel Society of Anesthesiologists', bold: true},
    {name: 'Professor Yehuda Ginosar, MBBS', },
    {name: 'Professor Barak Cohen, MD', },





  ],
  middle: [
    {name: "Israel Society of Anesthesiologists", href: 'https://www.ima.org.il/mainsitenew/editunion.aspx?unionid=740', },
    {name: 'Israel Ministry of Health', href: 'https://www.gov.il/en/departments/ministry_of_health/govil-landing-page', bold: false},
    {name: "Nefesh B'Nefesh", href: 'https://www.nbn.org.il'},

  ],
  contact: [
    {name: 'Israel • USA • Australia', bold: false},
    {
      name: 'contact@isaacc18.org',},
    {name: "US 501(c)(3) status • EIN: 31-2174742", },
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

                  <li key={item.name} className="flex flex-col">

                    {item.name === "line-break" ? (
                      <div className="h-2"></div>
                    ) : (
                      <p  className={`sm:text-xl text-gray-100 hover:text-white ${item.bold ? "font-bold text-white" : ""}`}>
                        {item.name}
                      </p>
                    )}
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
                    <a style={{
                      fontVariantLigatures: "none"
                    }} href={item.href} className={`sm:text-xl text-gray-100 hover:text-white ${item.bold ? "font-bold text-white" : ""}`}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      


        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-center">
 
          <p className="mt-8 text-sm/6 text-center text-gray-100 md:order-1 md:mt-0 font-serif">
            {config.name.name} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
