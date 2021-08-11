import React from 'react'
import { InputProps } from './Input.types'
import { input, container } from './Input.module.scss'

const Input = ({ value, onChange }: InputProps) => {
    return (
        <div className={container}>
            <input value={value} onChange={onChange} className={input} />
        </div>
    )
}

export default Input