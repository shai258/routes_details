import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions';

const SearchBar = () => {
    const [filter, setFilter] = useState('');
    const [showPii, setShowPii] = useState(false);

    const dispatch = useDispatch();

    const resetFilter = () => {
        setFilter('');
        setShowPii(false);

        dispatch(setFilters({
            nameFilter: '',
            showPiiOnly: false,
        }));
    };

    const applyFilters = () => {
        dispatch(setFilters({
            nameFilter: filter,
            showPiiOnly: showPii,
        }));
    };

    return(
        <SearchBarContainer>
            <ToolsBar>
                <InputWrapper>
                    <FontAwesomeIcon icon={faSearch} />
                    <SearchInput placeholder='Search' value={filter} onChange={e => setFilter(e.target.value)} />
                </InputWrapper>
                <ShowPiiContainer>
                    <ShowPiiCB checked={showPii} onChange={() => setShowPii(!showPii)}></ShowPiiCB>
                    <ShowPiiLabel>Show PII only</ShowPiiLabel>
                </ShowPiiContainer>
                <ApplyBtn onClick={applyFilters}>Apply</ApplyBtn>
            </ToolsBar>
            <ResetFilter>
                <ResetBtn onClick={resetFilter}>Reset Filter</ResetBtn>
            </ResetFilter>
        </SearchBarContainer>
    )
}

export default SearchBar;

const SearchBarContainer = styled.div`
    font-weight: 600;
    font-size: 0.875rem;
`;

const ToolsBar = styled.div`
    display: grid;
    grid-template-columns: 10fr 1fr 1fr;
    background: #fff;
    height: 3rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const InputWrapper = styled.label`
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    justify-items: center;
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border: none;
    justify-self: baseline;

    &:focus {
        outline: none;
    }
`;

const ShowPiiContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    border-left: 1px solid #ccc;
    height: 50%;
    min-width: 7rem;
    padding: 0.5rem;
`;

const ShowPiiLabel = styled.div`
    margin-left: 5px;
`;

const ShowPiiCB = styled.input.attrs({ type: 'checkbox' })`
    background: ${props => props.checked ? 'salmon' : 'papayawhip'};
    cursor: pointer;
`;

const ApplyBtn = styled.button`
    background: rgb(106, 27, 154);
    outline: none;
    border:none;
    color: #fff;
    font-weight: 600;
    height: 3rem;
    font-size: 0.825rem;
    cursor: pointer;
`;

const ResetFilter = styled.div`
    color: rgb(106, 27, 154);
    display: flex;
    justify-content: end;
    font-size: 0.875rem;
    margin-top: 3px;
`;

const ResetBtn = styled.div`
    cursor: pointer;
`;
