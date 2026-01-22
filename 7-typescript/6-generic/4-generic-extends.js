var x = {
    foo: "asd",
    bar: "feg",
};
var y = {
    foo: 123,
    bar: 456,
};
// const z: Container<boolean> = {
//   foo: true,
//   bar: false,
// };
// Örnek
// Uygulmanın ismi | Api URL gibi çzelliklerini saklayan bir sınıf tanımlayalım
// Tabi bu özelliklerin değerleri birbirinden farklı olucağı için generic kullanalım
var AppConfig = /** @class */ (function () {
    function AppConfig(key, value) {
        this.key = key;
        this.value = value;
    }
    AppConfig.prototype.getValue = function () {
        return this.value;
    };
    AppConfig.prototype.updateValue = function (newValue) {
        this.value = newValue;
    };
    return AppConfig;
}());
var app_name = new AppConfig("APP_NAME", "Didiyos");
new AppConfig("VERSION", 23.2);
new AppConfig("IS_IOS_APP", true);
app_name.updateValue("Twitter");
console.log(app_name.getValue());
