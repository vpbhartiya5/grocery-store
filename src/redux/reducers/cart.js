const initialState = {
  totalQuantity: 0,
  itemsInCart: [],
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const index = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.id
      )

      // if item is not present then add it to cart
      if (index === -1) {
        return {
          totalQuantity: state.totalQuantity + 1,
          itemsInCart: [
            ...state.itemsInCart,
            { ...action.payload, quantity: 1 },
          ],
        }
      }
      // else increment its quantity
      return {
        totalQuantity: state.totalQuantity + 1,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    case "DECREMENT":
      const singleQuantity = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.id && item.quantity === 1
      )
      // if only one item exist then remove that item from cart
      if (singleQuantity !== -1) {
        return {
          totalQuantity: state.totalQuantity - 1,
          itemsInCart: state.itemsInCart.filter(
            (item) => item.id !== action.payload.id
          ),
        }
      }
      // else decrement its quantity
      return {
        totalQuantity: state.totalQuantity - 1,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }

    case "RESET":
      return (state = initialState)
    default:
      return state
  }
}
export default counterReducer
