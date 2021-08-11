import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import { container, listContainer, tableHeader, contentHeading, authorHeading, itemsContainer, cardListItem, listItemContent, listItemAuthor } from './Search.module.scss'
import { getAllQuotesAction } from './store/search.actions'

const Search = () => {

    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')
    const searchData = useSelector((state: any) => state.searchAll)

    const onQueryChanged = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setQuery(e.currentTarget.value)
    }, [])

    useEffect(() => {
        console.log(searchData)
    }, [searchData])

    useEffect(() => {
        console.log(query)
        dispatch(getAllQuotesAction({ page: '1', perPage: '20' }))
    }, [dispatch, query])

    return (
        <div className={container}>
            <Card>
                <Input value={query} onChange={onQueryChanged} />
            </Card>
            <div className={listContainer}>
                <Card>
                    <div className={tableHeader}>
                        <div className={contentHeading}>
                            Content
                        </div>
                        <div className={authorHeading}>
                            Author
                        </div>
                    </div>
                    <div className={itemsContainer}>
                        {
                            searchData.results.map((item: any) => {
                                return (<div className={cardListItem}>
                                    <div className={listItemContent}>
                                        {item.content}
                                    </div>
                                    <div className={listItemAuthor}>
                                        {item.author}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Search
