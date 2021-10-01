import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.5rem` }}>
      {children}
    </div>
  )
}
