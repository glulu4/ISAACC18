import {config} from "@/config";
import Image from "next/image";
import React, {useState, useEffect, useRef} from "react";



interface HeroProps {
    text?: string
    secText?: string;

}
const Hero = ({text, secText}: HeroProps) => {



    return (
        <div className="relative min-h-screen max-h-max w-full z-0 ">

            <Image
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="/images/cover2.jpeg"
                alt="ISSAC18"
                width={1920}
                height={1080}

            />

            {/* Overlay Content */}
            {/* <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center bg-gradient-to-t from-blue-950 from-10% via-blue-950/70 via-40% to-transparent text-white text-center px-6 pt-96 sm:pt-4"> */}
            {/* <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center bg-gradient-to-t from-blue-950 from-10% via-blue-950/70 via-40% to-transparent text-white text-center px-6 pt-40 sm:pt-48 md:pt-64 lg:pt-72 xl:pt-80"> */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent text-white text-center px-6 pt-40 sm:pt-48 md:pt-64 lg:pt-72 xl:pt-80">

                <div className="flex flex-col text-left items-start w-3/4 mx-auto">
                    {/* <p className="font-serif text-xl text-left mb-6">
                        We are {config.name.name}
                    </p> */}
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        We are ISAACC18
                    </h1>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
                        ISAACC18 is a dedicated international
                         group of volunteer anesthesiologists and 
                         critical care physicians committed to supporting 
                         the Israeli Anesthesia and Critical Care community with clinical staffing, education, and collaborative academic partnerships that foster excellence in medical care in Israel and around the world.
                    </p>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione iure unde doloribus ex consequuntur earum nisi magni, ducimus a repellendus reprehenderit est tenetur repellat debitis blanditiis eos odit quis?
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Hero;