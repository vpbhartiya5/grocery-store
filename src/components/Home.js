import Groceries from "../components/Groceries"
import Search from "../components/Search"
import CustomDropdown from "../components/CustomDropdown"
import Navbar from "../components/Navbar"

import { Container } from "semantic-ui-react"
import { useState } from "react"

export default function Home() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function dropdownChange(e, { value }) {
    setSelectedCategory(value)
  }

  return (
    <Container style={{ margin: 20 }}>
      <Navbar />
      <br />
      <Search value={search} handleSearch={handleSearch} />
      <br />
      <CustomDropdown dropdownChange={dropdownChange} />
      <Groceries value={search} selectedCategory={selectedCategory} />
    </Container>
  )
}
