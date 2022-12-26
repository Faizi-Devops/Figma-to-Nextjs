import Image from 'next/image';
import styles from "../.././styles/Navbar.module.css"
import Link from 'next/link'
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
     
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/HypeSelling">HYPE SELLER
          </Link>
    </li>
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">HYPER BUYER
          </Link>
    </li>
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/ShippingSeller">HYPE SELLING
          </Link>
    </li>
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/ShippingBuyer">HYPE BUYING
          </Link>
    </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/HypeConcept">HYPE CONCEPT
          </Link>
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