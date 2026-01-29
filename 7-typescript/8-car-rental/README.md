# Kütüphaneler

- motion
- react-paginate
- react-router-dom
- react-select
- axios
- tailwindcss
- typescript
- react

# Kaynaklar

- API: https://public.opendatasoft.com/explore/dataset/all-vehicles-model/information/?sort=year

# Proje Yayınlama Adımları

1. Projenizi Hazırlayın (Build Alınabilmeli)
2. Projeyi Github'a Yükle
3. Hosting Platformu Seç ve Deploy Edin (127.897.543.43)
4. Domain (Alan Adı) kirala ve DNS ayarlarını yap (www.carhub.com)
5. SEO İyileştirmesi

# Build (Derleme)

- Projenin dağıtıma hazır hale getirme işlemidir.
- `npm run build` ile optimize edilmiş JS ve CSS dosyaları oluşturur.

# Hosting (Barındırma)

- Frontend projesinin derlenmiş dosyalarının internet üzerinden erişilebilir hale gelmesi için bir sunucuya yüklememiz gerekir.

## Hosting Seçenekleri

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlayabiliyoruz
- Otomatik SSL sertifikası
- Otomatik CDN
- Otomatik CI/CD (Sürekli Geliştirme ve Sürekli Dağıtım/)

- Vercel
- Netlify
- AWS
- Azure
- Google Cloud
- Firebase
- Github Pages

2. Klasik Çözüm

- Kendi sunucumuzu kiralayıp, her şeyi linux komutları ile kendimiz yönetiriz
- VPS (Virtual Private Server)

- IBM
- Digital Ocean
- Contabo

# Deploy (Yayınlama)

- Projenin geliştirme ortamından sunucuya akta işlemidir
- Dist klasörünün sunucuya yüklenmesi

# Domain (Alan Adı)

- www.carhub.com
- Sunucular normalde IP adresi üzerinden erişilebilir ama ip adresleri akılda kalıcı olmadığından biz alan adlarını tercih ederiz.

- Godaddy
- Namecheap
- İsimtescil

# DNS Kayıtları

- DNS kayıtları, alan adının internette neye karşılık geldiğini söyleyen kayıtlardır.
- **A Kaydı**: Domaine girildiğinde hangi ip adresine yönlendirileceğini söyleyebiliriz
- **CName Kaydı**: Domaine girildiğinde hangi alan adına yönlendirileceğini söyleyebiliriz
- **NS Kaydı**: Domain'in hangi DNS sunucularını kullandığını belirtir

# Index

- Indexlemek, bir web sayfasının arama motorları tarafından bulunup arama motorunun veritabanına kaydedilmesi demektir.
- Indexleme gerçekleştikten sonra kullanıcılar arama sonuçlarında sitenizi görmeye başlayabilir.
- Yeni yayınladığını bir sitenin indexlenmesi 3-7 güne kada sürabilir

# SEO

- SEO (Search Engine Optimization), Türkçesiyle Arama Motoru Optimizasyonu, web sitenin Google gibi arama motorlarında daha üst sırlarda çıkması için yapılan tüm teknik ve içerik çalışmalarının genel adıdır
- SEO iyileştirmesi için yapılaciklerinizi temelde 3'e ayırabiliriz:

1. Teknik SEO

- Sitenin alt yapısı ile ilgili güncellemeleri
- - Site hızı
- - Mobil uyumluluk
- - URL yapısı (`/blog/21312` yerine `/blog/seo-nedir?` kullanılmalı)
- - SSL (`https`)
- - 404 Hataları

2. İçerik

- Sayfanın içeriğiyle alakalıdır
- - Başlıklar (H1,H2,H3)
- - Anahtar kelime kullanımı
- - Meta etiketler
- - Görsel'lerdeki alt etiketleri
- - Input'ların label'lara bağlı olması
- - Button'ların name değerlerinin olması
- - Semantik etiket kullanımı
- - Site içi linkler

3. Off Page SEO

- Başka sitelerin sana verdiği değer:
- - Backlink (başka sitelerden link almak)
- - Sosyal medya paylaşımları
- - Marka bilinilirliği

- SEO Testi için
- - https://pagespeed.web.dev/
