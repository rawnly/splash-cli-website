import { Component } from 'react';

import '../css/navbar.scss';

import Link from 'next/link';
import LinkSmoothScroll from './LinkSmoothScroll';

const NavbarItem = props => (
    <li className={props.options.disabled ? 'disabled' : ''}>
        {
            props.options.anchor ?  (
                    <LinkSmoothScroll href={'/' + props.options.href}>{props.options.text}</LinkSmoothScroll>
            ) : (
                    props.options.disabled ? 
                        <a onClick={e => e.preventDefault()}>{props.options.text}</a> 
                    : 
                    <Link href={props.options.href}>
                        <a className={props.options.button ? 'button' : ''}>{props.options.text}</a>
                    </Link>
                )
            }
    </li>
)

export default class Navbar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            rightItems: [],
            leftItems: []
        }
    }

    componentDidMount() {
        this.setState({
            rightItems: this.props.items.filter(item => item.right),
            leftItems: this.props.items.filter(item => !item.right)
        })
    }

    render() {
        return (
            <nav style={{
                zIndex: 9999
            }}>
                <ul>
                    {this.state.leftItems.map(item => <NavbarItem options={item} />)}
                </ul>
                <ul>
                    {this.state.rightItems.map(item => <NavbarItem options={item} />)}
                </ul>
            </nav>
        )
    }
}
