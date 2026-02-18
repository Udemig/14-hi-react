# Next.js Routing

- Bir next.js projesinde routing (sayfalama) için 2 farklı yöntem vardır:
- - App Router (Önerilen Yöntem): v14 ile birlikte gelen
- - Pages Router (Eski Yöntem): v13 öncesinde kullanılıyordu

# App Router (Önerilen)

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar `/src/app` klasörü içerisinde olmalıdır
- `/src/app` klasörü içerisinde tanımlanan ve içerisinde `page.jsx` dosyası olan bütün klasörler sayfa olarak algılanır
- `page.jsx` dosyas içerisinde bir react component'ı tanımlayıp export ederiz
- `page.jsx` dosyasını kapsayan klasörün adında yeni bir route oluşur
- next.js page.jsx olarak tanımlanan sayfaları tespit edip otomatik olarak kendi router'ın ekler

# Nested Routes - İç İçe Yollar

- örn:
- /profile > profilini görüntüle
- /profile/friend > arkadaşlarını görüntüle
- /profile/edit > profilini düzenle

# Dynamic Routes - Dinamik Yollar - Route Parametreleri

- URL'deki parametreye göre sayfa içeriğinin değiştiği sayfalar
- örn: `/products/10` `/videos/fdıh2364` `/cars/tesla`
- Bir route parametresi tanımlamak için react-router-dom'da `:parametre_ismi` formatı kullanırdık nextjs'de ise `[parametre_ismi]`
- örn: `/products/[id]` `/videos/[key]` `/cars/[brand]`
- Component içerisinde url'deki parametrelere erişmek için component'a otomatik olarak gelen propu kullanırız

# Link

- Next.js'in kendi Link component'ı vardır.
- a etiketi yerine kullanılır
- `href` propu ile yönlendireceğimiz adresi söyleriz

# Catch All Segments - Birden Fazla Parametre

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-20
- `/docs/[...slug]`

# Route Group

- Çok fazla route olduğu seneryoada route'ları kategorize edip erişimini kolaylaştırmak için route'ları gruplandırmak isteyebiliriz

- Route'ları normal bir klasör içerisine koyarsak klasör ismi url'i etikler ama klasör ismini `()` içerisine yazarsak url'e herhangi bir etkisi olmaz

# Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durumunu belirlemek için kullandığımız bileşendir

- Bir sayfa grubunu veya projedeki bütün sayfaları kapsayabiliriz.

- Layout dosyasını oluşturduğumuz konuma bağlı olarak etkilediği sayfalar değişir
- - Eğer app klasörü içerisinde oluşturursak bütün sayfalara etki eder
- - Eğer route grubu içerisinde oluşturursak sadece o route grubundaki sayfalara etki eder

# Template

- Layout ile aynı özelliklere sahiptir, tek farkı sayfa geçişlerinde state yenilenir

# 404 Sayfası

- Next.js in kendi varsayılan 404 sayfası vardır
- Eğer bu 404 sayfasını özelleştirmek istersek `not-found.jsx` isminde bir dosya oluşturup kendi 404 sayfamızı dizayn edebiliriz

# Özel Dosyalar

- `page.jsx` > sayfa tanımlamak için kullanılır
- `layout.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak i.k
- `template.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak i.k
- `not-found.jsx` > 404 sayfasını özelleştirmek i.k

- `loading.jsx`
- - bir bileşen asenkron işlemi beklediği süre boyunca otomatik olarak ekrana gelir
- - loading dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder

- `error.jsx`
- - bir bileşen içerisinden hata fırlatıldığında otomatik olarak ekrana gelir
- - hata bilgilerini ve component'ı yeniden renderlamaya yarayan fonksiyonu prop olarak alır
- - mutlaka sayfanın üst kısmına `use-client` yazılmalı
- - error dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder

# Metadata

- Klasik react projelerinde bütün sayfalara index.html üzerinden ortak metadata tanımı yapabiliyorduk ama her sayfaya ayrı metadata tanımlamak mümkün değildi, bu durum da seo anlamında - yazıyordu

- Next.js'de react'dan farklı olarak her sayfaya ayrı bir metadata tanımlama şansımız var bundan dolayı SEO anlamında klasik bir react projesine göre çok daha iyi puan elde ederiz.

- Bir sayfanın metadatasını tanımlamak isstiyorsak o sayfada bir `metadata` isminde bir nesne tanımlayıp export etmeliyiz

- Detay sayfası gibi sayfaların metadatalarının da dinamik olmasını isteriz bunun için `generateMetadata` fonksiyonu kullanılır
