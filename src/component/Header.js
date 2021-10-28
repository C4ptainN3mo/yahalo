import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header data-cy="header-background" className="flex bg-blue-450 justify-between py-9 pl-48 px-10 h-28 absolute w-full text-white">
        <div className="logo">
          <h2 data-cy="header-title" className=" text-2xl lg:text-2xl">
            <Link to="/home">to do list app</Link>
          </h2>
        </div>
      </header>
    </>
  )
}

export default Header
