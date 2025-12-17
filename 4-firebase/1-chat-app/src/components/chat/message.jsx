import { auth } from "../../firebase";

const Message = ({ item }) => {
  // eğer mesajı aktif kullanıcı attıysa:
  if (auth.currentUser.uid === item.author.id) {
    return <p className="bg-black text-white self-end rounded-[7px_7px_0_7px] message">{item.text}</p>;
  }

  // eğer mesajı başka bir kullanıcı attıysa:
  return (
    <div className="flex items-start gap-1">
      <img src={item.author.photo} referrerPolicy="no-referrer" className="size-10 rounded-full" />

      <div className="flex flex-col gap-1 w-full">
        <span>{item.author.name}</span>

        <p className="message text-zinc-800 bg-zinc-200 rounded-[0_7px_7px_7px]">{item.text}</p>
      </div>
    </div>
  );
};

export default Message;
