import { Component } from 'react';

import '../css/bottom-text.scss';

export class Version extends Component {
    constructor (props) {
        super(props)

        this.state = {
            version: '3.0.2'
        }
    }
    
    render () {
        return (
            <a href="https://github.com/splash-cli/splash-cli/releases/latest" className="bottom-text left"> v{this.state.version} </a>
        )

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
        return <a href="https://github.com/splash-cli/splash-cli/LICENSE.md" className="bottom-text right"> {this.state.license} </a>
    }
}
