import Image from 'next/image';
import styles from "../.././styles/Navbar.module.css"
const Navbar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <Image 
      
      src="/1.jpg"
      alt="Picture of the author"
      width={60}
      height={60}
    /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HYPEINDUSTRY
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Selling</a></li>
            <li><a className="dropdown-item" href="#">Buying</a></li>
            <li><a className="dropdown-item" href="#">Concept</a></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#">
            HYPEINDUSTRY
          </a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHIPPING
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Seller</a></li>
            <li><a className="dropdown-item" href="#">Buyer</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SELLER REQUEST FORM
          </a>
    </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


        </div>
    )
} 
export default Navbar;