function solution(operations) {
    var answer = [];
    const maxHeap = new MaxHeap()
    const minHeap = new MaxHeap()
    operations.map(e=>{
        const [order ,  value] = e.split(' ')        
        if(order === 'I'){
            maxHeap.append(Number(value))
            minHeap.append(Number(value)*-1)
        }else {
            maxHeap.remove(value === '1')
            minHeap.remove(value !== '1')
        }
    })
    
    return [maxHeap.getMax(), minHeap.getMax()*-1];
}


class MaxHeap{
    constructor(){
        this.heap = [null]
    }
    append(value){
        this.heap.push(value)
        let curIdx = this.heap.length -1
        let parIdx = curIdx >> 1

        while(curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]){
            let temp = this.heap[parIdx]
            this.heap[parIdx] = this.heap[curIdx]
            this.heap[curIdx] = temp
            
            curIdx = parIdx
            parIdx = curIdx >> 1
        }
        
    }
    remove(isMax){
        if(this.heap.length === 1) return
        else if(this.heap.length === 2) this.heap.pop()
        else {
            if(isMax){
                this.heap[1] = this.heap.pop()
                let curIdx = 1
                while(this.heap[curIdx*2]){
                    if(this.heap[curIdx*2] < this.heap[curIdx*2+1]){
                        [this.heap[curIdx], this.heap[curIdx*2+1]] = [this.heap[curIdx*2+1],this.heap[curIdx]]
                        curIdx = curIdx*2 + 1
                    }else {
                        [this.heap[curIdx],this.heap[curIdx*2]] = [this.heap[curIdx*2],this.heap[curIdx]]
                        curIdx = curIdx*2
                    }
                }
            } else {
                let newValue = this.heap.pop()
                const minIndex = this.findMinIndex()
                this.heap[minIndex] = Math.max(this.heap[minIndex] , newValue)
            }
        }
    }
    findMinIndex(){
        let curIdx = 1
        while(this.heap[curIdx*2]){
            curIdx = this.heap[curIdx*2+1] && this.heap[curIdx*2] > this.heap[curIdx*2+1] ? curIdx*2+1 : curIdx*2
        }
        return curIdx
    }
    getMax(){
        return this.heap[1] || 0 
    }
    getMin(){
        return this.heap[this.findMinIndex()] || 0
    }
}

// solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])