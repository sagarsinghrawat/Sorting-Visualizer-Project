import React, { Component } from 'react'
import './SortingVisualizer.css'
import Button from './button'
import bubbleSorting from './bubbleSorting'
import insertionSorting from './insertionSorting'
import selectionSorting from './selectionSorting'
//import quickSorting from './quickSorting'
import mergeSorting from './mergeSorting'
const SPEED = 100;

const PRIMARY_COLOR = 'aqua';

const SECONDARY_COLOR = 'red';

const SWAP_COLOR = "green";

class SortingVisualizer1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value : 10,
            array : []
        }
    }

    setValue = e => {
        this.setState({
            value : e.target.value
        })
    }
    randomNumber(min,max) {
        return (Math.floor(Math.random()*(max-min)+1))
    }

    generateArray = () => {
        const newArray = [];
        for( var i=0 ; i< this.state.value ; i++)
            newArray.push(this.randomNumber(10,500));
        
        console.log(newArray);
        this.setState({array : newArray})
    }

    componentDidMount(){
        this.generateArray();
    }

















    
    /* -------------------------------------BUBBLE SORT ANIMATION--------------------------------- */ 
    bubbleSort = () => {

        const newArray = bubbleSorting(this.state.array);
        const length = newArray.length;
        
        for( var i=0 ; i<length ; i++)
        {
            const arrayBars = document.getElementsByClassName("array-bar");

            const [compFirst , compSecond ] = newArray[i].Compare;
            const [swapFirst , swapSecond] = newArray[i].Swap;
            const barOneSwap = arrayBars[swapFirst].style
            const barTwoSwap = arrayBars[swapSecond].style;

            setTimeout( () => {
            const barOnestyle = arrayBars[compFirst].style
            const barTwostyle = arrayBars[compSecond].style

            barOnestyle.backgroundColor = SECONDARY_COLOR;
            barTwostyle.backgroundColor = SECONDARY_COLOR;
            if( compFirst !== compSecond)
            {
                barOnestyle.backgroundColor = SECONDARY_COLOR;
                barTwostyle.backgroundColor = SECONDARY_COLOR;

                setTimeout( () => {
                    
                    var temp = barOneSwap.height;
                    barOneSwap.height = `${barTwoSwap.height}`;
                    barTwoSwap.height = `${temp}`;

                    barOnestyle.backgroundColor = PRIMARY_COLOR;
                    barTwostyle.backgroundColor = PRIMARY_COLOR;
                }, 90)
            }  
        }, (i)*SPEED+10);

            const barOnestyle = arrayBars[compFirst].style
            const barTwostyle = arrayBars[compSecond].style

            barOnestyle.backgroundColor = PRIMARY_COLOR;
            barTwostyle.backgroundColor = PRIMARY_COLOR;
        }
    }



















     
    /*--------------------------INSERTION SORT ANIMATION----------------------------- */
    
    insertionSort = () => {

    const newArray = insertionSorting(this.state.array);

    for( var i=0 ; i<newArray.length ; i++ ){
        const arrayBars = document.getElementsByClassName("array-bar");

        const [compareFirst , compareSecond] = newArray[i].Compare;
        const [swapFirst , swapSecond] = newArray[i].Swap;

        const barOnestyle = arrayBars[compareFirst].style;
        const barTwostyle = arrayBars[compareSecond].style;
        setTimeout( ()=> {

            barOnestyle.backgroundColor = SECONDARY_COLOR;
            barTwostyle.backgroundColor = SECONDARY_COLOR ;

            if( compareFirst !== compareSecond )
            {
                setTimeout( ()=>{
                    const barOneSwap = arrayBars[swapFirst].style;
                    const barTwoSwap = arrayBars[swapSecond].style;
        
                    barOnestyle.backgroundColor = SECONDARY_COLOR;
                    barTwostyle.backgroundColor = SECONDARY_COLOR ;

                    let newheight = barOneSwap.height;
                    barOneSwap.height = `${barTwoSwap.height}`;
                    barTwoSwap.height = `${newheight}`; 

                    barOnestyle.backgroundColor = SWAP_COLOR;
                    barTwostyle.backgroundColor = SWAP_COLOR ;

                },90 );
            }

        },(i)*SPEED+10)

     }
    
    }





















    //----------------------------SELECTION SORT----------------------------------------------
    selectionSort = () => {
        const newArray = selectionSorting(this.state.array);

        for( var i=0 ; i<newArray.length ; i++ )
        {
            const arrayBars = document.getElementsByClassName("array-bar");

            const[ swapFirst, swapSecond ] = newArray[i].Swap;

            const barOneSwap = arrayBars[swapFirst].style;
            const barTwoSwap = arrayBars[swapSecond].style;
            //var k = newArray[i].Compare.length;
            // for( var j=0 ; j < k ; j++ )
            // {
            //     const[ innerCompare1, innerCompare2 ] = newArray[i].Compare[j].innerCompare;
            //     const barOnestyle = arrayBars[innerCompare1].style;
            //     const barTwostyle = arrayBars[innerCompare2].style;

            //         // setTimeout( ()=>{

            //         //     barOnestyle.backgroundColor = SECONDARY_COLOR;
            //         //     barTwostyle.backgroundColor = SECONDARY_COLOR;

            //         // },j*900)
            // }

            setTimeout( () => {

                barOneSwap.backgroundColor = SECONDARY_COLOR;
                barTwoSwap.backgroundColor = SECONDARY_COLOR;

                let newheight = barOneSwap.height;
                barOneSwap.height = `${barTwoSwap.height}`;
                barTwoSwap.height = `${newheight}`; 
            }, i*SPEED+900)

            setTimeout( ()=>{
                barOneSwap.backgroundColor = PRIMARY_COLOR;
                barTwoSwap.backgroundColor = PRIMARY_COLOR;
            },i*SPEED+1000)
            
        }
    }

















    //------------------------------------MERGE SORT----------------------------------------------------//

    mergeSort = () => {

        const animations = mergeSorting(this.state.array);
        for (let i = 0; i < animations.length; i++) {

          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
           
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * SPEED);
          } 
          else {
          
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * SPEED);
          }
        }
      }
    


















    render() {

        return (
            <div>
                <div className="button-box">
                    <div className="input-box">
                        <label> No of Input Data : </label>
                        <input type="text" 
                            value={this.state.value} 
                            onChange={ e => this.setValue(e)} 
                            className="input-text"/>
                    </div>
                    
                    <Button value={{
                        e1: this.generateArray,
                        e2: this.bubbleSort,
                        e3: this.insertionSort,
                        e4: this.selectionSort,
                        e5: this.quickSort,
                        e6: this.heapSort,
                        e7: this.mergeSort,
                    }}
                    />
                </div>
                {/* <button onClick={this.testArray}>Test Array</button> */}
                <div className="array-box">
                    { this.state.array.map( (value,idx) => 
                        <div key={idx} style={{height: `${value}px` ,  
                            width:`${900/(this.state.array.length)}px`}} 
                            className="array-bar" >
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SortingVisualizer1
