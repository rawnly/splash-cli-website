import { useState } from 'react';

const styles = {
	closeBtn: {
		cursor: 'pointer',
		float: 'right',
		fontWeight: 'bold',
		fontSize: 20,
		position: 'absolute',
		top: '50%',
		right: 20,
		transform: 'translateY(-50%)',
	},
	container: {
		width: '100%',
		color: '#FFFFFF',
		position: 'relative',
	},
	text: {
		textAlign: 'center',
		margin: '0 auto',
		padding: 15,
	},
};

export default (props) => {
	const [isOpen, setIsOpen] = useState(props.isOpen);

	return isOpen ? (
		<div style={{ ...styles.container, background: props.background }}>
			<p style={{ ...styles.text, color: props.color }}>{props.children || props.text || <b>COOL BANNER</b>}</p>
			<span onClick={() => setIsOpen(false)} style={{ ...styles.closeBtn, color: props.color }}>
				{' '}
				&times;{' '}
			</span>
		</div>
	) : null;
};
