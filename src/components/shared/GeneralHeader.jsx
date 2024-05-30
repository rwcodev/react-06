import { Link } from "react-router-dom"

const GeneralHeader = () => {
    return (
      <header>
        <h1><Link to='/'>HotelsApp</Link></h1>
        <nav>
            <ul>
                <li>
                    <Link to='/reservation'>Reservations</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>       
                </li>
            </ul>
        </nav>
      </header>
    )
}

export default GeneralHeader