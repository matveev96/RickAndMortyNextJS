import {Card} from "@/components/Card/Card";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import type {ResponseType, EpisodeType} from "@/assets/api/rick-and-morty-api";
import {notFound} from "next/navigation";

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
    const episodes = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`)
    return await episodes.json()
}

export default async function Episodes() {

    const {results} = await getEpisodes()
    if (!results) notFound()

    const episodesList = results.map(episode => (
        <Card name={episode.name} key={episode.id}/>
    ))

    return (
        <>
            <PageWrapper>
                {episodesList}
            </PageWrapper>
        </>
    );
}