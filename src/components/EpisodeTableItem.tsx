import React from "react"
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useGetEpisodeQuery } from "../store";

type Props = {
    episodeId: string
}

const EpisodeTableItem = ({episodeId}: Props) => {
    const {data, isLoading, isFetching, error} = useGetEpisodeQuery(episodeId);

    let content;
    if (isLoading || isFetching) {
        content = <tr>
            <td>
                <Skeleton width={50} />
            </td>
            <TD>
                <Skeleton width={100} />
            </TD>   
            <td>
                <Skeleton width={150} />
            </td> 
        </tr>;
    } else if (error) {
        content=<div>{JSON.stringify(error)}</div>
    } else {
        content = <tr>
            <td>
                {data?.episode}
            </td>
            <TD>
                {data?.air_date}
            </TD>   
            <td>
                {data?.name} 
            </td> 
        </tr>
    }

    return(<>
        {content}
    </>)
}

const TD = styled.td`
    padding: 0 10px;
`;

export default EpisodeTableItem;