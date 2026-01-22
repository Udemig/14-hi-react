// Function / Type / Interface'lerde olduğu gibi class'ların yeniden kullanılabilir olması için generic kullanırız
var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var arr1 = new Sorter(["a", "z", "f", "x", "c", "e"]);
console.log(arr1.sortData());
var arr2 = new Sorter([9, 5, 6, 4, 3, 2, 1, 7]);
console.log(arr2.sortData());
