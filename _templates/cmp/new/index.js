const toPascalCase = (s) => {
  return `${s}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

module.exports = {
  prompt: ({ prompter }) =>
    prompter.prompt([
      {
        type: "input",
        name: "cmpName",
        message: "Type cmp name: (fx: FancyInput)",
        result: (cmpName) => `${toPascalCase(cmpName)}`,
      },
    ]),
};
