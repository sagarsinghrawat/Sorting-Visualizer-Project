
function insertionSorting( array ) {

    const sortingAnimation = [];
    var i = 1;
    while( i < array.length ){
        var temp = array[i];
        var j = i-1;
        
        while( j >= 0 )
        {
            const animation = {}
            animation.Compare = [j,j+1]
            if( array[j] > temp )
            {
                animation.Swap = [j,j+1];
                array[j+1] = array[j];
                j = j-1;
            }
            else
            {
                animation.Swap = [j,j];
                sortingAnimation.push(animation);
                break;
            }
        sortingAnimation.push(animation);
        }
        i++;
        array[j+1] = temp;
        
    }

    return sortingAnimation;
}

export default insertionSorting
