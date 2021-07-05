import { Link } from 'react-router-dom'

function MainNavigation () {
    return <header>
        <div>React Mettuos</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/newmeetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;