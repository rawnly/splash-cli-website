import { Navbar, AnalyticsPage, Head } from '../components'
import { Dollar, Title, Command, Dimmed, FlagLine, Break } from '../components/Syntax'

import '../css/master.scss'

const navbarItems = [
    { 
        text: 'Back', 
        href: '/' 
    }, {
        text: 'Product Hunt',
        href: 'https://producthunt.com/posts/splash-cli',
        right: true
    },
    {
        text: 'Github',
        href: 'https://github.com/splash-cli/splash-cli',
        button: true,
        right: true
    }
]

export default class Docs extends AnalyticsPage {
    render() {
        return (
            <div>
                <Head title="Documentation"/>
                <Navbar items={navbarItems} />
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1> Documentation </h1>
                    <p> <b>Splash</b> is easy and quick to use, <i>just type splash</i> to get started.</p>
                    <br />
                    <pre className="help-menu fake-term" style={{ textAlign: 'left', width: '80vw' }}>
                        <Break />
                        <Title text="Usage" />
                        <Dollar /> <Command>splash</Command> <Dimmed>[command] [flags]</Dimmed>
                        <Break />
                        <Break />

                        <Title text="Commands" />
                            <FlagLine flag="settings" color="#0095ff" args="get|set|restore" hint="GET/SET/RESTORE SETTINGS" required/>
                            <FlagLine flag="alias" color="#0095ff" args="get|set|remove" hint="GET/SET/REMOVE COLLECTION ALIASES" required/>
                            <Break />

                        <Title text="Options" />
                            <FlagLine flag="--scale" color="gold" args="auto|fill|fit|stretch|center" hint="set wallpaper scale" required/>
                            <FlagLine flag="--screen" color="gold" args="all|main|monitor" hint="set as wallpaper on selected monitor" required/>
                            <FlagLine flag="-s --save" color="gold" args="optional path" hint="download without setting as wallpaper"/>
                            <FlagLine flag="-i --info" color="gold" hint="show photo's exif"/>
                            <FlagLine flag="-q --quiet" color="gold" hint="no output"/>
                            <Break />


                        <Title text="Source Filters" />
                            <FlagLine flag="-u --user" args="username" color="tomato" hint="random photo from user" required/>
                            <FlagLine flag="--collection" args="id|alias" color="tomato" hint="random photo from collection" required/>
                            <FlagLine flag="-c --curated" color="tomato" hint="random curated photo"/>
                            <FlagLine flag="--id" args="id|url" color="tomato" hint="photo by id" required/>
                            <FlagLine flag="--day" color="tomato" hint="get the photo of the day" required/>
                            <Break />
                            
                        <Title text="Search Filters" />
                            <FlagLine flag="-f --featured" color="tomato" hint="limit to only featured photos"/>
                            <FlagLine flag="--query" color="tomato" hint="random from query"/>
                            <Break />
                    </pre>
                </div> 
            </div>
        )
    }
}