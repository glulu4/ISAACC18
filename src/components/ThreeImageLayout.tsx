import {ThreeImageArrayType} from "@/app/page";
import Image from "next/image";


interface ThreeImageLayoutProps {
    posts: ThreeImageArrayType[];
}

export default function ThreeImageLayout({posts}: ThreeImageLayoutProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col items-start">
                            <Image
                                width={500}
                                height={500}
                                src={post.imageUrl}
                                alt="roofing companies"
                                className="w-full h-72 object-cover rounded-lg"
                            />
                            <h3 className="mt-6 text-4xl text-center font-serif self-center text-blue-950 font-bold">
                                {post.title}
                            </h3>
                            <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-2xl/8 text-left">
                                {post.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
