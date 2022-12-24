import React, { useState } from 'react'

export default function Test() {
    const [X, setX] = useState([{
        "name": "cover",
        "path": "",
        "text": {
            "title": "e",
            "style": {
                "backgroundColor": "transparent",
                "color": "black",
                "textAlign": "center",
                "fontSize": "20px",
                "fontWeight": "bolder",
                "opacity": 1,
                "top": 0,
                "radius": 0,
                "fontFamily": "",
                "padding": null
            }
        }
    }])

    let i = 0

    const test = (e) => {
        setX((prevState) => {
            return ( 
                prevState.map(item => {
                    item.name === 'cover' ? item.text.style.color = e.target.value : item.text.style.color
                    return item
                })
            )            
        })
    }

    return (
        <>
            <input type='text' onInput={ test } />
            <div>{ JSON.stringify(X) }</div>
        </>
    )
}
