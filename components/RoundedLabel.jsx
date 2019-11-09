const style = {
	container: {
		padding: '10px 20px',
		fontSize: 12,
		background: 'white',
		borderRadius: '100px',
		background: '#F8F6F7',
		boxShadow: '0px 3px 10px -4px rgba(27, 27, 27, .25)',
	},
	paragraph: {
		padding: 0,
		margin: 0,
		textAlign: 'center',
	},
};

export default (props) => (
	<div className={props.className} style={{ ...style.container, background: props.background }}>
		<p style={{ ...style.paragraph, color: props.color }}> {props.children} </p>
	</div>
);
