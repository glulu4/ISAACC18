import Image from "next/image";

export default function PhotoGallery() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <div className="relative lg:col-span-3">
                        {/* <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" /> */}
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/images/gallery/img1.jpg"
                                className="h-80 object-cover object-left w-full"
                            />
    
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-3">
                        {/* <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" /> */}
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                            <Image
                                width={500}
                                           height={500}
                                alt=""
                                src="/images/gallery/img2.jpg"
                                className="h-80 object-cover object-left lg:object-right w-full"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden ">
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/images/gallery/img3.jpeg"
                                className="h-80 object-cover object-left"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/images/gallery/img4.jpeg"
                                className="h-80 object-cover"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden ">
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/images/gallery/img5.jpg"
                                className="h-80 object-cover w-full"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                            <Image
                                width={500}
                                           height={500}
                                alt=""
                                src="/images/gallery/img6.jpeg"
                                className="h-80 object-cover object-left w-full"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <Image
                                width={500}
                                           height={500}
                                alt=""
                                src="/images/gallery/img7.jpg"
                                className="h-80 object-cover w-full"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                            <Image
                                width={500}
                                           height={500}
                                alt=""
                                src="/images/gallery/img8.jpg"
                                className="h-80 object-cover w-full"
                            />

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
  