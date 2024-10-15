const parseRoute = (arr: []) =>
  arr.reduce(
    (acc, item, index) => {
      acc[item[1] === "1" ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );

export default parseRoute;
