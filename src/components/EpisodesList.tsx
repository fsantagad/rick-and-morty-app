import React from "react";
import styled from "styled-components";
import { getLastSegment } from "../utils";
import EpisodeItem from "./EpisodeItem";
import EpisodeTableItem from "./EpisodeTableItem";

type Props = {
    label?: string,
    listEpisodes: Array<string>,
    onlyEpisode?: boolean,
    useTable?: boolean,
    additionalKey?: string,
}

const EpisodesList = ({label, listEpisodes, onlyEpisode, useTable, additionalKey}: Props) => {
    
    return(
        <>
            <LabelWrapper>{label}&nbsp;</LabelWrapper>
            {useTable &&
                <Table>
                    <Thead>
                        <tr>
                            <th>Episode</th>
                            <th>On air</th>
                            <th>Name</th>
                        </tr>
                    </Thead>
                    <tbody>
                    {
                        listEpisodes.map((episodeUrl, index) => {
                            const episodeId =  getLastSegment(episodeUrl);
                            return <EpisodeTableItem key={episodeId} episodeId={episodeId} />
                        })
                    }
                    </tbody>
                </Table>
            }
            {!useTable && listEpisodes.map((episodeUrl, index) => {
                    const episodeId =  getLastSegment(episodeUrl);
                    const comma = <>, &nbsp;</>;
                    
                    return (
                        <div key={`${additionalKey}_${episodeId}`} >
                            <EpisodeItem 
                                episodeId={episodeId} 
                                onlyEpisode={onlyEpisode} 
                            />{index < listEpisodes.length-1 && comma} 
                        </div>
                    )
                })
            }
        </>
    );
};

const LabelWrapper = styled.h4`
    font-size: 1.1em;
    margin: 0;
`;

const Table = styled.table`
    border-spacing: 10px;
    font-size: 0.8em;

    tbody tr:nth-child(odd){
        background-color: #f2f2f2;
        color: ${({ theme }) => theme.textOddRow};
    }
    
    @media (max-width: 767px) {
        border-spacing: 2px;
      }
`;

const Thead = styled.thead`
    position: sticky;
    top: 0;
    z-index: 2;
    
    tr {
        background: ${({ theme }) => theme.body};
    }

    tr > th {
        border-bottom: 1px solid gray;
    }
`;

export default EpisodesList;