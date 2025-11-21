import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./modal";
import { deleteTodo, toggleStatus } from "../redux/actions/todo-actions";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // sil butonuna tıklanınca
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  // durum butonuna tıklanınca
  const handleStatus = () => {
    dispatch(toggleStatus({ id: todo.id, isDone: !todo.isDone }));
  };

  return (
    <>
      <div className={`border rounded p-4 shadow-lg ${todo.isDone ? "border-green-900" : "border-zinc-700"}`}>
        <div className="flex flex-col gap-2">
          <h3 className={`text-xl font-bold ${todo.isDone ? "line-through" : ""}`}>{todo.text}</h3>

          <h6 className="text-zinc-300">
            {new Date(todo.createdAt).toLocaleDateString("tr", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h6>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={() => setIsOpen(true)} className="btn bg-blue-500">
            Düzenle
          </button>
          <button onClick={handleStatus} className="btn bg-yellow-500 min-w-22">
            {todo.isDone ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={handleDelete} className="btn bg-red-500">
            Sil
          </button>
        </div>
      </div>

      <Modal todo={todo} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Card;
