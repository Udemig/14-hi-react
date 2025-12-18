import { FaDoorOpen } from "react-icons/fa";
import { navSections } from "../../constants";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Nav = ({ user }) => {
  return (
    <div className="flex flex-col justify-between items-end px-2 py-4">
      {/* Üst Kısım */}
      <div>
        <img src="/x-logo.webp" alt="x" className="w-14 mb-4" />

        {navSections.map((item, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-tw-gray max-md:justify-center"
          >
            {item.icon}
            <span className="whitespace-nowrap max-md:hidden">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Alt Kısım */}
      <div>
        <div className="flex max-md:flex-col gap-4 justify-between max-md:items-center">
          <div className="flex gap-2">
            <img
              src={user.photoURL}
              alt={user.displayName}
              referrerPolicy="no-referrer"
              className="rounded-full max-w-11.25"
            />

            <div>
              <p className="max-md:hidden text-sm">{user.displayName}</p>
              <p className="max-md:hidden text-sm text-zinc-400">{user.displayName}</p>
            </div>
          </div>

          <button onClick={() => signOut(auth)}>
            <FaDoorOpen className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
