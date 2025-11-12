# Memorization

React'te memorization, bileşenlerin veya fonksiyonlarından gereksiz yere yeniden çalıştırlmasını (render edilmesini) öncelemek için kullanılan bir performans optimizasyonu tekniğidir.

## Temel Mantık

Eğer bir bileşenin veya fonksiyonun girdileri değişmiyorsa (parametre , prop) sonuç da değişmez -- o zaman react'ın aynı işlemi yeniden yapmasına gerek yoktur

## Yöntemler

1. useMemo()
2. React.memo()
3. useCallback()

### useMemo - Hesaplanmış Değerleri Hatırlamak

- useMemo, yoğun hesaplama yapan fonksiyonlarrın sonucunu cache'ler.
- Ve aynı hesaplama tekrar gerektiğinde yeniden hesaplamak yerine cache'deki cevabı kullanır.

### React.memo() - Component Gereksiz Render Olmasın

- Component'ların aldığı prop değişmediği müddetçe render olmasının önüne geçer
- Kapsayıcı elementlerinde render olmasındna dolayı, alt elementlerin renderını engellemek için kullanılır

### useCallback

- Normak şartlarda bir fonksiyon her render sırasında yeniden oluşturulur buda bellekte farklı bir referansa sahip olmasına sebep olur.
- Bundan dolayı bu fonksiyonu react.memo kullanan bir component'a prop olarak gönderdiğimizde fonksiyon her defasında farklı bir referansa sahip olucağından react.memo() görevini yapamaz.
- useCallback ile bağımlılık dizisindeki değer değişmediği müddetçe her render sırarında fonksiyonun yeniden oluşmasının önüne geçer

# Javascriptte veri türleri ikiye ayrılır

1. Primitive Types

- Değer üzerinde saklanır ve kopyalanır
- Hafızada sabit bir alan kaplar
- Bellekte değişkenin kendisi saklanır
- Bİr değişkene farklı bir değişkenin değeri atanırsa kopyasını alır ve yeni değişkene değişiklik yapılırsa bu orjinalini etkilemez.
- string, number, boolean, null, undefined

2. Non-Primitive (Refference) Types

- Referans üzerinde saklanır ve değerlerleri değiştirenbilir.
- Bellekte değişkenin referansı saklanır
- object, array, function, class
