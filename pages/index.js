import { Component } from 'react';

import {
    Credit,
    Navbar,
    Version,
    License,
    Head,
    AnalyticsPage,
    ProductHuntBanner as Banner,
    Typed as TypedComponent
} from '../components'


import '../css/master.scss';

const navbarItems = [{
    text: 'Install',
    anchor: true,
    href: '#install'
}, {
    right: true,
    text: 'Product Hunt',
    href: 'https://producthunt.com/posts/splash-cli'
}, {
    right: true,
    text: 'Github',
    button: true,
    href: 'https://github.com/splash-cli/splash-cli'
}]


class IndexPage extends AnalyticsPage {
    constructor(props) {
        super(props);

        this.state = {
            isHunter: props.url.query.ref === 'producthunt'
        }
    }


    render() {
        return (
            <div>
                <Head />
                <Banner show={this.state.isHunter}/>
                <section className="container">
                    <div className="content">
                        <Navbar items={navbarItems}/>
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
                    <div className="background smooth"></div>
                </section>
                <section className="container small center">
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