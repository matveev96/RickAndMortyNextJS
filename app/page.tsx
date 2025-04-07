import Image from "next/image";
import {PageWrapper} from "components/PageWrapper/PageWrapper";


const Home = () => {

    return (
        <PageWrapper>
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
        </PageWrapper>
    );
}

export default Home