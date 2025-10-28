# React Router DOM

- react-router-dom, react uygulamalarında sayfalar oluşturabilmemizi ve bu sayfalar arasınd ageçiş yapabilmemizi sağlayan kütüphane
- SPA(Single Page Application) mantığında URL değiştiğinde sayfa yeniden yüklenmeden içeriğinin güncellenmesini sağlar

# Kurulum

1. Pakedi Dahil Et

- `npm i react-router-dom`

2. App.jsx içeriinde import et

`import {BrowserRouter, Routes, Route} from "react-router-dom`

## React Router Elementleri

- BrowserRouter: Uygulamanın router (yönlendirme) sistemini başlatır. Javascriptteki window nesnesi üzeirinden çalışır.

- Routes: Tüm route bileşenlerini kapsar, her url değiştiğinde uygun route'u bulup kullanıcıya gösterir.

- Route: Bir url ile eşleştiğinde hangi bileşenin kullanıcıya gösterileceğini belirler.

- Link: Proje içerisindeki yönlendirme için kullanıcaz.

- NavLink: Link component'ı ile aynı görevi yapar. Link'ten farklı olarak kullanıcının bulunduğu sayfanın linkine active class'ı verir.
