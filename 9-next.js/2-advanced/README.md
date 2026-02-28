# Parallel Routes

- Parallel Routes, aynı anda birden fazla bağımsız sayfayı aynı layout içerisinde ekrana basmamıza yarar.
- parallel olarak ekrana basılacak sayfalar `@slot` formatında tanımlanır. (`@table`)
- oluşturulan slot'lar layout'a prop olarak gönderilir
- bu sayede layout içerisinde birden fazla sayfayı parallel olarak ekrana basabiliriz

# Neden component oluşturma yerine parallel routes ile sayfa oluştururuz?

| Normal Component  | Sayfa Component   |
| ----------------- | ----------------- |
| SSR desteği yok   | SSR desteği var   |
| SSG desteği yok   | SSG desteği var   |
| metadata yok      | metadata var      |
| middleware yok    | middleware var    |
| loading&error yok | loading&error var |

# Intercepting Routes

- Intercepting routes, kullanıcı deneyimini arttırmak amacıyla modal tabanlı navigasyon sağlar.

- Bu sayede farklı bir sayfa içeriğini kullanıcıyı bulunduğu sayfadan ayırmadan gösterebiliyoruz bu da daha akıcı bir deneyim sağlar.

# Images

- Normal img elementi yerine next.js Image component'ını kullanarak resimleri çok daha optimize bir şekilde ekrana basabiliriz

# Import

## Relative İmport

- dosya konuma bağlı olarak `../../` ifadeleriyle kullandığımız yöntem

## Absolute Import

- Import yolunda `@` kullandığınızda yol olarak src'ye gidersiniz
- Bu yöntemle yapılan importylar sayesinde dosya konumunu değiştirsek bile import yolunu değiştirmeye gerek kalmaz

````jsx
// relative import
import { data } from "../../../../utils/constants";

// absolute import
import { data } from "@/utils/constants";
```
````

# Font

- Next.js resimlerde olduğu gibi fontlar içinde optimizasyon yöntemlerine sahiptir

## Remote Font

- Next.js'de googe fonts'dan alucağımız fontları `next/fonts/google` adresinden import eder ve kurulumunu yaparız

## Local Font

- Projemize dahil ettiğimiz bir otf/ttf dosyasını `LocalFont()` fonksiyonu ile kurulumunu yapabiliriz.

- Fontların kurulumunu yaptıktan sonra kullanmak için en iyi yol variable'larını projeye tanıtmak ve ardından `@theme` ile tailwind'e uyumlu hale getirmektir. Bundan sonra fontları istediğimiz metinlerde kullanabiliriz

# Rendering Yöntemleri

## Client Side Rendering (CSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde `boş html dosyası` ve `javascript dosyası` indirir. İndirdiği js kodları `kullanıcının cihazında` çalışır, html dosyasınının içi dolar ve kullanıcı sayfa içeriğini görür

## Server Side Rendering (SSR)

Bu yöntemde kullanıcı sayfaya girdiğinde js kodu `sunucuda` çalışır ve html içeriğini sunucu oluştur ve kullanıcı sadece `dolu html dısyasını` indir ve sayfa içeriği görünür

- Bu iki yöntemi karşılaştırdığımızda SSR, hem SEO hem Performans açısından daha iyidir

# Component Çeşitleri

## Server Component

- Next.js'de varsayılan component türüdür.
- Yeni bir component oluşturuduğunda direkt server component olarak oluşur.
- Bu component'ın içeriği `SSR` ile render olur
- Hem SEO hemde performans açısından daha iyidir.
- Kullanıcı etkileşimleri takip edilemez ve hook'lar kullanılamaz.

## Client Component

- Bir component'ın en üst satırına `use client` ifadesini yazarsanız client component olur.
- Bu component'ın içeriği `CSR` ile render olur
- Kullanıcı etkileşimleri izlenebilir ve hook'lar kullanılabilir

## Özetle

- Sonuç olarak: server component'lar daha performanslı oldupu için projelerimizde olabildiğince çok server component kullanmaya çalışıcaz sadece zorunda kaldığımız durumlarda (kullanıcı etkileşimini izleyecekse veya hook kullanıcaksak) client component kullanırız

- Not: Next.js bizden olabildiğince çok server component kullanmamızı istediği için ğer bir sayfa içeirisnde kullanıcı etkileşimi veya hook kullanımı gereken bir yer varsa bütün sayfayı client compoent'a çevirmek yerine ilgili kısmı ayrı bir client component yaparız ve sayfa server component kalmaya devam eder.

## İç İçe Kullanım

- `Aynı türden` iki component'ı iç içe kullanmakta bir problem yoktur

- Bir `server component` içerisinde `client component` kullanmakta bir problem yok

- Bir `client component` içerisinde `server component` kullanırsanız server component özelliklerini kaybeder ve client'a dönüşür

- Bir `HOC client component` içerisinde `server component` kullanırsak server component özelliklerini kaybetmez

# Data Fetching

- Next.js api'dan alınan veriyi cache'de tutar ve api isteği kısa süre içerisinde tekrar atılırsa api'a tekrar istek atmak yerince cache'de tutulan veriyi kullanır

- Bu sayede:
- - ilk isteği arıdan atılan bütün isteklerde cavap beklemeye gerek kalmaz > daha hızlı
- - api'a gereksiz istek gitmez > daha az maliyetli
- - asenkron state'ler için context / redux / tanstack gibi yöntemlere gerek kalmaz

- Next.js varsayılan olarak bütün api isteklerini cache'ler ama bazen biz cachelmesini önlemek isteyebiliriz. Bu durumda fetch methodunun ayarlını buna göre yaparız.

# Next.js Methods

## useRouter

- sadece `client` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | replace() | push() | refresh()

## redirect

- sadece `server` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- genelde yetkilendirme için kullanırız

## notFound

- hem `client` hemde `server` component'larda kullanabilirsiniz
- ekrana 404 sayfasını basar

## usePathname

- sadece `client` component'larda kullanılabilir
- url'den kullanıcının bulunduğu adresi getirir

## useParams

- sadece `client` component'larda kullanılabilir
- url'deki parametrelere erişmemizi sağalar
- server component'larda parametreler component'e prop olarak gelir

## useSearchParams

- sadece `client` component'larda kullanılabilir
- url'deki arama parametrelerine erişmemizi sağalar
- server component'larda arama parametreleri component'e prop olarak gelir

# Form

- Normal şartlarda formlarda bolca kullanıcı etkileşimi izlememiz gerektiğimdem formları client component olarak oluşturmamız gerekir
- Ama server component client component'lara göre daha avantajlı olduğundan dolayı server action yöntemini kullanarak form içerisindeki veriye erişme ve form gönderilince fonksiyon çalıştırma işini server component'larda yapabiliriz
- Eğer formda hata yönetimi istiyorsanız server action kullanma şanısınız yok o zaman mutlaka client component kullanılmalı

# Static Site Generation (SSG)

- SSG, next.js'in build (derleme) sırasında sayfaları önceden html olarak üretip sunucuda saklamasıdır

- Kullanıcı siteyi ziyaret ettiğinde sayfalar anında ve çok hızlı bir şekilde sunulur çünkü önceden hazırlanmıştır

### Static Sayfa

- Build anında html'i hazırlanıp sunucuda saklanır, kullanıcı sayfaya girdiğinzde tekrara hazırlamadan direkt kullanıcıya sunulur
- Varsayılan olarak url parametresi olmayan bütün sayfalar statik sayfa olur

### Dinamik Sayfa

- Kullanıcı sayfaya girdiği anda html'i hazırlanıp sunulan sayfalardır.
- Varsayılan olarak url parametresi olan sayfalar dinamik sayfa olur.

## Static Bir Sayfayı Dinamik Hale Getirme (revalidate | dynamic)

- Next.js varsayılan olarak parametreye sahip olmayan bütün sayfaları statik yapar
- Bazen bi static sayfada gösterilen verilerin güncellenenebiliceğinden ve kullanıcıya eski içerik göstermek istemediğinden statik sayfaları dinamik sayfaya çevirmek isteyebiliriz.
- Bunun için 2 yöntem vardır
- revalidate: statik olan sayfanının belirli aralıklarla yeniden oluşturulmasını sağlar
- dynamic: statik sayfayı tamamen dinamik hale çevirir

## Dinamik bir Sayfayı Statik Hale Getirme (generateStaticParams)

- generateStaticParams, dinamik bir sayfayı statik hale getirir.
- build sırasında çağrılan dinamik route'lar için bir parametre listesini return ederiz ([{id:1},{id:2},{id:3}])
- Next.js de bu listesdeki her bir parametre için o detay sayfasının statik bir versiyonunu oluşturur.
- Genelde içeriği çok değişmeyen detay sayfalarında (blog detay, portfolya proje sayfası, tarif detay) veya bir çok ürüne sahip bir sitenin sadece propüler ürünleri için bu yöntemi kullanabiliriz.

## Fullstack Framework

- Next.js ile hem frontend hem backend kodlarını tek bir proje içerisinde yazabiliyoruz
- Backend route'u oluşturmak için `api` isminde bir klasör oluşturmak yeterlidir.
