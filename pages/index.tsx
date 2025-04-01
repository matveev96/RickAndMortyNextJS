import Image from "next/image";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import styles from "@/styles/Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <HeadMeta title="Create Next App"/>
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />

        </div>
    );
}

Home.getLayout = getLayout;
export default Home