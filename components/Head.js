import { Component } from 'react';
import Head from 'next/head';

export default class CustomHead extends Component {
    render() {
        return (
            <div>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=0.6" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="theme-color" content="#F8F6F7"/>

                    <title> Splash CLI - {this.props.title || '📸 Beautiful wallpapers from unsplash'} </title>
                </Head>
            </div>
        )
    }
}