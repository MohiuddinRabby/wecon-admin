import React from "react";
import {
  ModalProgressBar,
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";

export default function ICustomCard({
  title,
  backHandler,
  saveHandler,
  createHandler,
  viewHandler,
  children,
  renderProps
}) {
  return (
    <>
      <Card>
        {true && <ModalProgressBar />}
        <CardHeader title={title}>
          <CardHeaderToolbar>
            {backHandler && (
              <button onClick={backHandler} className="btn btn-light">
                Back
              </button>
            )}
            {saveHandler && (
              <button onClick={saveHandler} className="btn btn-primary">
                Save
              </button>
            )}
            {viewHandler && (
              <button onClick={viewHandler} className="btn btn-primary">
                View
              </button>
            )}
            {createHandler && (
              <button onClick={createHandler} className="btn btn-primary">
                Create
              </button>
            )}
            {renderProps && renderProps()}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <div className="mt-0">{children}</div>
        </CardBody>
      </Card>
    </>
  );
}