import { Button, Form, Modal } from "react-bootstrap";
import { INPUTS } from "../../constants";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/slices/crudSlice";

const TaskModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    // yenilemeyi engelle
    e.preventDefault();

    // inputlardaki değerlere erişelim
    const formData = new FormData(e.target);

    // form inputlarındaki verilere nesne formatında eriş
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a task ekleniceğini haber ver
    dispatch(createTask(taskData));

    // modal'ı kapat
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Görev Oluştur</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {INPUTS.map((item, key) => (
            <Form.Group className="mb-3" key={key}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control name={item.name} type={item.type} />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button type="submit" variant="primary">
              Oluştur
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
