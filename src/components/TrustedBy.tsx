import Image from "next/image";

export default function TrustedBy() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <h3 className=" font-semibold leading-none text-5xl text-center font-serif text-blue-950 sm:text-7xl">
                    Affiliated With
                </h3>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-12 sm:gap-12 lg:gap-24">
                    {/* Top Row */}
                    <Image

                        width={100}
                        height={100}
                        alt="Amex"
                        src="/images/home/israel-health-logo.png"
                        className="w-auto object-contain"
                    />
                    <Image

                        width={500}
                        height={500}
                        alt="Discover"
                        src="/images/home/nefesh-logo.png"
                        className="h-24 md:h-32 lg:h-32 sm:h-24 w-auto object-contain"
                    />


                </div>
            </div>
        </div>
    );
}
