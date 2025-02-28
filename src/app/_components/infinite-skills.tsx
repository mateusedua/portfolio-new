"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import VercelLogo from "../../../public/svg/Vercel-Logo.svg"
import CloudflareLogo from "../../../public/svg/Cloudflare-Logo.svg"
import NextjsLogo from "../../../public/svg/Next-js.svg"
import PythonLogo from "../../../public/svg/Python-Logo.svg"
import TsLogo from "../../../public/svg/TS-Logo.svg"
import TailwindLogo from "../../../public/svg/Tailwind-Logo.svg"
import ReactLogo from "../../../public/svg/React-Logo.svg"


export function InfiniteSkills() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const testimonials = [
    {
        src: VercelLogo,
        alt: 'Vercel Logo',
        name: 'Vercel',
        width: 40,
        height: 40,
    },
    {
        src: CloudflareLogo,
        alt: 'Cloudflare Logo',
        name: 'Cloudflare',
        width: 40,
        height: 40,
    },
    {
        src: NextjsLogo,
        alt: 'Nextjs Logo',
        name: 'Nextjs',
        width: 40,
        height: 40,
    },
    {
        src: PythonLogo,
        alt: 'Python Logo',
        name: 'Python',
        width: 40,
        height: 40,
    },
    {
        src: TsLogo,
        alt: 'TypeScript Logo',
        name: 'TypeScript',
        width: 40,
        height: 40,
    },
    {
        src: TailwindLogo,
        alt: 'Tailwindcss Logo',
        name: 'Tailwind css',
        width: 40,
        height: 40,
    },
    {
        src: ReactLogo,
        alt: 'React Logo',
        name: 'Reactjs',
        width: 40,
        height: 40,
    },
];
