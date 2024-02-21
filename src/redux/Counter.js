// import React, { useState } from 'react'
import { Increment, Decrement } from '../acton/action'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    let value = 0
    
    let count = useSelector(state => state.changenumber)
    
    if (count > 0) {    
        value = count
    }

    let dishpatch = useDispatch()

    let increment = () => {
        dishpatch(Increment())
    }

    let decrement = () => {
        dishpatch(Decrement())

    }

    return (
        <div>
            <div className='row justify-content-center' style={{ marginTop: "150px" }} >
                <div className='col-sm-4 p-2 pb-5 shadow text-center'>
                    <div>
                        <h3 className='p-3'>Counter App</h3>
                    </div>
                    <button style={{ width: "60%" }} className='btn btn-success' onClick={increment}>Increment</button>
                    <h1>{value}</h1>
                    <button style={{ width: "60%" }} className='btn btn-danger' onClick={decrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Counter