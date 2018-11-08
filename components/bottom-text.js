import {
    Component
} from 'react';
import Link from 'next/link';

import '../css/bottom-text.scss';

export class Version extends Component {
    constructor(props) {
        super(props)

        this.state = {
            version: '3.2.0'
        }
    }

    render() {
        return (<a href="https://github.com/splash-cli/splash-cli/releases/latest" className="bottom-text left"> v{this.state.version} </a>)
    }
}

export class License extends Component {
    constructor(props) {
        super(props)

        this.state = {
            license: 'MIT'
        }
    }

    render() {
        return ( 
            <Link href="/license">
                <a className="bottom-text right"> {this.state.license} </a> 
            </Link>
        )
    }
}