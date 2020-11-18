export default (element: Element) => {
  return element.getBoundingClientRect().bottom < 10;
};
