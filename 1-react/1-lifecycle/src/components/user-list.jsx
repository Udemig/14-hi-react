import { useEffect, useState } from "react";

/*
 * Amaç
 * https://dummyjson.com/users adresindeki kullanıcı verisini alıp ekrana bas
 * Yüklenme ve Hata bilgilierinide ekrana bas
 */

const UserList = () => {
  // yüklenme / hata / veri'nin state'ini tut
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  // component'ın ekrana gelme anını izle
  useEffect(() => {
    // api isteği atılmadan önce loading state'ini true yap
    setLoading(true);

    // api isteğini at
    fetch("https://dummyjson.com/users")
      // istek başarılı olursa gelen cevabı js formatına çevir
      .then((res) => res.json())
      // api'dan gelen veriye eriş
      .then((data) => setUsers(data.users))
      // hata geldiğinde hata açıklmasını state'e aktar
      .catch((err) => setError(err.message))
      // yüklenme bitince loading state'ini güncelle
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      {/*
       * Yüklenme devam ediyor: Loader bas
       * API'dan hata geldiyse: hata mesajını bas
       * API'dan veri geldiyse: verileri ekrana bas
       */}

      {loading ? (
        <div>Yükleniyor...</div>
      ) : error ? (
        <div>Hata: {error}</div>
      ) : (
        users.map((user) => (
          <div>
            <img src={user.image} />
            <h2>
              isim: {user.firstName} {user.lastName}
            </h2>
            <h3>yaş: {user.age}</h3>
            <h3>mail: {user.email}</h3>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
