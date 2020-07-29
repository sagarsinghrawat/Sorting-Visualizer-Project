import React, { Component } from 'react'
import SortingVisualizer1 from './SortingVisualizer1'

class SortingVisualizer2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : 0,
             isEnable : true
        }
    }
    
    changeValue = e => {

        console.log(this.state.value)
        this.setState({
            value : e.target.value,
        })
    }

    submit = () => {
        this.setState({
            isEnable : true
        })
    }
    render() {
        return (
            <div>
                <input type="number" onChange={ e => this.changeValue(e)} />
            </div>
        )
    }
}

export default SortingVisualizer2
