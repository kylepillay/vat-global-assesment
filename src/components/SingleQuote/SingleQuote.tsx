import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleQuotesAction } from '../../containers/Search/store/search.actions'
import Card from '../Card'
import { authorContent, avatar, avatarContainer, backButton, backContainer, content, mainContainer, tag, tagsContainer, textContent, textItem } from './SingleQuote.module.scss'
import { SingleQuoteProps } from './SingleQuote.types'

const SingleQuote: FC<SingleQuoteProps> = ({ id, onBackClicked }) => {

    const dispatch = useDispatch()
    const quoteData = useSelector((state: any) => state.getSingle)
    const [splitName, setSplitName] = useState([])
    useEffect(() => {
        dispatch(getSingleQuotesAction({ id }))
    }, [dispatch, id])

    useEffect(() => {
        setSplitName(quoteData.author.split(' '))
    }, [quoteData])

    return (
        <div>
            <div className={backContainer}>
                <button onClick={onBackClicked} className={backButton}>Back</button>
            </div>
            <Card>
                <div className={mainContainer}>
                    <div className={avatarContainer}>
                        <div className={avatar} style={{ backgroundImage: `url("https://eu.ui-avatars.com/api/?background=random&name=${splitName[0]}+${splitName[1]}")`, backgroundSize: 'cover' }} />
                    </div>
                    <div className={content}>
                        <div className={textItem}>
                            <div className={textContent}>
                                {quoteData.content}
                            </div>
                            <div className={authorContent}>
                                By {quoteData.author}
                            </div>
                            <div className={authorContent}>
                                Length: {quoteData.length}
                            </div>
                            <div className={tagsContainer}>
                                {quoteData.tags.map((item: string) => <div className={tag}>{item}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SingleQuote
