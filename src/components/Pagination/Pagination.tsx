import React, { FC } from 'react'
import range from '../../utils/range'
import { paginationContainer, paginationItem, paginationButton, paginationButtonSelected } from './Pagination.module.scss'
import { PaginationProps } from './Pagination.types'

const Pagination: FC<PaginationProps> = ({ listData, onNextClicked, onPageClicked, onPreviousClicked }: PaginationProps) => {
    return (
        <div className={paginationContainer}>
            <button className={paginationButton} onClick={onPreviousClicked}>Previous</button>
            <div>
                {range(listData.page, listData.totalPages).map(item => <button key={item} className={`${paginationItem} ${item === listData.page ? paginationButtonSelected : ''}`} value={item} onClick={onPageClicked}>{item}</button>)}
            </div>
            <button className={paginationButton} onClick={onNextClicked}>Next</button>
        </div>
    )
}

export default Pagination
