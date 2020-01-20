import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  let heroText ;
  if(router.pathname === '/search'){
    className = `${className} search`
    heroText = 'Talent Directory'
  }else if(router.pathname === '/about'){
    className = `${className} search`
    heroText = 'About The Source'
  }else if(router.pathname === '/' || router.pathname === '/contact'){
    className = `${className} main-nav`
  }else{
    className = `${className} white-nav` 
  }

return <nav href={href}>{React.cloneElement(children, {className})} <h1>{heroText}</h1></nav>
}