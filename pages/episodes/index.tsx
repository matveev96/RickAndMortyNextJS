import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {API} from "@/assets/api/api";
import styles from "@/styles/Home.module.css";
import {type GetServerSideProps} from 'next'
import type {EpisodeType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";
import Link from "next/link";


export const getServerSideProps: GetServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if(!episodes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episodes,
        }
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

function Episodes(props: PropsType) {


    const {episodes} = props;

    const episodesList = episodes.results.map(episode => (
        <Link href={`/episodes/${episode.id}`} key={episode.id}>
            <Card name={episode.name} />
        </Link>

    ))
    return (
        <>
            <HeadMeta title={"Episodes"}/>
            <div className={styles.cards}>
                {episodesList}
            </div>

        </>
    );
}

Episodes.getLayout = getLayout;
export default Episodes;
