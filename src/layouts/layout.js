import React from 'react'
import LeftBar from "./LeftBar";
import Header from "./Header";
export default function layout() {
    return (
        <div>
            <LeftBar />
            <div className="page-wrapper">
                <Header/>
            </div>
        </div>
    )
}
