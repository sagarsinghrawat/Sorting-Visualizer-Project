
 function bubbleSorting(array) {

    if( array.length === 1 )
        return array;
    const length = array.length;

    const auxilaryArray = array;
    const newAnimation = [];

    for( var i=0; i<length ; i++ )
    {
        for( var j=0 ; j<length-i-1 ; j++)
        {
            const animation = {};
            animation.Compare = [j,j+1]
            if( auxilaryArray[j] > auxilaryArray[j+1])
            {
                var temp = auxilaryArray[j];
                auxilaryArray[j] = auxilaryArray[j+1];
                auxilaryArray[j+1] = temp;
                animation.Swap = [j,j+1]
            }
            else
                animation.Swap = [j,j];
            
            newAnimation.push(animation);
        }
    }

    return newAnimation;
}

export default bubbleSorting
