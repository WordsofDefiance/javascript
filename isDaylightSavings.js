// Check if it's daylight savings
// Returns true if it's daylight savings
// Returns false if it's not daylight savings

function isDaylightSavings() {
    var hoy   = new Date();
    var mes   = hoy.getUTCMonth();
    var dia   = hoy.getUTCDay();
    var fecha = hoy.getUTCDate();
    var ano   = hoy.getUTCFullYear();

    //figure out the date of first Sunday of November
    var d;
    var fallBack;

    for ( var i = 1; i < 31; i++) {
        d = new Date( ano, 10, i);
        if (d.getDay() == 0) {
            fallBack =  i;
            break;
        }
    }

    fallBack = new Date( ano, 10, fallBack);

    //figure out the date of second Sunday of March 
    var e;
    var springForward;

    for ( i = 8; i < 16; i++) {
        e = new Date( ano, 2, i);
        if (e.getDay() == 0) {
            springForward = i;
            break;
        }
    }

    springForward =  new Date( ano, 2, springForward);

    //return true if it's daylight savings time 
    if ( hoy >= springForward && hoy <= fallBack ) {
        return true;
    } else {
        return false;
    }

}
