import { useContext } from 'react';
import {Color, colorsData} from '../../data';
import { SettingContext } from '../../context/setting-context';

const ColorSelector:React.FC = () => {
	const {color, changeColor} = useContext(SettingContext)

	const handleClick = (item:Color) => {
		console.log('color', item.id)
		changeColor(item.id)
	}

	return (
		<div className="items">
			{colorsData.map(c =>
				<div
					className={color === c.id ? 'item active' : 'item'}
					key={c.id}
					style={{ backgroundColor: c.value}}
					onClick={() => { handleClick(c) }}
					/>
			)}
		</div>
	);
}

export default ColorSelector;