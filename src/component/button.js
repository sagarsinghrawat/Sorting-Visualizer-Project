import React from 'react'
import './SortingVisualizer.css'

function button( props ) {
    return (
        <div>
            <button className="button-animation" onClick={props.value.e1}>
                Generate new Array</button>
            <button className="button-animation" onClick={props.value.e2}>
                Bubble Sort</button>
            <button className="button-animation" onClick={props.value.e3}>
                Insertion Sort</button>
            <button className="button-animation" onClick={props.value.e4}>
                Selection Sort</button>
            <button className="button-animation" onClick={props.value.e5}>
                Quick Sort</button>
            <button className="button-animation" onClick={props.value.e6}>
                Heap Sort</button>
            <button className="button-animation" onClick={props.value.e7}>
                Merge Sort</button>            
        </div>
    )
}

export default button
