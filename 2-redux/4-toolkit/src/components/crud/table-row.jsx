import { Button } from "react-bootstrap";
import { deleteTask } from "../../redux/slices/crudSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TaskModal from "./task-modal";

const TableRow = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // sil butonuna tıklanınca çalışacak fonk.
  const handleDelete = () => {
    // kullanıcının onayını al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // reducer'a haber ver
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <tr className="text-nowrap">
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td className="">
          {new Date(task.end_date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
          })}
        </td>

        <td className="d-flex gap-2">
          <Button onClick={() => setIsOpen(true)} size="sm">
            Dzn
          </Button>
          <Button onClick={handleDelete} size="sm" variant="danger">
            Sil
          </Button>
        </td>
      </tr>

      <TaskModal show={isOpen} handleClose={() => setIsOpen(false)} task={task} />
    </>
  );
};

export default TableRow;
