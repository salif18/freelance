"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import styles from "../styles/_header.module.scss"
import { RiHome9Line } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { RiSignpostLine } from "react-icons/ri";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { MdCloseFullscreen } from "react-icons/md";
import StripePayementMode from '../components/StripePayementMode';



function Header() {


    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navlinks = [
        { name: "Accueil", href: "/", icon: <RiHome9Line /> },
        { name: "Services professionnels", href: "/employes", icon: <GrUserWorker /> },
        { name: "Travaux réalisés", href: "/realisations", icon: <RiSignpostLine /> },
        { name: "Offres d'emploi", href: "/offres", icon: <LuBriefcaseBusiness /> },
    ];

    const navlinks2 = [
        { name: "Search", href: "/search", icon: <CiSearch /> },
        // { name: "Mail", href: "/courrier", icon: <CiMail /> },
        { name: "Message", href: "/messages", icon: <LuMessageCircle /> },
        { name: "Notifications", href: "/notifications", icon: <IoIosNotificationsOutline /> },
        { name: "Profil", href: "/profil", icon: <CiUser /> },
        { name: "Se connecter", href: "/login", icon: <AiOutlineLogin /> },
    ];

    return (
        <nav className={styles.navbar}>
            {/* logo */}
            <section className={styles.logo}>
                <h2>Freelance</h2>
            </section>

            {/* liens */}
            <section className={`${styles.liens} ${isMenuOpen ? styles.open : ''}`}>
                {/* droite */}
                <section className={styles.left}>
                    <ul>
                        {
                            navlinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <li key={link.name}>
                                        <Link className={isActive ? "active-link" : "a"} href={link.href}>
                                            <div className={styles.row}>
                                                <span>{link.icon}</span>
                                                <p>{link.name}</p>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>
                {/* gauche */}
                <section className={styles.right}>
                    <ul>
                        {
                            navlinks2.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <li key={link.name}>
                                        <Link className={isActive ? "active-link" : "a"} href={link.href}>
                                            <span>{link.icon}</span>
                                            <p>{link.name}</p>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                        <li><StripePayementMode/></li>
                    </ul>
                </section>
            </section>
            <section className={styles.BtnMenu} onClick={toggleMenu}>
                <span>{isMenuOpen ? <MdCloseFullscreen /> : <CiMenuFries />}</span>
            </section>
        </nav>
    )
}

export default Header
