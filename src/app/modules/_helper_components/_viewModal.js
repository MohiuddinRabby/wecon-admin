import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";

export default function IViewModal({
  id,
  show,
  onHide,
  history,
  isShow,
  children,
  title,
  btnText,
}) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setShow(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="viewModal">
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="example-modal-sizes-title-xl"
      >
        {isLoading && <ModalProgressBar variant="query" />}
        <>
          <Modal.Header className="bg-custom">
            <Modal.Title className="text-center">{title}</Modal.Title>
          </Modal.Header>
          {/* <p style={{ borderBottom: "1px solid gray" }} className="my-1"></p> */}
          <Modal.Body id="example-modal-sizes-title-xl">{children}</Modal.Body>
          <Modal.Footer>
            <div>
              <button
                type="button"
                onClick={() => onHide()}
                className="btn btn-light btn-elevate"
              >
                {btnText ? btnText : "Close"}
              </button>
              <> </>
            </div>
          </Modal.Footer>
        </>
      </Modal>
    </div>
  );
}
