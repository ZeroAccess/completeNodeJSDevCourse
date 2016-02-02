function convert(celsius) {
    // Only change code below this line

    var fahrenheit = (celsius * 9/5) + 32;


    // Only change code above this line
    if ( typeof fahrenheit !== 'undefined' ) {
        return fahrenheit;
    } else {
        return 'fahrenheit not defined';
    }
}

// Change the inputs below to test your code
convert(30);


function golfScore(par, strokes) {
    //Only change code below this line


    if(strokes === 1) {
        return 'Hole-in-one!';
    } else if(strokes <= par - 2){
        return 'Eagle';
    } else if(strokes == par - 1) {
        return 'Birdie';
    } else if(strokes == par) {
        return 'Par';
    } else if(strokes == par + 1) {
        return 'Bogey';
    } else if(strokes == par + 2) {
        return 'Double Bogey';
    } else if(strokes >= par + 3) {
        return 'Go Home!';
    }

    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
