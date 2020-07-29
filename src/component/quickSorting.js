
function _swap( array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition( animation, array, low, high ) {

    var pivot = array[high];
    var storeIndex = low-1;
    const quickAnimation1 = [];
    const quickAnimation2 = [];

    for( var j=low ; j<=high-1 ; j++ )
    {
        const auxAnimation1 = {};
        const auxAnimation2 = {};

        if( array[j] < pivot )
            auxAnimation1.Compare = [j,high,1];
        else
            auxAnimation1.Compare = [j,high,0];
        
            quickAnimation1.push(auxAnimation1);
        if( array[j] < pivot )
        {
            storeIndex++;
            auxAnimation2.Swap = [j,storeIndex];
            quickAnimation2.push(auxAnimation2);
            _swap( array, storeIndex, j );
        }
    }
    const auxAnimation2 = {};
    auxAnimation2.Swap = [high, storeIndex+1]
    quickAnimation2.push(auxAnimation2);;
    _swap( array, high, storeIndex+1 );

    const quickAnimation = {};

    quickAnimation.Element= [quickAnimation1, quickAnimation2];
    animation.push(quickAnimation);

    return storeIndex+1;
}

function sortArray (animation, array, low, high) {

    if( low < high) {

        var pi = partition( animation, array, low, high );

        sortArray(animation, array, low, pi-1);
        sortArray(animation, array, pi+1, high);
    }
}

function quickSorting (array) {

    const animation = [];
    var size = array.length-1;
    sortArray( animation,array, 0, size);

    console.log(array);
    console.log(animation);
    return animation;
}

export default quickSorting

