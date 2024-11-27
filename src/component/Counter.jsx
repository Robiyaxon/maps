import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch()
    const qoshish = () => {
        dispatch({ type: "QOSHISH" })
    }
    const ayrish = () => {
        dispatch({ type: "AYRISH" })
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={qoshish}>Qoshiladi</button>
            <button onClick={ayrish}>Qoshiladi</button>
        </div>
    )
}

export default Counter