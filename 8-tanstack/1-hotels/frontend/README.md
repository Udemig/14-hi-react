# Kütüphaneler

- react-router-dom
- @tanstack/react-query
- formik
- yup
- lucide-react
- react-toastify
- tailwindcss

# Tanstack Query

- Tanstack Query, react projelerinde asenkron state (api'dan gelen veri) yönetimini büyük ölçüde kolaylaştıran bir kütüphanedir.
- API isteklerini, cache'i, loading/error durumlarını ve otomatik yeniden istek atma sürecini bizim yerimize yönetir

## useQuery

- queryKey: Sorgu Anahtarı
- queryFn: Sorgu Fonksiyonu
- olmak üzere 2 parametre alır ve tanımlandığı component'ın yüklenme anında (useEffect) otomatik olarak queryFn'de yazılan sorguyu çalışıtırır ve api'dan gelen yanıtın isLoading/error/data state'lerini oto olarak yönetir

- useQuery api'dan aldığı cevabı cache'de tutar bu da demek oluyorki istersek 10 component'a useQuery ile aynı endpointe istek atalım bu isteklerden sadece ilki api ulaşır ve ilk istekten alınan yanıt cache'de saklanır, tanstack diğer 9 component'a api'a istek atmak yerine cache'deki veriyi kullanır, bu sayede api isteklerinin state'ini yönetirken redux'a göre çok daha az kod yazarak aynı sonucu alabiliriz.

- useQuery ile yapılan istek hata aldığında, doğrudan hata state'ini güncellemek yerine olası bir anlık sunucu hatanın önüne geçebilmek için 3 kez daha aynı yere istek atıp 3.denemede de olumsuz yanıt alırsa hata state'ini günceller (retry)
