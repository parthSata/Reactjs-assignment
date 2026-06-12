import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as MobileFrame } from "./MobileFrame-Z2rPgrxh.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MobileFrame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "h-title", children: "Welcome to PopX" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "h-sub", children: [
      "Secure sign-in and a fast path to your",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "PopX workspace."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bottom-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", children: "Create Account" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-secondary", children: "Already Registered? Login" }) })
    ] })
  ] });
}
export {
  Index as component
};
