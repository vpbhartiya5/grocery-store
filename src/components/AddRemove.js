import { Button } from "semantic-ui-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { decrement, increment } from "../redux/actions/index"

export default function AddRemove({ item }) {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    setCount((c) => c + 1)
    dispatch(increment(item))
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount((c) => c - 1)
      dispatch(decrement(item))
    }
  }

  return (
    <div>
      <Button onClick={handleDecrement} content="-" />
      <Button content={count} />
      <Button onClick={handleIncrement} content="+" />
    </div>
  )
}
