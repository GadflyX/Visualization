import { applyTransform, createSVGElement, mount } from "./utils";

export function transform(type, context, ...params) {
  // type 是希望的变换种类：scale，translate，rotate 等
  const { group } = context;
  applyTransform(group, `${type}(${params.join(", ")})`);
}

export function translate(context, tx, ty) {
  transform("translate", context, tx, ty);
}

export function rotate(context, theta) {
  transform("rotate", context, theta);
}

export function scale(context, sx, sy) {
  transform("scale", context, sx, sy);
}

export function save(context) {
  const { group } = context;
  const newGroup = createSVGElement("g");
  mount(group, newGroup);
  context.group = newGroup;
}

export function restore(context) {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode;
}
