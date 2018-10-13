import { Navbar, Head, AnalyticsPage, Typed as TypedComponent } from '../components'

import Link from 'next/link'

import '../css/master.scss'
import '../css/license.scss'

export default class LicensePage extends AnalyticsPage {
    render() {
        return (
    <div>
        <Navbar items={[{
            text: 'Back',
            href: '/'
        }, {
            text: 'Github',
            href: 'https://github.com/splash-cli/splash-cli',
            button: true,
            right: true
        }]} />
        <Head title="License"/>
        <section className="container center">
            <h1 style={{ fontSize: '2em' }}> MIT License </h1>
            <p style={{ textAlign: 'center' }}> 
                Copyright &copy; {new Date().getFullYear()} 
                <Link href="https://federicovitale.me">
                    <a style={{ fontWeight: 'bold' }}> Federico Vitale </a>
                </Link> 
            </p>
            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                    <br />
                <br />
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                    <br />
                <br />
                <b>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.</b>
            </p>
        </section>
    </div>
)
    }
}