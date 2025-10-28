# Resim

- Eğer resimleri public klasörü içerisine koyarsak doğrudan url üzerinden yayınlandığı için resimin url'i ile ekrana basabiliriz.

- Eğer resimleri src klasörü içerisine koyarsa resmi kullanabilmek için önce import etmek gerekiyor.

# Component Türleri

- React'da iki farklı component türü bulunur.

1. Function Component (Fonksiyonel Bileşen)

- Modern react'ta en çok kullanılan bileşen türüdür.
- Basit fonksiyon yapısındadır
- useState,useEffect gibi react hooklarını kullanabilir.
- Daha az kod yazılır, anlaşılması kolaydır

```jsx
const FunctionComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
```

2. Class Component (Sınıf Tabanlı Bileşen)

- Bu react'ın eski sürümlerde kullanılan bileşen türü.
- `extends React.Component` ifadesi yazılır.
- `render()` methodu ile jsx içeriğini döndürürüz

```jsx
class ClassComponent extends React.Component {
  // PROP'LARA ERİŞTİĞİMİZ FONKSİYON
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
```

# State

- Component içerisinde veri (durum) tutmak için kullanılır
- React'da arayüzde değişme sebep olucak bütün verilerl state'de tutulur
- State setState methoduyla güncellediğinde component yeniden render.
- Yeniden render olması sayesinde arayüz güncellemesi sağlanır

# Hooks

- Class componenet'ların sahip olduğu yetenekleri (state,yaşam döngüsü) fonksiyonlarda kullanmamızı sağalayan özel yetenekli fonksiyonlara hook deniyor.

# useState

- State yapısını fonksiyonel component'larda kullanmamızı sağlar
- React'da arayüzde değişime olucak bütün veriler state'de tutulur.
- useState parametere olarak tutucağımız verinin ilk değerini alır.
- useState fonksiyonunu çağrınca geriye dizi içerisinde 2 veri dönder
- [stateDegeri,stateGuncellemeFonksiyonu] return eder.
- State'in değerini her güncellediğimizde gerçekleşen güncellemenin arayüze yansıması için component yeniden render olur.

# Lifecycle (Yaşam Döngüsü) Nedir\_

- Bir component'ın aşağıdaki süreçlerinin genel adıdır.

1. Oluşturulması (Mounting)
2. Güncellenmesi (Updating)
3. Kaldırılması (Unmounting)

# Lifecycle Methods (Yaşam Döngüsü Methodları)

- Lifecycle methods, bir component'in oluşum, güncellenme, kaldırılma süreçlerini yönetmek için kullanılan özel methodlardır.
- Bu kavram özellikle class component'larda vardır. Fakat modern react'ta bu işlemi useEffect hooku ile yaparoz

1. Oluşturulması (componentDidMount)
2. Güncellenmesi (componentDidUpdate)
3. Kaldırılması (componentWillUnmount)

# useEffect

- Component'ın yaşam döngüsünü fonksiyonel compoent'larda izlememizi sağalar
- componentDidMount, componentDidUpdate,componentWillUnmount methodlarının görevini üstlenir.

# State Güncellemsesi Hakkında

- setState fonksiyonu bir fonksiyon içerisinde birden fazla kez çağrıldığı seneryoada (prev) => kullanımı daha uygundur:

```jsx
const handleClick = () => {
  // fonksiyon çalıştığı andaki count değeri: 0
  setCount(count + 1); // 0 + 1
  setCount(count + 1); // 0 + 1
  setCount(count + 1); // 0 + 1
  setCount(count + 1); // 0 + 1
  setCount(count + 1); // 0 + 1
};

const handleClick2 = () => {
  // setState fonksiyonu içerisine bir fonksiyon yazılır o fonksiyon parametre olarak state'in en güncel değerini alır
  // setState içindeki fonksiyonun döndürdüğü değer state'in yeni değeri olur
  setCount((prev) => prev + 1); // 0 + 1
  setCount((prev) => prev + 1); // 1 + 1
  setCount((prev) => prev + 1); // 2 + 1
  setCount((prev) => prev + 1); // 3 + 1
  setCount((prev) => prev + 1); // 4 + 1
};
```
