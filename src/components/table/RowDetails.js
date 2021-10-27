import styled from 'styled-components';

const RowDetails = ({ name, pii, masked, type, i, togglePii, toggleMasking }) => ( 
    <RowDetailsContainer>
        <Name>{name}</Name>
        <SwitchBtn color='rgb(18, 41, 109)' active={pii} onClick={() => togglePii(i)}>PII</SwitchBtn>
        <SwitchBtn color='rgb(123, 31, 162)' active={masked} onClick={() => toggleMasking(i)}>MASKED</SwitchBtn>
        <TypeContainer>
            <Type>{type}</Type>
        </TypeContainer>
    </RowDetailsContainer>
);

export default RowDetails;

const RowDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 7fr 3fr;
    column-gap: 0.5rem;
    align-items: center;
    height: 3rem;
    margin: 0.2rem;
    margin-bottom: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.75rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Name = styled.div`
    padding-left: 2rem;
    color: rgb(38, 49, 93);
    font-weight: 500;
    font-size: 0.875rem;
    margin-top: -3px;    
`;

const SwitchBtn = styled.div`
    width: 4.25rem;
    display: flex;
    justify-content: center;
    color: ${props => props.active ? '#fff' : props.color};
    background: ${props => props.active ? props.color : '#fff'};
    border: ${props => `1px solid ${props.color}`};
    border-radius: 3px;
    font-weight: 700;
    cursor: pointer;
`;

const TypeContainer = styled.div`
    display: flex;
    justify-content: left;
`;

const Type = styled.div`
    display: inline-block;
    color: rgb(113, 181, 201);
    background: rgb(206, 229, 236);
    border-radius: 3px;
    font-weight: 700;
    padding: 0 8px;
    text-transform: uppercase;
`;