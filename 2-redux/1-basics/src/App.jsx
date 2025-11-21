import { use, useEffect, useEffectEvent } from "react";
import Form from "./components/form";
import List from "./components/list";
import api from "./api";
import { useDispatch } from "react-redux";
import { setError, setLoading, setTodos } from "./redux/actions";
import { getTodos } from "./redux/actions/todo-actions";

const App = () => {
  const dispatch = useDispatch();

  // 1) normal aksiyonlar kullanarak
  // useEffect(() => {
  //   dispatch(setLoading());

  //   api
  //     .get("/todos")
  //     .then((res) => dispatch(setTodos(res.data)))
  //     .catch((err) => dispatch(setError(err.message)));
  // }, []);

  // 2) thunk aksiyonu kullanarak
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="h-screen container p-10">
      <h1 className="text-center text-2xl font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
