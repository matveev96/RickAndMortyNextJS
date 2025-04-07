import React, {type PropsWithChildren, type ReactElement} from 'react';
import type {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <main className={styles.main}>
            <Navbar/>
            {children}
        </main>
    );
};
