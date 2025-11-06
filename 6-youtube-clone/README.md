# Kütüphaneler

- react
- axios
- react-router-dom
- react-icons
- tailwindcss

# Kaynaklar

- API: https://rapidapi.com/ytjar/api/yt-api

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkesle paylaşmak istemeyeceğiniz ve githuba gönderilmessini engelliyeceğiniz değişkenlerdir.
- Projeyi yayınladıktan sonra bu değerleri koda müdahale etmeden değiştirebiliyoruz bu yüzden sadece hassas verileri değilde projeyi yayınladıktan sonra değiştirmek isteyebileceğimiz bazı değişkenleride bu yöntemle tanımlayabiliriz

## Nasıl Tanımlanır ?

- Proje içerisinde bir `.env` isimli dosya oluştururuz.
- `VITE_DEĞİŞKEN_İSMİ=değişkenin_değeri`
- .env dosyasında sadece string değerler tanımlanabilir
- Proje içerisinde bu değişkenlere erişmek için `import.meta.env.DEĞİŞKEN_İSMİ` yöntemini kullanırız.
