import { Dropdown } from "semantic-ui-react"

const category = [
  {
    key: "select one",
    text: "Select One",
    value: "",
  },
  {
    key: "dairy",
    text: "Dairy",
    value: "dairy",
  },
  {
    key: "fruit",
    text: "Fruit",
    value: "fruit",
  },
  {
    key: "vegetable",
    text: "Vegetable",
    value: "vegetable",
  },
  {
    key: "bakery",
    text: "Bakery",
    value: "bakery",
  },
  {
    key: "meat",
    text: "Meat",
    value: "meat",
  },
]

export default function CustomDropdown({ dropdownChange }) {
  return (
    <Dropdown
      placeholder="Select Category"
      onChange={dropdownChange}
      selection
      options={category}
    />
  )
}
