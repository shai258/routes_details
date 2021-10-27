import { useState } from 'react';
import styled from 'styled-components';
import Table from './table/Table';
import Data from '../assets/fe_data.json';
import SearchBar from './SearchBar';

const RoutesPage = () => {
    const [reqResSelection, setReqResSelection] = useState('REQUEST');

    const toggleSelection = selection => {
        if (selection !== reqResSelection) setReqResSelection(selection);
    };
    
    let data = Data;
    if (!data) data = {};
    const { method, path, api, request, response } = data;

    return (
        <RoutesPageContainer>
            <RoutesPageHeader>
                <Method>{method || ''}</Method>
                <Path>{path || ''}</Path>
                <Breadcrumbs>ALL APIs &gt; {api || ''} &gt; <span style={{ fontWeight: '500' }}>{path || ''}</span></Breadcrumbs>
            </RoutesPageHeader>
            <ToggleReqRes>
                <ToggleButton onClick={() => toggleSelection('REQUEST')} selected={reqResSelection === 'REQUEST'}>Request</ToggleButton>
                <ToggleButton onClick={() => toggleSelection('RESPONSE')} selected={reqResSelection === 'RESPONSE'}>Response</ToggleButton>
            </ToggleReqRes>
            <ReqResWrapper>
                <SearchBar />
                <Table data={reqResSelection === 'REQUEST' ? request : response} />
            </ReqResWrapper>
        </RoutesPageContainer>
    )
};

export default RoutesPage;

const RoutesPageContainer = styled.div``;

const RoutesPageHeader = styled.div`
    padding: 1rem;
    margin: 1rem;
    border-bottom: 1px solid #ccc;
`;

const Method = styled.span`
    color: rgb(218, 180, 224);
    margin-right: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
`;

const Path = styled.span`
    color: rgb(106, 27, 154);
    font-size: 1.25rem; 
    font-weight: bold;
`;

const Breadcrumbs = styled.div`
    color: rgb(106, 27, 154);
    font-weight: bold;
`;

const ToggleReqRes = styled.div`
    display: flex;
    font-weight: 600;
    padding-left: 1rem;
`;

const ToggleButton = styled.div`
    border-bottom: ${props => props.selected ? '3px rgb(74, 20, 140) solid' : 'none'};
    color: ${props => props.selected ? 'rgb(74, 20, 140)' : 'inherit'};
    width: 6rem;
    display: flex;
    justify-content: center;
`;

const ReqResWrapper = styled.div`
    background: #f0f0f0;
    border-top: 2px solid #e6e6e6;
    margin-top: -2px;
    padding: 2rem 1rem;
`;