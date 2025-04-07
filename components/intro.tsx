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
            <motion.h1 className={`font-light letter-spacing-wide text-dark-gray max-lg:text-4xl lg:text-5xl`} initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                   type: "spring",
                   duration: 0.5,
                   delay: 2.7,
                   bounce: 0.5,}}
            >Hello, I'm James Leone</motion.h1>
            <section className="relative w-full flex justify-center items-center">
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 1.4,
                    bounce: 0.5,
                }}>
                <Image
                    src={leoneProfilePicture}
                    alt={"Professional headshot of James Leone"}
                    quality={100}
                    priority={true}
                    className="w-35 h-35 object-cover object-top rounded-full border-[0.15rem] border-dark-gray/25 shadow-xl"
                />
                </motion.div>
                <motion.span className="absolute top-0 right-[44%] translate-x-[88%] bg-green-200/92 px-4 py-2 rounded-2xl"
                             initial={{ opacity: 0, y: 50 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{
                                 type: "spring",
                                 duration: 0.5,
                                 delay: 1.8,
                             }}>
                    <span className="relative">
                        <p className="text-md">Ready to work!</p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 2.3 }}>
                            <span className="absolute -right-2 animate-ping rounded-full bg-green-400 h-3 w-3"></span>
                            <span className="absolute -right-2 rounded-full bg-green-500 h-3 w-3"></span>
                        </motion.div>
                    </span>
                </motion.span>
            </section>
            <motion.p className="font-light text-dark-gray mt-5 text-lg text-center lg:max-w-144 letter-spacing-wider" initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                          type: "spring",
                          duration: 0.5,
                          delay: 2.7,
                          bounce: 0.5,}} >I'm a software engineer based in Western Massachusetts with 1.5 years of work experience.  My focus is on full-stack development and product design. I specialize in Next.js, React TypeScript, Node.js, Prisma, and PostgreSQL.</motion.p>

            {/*Buttons */}
            <motion.section className="intro-buttons mt-5 flex flex-row justify-center gap-x-25 w-full items-center" initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 2.7,
                                bounce: 0.5,}}>
                    <section className="flex gap-x-7">
                        <a className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-110 focus:scale-115 transition focus:outline-0">
                            <FaFileAlt className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/jamesleone1" className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-110 focus:scale-115 transition focus:outline-0">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/JLeone123" className="p-3 border border-dark-gray rounded-full hover:scale-115 active:scale-110 focus:scale-115 transition focus:outline-0">
                            <FaGithubSquare className="text-2xl" />
                        </a>
                    </section>
                    <section className="">
                        <Link href="/" className="contact-button border-[0.125rem] py-3 px-12 cursor-pointer border-dark-gray flex items-center justify-center hover:scale-115 active:scale-115 focus:scale-115 hover:outline-0 active:scale-[1.10] transition">
                            <p>Let's connect!</p>
                        </Link>
                    </section>
                </motion.section>
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                    type: "tween",
                    duration: 1,
                    ease: "easeInOut",
                    delay: 15,
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 5,
                }}
                >
                    <RxDoubleArrowDown className="text-slate-950 text-4xl my-16" />
                </motion.div>
            </motion.div>
        </section>
    )
}
export default Intro;
