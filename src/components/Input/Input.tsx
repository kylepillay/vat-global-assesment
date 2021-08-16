import React, { FC } from 'react'
import { InputProps } from './Input.types'
import { input, container } from './Input.module.scss'

const Input: FC<InputProps> = ({ value, onChange, ...props }) => {
    return (
        <div className={container}>
            <input value={value} onChange={onChange} className={input} {...props} />
        </div>
    )
}

export default Input