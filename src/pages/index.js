import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <h1>Learning Gatsby</h1>
        <p>A learning site created using Gatsby and the 
          typography plugin.
        </p>
      </div>
    </Layout>
  )
}
