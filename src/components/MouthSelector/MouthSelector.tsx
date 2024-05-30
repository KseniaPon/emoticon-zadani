import { useContext } from 'react';
import {mouthData, Mouth} from '../../data';
import { SettingContext } from '../../context/setting-context';

const MouthSelector:React.FC = () => {
	
	const { mouth, changeMouth } = useContext(SettingContext)

	const handleClick = (item:Mouth) => {
		console.log('mouth', item.id)
		changeMouth(item.id)
	}

	return (
		<div className="items">
			{mouthData.map(m =>
				<img
					className={mouth === m.id ? 'item active' : 'item'}
					key={m.id}
					src={m.image}
					onClick={() => { handleClick(m) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;