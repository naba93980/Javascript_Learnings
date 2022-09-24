var a = ['mango', 'orange', 'banana', 'apple', 'papaya'];

function fruitsIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                if (nextIndex === values.length - 1) {
                    return {
                        value: values[nextIndex++],
                        done: true
                    }
                }
                else {
                    return {
                        value: values[nextIndex++],
                        done: false
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
const fruitsIteratorObject = fruitsIterator(a);
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());
console.log(fruitsIteratorObject.next());