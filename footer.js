import React from 'react'
import './footer.css'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "500vh",
    width: "100%"
  }

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; xyz.com
    </p>
    </footer>
  )
}
