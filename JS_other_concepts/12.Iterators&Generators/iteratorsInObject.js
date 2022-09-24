const userNamesGroupedByLocation = {
    'Tokio': [
        'Aiko',
        'Chizu',
        'Fushigi'
    ],
    'Buenos Aires': [
        'Santiago',
        'Valentina',
        'Lola'
    ],
    'Saint Petersburg': [
        'Sonja',
        'Dunja',
        'Iwan',
        'Tanja'
    ],
    'Agartala': [
        'Ramnagar',
        'Dhaleswar',
        'Melarmath'
    ]
};
function userNamesGroupedByLocationIterator(location) {
    let userIndex = 0;
    let locationIndex = 0;
    let locationArray = Object.keys(location);
    console.log(locationArray);
    return {
        next: function () {
            if (locationIndex < locationArray.length) {
                {
                    if (userIndex < location[`${locationArray[locationIndex]}`].length)
                        return {
                            value: (location[`${locationArray[locationIndex]}`])[userIndex++],
                            done: false
                        }
                    else {
                        locationIndex++;
                        if (locationIndex < locationArray.length) {
                            userIndex = 0;
                            return {
                                value: (location[`${locationArray[locationIndex]}`])[userIndex++],
                                done: false
                            }
                        }
                        else {
                            return {
                                value: null,
                                done: true
                            }
                        }
                    }
                }
            }
            else {
                return {
                    value: null,
                    done: true
                }
            }
        }
    }
}
const user = userNamesGroupedByLocationIterator(userNamesGroupedByLocation);
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());
