import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
// import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";
// import { QuickActionsDropdown } from "../extras/dropdowns/QuickActionsDropdown";
// import { MyCartDropdown } from "../extras/dropdowns/MyCartDropdown";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { LoginDropdown } from "../extras/dropdowns/LoginDropdown";

export function Topbar() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      viewCartDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewLoginDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="topbar">
      {/* {layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown />} */}

      {/* {layoutProps.viewQuickActionsDisplay && <QuickActionsDropdown />} */}

      {layoutProps.viewLanguagesDisplay && <LanguageSelectorDropdown />}
      {layoutProps.viewLoginDisplay && <LoginDropdown />}
    </div>
  );
}
