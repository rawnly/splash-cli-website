import { Component } from 'react';
import { Credit, Navbar, Version, License, Typed as TypedComponent, Head } from '../components'

import '../css/master.scss';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Head />
                <section className="container">
                    <div className="content">
                        <Navbar />
                        <h1 id="splash-title"> <span>just type</span> <span>splash</span> <span>that's it</span> </h1>
                        <div className="terminal"></div>
                        <Version />
                        <License />
                        <div className="credits">
                            <Credit>
                                📸 by <a target="_blank" href="https://unsplash.com/@tiago">Tiago Muraro</a> on <a target="_blank" href="https://unsplash.com"> Unsplash</a>
                            </Credit>
                        </div>
                    </div>
                    <div className="background"></div>
                </section>
                <section className="container">
                    <pre className="fake-term">
                        <TypedComponent strings={[
                            `<span class="dollar">$</span> <span class="cmd">npm</span> install --global <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># or</span> \n<span class="dollar">$</span> ^500<span class="cmd">yarn</span> global add <b>splash-cli</b>\n<span class="dollar">$</span> ^800<span class="comment"># Isn't that easy?</span> ^3500`,
                        ]} options={{
                            typeSpeed: 50,
                            backSpeed: 0,
                            showCursor: true,
                            cursorChar: '|',
                            smartBackspace: true,
                            loop: true
                        }} />
                    </pre>
                </section>
                <footer id="install">
                    <span> Brought to you with ❤️ by <a href="https://federicovitale.me">@rawnly</a> </span>
                </footer>
            </div>
        )
    }
}



export default IndexPage;