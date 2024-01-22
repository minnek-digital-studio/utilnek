/** @type {import('prettier').Config} */
module.exports = {
    endOfLine: "lf",
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
  }
