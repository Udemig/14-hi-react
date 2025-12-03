import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import TaskModal from "./task-modal";

const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack className="align-items-end mb-4">
      <Button onClick={() => setIsOpen(!isOpen)}>Yeni Görev Ekle</Button>

      <TaskModal show={isOpen} handleClose={() => setIsOpen(false)} />
    </Stack>
  );
};

export default TaskForm;
