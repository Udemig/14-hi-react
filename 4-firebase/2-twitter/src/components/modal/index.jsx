import { IoMdClose } from "react-icons/io";

// HOC
const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return;

  return (
    <div className="fixed bg-zinc-800/50 inset-0 backdrop-blur-sm z-9999 z grid place-items-center">
      <div className="bg-black py-10 px-8 w-3/4 max-w-125 rounded-md">
        <div className="flex justify-end">
          <button onClick={close}>
            <IoMdClose className="text-3xl transition hover:text-gray-500" />
          </button>
        </div>

        {/* Modal İçeriği */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
