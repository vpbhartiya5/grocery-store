import { useState, useEffect } from "react"
import stubbedData from "../data.json"
import { Table } from "semantic-ui-react"
import AddRemove from "../components/AddRemove"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Groceries({ value, selectedCategory }) {
  const [data, setData] = useState(stubbedData)
  //const [data, setData] = useState([]);
  const [items, setItems] = useState([])

  //The API endpoint expires after 50 request/day, hence using StubbedData (stored in data.json)
  useEffect(() => {
    // fetch("https://muigrocery.free.beeceptor.com/groceries")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const grocery = json.map((obj) => {
    //       return {
    //         id: obj.id,
    //         name: obj.name,
    //         type: obj.type,
    //         price: obj.price
    //       };
    //     });
    //     setData(grocery);
    //   });
  }, [])

  useEffect(() => {
    if (value) {
      const result = data.filter((obj) =>
        obj.name.toLowerCase().includes(value.trim().toLowerCase())
      )
      setItems(result)
    } else {
      setItems(data)
      console.log(data)
    }
  }, [value])

  useEffect(() => {
    if (selectedCategory) {
      const result = data.filter(
        (obj) =>
          obj.type.toLowerCase() === selectedCategory.trim().toLowerCase()
      )
      console.log("result is", result)
      setItems(result)
    } else {
      setItems(data)
    }
  }, [selectedCategory])

  return (
    <>
      {items.length > 0 && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Add/Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {items.map((obj) => (
              <Table.Row key={obj.id}>
                <Table.Cell>{obj.name}</Table.Cell>
                <Table.Cell>{capitalizeFirstLetter(obj.type)}</Table.Cell>
                <Table.Cell>{"$" + obj.price}</Table.Cell>
                <Table.Cell>
                  <AddRemove item={obj} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  )
}
