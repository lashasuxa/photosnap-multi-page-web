import { Link } from 'react-router-dom';

function Header (){
    return (
        <>
        <div>
            <img src="/public/logo-black.png" alt="" />
            <h2>Header</h2>
        </div>
        <div>
            <Link to="/stories">Stories</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
        </div>
        <button>get an invite</button>
        </>
    )
}
export default Header
