import {
  Slot
} from "./chunk-NLUUAN34.js";
import {
  require_jsx_runtime
} from "./chunk-T6PWRRVS.js";
import {
  require_react_dom
} from "./chunk-I2MCD6RR.js";
import {
  require_react
} from "./chunk-E55NSNTN.js";
import {
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

export {
  Primitive,
  dispatchDiscreteCustomEvent
};
//# sourceMappingURL=chunk-KH3PULZP.js.map
