import {Award, BookOpen, Users} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
        <div className="mx-auto max-w-7xl px-12 sm:px-0">


            <div className='flex justify-center'>
                <Image
                
                src="/images/icon2.png" // Replace with your actual image
                width={300}
                height={300}
                alt="Paragon Exterior Team"
                />
            </div>
            
            <div className='flex justify-center items-center py-20 flex-col'>
                {/* <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Story
                </div> */}
                <p className=" text-header">
                    Our Story
                </p>
            </div>


            <div className='space-y-8'>
                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/9 text-center">

                    We are a volunteer-led network of anesthesiologists united by a shared mission: to provide critical support during times of need. 
                    Our team is dedicated to ensuring that patients receive the highest quality of care, no matter the circumstances. 
                    We believe in the power of collaboration and the importance of sharing knowledge and resources to improve patient outcomes.
                </p>

                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">
                    In the wake of the October 7, 2023 attacks, our mission has taken on even greater urgency. We stand as a united, multicultural team of medical professionals committed to delivering equitable and impartial care to all communities in Israel. Volunteering is not just a response—it’s a core value. Whether supporting frontline hospitals during war, preparing for natural disasters like earthquakes, or offering critical manpower in times of national crisis, our work is grounded in solidarity, resilience, and professional excellence. Through service, we deepen our sense of purpose, explore connections to Israel, and build a future rooted in compassion and capability.
                </p>
            </div>

            
        </div>
    )
}
