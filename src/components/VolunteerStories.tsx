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

const testimonials = [
    {
        id: 1,
        quote: "Helping rebuild communities after natural disasters reminded me of the resilience of the human spirit. It's a privilege to be part of such impactful work.",
        name: "Emma Leila",
        location: "Los Angeles, CA",
        imageSrc: "/images/flag.png"
    },
    {
        id: 2,
        quote: "Volunteering gave me a new perspective on what truly matters. The connections I've made with people from all walks of life are invaluable.",
        name: "Marcus Johnson",
        location: "Portland, OR",
        imageSrc: "/images/flag.png"
    },
    {
        id: 3,
        quote: "Teaching children in underserved communities has been the most rewarding experience. Their enthusiasm for learning is contagious.",
        name: "Sophia Chen",
        location: "Chicago, IL",
        imageSrc: "/images/flag.png"
    },
    {
        id: 4,
        quote: "Working with the elderly taught me patience and the value of listening. Every person has a unique story worth hearing.",
        name: "David Torres",
        location: "Miami, FL",
        imageSrc: "/images/flag.png"
    },
    {
        id: 5,
        quote: "Environmental conservation efforts showed me how small actions can make a big difference for our planet's future.",
        name: "Aisha Patel",
        location: "Seattle, WA",
        imageSrc: "/images/flag.png"
    }
]

export default function VolunteerStories() {
    return (
        <div>
            <div className='flex justify-center items-center py-20 flex-col'>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
                    <BookIcon className="w-5 h-5 mr-2" />
                    Hear Our Stories
                </div>
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
                                    imageSrc={testimonial.imageSrc}
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

