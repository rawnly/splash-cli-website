import { Component } from 'react';

import {
    RoundedLabel,
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
    text: 'docs',
    href: '/docs'
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
            isHunter: props.url.query.ref === 'producthunt',
            isGitUser: props.url.query.ref === 'github',
        }
    }

    render() {
        return (
            <div>
                <Head />
                <Banner show={this.state.isHunter} background="#da552f" color="#F8F6F7">
                    Hello <b>Hunter</b>! Thank you for having checked <a href="https://github.com/splash-cli/splash-cli">Splash CLI</a> 🎉
                </Banner>

                <Banner show={this.state.isGitUser} background="#1d1d1d" color="#F8F6F7">
                    Hello! Thank you for having checked <a href="https://github.com/splash-cli/splash-cli">Splash CLI</a> 🎉
                </Banner>

                <section className="container">
                    <div className="content">
                        <Navbar items={navbarItems}/>
                        <h1 id="splash-title"> <span>just type</span> <span>splash</span> <span>that's it</span> </h1>
                        <div className="terminal"></div>
                        <Version />
                        <License />
                        <div className="credits">
                            <RoundedLabel background="white" color="#1d1d1d" className="fadeInBottom">
                                📸 by <a target="_blank" href="https://unsplash.com/@tiago">Tiago Muraro</a> on <a target="_blank" href="https://unsplash.com"> Unsplash</a>
                            </RoundedLabel>
                        </div>
                    </div>
                    <div className="background smooth"></div>
                </section>
                <section className="container small center">
                    <small> Installation process </small>
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
                    <small> via <a href="https://www.npmjs.com/"> NPM </a> or <a href="https://yarnpkg.com">YARN</a> </small>
                </section>
                <footer id="install">
                    <span> Brought to you with ❤️ by <a href="https://twitter.com/rawnlydev">Federico Vitale</a> </span>
                </footer>
            </div>
        )
    }
}



export default IndexPage;