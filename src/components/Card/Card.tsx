import React, { FC } from 'react'
import { container } from './Card.module.scss'

const Card: FC = ({ children }) => {
    return (
        <div className={container}>
            {children}
        </div>
    )
}

export default Card
