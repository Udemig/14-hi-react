import { Button } from "react-bootstrap";

const TableRow = ({ task }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.author}</td>
      <td>{task.assigned}</td>
      <td>
        {new Date(task.end_date).toLocaleDateString("tr", {
          day: "2-digit",
          month: "short",
        })}
      </td>

      <td className="d-flex gap-2">
        <Button size="sm">Dzn</Button>
        <Button size="sm" variant="danger">
          Sil
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
