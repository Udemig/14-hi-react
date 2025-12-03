# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde etmemizi sağlar, yaptığımız bir çok manuel işlem için (action-types, reducer, action creator functions) hazır methodlara sahip, klasik redux'ın daha pratik versiyonu

- İçerisinde redux-thunk, redux-dev-tools paketleri kurulu olarak gelir

# Kurulum

- npm i @reduxjs-toolkit react-redux
- store'u ve slice'ı (reduce'ları) oluştur

# Klasik Redux'ta Oluşturduğumuz Yapılar

- store - reducer - action-types - action-creators

# Toolkit'de Oluşturduğumuz Yapışar

- store - slice

# Slice

- Kasik redux'ta aksiyonları, aksiyon tiplerini, reducer'ları ayrı ayrı tanımlıyorduk.
- redux toolkit içerisinde yer alan slice yapısı sayesinde tek bir noktada hepsini tanımlayabiliyoruz
