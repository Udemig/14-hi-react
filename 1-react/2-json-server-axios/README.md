# Json-Server

- Hızlıca bir REST API oluşturmak için kullanılan hafif basit bir node.js kütüphanesi.
- Mock (sahte) bir backend oluşturmak isteyen frontend geliştiricilerinin işine yarar.
- Gerçek bir veritabanı kurmak yerine `db.json` dosyası üzerinden çalışan bir api sunar.

## Neden sahte bir api oluşturmak istiyim\_

- Sahte api'ları prototipleme amacıyla kullanabiliriz çünkü sahte api kullandığımızda projeyi yayınlayamayız.
- Sahte api'ları get|post|put|patch|delete isteği atarak kendimizi geliştiriceğimiz basit projeler için de kullanabiliriz.

## JSON Server Kullanımı

- projeye `json-server` kütüphanesi dahil edilmeli

- projenin en dış klasörüne `db.json` dosyası oluştur

- terminale `json-server --watch db.json --port 5000` kodunu yazarak db.json üzerinde çalışan sahte bir api oluşturabiliriz

## Not

- Yapılan isteklerde veriyi güncellediğimiz zaman db.json dosyası otomatik olarak güncellenir.

## React Maplenen Elemanlara Neden Key İster ?

- Benzersiz key değeri sayesinde react listedeki bütün elemanların konumunu tespit edebilir ve listede silme/güncelleme gibi olaylar gerçekleştiği zaman listedeki spesifik elemanı renderlar
- Key verilmediğinde listede hangi elemanın güncellnediğini/silindiğini tespit edemez ve listedeki bütün elemanları yeniden render ender bu da performans kaybına yol açar

# Axios

- Axios, tarayıcıda (frontend) ve node.js (backend) ortamında HTTP istekleri atmamızı sağlayan fetch muadili bir kütüphane.

## Neden Axios

- `fetch` yöntemine göre daha pratik
- istekleri otomatik olarak json ve js formatlarına çevirir.
- intercept özelliği ile istek ve cevaplarda fonksiyon çalıştırılabilir.
- timeout,baseurl,header gibi ayarlı yapılaiblir.

- **GET**

```jsx
// fetch
fetch("http://localhost:5000/todos?_sort=date&_order=desc")
  .then((res) => res.json())
  .then((data) => setTodos(data));

//axios
const params = { _sort: "date", _order: "desc" };

api.get("/todos", { params }).then((res) => setTodos(res.data));
```

- **POST**

```jsx
// (fetch)
fetch("http://localhost:5000/todos", {
  method: "POST",
  body: JSON.stringify(newTodo),
});

// (axios)
api.post("/todos", newTodo);
```
