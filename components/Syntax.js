
export const Dollar = props => <span className="dollar">$</span>
export const Command = props => <span className="cmd">{props.children}</span>
export const Dimmed = props => <span style={{ opacity: .2, ...props.style }}>{props.children || props.text}</span>
export const Flag = props => <span style={{ color: props.color }}>{props.text}</span>
export const Break = props => (<div><br /></div>)
export const Title = props => <h2 style={{ marign: 0, padding: 0 }}>{props.text}</h2>
export const Args = props => {
    let text = props.text;
 
    if ( props.required ) {
        text = `<${props.text}>`
    } else {
        text = `[${props.text}]`
    }
    
    return (<Dimmed style={{ opacity: .5, color: props.color || 'gray' }} text={text} />)
}


export const FlagLine = (props) => {
    let flag = props.flag, color = props.color, args, hint; 

    if ( !props.hasOwnProperty("flag") ) {
        throw new SyntaxError("Missing `flag` property.")
    }
    
    if ( !props.hasOwnProperty("color") ) {
        throw new SyntaxError("Missing `color` property.")
    }

    if ( props.hasOwnProperty("args") ) {
        args = <Args text={props.args} color={props.color} required={props.required} /> 
    }
    
    if ( props.hasOwnProperty("hint") ) {
        hint = <Dimmed text={props.hint.toUpperCase()} />
    }


    return (
        <span>
            <Flag text={props.flag} color={props.color} /> {args} {hint}
            <Break />
        </span>
    )
}