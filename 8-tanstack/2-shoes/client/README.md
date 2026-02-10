# Kütüphaneler

- react-router-dom
- axios
- @tanstack/react-query
- formik
- yup
- lucide-react
- react-toastify
- tailwindcss

# Access Token Nedir ?

- Kullanıcın yetkili olduğunuz kanıtlar
- Fronted ---> Backend isteklerinde gönderilir.
- Backend bu token sayesinde hangi kullanıcının istek attığınız tespit edebilir

- **Özellikleri**
- Kısa ömürlüdür (15dk - 30dk)
- Genelde JWT formatındadır
- Genelde çerezler ile gönderilir

# Refresh Token Nedir ?

- Access token süresi bitince yenisini almak için kullanılır
- **Özellikleri**
- Uzun ömürlüdür (7-30gün)
- Sadece `/refresh` endpoint'inde kullanılır

# AKIŞ

1. Kullanıcı login olur
2. Çerezlerle acces ve refresh tokenlarını alır
3. Backende yapılan her istekte access token backende geri gönderilir.
4. Access token sayesinde backend kullanıcyı tanır
5. Access tokenın süresi dolunca `/refres` endpointine refresh token ile birlikte istek atılıp access token yenilenir.
