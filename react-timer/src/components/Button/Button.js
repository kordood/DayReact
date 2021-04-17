import React from 'react';
import classNames from 'classnames/bind';
import from 'prop-types';
import from './Button.scss';

const cx = classNames.bind(styles);

const Button = ({ onClick, handleClear, handleSave,
contents }) => (
	<div className={cx('Button-wrapper')}>
		<div
			className={cx('Button')}
			onClick={onclick}
			onKeyDown={null}
			role="Button"
			tabIndex="0"
		>
			{contents ? '시작' : '정지'}
		</div>
		<div
			className={cx('clear', {visibility: !contents})}
			onClick={handleClear}
			onKeyDown={null}
			role="Button"
			tabIndex="0"
		>
		초기화
		</div>
		<div
			className={cx('Button', {visibility: contents})}
			onClick={handleSave}
			onKeyDown={null}
			role="Button"
			tabIndex="0"
		>
		저장
		</div>
	</div>
	);

Button.propTypes = {
	onClick: PropTypes.func,
	handleClear: PropTypes.func,
	handleSave: PropTypes.func,
	contents: PropTypes.bool,
};

Button.defaultProps = {
	onClick: () => console.warn('No handleAction!'),
	handleClear: () => console.log('No handleClear!'),
	handleSave: () => console.log('No handleSave!'),
	contents: true,
};
