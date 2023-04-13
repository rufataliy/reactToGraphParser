// src/components/AnotherChild.tsx
import { Fragment, jsx } from "./node_modules/react/jsx-runtime.js";
var AnotherChild = ({ children }) => {
  return /* @__PURE__ */ jsx(Fragment, { children });
};
var AnotherChild_default = AnotherChild;

// src/components/Child.tsx
import { Fragment as Fragment2, jsx as jsx2 } from "./node_modules/react/jsx-runtime.js";
var Child = () => {
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2(App_default, { children: void 0 }) });
};
var Child_default = Child;

// src/simpleCraApp/App.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs } from "./node_modules/react/jsx-runtime.js";
var Name = ({ children }) => /* @__PURE__ */ jsxs(Fragment3, { children: [
  /* @__PURE__ */ jsx3(Child_default, {}),
  /* @__PURE__ */ jsx3(AnotherChild_default, {}),
  children,
  /* @__PURE__ */ jsx3(AnotherChild_default, { children: /* @__PURE__ */ jsx3(AnotherChild_default, {}) })
] });
function Component({ children }) {
  return /* @__PURE__ */ jsx3(Fragment3, { children: /* @__PURE__ */ jsxs(AnotherChild_default, { children: [
    /* @__PURE__ */ jsx3(AnotherChild_default, {}),
    /* @__PURE__ */ jsx3(Child_default, {}),
    /* @__PURE__ */ jsx3(AnotherChild_default, {})
  ] }) });
}
var App_default = Name;
export {
  Component,
  App_default as default
};
