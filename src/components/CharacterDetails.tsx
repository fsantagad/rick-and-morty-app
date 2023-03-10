import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { getLastSegment } from "../utils/getLastSegment";
import EpisodesList from "./EpisodesList";
import LocationDetail from "./LocationDetail";
import StatusCharacter from "./StatusCharacter";

const CharacterDetails = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const currentCharacter = useSelector((state: RootState) => {
        return state.selectedCharacter.data;
    }); 
    const originLocationId = getLastSegment(currentCharacter.origin.url);
    const locationLocationId = getLastSegment(currentCharacter.location.url);
    
    const handleImageLoaded = () => {
        setImageLoaded(true);
    }

    return (
        <>
            <WrapperDetail>
                <div>
                    <Name>{currentCharacter.name}</Name>
                    <StatusCharacter 
                        status={currentCharacter.status}
                        species={currentCharacter.species}
                        gender={currentCharacter.gender}
                     />
                    <P>{currentCharacter.type}</P>
                    {!imageLoaded && <Skeleton width={300} height={300} />}
                    <img 
                        src={currentCharacter.image} 
                        alt={currentCharacter.name}
                        width="300"
                        height="300" 
                        style={!imageLoaded ? { display: "none" } : {}}
                        onLoad={handleImageLoaded}
                    />
                    <LocationDetail label="Origin" locationId={originLocationId} />
                    <LocationDetail label="Location" locationId={locationLocationId} />
                </div>
                <OtherInfoWrapper>
                    <h4>Episodes</h4>
                    <ScrollList>
                        <EpisodesList 
                            listEpisodes={currentCharacter.episode} 
                            useTable={true}
                        />
                    </ScrollList>                  
                </OtherInfoWrapper>
            </WrapperDetail>
        </>
    );
}

const WrapperDetail = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        justify-content: center;
      }
`;

const OtherInfoWrapper = styled.div`
    padding: 20px;

    @media (max-width: 767px) {
        padding: 0;
      }
`;

const ScrollList = styled.div`
    height: 50vh;
    overflow: auto;
`;

const Name = styled.h3`
    margin-bottom: 0.5em;
`;

const P = styled.p`
    font-size: 0.8em;
`;

export default CharacterDetails;