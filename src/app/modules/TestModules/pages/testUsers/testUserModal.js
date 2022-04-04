import React from "react";
import { Button, Modal } from "react-bootstrap";
export default function TestUserModal(props) {
  console.log(props);
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="text-primary"
      >
        <Modal.Body>
          <h2>Modal body</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
