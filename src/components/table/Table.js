import styled from 'styled-components';
import GroupRows from './GroupRows';

const Table = ({ data }) => {
    return(
        <TableContainer>
            <Headers>
                <Header style={{ paddingLeft: '2rem' }}>name</Header>
                <Header>pii</Header>
                <Header>masking</Header>
                <Header style={{ marginLeft: '12px' }}>type</Header>
            </Headers>
                {data && Object.keys(data).map((k, i) => 
                    <div key={i}>
                        <GroupRows name={k} rows={data[k]} />
                    </div>
                )}
        </TableContainer>
    )
};

export default Table;

const TableContainer = styled.div`
    margin-top: 2rem;
    background: #fff;
    padding: 0 1rem;
`;
    
const Headers = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 7fr 3fr;
    column-gap: 0.5rem;
    border-bottom: 2px solid #ccc;
    align-items: center;
    height: 2.5rem;
    padding-right: 0.5rem;
`;

const Header = styled.div`
    color: rgb(171, 71, 188);
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: uppercase;
    min-width: 4.25rem;
`;