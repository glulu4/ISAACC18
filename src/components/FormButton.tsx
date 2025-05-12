// import React from 'react';

// interface FormButtonProps {
//     href?: string;
//     text?: string;
//     onClick?: () => void;
// }

// export default function FormButton({
//     href = 'https://docs.google.com/forms/d/e/1FAIpQLSelA1lfdxSPDi2PUAAVh5TMTuoQXyzfLzsLW7yFXjEAfVd0Ow/viewform',
//     text = 'Register',
//     onClick,
// }: FormButtonProps) {
//     return (
//         <div className="flex justify-center">
//             <a
//                 href={href}
//                 onClick={onClick}
//                 className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200 font-serif text-lg md:text-xl font-medium px-11 py-4 rounded-full"
//             >
//                 {text}
//             </a>
//         </div>
//     );
// }


import React from 'react';
import {cn} from '@/lib/utils';

interface FormButtonProps {
    href?: string;
    text?: string;
    onClick?: () => void;
    inverted?: boolean;
}

export default function FormButton({
    href = 'https://docs.google.com/forms/d/e/1FAIpQLSelA1lfdxSPDi2PUAAVh5TMTuoQXyzfLzsLW7yFXjEAfVd0Ow/viewform',
    text = 'Register',
    onClick,
    inverted = false,
}: FormButtonProps) {
    return (
        <div className="flex justify-center">
            <a
                href={href}
                onClick={onClick}
                className={cn(
                    'inline-block border-2 font-serif text-lg md:text-xl font-medium px-11 py-4 rounded-full transition-colors duration-200',
                    inverted
                        ? 'bg-blue-900 text-white border-blue-900 hover:bg-blue-700 '
                        : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                )}
            >
                {text}
            </a>
        </div>
    );
}
