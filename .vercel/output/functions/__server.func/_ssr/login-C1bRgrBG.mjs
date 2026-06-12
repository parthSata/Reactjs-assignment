import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
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
function LoginPage() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const navigate = useNavigate();
  const valid = email.length > 0 && password.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MobileFrame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "h-title", children: [
      "Signin to your",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "PopX account"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "h-sub", children: [
      "Lorem ipsum dolor sit amet,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "consectetur adipiscing elit,"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Enter email address", value: email, onChange: (e) => setEmail(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "Enter password", value: password, onChange: (e) => setPassword(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `btn ${valid ? "btn-primary" : "btn-disabled"}`, style: {
      marginTop: 22
    }, disabled: !valid, onClick: () => navigate({
      to: "/account"
    }), children: "Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
      marginTop: 16,
      fontSize: 13,
      color: "#6c6f74"
    }, children: [
      "New here? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", style: {
        color: "#6c25ff",
        fontWeight: 600
      }, children: "Create an account" })
    ] })
  ] });
}
export {
  LoginPage as component
};
