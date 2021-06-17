const reducer = (products = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CHANGE_AMMOUNT":
      const { name, directive } = action.payload;
      const modifiedProducts = products.map((product) => {
        if (product.name === name)
          if (directive === "more")
            product.selectedAmmount = product.selectedAmmount + 1;
          else if (directive === "less")
            product.selectedAmmount !== 0
              ? (product.selectedAmmount = product.selectedAmmount - 1)
              : (product.selectedAmmount = 0);
          else product.selectedAmmount = directive;
        return product;
      });
      return modifiedProducts;
    case "RESET_ALL":
      const resetProducts = products.map((product) => {
        product.selectedAmmount = 0;
        return product;
      });
      return resetProducts;

    default:
      return products;
  }
};
export default reducer;
