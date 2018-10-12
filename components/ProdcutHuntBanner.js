import { Component } from 'react';

export default class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isVisible: props.show
        }

        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ isVisible: false })
    }

    render() {
        return (
            <div ref={el => this.el = el} style={{
                width: '100%',
                background: '#da552f',
                color: '#FFFFFF',
                display: this.state.isVisible ? 'block' : 'none',
                position: 'relative'
            }}>
                <p style={{
                    textAlign: 'center',
                    margin: '0 auto',
                    padding: 15
                }}> Hello <b>Hunter</b>! Thank you for having checked <a href="https://github.com/splash-cli/splash-cli">Splash CLI</a> 🎉 </p>
                <span onClick={this.close} style={{ 
                    cursor: 'pointer',
                    float: 'right',
                    fontWeight: 'bold',
                    fontSize: 20,
                    position: 'absolute',
                    top: '50%',
                    right: 20,
                    transform: 'translateY(-50%)'
                }}> &times; </span>
            </div>
        )
    }
}