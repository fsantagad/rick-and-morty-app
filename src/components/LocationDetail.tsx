import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { useGetLocationQuery } from "../store";

type Props = {
    locationId: string,
    label: string,
}

const LocationDetail = ({locationId, label}: Props) => {
    const {data, error, isLoading, isFetching} = useGetLocationQuery(locationId);

    let content;
    if (isLoading || isFetching) {
        content = <LocationWrapper><Skeleton width={150} /></LocationWrapper>;
    } else if (error) {
        content= <div>{JSON.stringify(error)}</div>;
    } else {
        content =  <LocationWrapper>
            <NameWrapper>
                <span>{label}: </span>
                <TextWrapper>{data?.name ? data.name : '-'}</TextWrapper>
            </NameWrapper>
            {/* <button onClick={handleClick}>{isOpen ? 'Close' : 'More...'}</button> */}
            {/* {isOpen && <MoreWrapper>
                <p>Dimension: <TextWrapper>{data?.dimension}</TextWrapper></p>
                <p>Type: <TextWrapper>{data?.type}</TextWrapper></p>
                <p>Residents: <TextWrapper>{data?.residents?.length}</TextWrapper></p>
            </MoreWrapper>} */}
        </LocationWrapper>;
    }

    return (

        <div>{content}<Line /></div>
    )
};

const LocationWrapper = styled.div`
    font-size: 0.8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// const MoreWrapper = styled.div`
//     display: block;
//     width: 100%;
//     text-align: left;
//     padding: 0.5em;
//     background-color: darkgray;
// `;

const Line = styled.hr`
    margin: 0;
`;

const TextWrapper = styled.span`
    font-size: 1.05em;
`;

const NameWrapper = styled.p`
    margin: 0.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75%;
`;

export default LocationDetail;