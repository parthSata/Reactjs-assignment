import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
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
function Field({
  label,
  required,
  value,
  onChange,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "req", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, onChange: (e) => onChange(e.target.value), placeholder: "Marry Doe" })
  ] });
}
function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes"
  });
  const set = (k) => (v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MobileFrame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "h-title", children: [
      "Create your",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "PopX account"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", required: true, value: form.name, onChange: set("name") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", required: true, value: form.phone, onChange: set("phone") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", required: true, value: form.email, onChange: set("email"), type: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", required: true, value: form.password, onChange: set("password"), type: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company name", value: form.company, onChange: set("company") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginTop: 18
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        fontSize: 13,
        color: "#1a1a1a"
      }, children: [
        "Are you an Agency?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "req", children: "*" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "radio-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "radio", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "agency", checked: form.agency === "yes", onChange: () => set("agency")("yes") }),
          "Yes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "radio", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "agency", checked: form.agency === "no", onChange: () => set("agency")("no") }),
          "No"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bottom-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: () => navigate({
      to: "/account"
    }), children: "Create Account" }) })
  ] });
}
export {
  SignupPage as component
};
