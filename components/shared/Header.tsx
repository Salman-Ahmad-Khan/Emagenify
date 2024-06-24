import React from 'react'

const Header = ({ title, subtitle, protip }: { title: string, subtitle?: string, protip?:string }) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subtitle && <p className="p-16-regular mt-2 mb-3">{subtitle}</p>}
      {protip && <p className="italic text-purple-500 text-sm mt-2 mb-3">{protip}</p>}
    </>
  )
}

export default Header