// Function / Type / Interface'lerde olduğu gibi class'ların yeniden kullanılabilir olması için generic kullanırız

class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["a", "z", "f", "x", "c", "e"]);
console.log(arr1.sortData());

const arr2 = new Sorter<number>([9, 5, 6, 4, 3, 2, 1, 7]);
console.log(arr2.sortData());
