---
name: Didiyos Landing Page
overview: Didiyos mobil uygulaması için modern, responsive bir landing page oluşturulacak. React ve Tailwind CSS kullanılarak Hero, Özellikler, Kullanıcı Yorumları, İndirme ve Footer bölümlerinden oluşan profesyonel bir sayfa tasarlanacak.
todos: []
---

# Didiyos Landing Page Planı

## Genel Bakış

Didiyos mobil uygulaması için modern ve responsive bir landing page oluşturulacak. Sayfa, kullanıcıları uygulamanın özelliklerini (event paylaşma, eventlere katılma, arkadaş ekleme) tanıtacak ve uygulamayı indirmeye yönlendirecek.

## Teknik Yapı

- **Framework**: React (mevcut)
- **Styling**: Tailwind CSS v4 (kurulu)
- **Build Tool**: Vite (mevcut)
- **Yapı**: Component-based, modüler yapı

## Dosya Yapısı

```javascript
src/
├── App.jsx (ana component)
├── components/
│   ├── Header.jsx (navigasyon barı)
│   ├── Hero.jsx (ana başlık ve CTA)
│   ├── Features.jsx (özellikler bölümü)
│   ├── Testimonials.jsx (kullanıcı yorumları)
│   ├── Download.jsx (indirme bölümü)
│   └── Footer.jsx (footer)
├── index.css (global stiller)
└── main.jsx (entry point)
```



## Bölümler ve Özellikler

### 1. Header Component

- **Dosya**: `src/components/Header.jsx`
- Sticky navigation bar
- Didiyos logosu
- Mobil menü (hamburger menu)
- Smooth scroll navigation

### 2. Hero Section

- **Dosya**: `src/components/Hero.jsx`
- Büyük başlık: "Didiyos ile Etkinliklerinizi Paylaşın"
- Alt başlık açıklama
- CTA butonları (App Store, Play Store)
- Hero görseli veya gradient arka plan
- Animasyonlu giriş efektleri

### 3. Features Section

- **Dosya**: `src/components/Features.jsx`
- 3 ana özellik kartı:
- **Event Paylaşma**: Kullanıcıların etkinlik oluşturup paylaşması
- **Eventlere Katılma**: Etkinliklere katılım ve takip
- **Arkadaş Ekleme**: Sosyal özellikler ve arkadaş yönetimi
- Her kart için ikon, başlık ve açıklama
- Hover efektleri ve animasyonlar

### 4. Testimonials Section

- **Dosya**: `src/components/Testimonials.jsx`
- Kullanıcı yorumları carousel/slider
- Kullanıcı adı, fotoğraf, yıldız puanı ve yorum
- Otomatik kaydırma veya manuel navigasyon
- En az 3-4 örnek yorum

### 5. Download Section

- **Dosya**: `src/components/Download.jsx`
- "Uygulamayı İndir" başlığı
- App Store ve Google Play Store butonları
- QR kod seçeneği (opsiyonel)
- Mobil cihaz mockup görseli (opsiyonel)

### 6. Footer Component

- **Dosya**: `src/components/Footer.jsx`
- İletişim bilgileri
- Sosyal medya linkleri
- Hızlı linkler (Gizlilik, Kullanım Şartları vb.)
- Copyright bilgisi

## Stil ve Tasarım

- **Renk Paleti**: Modern, canlı renkler (gradient kullanımı)
- **Tipografi**: Okunabilir, modern fontlar
- **Responsive**: Mobile-first yaklaşım
- **Animasyonlar**: Smooth scroll, fade-in, hover efektleri
- **İkonlar**: React Icons veya SVG ikonlar

## Uygulama Adımları

1. **Bağımlılıklar**: React Icons veya benzeri ikon kütüphanesi ekleme
2. **Component Yapısı**: Her bölüm için ayrı component oluşturma
3. **Stil Düzenlemeleri**: Tailwind CSS ile responsive tasarım
4. **İçerik**: Türkçe içerik metinleri
5. **Animasyonlar**: CSS transitions ve Tailwind animasyonları
6. **Test**: Responsive test (mobile, tablet, desktop)

## Önemli Notlar

- Tüm componentler maksimum 500 satır olacak şekilde modüler tutulacak