/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı dırımlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz.
  
 * Tanım: (a:string, b?:string) => bu kullanımda a zorunlu b ise opsiyonel olur
 !!!! Opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez
*/
function exaFunction(par1, par2, par3) {
    console.log("1.parametre", par1);
    console.log("2.parametre", par2);
    console.log("3.parametre", par3);
}
exaFunction(123, "selam", true);
exaFunction(123, "selam");
exaFunction(123);
exaFunction(123, undefined, true);
// Örnek
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "".concat(zaman, " ").concat(isim);
    }
    return "Merhaba, ".concat(isim);
};
console.log(karsilama("Ahmet", "İyi akşamlar"));
console.log(karsilama("Ahmet"));
