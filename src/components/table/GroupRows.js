import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RowDetails from './RowDetails';
import { useSelector } from 'react-redux';

const GroupRows = ({ name, rows }) => {
    const [showRows, setShowRows] = useState(false);
    const [tableRows, setTableRows] = useState(rows || []);

    const { nameFilter, showPiiOnly } = useSelector(state => state.filterReducer.filters);
    
    const filterRows = () => {
        const filteredRows = rows.filter(r => 
            nameFilter ? (r.name.includes(nameFilter) || r.type.includes(nameFilter)) : true &&
            showPiiOnly ? r.pii : true
        );
        setTableRows(filteredRows);
    };

    useEffect(() => {
        filterRows();
        setShowRows(false);
    }, [rows]);

    useEffect(() => {
        filterRows();
    }, [nameFilter, showPiiOnly]);

    const togglePii = i => {
        const newTableRows = [ ...tableRows ];
        newTableRows[i].pii = !newTableRows[i].pii;
        setTableRows(newTableRows);
    };

    const toggleMasking = i => {
        const newTableRows = [ ...tableRows ];
        newTableRows[i].masked = !newTableRows[i].masked;
        setTableRows(newTableRows);
    };

    return(
        <GroupRowsContainer>
            <GroupHeader onClick={() => setShowRows(!showRows)}>
                <ArrowToggleVisability>                    
                    {showRows ? <ArrowDown /> : <ArrowRight />}
                </ArrowToggleVisability>
                <GroupRowsName>{name}</GroupRowsName>
            </GroupHeader>
            <RowsContainer showRows={showRows} count={tableRows.length}>
                {tableRows && tableRows.map((row, i) => 
                    <div key={i}>
                        <RowDetails { ...{ ...row, i, togglePii, toggleMasking }} />
                    </div>
                )}
            </RowsContainer>
        </GroupRowsContainer>
    )
}

export default GroupRows;

const GroupRowsContainer = styled.div``;

const GroupHeader = styled.div`
    display: inline-flex;
    height: 2rem;
    align-items: center;
    font-weight: bold;
    color: #4a4a4a;
    padding: 0.5rem 0;
    z-index: 2;
`;

const ArrowToggleVisability = styled.div`
    margin-right: 0.5rem;
    font-size: 0.825rem;
    margin-top: 9px;    
`;

const ArrowDown = styled.div` 
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: #eeeeee;
    border-radius: 50%;

    &:after {
        content: '';
        display: inline-block;
        color: rgb(126, 37, 164);
        width: 0;
        height: 0;
        border: 3px solid transparent;
        border-top: 3px solid;
        border-right: 3px solid;
        margin: 4px 5px 5px 5px;
        transform: rotate(135deg);
    }
`;

const ArrowRight = styled.div` 
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: #eeeeee;
    border-radius: 50%;

    &:after {
        content: '';
        display: inline-block;
        color: rgb(126, 37, 164);
        width: 0;
        height: 0;
        border: 3px solid transparent;
        border-top: 3px solid;
        border-right: 3px solid;
        margin: 5px 4px;
        transform: rotate(45deg);
    }
`;

const GroupRowsName = styled.div`
    font-size: 1.25rem;
`;

const RowsContainer = styled.div`
    transition: all .8s ease-in-out;
    max-height: ${props => props.showRows ? `${props.count * 60}px` : 0};
    z-index: ${props => props.showRows ? 1 : 0};
    visibility: ${props => props.showRows ? 'visible' : 'hidden'};
    overflow: hidden;
`;