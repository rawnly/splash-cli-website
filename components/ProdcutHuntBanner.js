import { Component } from 'react';

const styles = {
    closeBtn: {
        cursor: 'pointer',
        float: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)'
    },
    container: {
        width: '100%',
        color: '#FFFFFF',
        position: 'relative'
    },
    text: {
        textAlign: 'center',
        margin: '0 auto',
        padding: 15
    }
}

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
            <div ref={el => this.el = el} style={Object.assign({ background: this.props.background }, styles.container, { display: this.state.isVisible ? 'block' : 'none' })}>
                <p style={Object.assign({ color: this.props.color }, styles.text)}> {this.props.children || this.props.text || <b>COOL BANNER</b>} </p>
                <span onClick={this.close} style={Object.assign({ color: this.props.color }, styles.closeBtn)}> &times; </span>
            </div>
        )
    }
}