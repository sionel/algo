export type LowerBoundArgs<T> = {
  arr: T[];
  target: number;
  /** 시작 index */
  start?: number;
  /** 끝 index */
  end?: number;
  toValue: (item: T, index: number) => number;
};

/**
 * 정렬된 배열에 대해 `target`을 삽입해도 정렬상태를 유지할 수 있는 index중 가장 작은 index를 구한다.
 *
 * @example
 * const arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
 * const lb = lowerBound({ arr, target: 3, toValue: (v) => v }); // 5
 */
export function lowerBound<T>({ arr, end = arr.length, start = 0, target, toValue }: LowerBoundArgs<T>): number {
  if (start >= end) return start;
  const mid = Math.floor((start + end) / 2);
  const midValue = toValue(arr[mid], mid);

  if (midValue >= target) return lowerBound({ arr, target, start, end: mid, toValue });
  else return lowerBound({ arr, target, start: mid + 1, end, toValue });
}

export type UpperBoundArgs<T> = {
  arr: T[];
  target: number;
  toValue: (item: T, index: number) => number;
  /** 시작 index */
  start?: number;
  /** 끝 index */
  end?: number;
};

/**
 * 정렬된 배열에 대해 `target`을 삽입해도 정렬상태를 유지할 수 있는 index중 가장 큰 index를 구한다.
 *
 * @example
 * const arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
 * const ub = upperBound({ arr, target: 3, toValue: (v) => v }); // 8
 */
export function upperBound<T>({ arr, end = arr.length, start = 0, target, toValue }: UpperBoundArgs<T>): number {
  if (start >= end) return start;
  const mid = Math.floor((start + end) / 2);
  const midValue = toValue(arr[mid], mid);
  if (midValue <= target) return upperBound({ arr, target, start: mid + 1, end, toValue });
  else return upperBound({ arr, target, start, end: mid, toValue });
}

export type BinarySearchArgs<T> = {
  arr: T[];
  target: number;
  start?: number;
  end?: number;
  toValue: (item: T, index: number) => number;
};

/**
 * 정렬된 배열에 대해 이진탐색을 수행한다.
 *
 * @example
 * const arr = [1, 3, 4, 6, 8, 9, 10, 12];
 * const idx = binarySearch({ arr, target: 8, toValue: (v) => v }); // 4
 * const idx2 = binarySearch({ arr, target: 7, toValue: (v) => v }); // undefined
 */
export function binarySearch<T>({
  arr,
  end = arr.length,
  start = 0,
  target,
  toValue,
}: BinarySearchArgs<T>): number | undefined {
  if (start > end) return undefined;
  const mid = Math.floor((start + end) / 2);
  const midValue = toValue(arr[mid], mid);
  if (midValue === target) return mid;
  if (midValue >= target) return binarySearch({ arr, target, start, end: mid - 1, toValue });
  else return binarySearch({ arr, target, start: mid + 1, end, toValue });
}

/**
 * 조합
 *
 * @example
 * for (const cases of combinations([1, 2, 3, 4], 2)) {
 *   console.log(cases)
 * }
 */
export function* combinations<T>(array: T[], r: number): Generator<T[]> {
  for (let i = 0; i < array.length; i++) {
    if (r === 1) {
      yield [array[i]];
    } else {
      for (const next of combinations([...array.slice(i + 1)], r - 1)) {
        yield [array[i], ...next];
      }
    }
  }
}

/**
 * 중복조합
 *
 * @example
 * for (const cases of combinationsWithReplacement([1, 2, 3, 4], 2)) {
 *   console.log(cases)
 * }
 */
export function* combinationsWithReplacement<T>(array: T[], r: number): Generator<T[]> {
  for (let i = 0; i < array.length; i++) {
    if (r === 1) {
      yield [array[i]];
    } else {
      for (const next of combinationsWithReplacement([...array.slice(i)], r - 1)) {
        yield [array[i], ...next];
      }
    }
  }
}

/**
 * 순열
 *
 * @example
 * for (const cases of permutations([1, 2, 3, 4], 2)) {
 *   console.log(cases)
 * }
 */
export function* permutations<T>(array: T[], r: number): Generator<T[]> {
  for (let i = 0; i < array.length; i++) {
    if (r === 1) {
      yield [array[i]];
    } else {
      for (const next of permutations([...array.slice(0, i), ...array.slice(i + 1)], r - 1)) {
        yield [array[i], ...next];
      }
    }
  }
}

/**
 * 중복순열
 *
 * @example
 * for (const cases of product([1, 2, 3, 4], 2)) {
 *   console.log(cases)
 * }
 */
export function* product<T>(array: T[], r: number): Generator<T[]> {
  for (let i = 0; i < array.length; i++) {
    if (r === 1) {
      yield [array[i]];
    } else {
      for (const next of product(array, r - 1)) {
        yield [array[i], ...next];
      }
    }
  }
}
