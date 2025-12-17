import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../../firebase";
import Message from "./message";
import Arrow from "./arrow";

const Messages = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const audioRef = useRef(new Audio("/notify.mp3"));
  const prevMessagesLength = useRef(0);
  const lastMessageRef = useRef();

  // veritabanındaki mesajları anlık olarak al
  useEffect(() => {
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonuna abone ol
    // kolleksion her değiştiğinde güncel belgeleri getirir
    const unsub = onSnapshot(q, (snapshot) => {
      // mersajların geçici olarak tutulduğu dizi
      const temp = [];

      // her belgenin içerisindeki dataya erişip diziye aktarır
      snapshot.docs.forEach((doc) => temp.push(doc.data()));

      // mesaj verisini state'e aktar
      setMessages(temp);
    });

    // kullanıcı sayfadan ayrılma anında
    return () => unsub();
  }, []);

  // her yeni mesaj gelince çalışır
  useEffect(() => {
    if (messages.length < 1) return;

    // gönderilen son mesaja eriş
    const lastMsg = messages.at(-1);

    // kullanıcı yukardayken yeni mesaj geldiyse
    if (messages.length > prevMessagesLength.current && !isAtBottom) {
      // atılan son mesaj farklı kullanıcdan geldiyse
      if (lastMsg.author.id !== auth.currentUser.uid) {
        setUnreadCount((prev) => prev + 1);
      }
    }

    // toplam mesaj sayısını referansa aktar
    prevMessagesLength.current = messages.length;

    // son mesaja odaklan
    if (lastMsg.author.id === auth.currentUser.uid) {
      // eğer son mesajı ben attıysam son mesaja odaklan
      scrollToBottom();
    } else if (isAtBottom) {
      // eğer son mesajı başka biri attıysa ve ben en aşağılardaysam son mesaja odaklan
      scrollToBottom();
    }

    playSound();
  }, [messages]);

  // en aşşağıya kaydır
  const scrollToBottom = () => {
    // listedeki son elemana kaydır
    lastMessageRef.current.scrollIntoView();

    // okunmamış mesaj sayısını sıfırla
    setUnreadCount(0);
  };

  // kullanıcı listi kaydırınca çalışır
  const handleScroll = (e) => {
    // clientHeight: container'ın kullanıcı ekranındaki yüksekliği
    // scrollTop: kullanıcı yukarıdan itibaren kaç px kaydırdı
    // scrollHeight: tüm içeriğin yüksekliği (gizli kısımlar dahil)
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    // kullanıcı sayfanın en altına yakın mı?
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 250);
  };

  // bildirim sesi oynat
  const playSound = async () => {
    await audioRef.current.play();
  };

  return (
    <main
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col w-full overflow-y-auto overflow-x-hidden relative gap-3"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message item={i} key={key} />)
      )}

      <div ref={lastMessageRef} />

      <Arrow isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} unreadCount={unreadCount} />
    </main>
  );
};

export default Messages;
