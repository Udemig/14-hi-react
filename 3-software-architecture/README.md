# Yazılım Mimarisi

- Bir yazılımın iskelet planıdır.
- Bir binanın mimarı planı, nasıl odaları, kolonları, elektrik-su tesisatını belitliyorsa, yazılım mimariside yazılımın:

* Hangi parçalardan oluşacağını
* Bu patrçların nasıl iletişim kuracağını
* Hangi tekenolojilerin kullanılacağını
* Performansın ve ölçeklenebilrliğin nasıl sağlacağını
* Güvenliğin nasıl işleyeceğini
  belirleyen en üst seviye tasarımdır

# Neden Gerekli?

- Daha hızlı geliştirme
- Daha kolay bakım
- Büyüdükçe çökmeyecek şekilde ölçeklendirme
- Performanslı ve güvenli tutmak için

# Yazılım Mimarisi Türleri

1. Monolit Mimari
2. Mikroservis Mimarisi
3. Katmanlı Mimari (Layered Architecture)
4. Olay Tabanlı Mimari (Event-Driven Architecture)

- Bunlar morden dünyada en çok kullanılan yapılardır.

## Monolit Mimari

- Tüm uygulama tek bir bütün olarak çalışır
- Backend, frontend, ürün işlemleri kullanıcı işlemleri... hepsi aynı kod tabanında.
- Örn: Bütün amazon websitesinin tek bir react projesinde yazılması.

## Microservices Mimari

- Uygulama birçok küçük, bağımsız servislerden oluşur.
- Her servis kendi veritabanına ve kendi kod tabanına sahiptir
- Örn: Amazon websistesinin (Kullancıların görüceği kısım, Adminlerin görüceği kısım, Satılcarın görüceği kısım) birer ayrı frontend proejsi olarak yazılır
- Kullancıların görüceği kısım: React
- Adminlerin görüceği kısım: Angular
- Satıcıların görüceği kısım: HTML,CSS,JS

## Katmanlı Mimari (Layered Architecture)

- Kod katmanalara bölünür.
- UI
- Business (İş Mantığı)
- Data (DB)

- Katmanlı mimarinın bazı türleri: MVC, MVVM..

- - MVC (Model-View-Controller)
- - - Model: Veri yapısı ve veriyi yönetini kodları içerir.
- - - View: Kullanıcı arayüzü kodlarını içerir.
- - - Controller: İş mantığı ile alakalı kodları içerir.

## Olay Tabanlı Mimari (Event-Driven Architecture)

- Sistem, olaylar aracılığıyla bibirine haber gönderir.
- "Sipariş oluşturuldu", "kullanıcı kayıt oldu" gibi event'ler üretilir.

## Doğru mimari terchinin faydaları?

1. Performans: İyi tasarlanmış bir mimari ile sistemin, kaynakları verimli kullanılması sağlanabilir.
2. Ölçeklenebilir.
3. Bakım ve Geliştirilebilirliği Kolaylaştırır.
4. Ekipler arassı iş bir ve verimlilik artar.
5. Maaliyet
6. Yeniden kullanabilirlik
7. Esneklik

## Ölçeklendirme (Scaling)

- Kısa ve Net Tanım
- Ölçeklendirme, bir uygulamanın trafik, kullanıcı, veri veya işlem yükü arttırıldığında performanını koruyarak çalışmaya devam etmesini sağlayacak şekilde yapılandırımasıdır.

- Frontend dünyasında ölçeklendirme:
- Daha fazla kullanıcı => daha fazla istek => daha fazla => daha fazla yönetimi

## Tasarım Deseni (Design Patterns)

**Tasarım desenleri**, sık karşılaşılan yazılım problemleri için hazırlanmış **genel çözüm şablonlarıdır**. Kod değildir; **nasıl tasarlayacağını öğreten rehberler** gibidir.

3 ana gruba ayrılır:

---

## 🟩 1) Creational Patterns (Nesne oluşturma desenleri)

Nesne oluşturmayı **daha esnek ve kontrollü** hale getirir.

- **Singleton** → Tek bir nesne
- **Factory** → Nesne üretmeyi fabrikaya bırak
- **Builder** → Karmaşık nesneleri adım adım oluştur
- **Prototype** → Nesne kopyalama
- **Abstract Factory** → Uyumlu nesne setleri üret

---

## 🟧 2) Structural Patterns (Yapısal desenler)

Sınıfların ve nesnelerin **birbirine nasıl bağlanacağını** düzenler.

- **Adapter** → Uyumsuz yapıları uyumlu yap
- **Facade** → Karmaşık sistemi basitleştir
- **Decorator** → Nesneye dinamik özellik ekle
- **Proxy** → Araya bir kontrol katmanı koy
- **Composite** → Ağaç yapıları yönet
- **Bridge** → Soyutlama ve implementasyonu ayır
- **Flyweight** → Hafıza tasarrufu

---

## 🟦 3) Behavioral Patterns (Davranışsal desenler)

Nesnelerin **iletişim şekillerini** düzenler.

- **Strategy** → Değiştirilebilir algoritmalar
- **Observer** → Olay olduğunda haberdar et
- **Command** → İşlemleri komut nesnesine dönüştür
- **State** → Davranışı duruma göre değiştir
- **Mediator** → Nesneler merkez üzerinden konuşur
- **Chain of Responsibility** → İstek sırayla işlenir
- **Iterator, Template, Visitor, Memento** → çeşitli kontrol/iletişim yapıları

---

### 📌 En sade haliyle:

- **Creational** → Nasıl oluştururum?
- **Structural** → Nasıl bağlarım?
- **Behavioral** → Nasıl iletişim kurdururum?

# S.O.L.I.D Prensipleri

- S - Single Responsibility Principle (Tek Sorumluluk Prensibi)
- O - Open/Closed Principle (Açık/Kapalı Prensibi)
- L - Liskov Substitution Principle (Liskov Yerine Geçme Prensibi)
- I - Interface Segregation Principle (Arayüz Ayrımı Prensibi)
- D - Dependency Inversion Principle

# 12 Factor App İlkeleri

1. **Codebase** – _Tek kod tabanı, birçok deploy_
2. **Dependencies** – _Bağımlılıkları açıkça bildirme ve izole etme_
3. **Config** – _Konfigürasyonları ortam değişkenlerinde tutma_
4. **Backing Services** – _Dış servisleri ek kaynak (resource) olarak ele alma_
5. **Build, Release, Run** – _Build → Release → Run aşamalarını ayırma_
6. **Processes** – _Uygulamayı bir veya daha fazla stateless süreç olarak çalıştırma_
7. **Port Binding** – _Servisleri port üzerinden sunma (embedded server)_
8. **Concurrency** – _Süreci çoğaltarak ölçeklendirme (process model)_
9. **Disposability** – _Hızlı başlama ve düzgün kapanma (graceful shutdown)_
10. **Dev/Prod Parity** – _Geliştirme, test ve üretim ortamlarını olabildiğince benzer tutma_
11. **Logs** – _Logları olay akışı (event stream) olarak ele alma_
12. **Admin Processes** – _Yönetim/operasyon komutlarını tek seferlik işlemler olarak çalışma ortamında çalıştırma_
