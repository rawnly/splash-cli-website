import { Component } from 'react';
import ReactGA from 'react-ga';

import CreditComponent from './Credit'
import NavbarComponent from './Navbar'
import TypedComponent from './TypedComponent'
import LinkSmoothScrollComponent from './LinkSmoothScroll'
import HeadComponent from './Head'
import ProductHuntBannerComponent from './ProdcutHuntBanner'

import {
    Version as VersionComponent,
    License as LicenseComponent
} from './bottom-text'

const dev = process.env.NODE_ENV !== 'production'

export const Credit = CreditComponent
export const Navbar = NavbarComponent
export const Typed = TypedComponent
export const LinkSmoothScroll = LinkSmoothScrollComponent
export const Head = HeadComponent
export const Version = VersionComponent
export const License = LicenseComponent
export const ProductHuntBanner = ProductHuntBannerComponent
export class AnalyticsPage extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127454453-1', {
            debug: dev
        })
        ReactGA.pageview(window.location.pathname)
    }
}
