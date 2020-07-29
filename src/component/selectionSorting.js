
function selectionSorting ( array ) {

    const animation = [];

    var size = array.length;
    for( var i=0 ; i<size-1 ; i++ )
    {
        var index = i;

        const auxAnimation = {};
        auxAnimation.Compare = [];

        for( var j=i+1 ; j<size ; j++ )
        {
            const temp = {}
            temp.innerCompare = [j,index];
            if( array[j] < array[index] )
                index = j;

            auxAnimation.Compare.push(temp);
        }
        auxAnimation.Swap = [i,index];
        animation.push(auxAnimation);
        
        var k = array[i];
        array[i] = array[index];
        array[index] = k;
       
    }

    console.log(animation);
    return animation;
}

export default selectionSorting
