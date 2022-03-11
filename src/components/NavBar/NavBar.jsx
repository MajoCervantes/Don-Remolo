import React from 'react'

import { useMmodalStore } from '../../Store/store'

//Assets
import Logo from '../../assets/logo.png'

//Styles
import './navbar.css'

//MUI
import SegmentIcon from '@mui/icons-material/Segment'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const NavBar = () => {
  const toggleMenu = useMmodalStore((state) => state.toggleMenu)
  const menu = useMmodalStore((state) => state.menu)

  return (
    <div className={`${menu ? 'navbar-container' : 'hidden'}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
        <SegmentIcon color="disabled" onClick={toggleMenu} />
      </div>

      <div className="sections-container">
        <div className="section-container">
          <p>Inicio </p>
          <ArrowForwardIosIcon />
        </div>
        <div className="section-container">
          <p>Favoritos </p>
          <ArrowForwardIosIcon />
        </div>
        <div className="section-container">
          <p>Reportar </p>
          <ArrowForwardIosIcon />
        </div>
        <div className="setings-container">
          <p>Ajustes </p>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <footer>Made By @simmxns in 2022, Github</footer>
    </div>
  )
}

export default NavBar
