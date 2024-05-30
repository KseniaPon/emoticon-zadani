import { useContext } from 'react';
import {eyesData, Eyes} from '../../data';
import { SettingContext } from '../../context/setting-context';

const EyesSelector:React.FC = () => {
	const { eyes, changeEyes } = useContext(SettingContext)

	const handleClick = (item:Eyes) => {
		console.log('eyes', item.id)
		changeEyes(item.id)
	}

	return (
		<div className="items">
			{eyesData.map(eye =>
				<img
					className={(eyes) === eye.id ? 'item active' : 'item'}
					key={eye.id}
					src={eye.image}
					onClick={() => { handleClick(eye) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;