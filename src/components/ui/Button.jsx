import React from 'react'

const Button = ({ extraStyle, title }) => {
    return (
        <button className={`w-[100px] px-[26px] py-5 ${extraStyle} text-[16px] leading-[100%] font-semibold rounded-[40px] border-[1px]`}>{title}</button>
    )
}

export default Button