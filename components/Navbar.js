import { Component } from 'react';

import '../css/navbar.scss';
import LinkSmoothScroll from './LinkSmoothScroll';

class Navbar extends Component {
    render () {

        return (
            <nav>
                <ul>
                    <li>
                        <LinkSmoothScroll href="/#install"> Install </LinkSmoothScroll>
                    </li>
                </ul>
                <ul>
                    <li className="disabled">
                        <a href="#" onClick={(e) => e.preventDefault()} title="Launching SOON" name="Launching SOON">Product Hunt</a>
                    </li>
                    <li>
                        <a href="https://github.com/splash-cli/splash-cli" className="button">Github</a>
                    </li>
                </ul>
            </nav>
        )

    }
}

export default Navbar;