import React, { useState } from 'react';
import './Write.css';

export function Write(props){
    const [state, setState] = useState({
        name: '',
        content: '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleClick = e => {
        // console.log(state.name,":", state.content);
        props.writeFunc(state.name, state.content);
        setState({
            name: '',
            content: ''
        })

    }

    return <>
        <div id={"wrap"}>
            <div>
                <label>작성자</label>
                <input name="name" type = "text" value={state.name} onChange={getValue}/>
            </div>
            <div>
                <label>내용</label>
                <textarea name="content" cols = "30" rols = "10" value={state.content} onChange={getValue}/>
            </div>
            <button onClick={handleClick}>POST</button>
        </div>
    </>
}