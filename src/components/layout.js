import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <header
        style={{
          marginBottom: `1.5rem`,
          display: `flex`,
          justifyContent: `space-between`,
          maxWidth: `90vw`,
          margin: `auto`,
          padding: `1.5rem .5rem`

        }}
      >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ margin: 0 }}>Gatsby Tutorial Three</h3>
        </Link>
        <nav>
          <ul
            style={{
              listStyle: `none`,
              display: `flex`,
              justifyContent: `flex-end`,
            }}
          >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </header>
      {children}
    </React.Fragment>
  )
}
