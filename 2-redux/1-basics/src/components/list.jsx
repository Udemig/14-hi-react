import { useSelector } from "react-redux";

const List = () => {
  // useSelector hook'ı
  // store tutulan verilere abone olmaya yarar
  // parametre olarak store'a erişen bir fonksiyon alır
  const { todos } = useSelector((store) => store.todoReducer);

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <p>{todo.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
