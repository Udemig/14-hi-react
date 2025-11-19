# useReducer

- State yönetimi için kullanılan bir hook'tur. Karmaşık veya birden fazla değeri olan state yönetimini tek bir reducer fonksiyonunda toplayıp bileşenden dışarıya taşımamıza olanak sağlar.

- useState ile state yönetminin zorlaştığı noktada useState yerine useReducer kullanabiliriz

1. Action - Eylem

- State'in nasıl değişeceğini ifade eden nesnelerdir.
- type ve payload değerlerine sahiptir
- type: EKLE, SİL, GÜNCELLE, YÜKLE, TEMA_DEĞİŞ
- payload (opsiyonel): eylemin gerçekleşmesi için gerekli detaylar
- örn: {type:"TEMA_DEĞİŞ"}
- örn: {type:"SİL", payload: 89}

2. Dipatch - Sevk Etmek

- Action'u reducer fonksiyonuna göndermeye yarar.
- örn: dispatch({type:"TEMA_DEĞİŞ"})

3. Reducer Fonksiyon

- State'in nasıl değişeceğine karar verir
- Action'lar dispatch edildiği zaman reducer fonksiyonu bunları görür ve dispatch edilen aksiyona göre state'in nasıl değişeceğine karar verir
