import React, { useContext } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { LoginContext } from "../../../../../app/assets/CustomContextApi/LoginContext";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

export function LoginDropdown() {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useContext(LoginContext);
  const logOut = () => {
    setAuth(false);
  };
  const bgImage = toAbsoluteUrl("/media/misc/bg-1.jpg");
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart-toggle"
      >
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="mycart-panel-tooltip">User Info</Tooltip>}
        >
          <div className="btn btn-icon btn-clean btn-lg mr-1">
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG
                src={toAbsoluteUrl("/media/svg/avatars/systemusers_104569.svg")}
              />
            </span>
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
        <div
          className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <span className="btn btn-md btn-icon">
            <i className="fas fa-envelope text-success"></i>
          </span>
          <p className="text-white m-0 flex-grow-1">email details</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={logOut}
          >
            Sign out
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
