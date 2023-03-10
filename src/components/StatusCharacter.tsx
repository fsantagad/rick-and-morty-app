import React from "react";
import styled from "styled-components";

type Props = {
    status: string,
    species: string,
    gender?: string,
}

const StatusCharacter = ({status, species, gender}: Props) => {
    return (
    <StatusWrapper>
        {status === 'Alive' && <AliveStatus /> }
        {status === 'Dead' && <DeadStatus /> }
        {status !== 'Dead' && status !== 'Alive'  && <NoStatus /> }
        {status} - {species} {gender ? '-' : ''} {gender}
    </StatusWrapper>
    )
}

const StatusWrapper = styled.span`
  font-size: 0.8em;
  margin-bottom: 1em;
`;

const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 2px;
`;

const AliveStatus = styled(Status)`
  background-color: green;
`;

const DeadStatus = styled(Status)`
  background-color: red;
`;
const NoStatus = styled(Status)`
  background-color: gray;
`;

export default StatusCharacter;
