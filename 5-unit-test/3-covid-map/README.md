# Kütüphaneler

- axios
- react-router-dom
- lucide-react
- tailwindcss
- millify
- react-simple-maps
- @reduxjs/toolkit
- react-redux
- react-testing-library
- jest

# Kaynaklar

- Toplam İstatistikleri API:
- - https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground/apiendpoint_191c58c7-a995-4024-a5ee-41043d79e542

# Selector Anatomisi

- Selector, test ortamında renderlanan elementleri akmak için kullandığımız methodlardır.
- Seçiciler temelde 3 ana parçadan oluşur.

1. Yöntem

- get: ekrandaki elementi alır, bulamazsa hata verir
- - bir elementin ekranda olduğunu kontrol etmek için kullanırız.

- query: ekrandaki elementi alır, bulumazsa hata vermez ve null döndürür.
- - ekranda olmadığını kontrol etmek istediğimiz elemanlar için kullanırız

- find: ekrana asenkron olarak basılan elementleri almak için kullanılır
- - eğer api isteğinin ardından ekrana asenkron olarak basılan bir element varsa bu yöntemi kullanırız

2. All ifadesi (Opsiyonel)

- Eğerki ekranda aynı koşula uyan birden fazla element varsa ve hepsini almak istiyorsak kullandığımız yöntemin devamına `All` ifadesi ekleriz.
- All ifadesini kullanırsak dönen cevap her zaman bir dizi olur.
- `getAllBy` `queryAllBy` `findAllBy`

3. Sorgu

- Hangi yöntemle elementi seçiceğimizi belirleyen methodlardır.
- ByRole
- ByText
- ByTestId
- ByAltText
- ByTitle
- ByDisplayValue
- ByPlaceholderText
- ByLabel

- Artık yukarıdaki 3 parçayı istediğiniz gibi birleştirebilirsiniz
- `queryByTitle()` | `findAllByText` | `getAllByTestId()`
