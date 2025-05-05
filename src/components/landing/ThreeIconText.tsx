import React from 'react'
import {
    StarIcon,
    SwatchIcon,
} from '@heroicons/react/20/solid'
import {GlobeAltIcon, UserGroupIcon} from '@heroicons/react/24/outline'
import {HeartIcon} from 'lucide-react'


const features = [
    {
        title: 'Our Mission',
        description: `ISAACC18 is an international collective of volunteer anesthesiologists and critical care physicians dedicated to supporting Israel’s healthcare system. We strengthen anesthesia and intensive care through hands-on staffing, advanced education, and collaborative academic partnerships.`,
        icon: GlobeAltIcon,
    },
    {
        title: 'Why We Serve',
        description: `In moments of stability and during national crises, Israel’s hospitals face unique demands. ISAACC18 provides rapid, skillful clinical support while fostering deep peer-to-peer connections between global and Israeli medical communities.`,
        icon: HeartIcon,
    },
    {
        title: 'Join Our Network',
        description: `Whether you're a critical care fellow or a senior anesthesiologist, your time and expertise can make a real difference. ISAACC18 invites professionals worldwide to contribute through clinical deployment, teaching, and long-term partnerships.`,
        icon: UserGroupIcon,
    },
]



export default function ThreeIconText() {
    return (
        <div>
            <div className="mx-auto w-11/12 px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-primaryblue px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className=" font-semibold leading-none text-5xl text-center font-serif text-blue-950 sm:text-7xl">
                                Strengthening Critical Care in Israel & Beyond
                            </h2>

                            <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">
                                ISAACC18 is a global volunteer network supporting Israeli hospitals through expert clinical staffing, collaborative training, and long-term academic partnership.
                            </p>

                        </div>

                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                                >
                                    <div className="sm:shrink-0">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950">
                                            <feature.icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <h2 className=" font-semibold leading-none text-3xl text-center font-serif text-blue-950 sm:text-5xl">

                                            {feature.title}
                                        </h2>
                                        <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
