import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetEpisodeQuery } from "../store";

type Props = {
    episodeId: string;
    onlyEpisode?: boolean;
}

const EpisodeItem = ({episodeId, onlyEpisode}: Props) => {
    const {data, isLoading, isFetching, error} = useGetEpisodeQuery(episodeId);

    let content;
    if (isLoading || isFetching) {
        content = <div><Skeleton width={100}/></div>
    } else if (error) {
        content=<div>{JSON.stringify(error)}</div>
    } else {
        content = 
            <span>
                { !onlyEpisode && data?.name } ({data?.episode})
            </span>
    }
    return(
        <>
            {content}
        </>
    );
}

export default EpisodeItem;