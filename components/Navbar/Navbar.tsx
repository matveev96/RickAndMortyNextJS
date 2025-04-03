import React from 'react';
import Link from "next/link";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={styles.links}>
            <Link href={'/'}>Main 🖐</Link>
            <Link href={'/characters'}>Characters 👫</Link>
            <Link href={'/episodes'}>Episodes 🍿</Link>
            <Link href={'/locations'}>Locations 📍</Link>
        </div>
    );
};
