"use client"

import { InfiniteSkills } from "./infinite-skills"
import { Cover } from "./ui/cover"
import { ShootingStars } from "./ui/shooting-stars"
import { StarsBackground } from "./ui/stars-background"

export default function HeroSection() {
    return (
        <div className="min-h-screen w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <span className="text-white font-[600]">Hi, I`m</span>
                    <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight">
                        Mateus Eduardo, <br /> Web & App <br /> <Cover>Developer.</Cover>
                    </h2>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Sobre Min
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-justify mt-[20px]">
                        Estudante de Engenharia de Software com sólida base técnica e foco em interfaces intuitivas e eficientes. Atuei no desenvolvimento de sistemas de gestão e plataformas de reservas, otimizando a experiência do usuário e aumentando taxas de conversão. Sou proativo, ágil no aprendizado e comprometido com a entrega de soluções de alta qualidade.
                    </p>
                </div>
                <div className="px-4 mt-[20px]">
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Habilidades
                    </h2>
                    <InfiniteSkills />
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}