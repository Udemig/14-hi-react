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
