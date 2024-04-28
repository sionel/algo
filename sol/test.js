let inversions = 0; // 이 변수는 전역 범위에서 역전 수를 추적합니다.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = arr.length >> 1
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    debugger
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
            inversions += left.length - leftIndex;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function countInversions(arr) {
    let copy = [...arr];
    mergeSort(copy);
}

function solution(A) {
    inversions = 0;
    countInversions(A);
    return inversions > 1000000000 ? -1 : inversions;
}

solution([-1, 6, 3, 4, 7, 4])