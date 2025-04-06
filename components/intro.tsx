"use client";

import React from 'react'
import Image from "next/image";
import leoneProfilePicture from "@/public/leone-profile-picture.jpg";
import { FaFileAlt, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from "motion/react";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="flex flex-col items-center gap-y-7 mt-24">
            <h1 className={`font-light letter-spacing-wide text-dark-gray max-lg:text-4xl lg:text-5xl`}>Hello, I'm James Leone</h1>
            <section className="relative w-full flex justify-center items-center">
                <Image
                    src={leoneProfilePicture}
                    alt={"Professional headshot of James Leone"}
                    quality={100}
                    priority={true}
                    className="w-35 h-35 object-cover object-top rounded-full border-[0.15rem] border-dark-gray/25 shadow-xl"
                />
                <span className="absolute top-0 right-[44%] translate-x-[88%] bg-green-200/92 px-4 py-2 rounded-2xl">
                    <p className="text-md">Ready to work!</p>
                    <span className="absolute right-0 animate-ping rounded-full bg-green-400 h-3 w-3"></span>
                    <span className="absolute right-0 rounded-full bg-green-500 h-3 w-3"></span>
                </span>
            </section>
            <p className={"font-light text-dark-gray mt-5 text-lg text-center lg:max-w-144 letter-spacing-wider"}>I'm a software engineer based in Wilbraham, Massachusetts with one year of work experience.  My focus is on full-stack development and product design. I specialize in Next.js, React TypeScript, Node.js, Prisma, and PostgreSQL.</p>

            {/*Buttons */}
            <section className="intro-buttons mt-5 flex flex-row justify-center gap-x-25 w-full items-center ">
                    <section className="flex gap-x-7 ">
                        <a className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-115 focus:scale-115 transition focus:outline-0">
                            <FaFileAlt className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/jamesleone1" className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-115 focus:scale-115 transition focus:outline-0">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/JLeone123" className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-115 focus:scale-115 transition focus:outline-0">
                            <FaGithubSquare className="text-2xl" />
                        </a>
                    </section>
                    <section className="">
                        <Link href="/" className="contact-button border-[0.125rem] py-3 px-12 cursor-pointer border-dark-gray flex items-center justify-center hover:scale-115 active:scale-115 focus:scale-115 transition">
                            <p>Let's connect!</p>
                        </Link>
                    </section>
                </section>
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                    type: "tween",
                    duration: 1,
                    ease: "easeInOut",
                    delay: 5,
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                <RxDoubleArrowDown className="text-slate-950 text-4xl my-16" />
            </motion.div>
        </section>
    )
}
export default Intro;
