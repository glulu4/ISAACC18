import {CheckCircleIcon} from '@heroicons/react/20/solid'
import {Users} from 'lucide-react'
import Image from 'next/image'
import FormButton from '../FormButton'


export default function IdealCanidate() {
    return (
        <div className="pt-24 sm:pt-32">
            <div className="relative isolate">
                
                <div>{/* className="mx-auto max-w-7xl sm:px-6 lg:px-8" */}
                    <div className="mx-auto flex flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row-reverse lg:items-center lg:py-20 xl:gap-x-25 xl:px-20">
                        <Image
                            alt="ISAACC18"
                            width={500}
                            height={500}
                            src="/images/ideal.jpg"
                            className="h-96 w-full flex-none rounded-xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                        />
                        <div className="w-full flex-auto ">

                            <h2 className="text-header1">
                                Should you join ISAACC18?
                            </h2>

                            <p className="mt-6 text-body1">
                                We are looking for anesthesiologists and/or critical care physicians who:
                            </p>

                            <ul className="mt-4 list-disc list-inside space-y-2 text-body1 text-blue-950 font-medium">
                                <li className=" text-blue-950">
                                    Possess strong clinical skills, teaching experience, professional development mentorship, or research success seeking to volunteer in Israel and/or develop a collaborative international partnership.
                                </li>
                                <li className=" text-blue-950">
                                    
                                    Want to be part of an international community dedicated to making a positive impact in the field of anesthesiology and critical care in Israel.
                                </li>
                            </ul>

                            <div className="mt-8 text-body1 text-gray-800">
                                <p className="font-semibold text-blue-950 font-serif">Note:</p>
                                <ul className="mt-2 list-disc text-blue-950 list-inside space-y-1">
                                    <li>
                                        Interested volunteers are encouraged to register, even if unable to commit time or effort at this time.
                                    </li>
                                    <li>
                                        <span className="font-bold">Conversational Hebrew language skills</span> are valuable, but not required.
                                    </li>
                                </ul>
                            </div>


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
