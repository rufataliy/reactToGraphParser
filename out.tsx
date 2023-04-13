// src/components/AnotherChild.tsx
var AnotherChild = ({ children }) => {
  return <>{children}</>;
};
var AnotherChild_default = AnotherChild;

// src/components/Child.tsx
var Child = () => {
  return <><App_default children={void 0} /></>;
};
var Child_default = Child;

// src/simpleCraApp/App.tsx
var Name = ({ children }) => <>
  <Child_default />
  <AnotherChild_default />
  {children}
  <AnotherChild_default><AnotherChild_default /></AnotherChild_default>
</>;
function Component({ children }) {
  return <><AnotherChild_default>
    <AnotherChild_default />
    <Child_default />
    <AnotherChild_default />
  </AnotherChild_default></>;
}
var App_default = Name;
export {
  Component,
  App_default as default
};
