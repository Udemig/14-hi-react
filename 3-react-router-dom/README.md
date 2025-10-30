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

## Dynamic Routes

- Sayfa içeriğinin url'deki parametreye göre dinamik olarak değişen detaylat sayfalarında dynamic routes denir.
- Bu route'ları tanımlarken aldıkları parametreleri `:parametre_ismi` şeklinde tanımlarız
- Component içerisinde bu urş'deki parametreye erişmek için `useParams` hook'Unu kullanırız
- Bu sayede youtube'un video sayfası, amazone'un ürün detay sayfası gibi içeriği dinamik olarak değişen detay sayfaları oluşturabiliriz

## 404 Sayfası

- Kullanıcı tanımlamadığımız route'larda birine gitmeye çalışırsa ona 404 sayfası göstermek isteriz
- 404 sayfası tanımlamak için route'ların altına path değeri olarak `*`'a sahip olan yeni bir route oluştururuz

## useNavigate()

- fonksiyon içerisinde link elementinin görevini yaparak kullanıcıyı yönlendirmeye yarar
- kullanmak için öncelikle component'da import edip kurulumunu yapmak gerekir

## useParams()

- url'deki parametreler erişmemize yarar
- route tanımlarkene : ile tanımladığımız parametrelere bu hook ile erişir,z

## useLocation()

- url ile alakalı detaylara erişmemize yarar

## Link veya useNavigate ile State aktarma

- Kullanıcıyı bir sayfadan diğerine yönlendirirken beraberinde veri göndermek isterksek state özelliğini kullanabiliriz.
- `navigate("/not-found", { state: "ürün bulunamadı" })`
- `<Link to="/not-found" state="ürün bulunamadı" />`
- state özelliği ile gönderilen veriye sayfa içerisinde `useLocation` hooku ile erişebiliriz.

## Nested Routes

- Bir kapsayıcı route içerisinde başka route'lar oluşturulmasına `Nested (İç İçe)` denir.
- Bu özellik sayesinde sadece belirli sayfalara özel ortak element/özellik tanımlanabilir

## useSearchParams()

- url'deki query parametrlerine erişimimizi ve yeönetimimizi sağlayan hook.
