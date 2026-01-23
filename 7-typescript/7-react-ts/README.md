# Typescript ile React Yazımı

## Config Dosyaları

- Typescript ile alakalı ayarları yapmamızı sağlayan 3 adet tscongfig.json dosyası var

## Dosya Uzantısı

- `jsx` dosyası yerine `tsx` kullanılır
- `js` dosyası yerine `ts` kullanılır

## Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun / parametrenin / component'ın mutlaka ve mutlaka tipi tanımlanmalı
- Otomatik tip algılama özelliğe mümkünse hiç kullanılmamalı

## Hooks

- React hooklarını kullanırken bir veri tutuyorsak mutlaka tutulan verinin tip tnaımlanmalı (useState, useReducer, useContext, useRef)

## Element Tipi

- Her jsx elementinin kendine has bir tipi vardır.
- Element tiplerini tanımlarken hep aynı syntaxı kullanırız
- `HTML[Etiket Rolü | Etiket İsmi]Element`
- button: `HTMLButtonElement`
- input: `HTMLInputElement`
- form: `HTMLFormElement`
- h1,h2,h3..: `HTMLHeadingElement`
- div: `HTMLDivElement`

## Component Tipi

- React'ta en sık kullandığımız yapılar olan component'lar birer fonksiyondan meydana gelir
- Fonksiyon tipi tanımlarken iki şeyin tipini mutlaka tanımlarız:
- - paramatre: component'ın aldığı prop tipi tanımlanır
- - return: component'ın her zaman return ettiği veri jsx elementi olduğu için bunun tipi tnaımlanır

## Event Tipi

- onClick / onChange / onSubmit gibi olaylarda çalıştırdığımız fonksiyonlara olay verisini içeren event parametresi gelir.
- event parametresinin değerlerine erişmek için tipinin tanımlanması gerekir

- her olayın kendine özel tipi vardır:
- - onClick: `MouseEvent`
- - onChange: `ChangeEvent`
- - onSubmit: `FormEvent`

- event tipleri olayın hangi elementte gerçekleştiğini generic olarak alır
- - `FormEvent<HTMLFormElement>`
- - `ChangeEvent<HTMLInputElement>`
- - `MouseEvent<HTMLButtonElement>`

## Tiplerde Import / Export

- Değişkenlerde olduğu gibi tipleride farklı bir dosyada kullanmak istediğimizde export edebiliyoruz
- Değişkenlerden tek farkı import ederken önüne type ifadesi eklenmeli
