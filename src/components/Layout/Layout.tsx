import React, { FC } from 'react'
import { container, screen } from './Layout.module.scss'

const Layout: FC = ({ children }) => {
    return (
        <div className={screen}>
            <div className={container}>
                {children}
            </div>
        </div>
    )
}

export default Layout
