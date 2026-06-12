import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function MobileFrame({
  children,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mf-frame", children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mf-topbar${title ? " mf-topbar--titled" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mf-topbar-title", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mf-body", children })
  ] }) });
}
export {
  MobileFrame as M
};
