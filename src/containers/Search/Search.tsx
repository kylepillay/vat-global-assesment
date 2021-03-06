import React, { ChangeEventHandler, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Pagination from '../../components/Pagination/Pagination'
import SingleQuote from '../../components/SingleQuote'
import { container, listContainer, table, cardListItem, heading, leftColumn, rightColumn, rowsContainer, pageSelectDropDown, loadingContainer } from './Search.module.scss'
import { getAllQuotesAction, searchAllQuotesAction } from './store/search.actions'

const Search = () => {

    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')
    const searchData = useSelector((state: any) => query ? state.searchAll : state.allQuotes)
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const [singleItemId, setSingleItemId] = useState<string>('')


    const onQueryChanged = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setQuery(e.currentTarget.value)
    }, [])

    const onListItemClicked = useCallback<any>((item: any) => {
        setSingleItemId(item._id)
    }, [])

    const onBackClicked = useCallback<any>(() => {
        setSingleItemId('')
    }, [])

    const onSelectPage = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        setCurrentPage(parseInt(e.currentTarget.value))
    }, [])

    const nextPage = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        if (currentPage < searchData.totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }, [currentPage, searchData.totalPages])

    const previousPage = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [currentPage])

    const onPerPageChanged = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
        setPerPage(parseInt(e.currentTarget.value))
    }, [])

    useEffect(() => {
        if (!query || query.length === 0)
            dispatch(getAllQuotesAction({ page: currentPage, perPage, query }))
        else
            dispatch(searchAllQuotesAction({ page: currentPage, perPage, query }))
    }, [currentPage, dispatch, perPage, query])

    return (
        <div className={container}>
            {singleItemId.length ? <SingleQuote id={singleItemId} onBackClicked={onBackClicked} /> :
                <div>
                    <Card>
                        <Input value={query} onChange={onQueryChanged} placeholder="Search for a quote" />
                    </Card>
                    <div className={listContainer}>
                        {
                            searchData.results.length ?
                                <Card>
                                    <div className={pageSelectDropDown}>
                                        <div>Items per page:</div>
                                        <select defaultValue="20" onChangeCapture={onPerPageChanged}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="150">150</option>
                                        </select>
                                    </div>
                                    <div className={table}>
                                        <div className={heading}>
                                            <div className={leftColumn}>Content</div>
                                            <div className={rightColumn}>Author</div>
                                        </div>
                                        <div className={rowsContainer}>
                                            {searchData.results.map((item: any) => {
                                                return (<div className={cardListItem} key={item._id} onClick={(e) => { onListItemClicked(item) }}>
                                                    <div className={leftColumn}>
                                                        {item.content}
                                                    </div>
                                                    <div className={rightColumn}>
                                                        {item.author}
                                                    </div>
                                                </div>)
                                            })}
                                        </div>
                                    </div>
                                    <Pagination listData={searchData} onNextClicked={nextPage} onPreviousClicked={previousPage} onPageClicked={onSelectPage} />
                                </Card> : <Card>
                                    <div className={loadingContainer}>
                                        {query.length ? 'Loading' : 'No results found.'}
                                    </div>
                                </Card>
                        }
                    </div>
                </div>}
        </div>
    )
}

export default Search
