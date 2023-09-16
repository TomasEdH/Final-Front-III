
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useGlobalContext } from './global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useGlobalContext();

  const handleChangeTheme = () => {
    console.log('boton presionado')
    dispatch({ type: "CHANGE_THEME"})
  }

  return (
    <header className={`${state.theme}`}>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <p><span id='d'>D</span>H Odonto</p>
        <ul>
          <li><Link to="/" className={`link-estilo ${state.theme}`}>Home</Link></li>
          <li><Link to="/favs" className={`link-estilo ${state.theme}`}link-estilo>Favs</Link></li>
          <li><Link to="/contact" className={`link-estilo ${state.theme}`}>Contact</Link></li>
          <button onClick={handleChangeTheme} className='change-theme-btn'>🌓</button>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </nav>
      <Outlet/>
    </header>
  )
}

export default Navbar