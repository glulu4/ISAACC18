import {CheckCircleIcon} from '@heroicons/react/20/solid'
import {Users} from 'lucide-react'
import Image from 'next/image'
import FormButton from '../FormButton'

const benefits = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
]

export default function IdealCanidate() {
    return (
        <div className="py-24 sm:py-32">
            <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row-reverse lg:items-center lg:py-20 xl:gap-x-25 xl:px-20">
                        <Image
                            alt="ISAACC18"
                            width={500}
                            height={500}
                            src="/images/img1.jpg"
                            // src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            className="h-96 w-full flex-none rounded-xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                        />
                        <div className="w-full flex-auto ">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
                                <Users className="w-5 h-5 mr-2" />
                                Join ISAACC18
                            </div>
                            <h2 className="text-header1">
                                Who is the ideal candidate?
                            </h2>
                            <p className="mt-6 text-body1 ">
                                The ideal candidate is a dedicated and compassionate individual who is committed to making a positive impact in the field of anesthesia and critical care.
                                They should possess strong clinical skills, a collaborative spirit, and a willingness to learn and grow within a dynamic team environment. A passion for education and mentorship is also highly valued, as we strive to foster excellence in medical care through knowledge sharing and collaboration.
                            </p>

                        </div>

                        
                    </div>

                    <div>
                        <FormButton />
                    </div>

                    {/* <div className="mx-auto mt-16 px-6 ">
                        <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 justify-between w-full text-base/7 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex gap-x-3 text-body1">
                                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-blue-950" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                    </div> */}

                </div>

                {/* <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-1318/752 w-[82.375rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div> */}
            </div>
        </div>
    )
}
