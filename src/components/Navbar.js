import React from "react"
import "../styles/navbar.css"
import { Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navbar() {
  const cartSize = useSelector((state) => state.cart.totalQuantity)

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          <Link to="/">My Grocery Store</Link>
        </span>
        <span className="cart">
          <Link to="/cart">
            <Icon name="cart arrow down" />
          </Link>
          <span>{cartSize}</span>
        </span>
      </div>
    </nav>
  )
}
