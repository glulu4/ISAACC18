// import React from 'react';
// import Slider from 'react-slick';
// import TestimonialCard from './TestimonialCard';
// import {BookIcon, ShieldPlus, Users} from 'lucide-react';

// const testimonials = [
//     {
//         id: 1,
//         quote: "Helping rebuild communities after natural disasters reminded me of the resilience of the human spirit. It's a privilege to be part of such impactful work.",
//         name: "Emma Leila",
//         location: "Los Angeles, CA",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 2,
//         quote: "Volunteering gave me a new perspective on what truly matters. The connections I've made with people from all walks of life are invaluable.",
//         name: "Marcus Johnson",
//         location: "Portland, OR",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 3,
//         quote: "Teaching children in underserved communities has been the most rewarding experience. Their enthusiasm for learning is contagious.",
//         name: "Sophia Chen",
//         location: "Chicago, IL",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 4,
//         quote: "Working with the elderly taught me patience and the value of listening. Every person has a unique story worth hearing.",
//         name: "David Torres",
//         location: "Miami, FL",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 5,
//         quote: "Environmental conservation efforts showed me how small actions can make a big difference for our planet's future.",
//         name: "Aisha Patel",
//         location: "Seattle, WA",
//         imageSrc: "/images/flag.png"
//     }
// ];

// export default function VolunteerStories() {

//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 4000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
        
        
//     };

//     return (
//         <div >

//             <div className='flex justify-center items-center py-20 flex-col'>

//                 <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
//                     <BookIcon className="w-5 h-5 mr-2" />
//                     Hear Our Stories
//                 </div>
//                 <p className="mt-10 text-header2">
                    
//                     Testimonials
//                 </p>
//             </div>

//             <Slider {...settings}>
//                 {testimonials.map((testimonial) => (
//                     <div key={testimonial.id} className="px-4">
//                         <TestimonialCard
//                             imageSrc={testimonial.imageSrc}
//                             quote={testimonial.quote}
//                             name={testimonial.name}
//                             location={testimonial.location}
//                         />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

import React from 'react'
import {BookIcon} from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'

// const testimonials = [
//     {
//         id: 1,
//         quote: "Helping rebuild communities after natural disasters reminded me of the resilience of the human spirit. It's a privilege to be part of such impactful work.",
//         name: "Emma Leila",
//         location: "Los Angeles, CA",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 2,
//         quote: "Volunteering gave me a new perspective on what truly matters. The connections I've made with people from all walks of life are invaluable.",
//         name: "Marcus Johnson",
//         location: "Portland, OR",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 3,
//         quote: "Teaching children in underserved communities has been the most rewarding experience. Their enthusiasm for learning is contagious.",
//         name: "Sophia Chen",
//         location: "Chicago, IL",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 4,
//         quote: "Working with the elderly taught me patience and the value of listening. Every person has a unique story worth hearing.",
//         name: "David Torres",
//         location: "Miami, FL",
//         imageSrc: "/images/flag.png"
//     },
//     {
//         id: 5,
//         quote: "Environmental conservation efforts showed me how small actions can make a big difference for our planet's future.",
//         name: "Aisha Patel",
//         location: "Seattle, WA",
//         imageSrc: "/images/flag.png"
//     }
// ]

const testimonials = [

    {
        id: 2,
        name: "Michael Lewis",
        location: "Detroit, USA",
        quote: "I want to thank those who didn’t just wake up on October 7th — but stood up. The group you created on the 10th became more than a chat thread. It became a lifeline. That early fear, collective and overwhelming, could have paralyzed us. Instead, it mobilized action. My own anxiety transformed into determination — and I know many others felt the same."
    },
    {
        id: 3,
        name: "Patrick Liston",
        location: "Sydney, Australia",
        quote: "Having just returned from Ichilov I was very impressed by the quality of care and kindness of the residents and attendings. A big thank you to Idit Matot. It was a fantastic experience and I gained more than I gave."
    },
    {
        id: 4,
        name: "Joel Symons",
        location: "Melbourne, Australia",
        quote: "I have witnessed kindness and resilience in the face of adversity, I have witnessed caring and compassion for all humans irrespective of their background. I feel honoured to have been able to contribute, in my small way, to the Israeli medical community and population. Thank you to Stephane Ledot, Yehudah Ginosar and everyone at Hadassah who made me feel so welcome. This has been life changing experience, the beginning of a wonderful partnership."
    },
    {
        id: 5,
        name: "Michael Lewis",
        location: "Detroit, USA",
        quote: "I still remember arriving in Israel in November 2023 to an almost completely empty Ben Gurion Airport. The silence in that space felt surreal. What followed — the warm welcome, the clinical work, the teaching, the constant red alerts — brought into sharp focus just how serious the situation was. Every moment reinforced the importance of showing up."
    },
    {
        id: 6,
        name: "Michael Lewis",
        location: "Detroit, USA",
        quote: "Thank you for giving us a path to walk — together — through one of the darkest chapters in recent memory. I look forward to the day we gather again, not because we have to, but because peace has come."
    },
    {
        id: 7,
        name: "Aaron Krom",
        location: "Philadelphia, USA",
        quote: "Coming over was one of the most meaningful moments for me in recent times. Stepping out of the plane at Ben Gurion felt like arriving home (immediately followed by a Red Alert in the car park)."
    },
    {
        id: 8,
        name: "Ruthi Landau",
        location: "New York, USA",
        quote: "Can’t express how sad I am to leave. The awe and admiration I have for each one of you who perform with grace and extreme resilience in these difficult times, as doctors, as human beings, as parents and as friends. Thank you to each one of you for sharing your courage and love."
    },
    {
        id: 9,
        name: "Michael Lewis",
        location: "Detroit, USA",
        quote: "ISAACC18 didn’t just coordinate logistics. You created a community. You gave all of us a way to serve, connect, and carry each other through."
    },
    {
        id: 1,
        name: "Michael Freiman",
        location: "Sydney, Australia",
        quote: "I was a volunteer in Israel from November to December 18 and left on day 73 of the war. My experiences were transformative, and I know I will be back on the anniversary of October 7."
    },
    {
        id: 10,
        name: "Yehudah Ginosar",
        location: "Jerusalem, Israel",
        quote: "I cannot tell you enough how heart-warming it is for us in Israel to know the love and solidarity shown by you all, who are prepared to register for this international anaesthesia volunteer reserve group; prepared to leave your home and work, your family and friends, and join us here to provide support when needed."
    },
    {
        id: 11,
        name: "Carolyn Weiniger",
        location: "Tel Aviv, Israel",
        quote: "A note from the other side. Yes, our lives are carrying on. We go shopping, have breakfast sometimes, laugh with friends and family. But it's not the same. Our loved ones are \"somewhere\" and we've barely seen them for 50 days. Many of our colleagues are also \"somewhere\" so we're working extra shifts to keep the hospital running because patients still need us, surgery and trauma happens. Every visit in addition to a welcome additional skilled team member is a touch, we are not alone, we are one big world community."
    },
    {
        id: 12,
        name: "Idit Matot",
        location: "Tel Aviv, Israel",
        quote: "A quarter of the workforce had been drafted in my department. 25 out of 100 physicians. Clinical activity is kept as is and although all looks smooth and easy going - we are tired. It is the anxiety, maybe depression, the understanding that it is going to be loooong, worrying for our staff out there fighting, our sons and husbands… So when you come and work , you help me give a break to someone who is tired, who needs to calm the children for one day or even to travel and see the mother he/she hasn’t seen for too long."
    }
];


export default function VolunteerStories() {
    return (
        <div>
            <div className='flex justify-center items-center py-20 flex-col'>

                <p className="mt-10 text-header2">
                    Testimonials
                </p>
            </div>

            <div className=" w-full max-w-7xl mx-auto">
                <Carousel
                    opts={{
                        align: "center",
                        
                        loop: true,
                    }}
                    className=""
                >
                    <CarouselContent className='px-4'>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="px-2">
                                <TestimonialCard
                                    // imageSrc={testimonial.imageSrc}
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    location={testimonial.location}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious className="hidden md:flex left-0 bg-white shadow-md border border-gray-300 hover:bg-blue-100 text-blue-600 rounded-full w-10 h-10 items-center justify-center absolute z-10" />

                    <CarouselNext className="hidden md:flex right-0 bg-white shadow-md border border-gray-300 hover:bg-blue-100 text-blue-600 rounded-full w-10 h-10 items-center justify-center absolute z-10" /> */}
                    <div className="flex justify-center gap-4 mt-8">
                        <CarouselPrevious className=" hidden sm:flex  bg-white shadow-md border border-gray-300 hover:bg-blue-100 text-blue-900 rounded-full w-10 h-10 items-center justify-center" />
                        <CarouselNext className="hidden sm:flex  bg-white shadow-md border border-gray-300 hover:bg-blue-100 text-blue-900 rounded-full w-10 h-10  items-center justify-center" />
                    </div>
                </Carousel>
                
            </div>
        </div>
    )
}

