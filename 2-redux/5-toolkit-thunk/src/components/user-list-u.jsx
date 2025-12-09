import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/updatedSlice";

const UserListU = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.updatedReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) return <h1>Yükleniyor</h1>;

  if (error)
    return (
      <div>
        <h1>Hata: {error}</h1>
        <button onClick={() => dispatch(getUsers())}>Tekrar</button>
      </div>
    );

  return (
    <div>
      {data.map((user) => (
        <h1>{user.firstName}</h1>
      ))}
    </div>
  );
};

export default UserListU;
