import { Input } from "semantic-ui-react"

export default function Search({ value, handleSearch }) {
  return (
    <div>
      <Input
        icon="search"
        placeholder="Search..."
        value={value}
        onChange={handleSearch}
      />
    </div>
  )
}
