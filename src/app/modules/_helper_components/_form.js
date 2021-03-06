import React, { useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  ModalProgressBar,
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";

export default function IForm({
  children,
  isDisabled,
  title,
  getProps,
  emailHandler,
  isShow,
  isHiddenReset,
  isHiddenBack,
  isHiddenSave,
  classes,
}) {
  const history = useHistory();
  const { id } = useParams();
  const saveBtnRef = useRef();
  const saveBtnClicker = () => {
    if (saveBtnRef && saveBtnRef.current) {
      saveBtnRef.current.click();
    }
  };

  const resetBtnRef = useRef();
  const ResetProductClick = () => {
    if (resetBtnRef && resetBtnRef.current) {
      resetBtnRef.current.click();
    }
  };

  const backHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    const propsObj = {
      resetBtnRef,
      btnRef: saveBtnRef,
    };
    getProps(propsObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const _title = title?.split(" ");
  _title && _title.splice(0, 1);

  return (
    <div className={classes}>
      <Card>
        {true && <ModalProgressBar />}
        <CardHeader title={id ? `Edit ${_title.join(" ")}` : title}>
          <CardHeaderToolbar>
            <button
              type="button"
              onClick={backHandler}
              className={isHiddenBack ? "d-none" : "btn btn-light"}
            >
              <i className="fa fa-arrow-left"></i>
              Back
            </button>

            {`  `}
            <button
              type="reset"
              onClick={ResetProductClick}
              ref={resetBtnRef}
              className={isHiddenReset ? "d-none" : "btn btn-light ml-2"}
            >
              <i className="fa fa-redo"></i>
              Reset
            </button>
            {`  `}
            <button
              type="submit"
              className={isHiddenSave ? "d-none" : "btn btn-primary ml-2"}
              onClick={saveBtnClicker}
              ref={saveBtnRef}
              disabled={isDisabled}
            >
              Save
            </button>
            <button
              type="button"
              className={isShow ? "btn btn-primary ml-2" : "d-none"}
              onClick={emailHandler}
              disabled={isDisabled}
            >
              Send
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <div className="mt-0">{children}</div>
        </CardBody>
      </Card>
    </div>
  );
}
