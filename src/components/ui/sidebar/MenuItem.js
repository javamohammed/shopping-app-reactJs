import React from 'react'

export default function MenuItem(props) {
    return (
        <li  className="has-sub active expand" >
            {props.children}
        </li>
    )
}
