# Temel Kavramlar

### State

- Component'ın verisini tutmak ve yöntmek için kullanılır.
- Her değiştiğinde component yeniden render olur.

### Prop

- Veriyi bir bileşenden diğerine aktarma yöntemidir.
- Bir veriyi üst bileşenden alt bileşene iletmek.

### Prop Drilling

- İç içe bir çok bileşen olduğu durumda en üstteki bileşenden alt bileşene propu gönderdiğimiz seneryo
- Yani prop aktarma işlemi ard arda birkaç kez gerçekleştiğinde buna prop drilling deriz

### Context

- Component'lardan bağımsız noktalarda veri depolamımızı sağlar
- Context yapısında tutulan veri bütün component'lar tarafından erişlebilir bu da prop drilling'i önler.

### Context Neden En İyi Çözüm Değil?

- Context yapısı çok iyi bir state yönetim seçenepi ancak büyük çaptaki projelerde çok fazla kod tekrarı olduğundan hem okunabirlik hem performans olumsuz etkilenir.

### Redux'ın Artıları

- Kod tekrarını önler
- Daha performanslı bir şekilde state yönetimi sağlar
- Bileşenlerdeki karışıklığı engeller
- Hata ayıklamada daha gelişmiştir

### Redux Anatomisi

1. Store: Uygulamadaki tüm reducer'ları birarada tutuak veriye tek bir merkezden ulaşmamızı sağlar

2. Reducer: Dispatch edilen action'a göre state'in nasıl değişeceğine karar veren fonksiyon

3. Dispatch: Action'u reducer'a ileten fonksiyon

4. Action: State'in nasıl değişeceğini ifade eden nesne

- - Type: Action'un görevini tanımlayan string
- - Payload: Reducer'ın işlemi gerçekleştirebilmesi için gönderdiğimiz veri

5. Subscribe: Component içerisinden store'daki verilere erişmemizi sağlar.

6. Provider: Store'da tutulan verileri uygulamaya sağlayan HOC.

# Kurulum

1. Paket İndirme
   `npm i redux react-redux`

2. Reducer'ları Oluştur
   Projede kullancığımız verileri yöneticek reducer fonksiyonları oluştur

3. Store'u oluştur
   Reducer'ları birleştirip store'u oluştur

4. Store'u projeye tanıt
   Provider ile app component'ı sarmala

# Redux Thunk

- Asenkron aksiyonlar yazabilmemize olanak sağlayan middleware.
- Redux thunk sayesinde aksiyonlarımızın içerisinde api isteği atabiliriz.
- Bu kullanımda componnet içerisindeki kod kalabalığını ve tekrarını önler
