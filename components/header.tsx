"use client";

import React from "react";
import { Slackside_One } from "next/font/google";
import { links } from "@/lib/data";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "motion/react";

const slacksideOne = Slackside_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
    return (
        <header className="navbar__section z-[100]">
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{
                    type: "tween",
                    delay: 0.1,
                    duration: 0.25,
                    ease: "linear",
                }}
            >
                <nav className="navbar w-full py-4 bg-blue-300/60 flex justify-between md:flex md:justify-around items-center shadow-md">
                    {/* Logo */}
                    <div className="mx-12 flex justify-center items-center h-10 w-10 rounded-full bg-slate-950/70  cursor-pointer">
                        <Link
                            href="/"
                            className={`${slacksideOne.className} text-2xl text-slate-50 h-full`}
                        >
                            JL
                        </Link>
                    </div>
                    <div className="">
                        <ul className="hidden md:flex md:gap-x-16 tracking-wide cursor-pointer">
                            {links.map((link) => (
                                <li key={link.hash} className="text-dark-gray/70 hover:text-dark-gray transition">
                                    <Link href={link.hash}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center md:hidden mr-12">
                            <RxHamburgerMenu className="text-2xl text-[#F1F5F9] md:none" />
                        </div>
                    </div>
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;