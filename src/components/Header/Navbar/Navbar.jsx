import "./Navbar.css";
function Navbar(){
    return(
        <nav>
            <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;