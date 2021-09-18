import React from 'react'
import styled from "styled-components"

interface PaginationProps{
    pageTotal: number;
    currentPage:number;
    setCurrentPage: (page:number) => void
}

export default function Pagination({pageTotal, currentPage, setCurrentPage}:PaginationProps) {
    const pageNumberList = [];
    for(let i = 1; i < pageTotal; i++){
        pageNumberList.push(i)    
    }
    return (
        <PageNumbersContainer>
            <button onClick={() =>setCurrentPage(1)} disabled={1 === currentPage} data-testid="btn-first">First</button>
            <div>
                {pageNumberList.map(pageNr => {
                    return <button key={pageNr} onClick={() => setCurrentPage(pageNr)} disabled={pageNr === currentPage}>{pageNr}</button>
                })}
            </div>

            <button onClick={() =>setCurrentPage(pageTotal)} disabled={pageTotal === currentPage}>Last</button>
        </PageNumbersContainer>
    )
}

const PageNumbersContainer = styled.div`
    display: flex;
    justify-content: space-around;
`