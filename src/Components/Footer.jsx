import { Link } from 'react-router-dom';
function Footer (){
    return (
        <div>
            <div>
                <img src="/logo-white.png" alt="" />
                <div>
                    <img src="/shared/desktop/facebook.svg" alt="" />
                    <img src="/shared/desktop/youtube.svg" alt="" />
                    <img src="/shared/desktop/twitter.svg" alt="" />
                    <img src="/shared/desktop/pinterest.svg" alt="" />
                    <img src="/shared/desktop/instagram.svg" alt="" />
                </div>
            </div>
            <div>
            <Link to="/">Home</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            </div>
            <div>
                <div>
                    <p>get an invitation</p>
                    <img src="/black-arrow.png" alt="" />
                </div>
                <p>Copyright 2019. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer