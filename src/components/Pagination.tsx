import React from 'react'

interface PaginationProps{
    pageTotal: number
    currentPage: number
    setCurrentPage: (page:number) => void
}

export default function Pagination({pageTotal, currentPage, setCurrentPage}:PaginationProps) {
    const listPageIndex = []
    for(let i=1;i<=pageTotal;i++){
        listPageIndex.push(i)
    }
    return (
        <div style={{display: "flex"}}>
            <button data-testid="btn-first" onClick={() => (setCurrentPage(1))} disabled={currentPage == 1}>First</button>
            <div>
                {listPageIndex.map(index => {
                    return <button disabled={currentPage == index} key={index} data-testid={`btn-page-${index}`} onClick={() => (setCurrentPage(index))}>{index}</button>
                })}
            </div>
            <button data-testid="btn-last" onClick={() => (setCurrentPage(pageTotal))}  disabled={currentPage == pageTotal}>Last</button>
        </div>
    )
}
