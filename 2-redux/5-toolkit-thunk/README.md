# Thunk

- Aksiyonların assenkron işlemler yapmasını sağlayan redux middleware'i
- Aksiyonların içerisinde api isteği atıp gelen cevaba göre reducer'a haber göndermemizi sağlar
- Klasik redux'ta thunk aksiyonun 2 fonksiyonu iç içe yazarak oluşturyoruz
- Kasik redux'ta thunk'I kullanabilmek için kütüphanesini yüklememiz gerekir

# Toolkit Thunk

- Toolkit ile birlikte thunk kullanımı daha pratik hale geliyor.
- Toolkit store'u içerisinde thunk entegre bir şeklide gelir yani kuruluma gerek yok
- `createAsyncThunk` fonksiyonu ile asenkron thunk aksiyonları oluşturabiliyoruz
- `createAsyncThunk` fonksiyonu içerisinde sadece atılıcak olan api isteğini yazarız, yüklenme durumunda reducer'a haber verme işlemi otomatik olarak geçekleşir
