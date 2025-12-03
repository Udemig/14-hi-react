import { Container } from "react-bootstrap";
import TaskForm from "../../components/crud/task-form";
import TaskTable from "../../components/crud/task-table";

const Crud = () => {
  return (
    <div>
      <Container>
        <TaskForm />

        <TaskTable />
      </Container>
    </div>
  );
};

export default Crud;
