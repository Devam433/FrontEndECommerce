import { NavLink } from "react-router-dom"

function Button({className='',onClick,px,children,href,disabled=false,type="button"}) {

  const classes = ` button relative flex justify-center items-center transition-colors ${px || 'px-1'} ${disabled && `bg-gray-700`} ${className}`

  function renderLink(){
    return (
    <NavLink className={classes} to={href}><span>{children}</span></NavLink>
    )
  }
  
  function renderButton(){
    return (
    <button className={classes} onClick={onClick} disabled={disabled} type={type}>
        <span>{children}</span>
    </button>
    )
  }
    return href ? renderLink() : renderButton()
}

export default Button