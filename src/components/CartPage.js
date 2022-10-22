import Navbar from "../components/Navbar"
import "../styles/cart.css"
import { useSelector } from "react-redux"

import { Container, Table } from "semantic-ui-react"

export default function Cart() {
  const cart = useSelector((state) => state.cart.itemsInCart)

  const calculateTotal = () =>
    cart
      .reduce(function (acc, obj) {
        return acc + obj.price * obj.quantity
      }, 0)
      .toFixed(2)

  return (
    <>
      <Container style={{ margin: 20 }}>
        <Navbar />
        <br />
        <article>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Unit Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Total Price of Item</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cart.map((obj) => (
                <Table.Row key={obj.id}>
                  <Table.Cell>{obj.name}</Table.Cell>
                  <Table.Cell>{"$" + obj.price}</Table.Cell>
                  <Table.Cell>{obj.quantity}</Table.Cell>
                  <Table.Cell>
                    {"$" + (obj.price * obj.quantity).toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <br />
          <br />
          <div className="total">
            <span>Total Price of your Cart</span>
            <span>$ {calculateTotal()}</span>
          </div>
        </article>
      </Container>
    </>
  )
}
