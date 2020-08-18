

class MaxBinaryHeap {
    constructor() {
        values = [];
    }

    insert(value) {
        if (values.length === 0 ){
            values.push(value);
            return values;
        }

        values.push(value);
        parentIndex = Math.floor(((values.length-1) -1)/2)

        function bubbleUp()


    }
}