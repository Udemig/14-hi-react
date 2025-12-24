import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../loader";
import Post from "../post";

const PostList = () => {
  const [tweets, setTweets] = useState(undefined);

  useEffect(() => {
    // kolleksiyonun referanınsınıal
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // tweets kolleksiyonuna abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // state'e gönderilemeden önce geçici olarak kullanırız
      const temp = [];

      // veritabanında gelen verilere eriş ve geçici diziye aktar
      snapshot.docs.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });

      // geçici dizide topladığımız belgeleri state'e aktar
      setTweets(temp);

      // component ekrandan ayrılınca aboneliği durdur
      return () => unsub();
    });
  }, []);

  if (tweets === undefined) return <Loader />;

  if (tweets.length === 0)
    return (
      <div className="my-40 grid place-items-center">
        <p className="text-iznc-400">Henüz hiç tweet atılmadı</p>
      </div>
    );

  return tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />);
};

export default PostList;
