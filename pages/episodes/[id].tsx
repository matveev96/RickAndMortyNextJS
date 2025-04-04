import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import type {GetStaticPaths, GetStaticProps} from "next";
import {API} from "@/assets/api/api";
import type {EpisodeType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";

export const getStaticPaths: GetStaticPaths = async () => {

    const {results} = await API.rickAndMorty.getEpisodes();

    const paths = results.map(episode => {
        return {params: {id: String(episode.id)}}
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const episode = await API.rickAndMorty.getEpisode(id as string)

    if (!episode) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            episode
        }
    }
}

type PropsType = {
    episode: EpisodeType
}

function Episode({episode}: PropsType) {


    return (
        <>
            <HeadMeta title={"Episodes"}/>
            {episode &&
                <Card name={episode.name}>
                   <div>{episode.air_date}</div>
                   <div>{episode.created}</div>
                </Card>
            }
        </>
    );
}

Episode.getLayout = getLayout;
export default Episode;
