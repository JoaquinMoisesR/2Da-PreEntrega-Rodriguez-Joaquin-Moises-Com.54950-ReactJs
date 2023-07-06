import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

  const NavBar = () => {
    return (
        <nav className="navbar is-success">
          <Link to="/">
            <h2 className="title is-2 has-text-warning px-3">Agroindustria EL DESTINO</h2>
            </Link>
            <div className="buttons are-normal">
              <div>
                <NavLink to={'./category/expellerSoja'}>
                <button className="button is-light">EXPELLER SOJA</button>
                </NavLink>
                </div>
                <div>
                <NavLink to={'./category/expellerMaiz'}>  
                <button className="button is-ligth">EXPELLER MAIZ</button>
                </NavLink> 
                </div>
                <div>
                <NavLink to={'./category/aceiteBiodiesel'}>
                <button className="button is-ligth">ACEITE BIODIESEL</button>
                </NavLink>
                </div>
                <div>
                <NavLink to={'./QuienesSomos'}>
                <button className="button is-ligth">QUIENES SOMOS</button>
                </NavLink>
                </div>
            </div>
            <div className="navbar-end">
            <CartWidget/>
            </div>
        </nav>
      )
  };
  
  export default NavBar;
