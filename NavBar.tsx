import '../NavBar/_navBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {faPenNib} from "@fortawesome/free-solid-svg-icons";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


function NavBar() {
    return <nav className="nav_bar">
        <div className="nav_icons">
            <NavLink to={"/livros"} >
                <FontAwesomeIcon icon={faBookOpen}/>
            </NavLink>
            <NavLink to={"/autores"}>
                <FontAwesomeIcon icon={faPenNib}/>
            </NavLink>
            <NavLink to={"/marcadores"}>
                <FontAwesomeIcon icon={faBookmark}/>
            </NavLink>
            <NavLink to={"/vendas"}>
                <FontAwesomeIcon icon={faList}/>
            </NavLink>
        </div>
    </nav>
}

export default NavBar;