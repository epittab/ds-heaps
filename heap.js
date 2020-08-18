

class MaxBinaryHeap {

    constructor() {
        this.values = [];
    }


    insert(value) {

        //push value into values array
        this.values.push(value)

        if (this.values.length > 1 ) {

            //index assignment
            let currentIndex = this.values.length -1;
            let parentIndex = Math.floor( (currentIndex -1) / 2 )
    
            while(value > this.values[parentIndex]) {
    
                //swap
                [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]]
                //reset indices
                currentIndex = parentIndex;
                parentIndex = Math.floor( (currentIndex -1) / 2 )
    
            }

        }

        return this.values;

    }

    extractMax() {
        //save current largest
        let oldMax = this.values[0];
        //remove last value
        let lastValue = this.values.pop()
        if (this.values.length === 0) return oldMax;
        //replace max value with last value (newest value)
        this.values[0] = lastValue;

        let lcIndex = (ind) => (ind * 2 +1)
        let rcIndex = (ind) => (ind * 2 +2)
        let currentIndex = 0;

        while (this.values[currentIndex] < this.values[lcIndex(currentIndex)] || this.values[currentIndex] < this.values[rcIndex(currentIndex)]) {
            //check which child is greater
            let tempMaxIndex = this.values[lcIndex(currentIndex)] > this.values[rcIndex(currentIndex)] ? lcIndex(currentIndex) : rcIndex(currentIndex);
            //swap
            [this.values[currentIndex], this.values[tempMaxIndex]] = [this.values[tempMaxIndex], this.values[currentIndex]]

            //update indices
            currentIndex = tempMaxIndex;
          
        }

        return oldMax;
    }

}