import './style.css';
import { eyesData, Eyes, Mouth, mouthData, colorsData, Color } from '../../data';
// import eyesImg from '../../img/eyes3.svg';
// import mouthImg from '../../img/mouth2.svg';
import { useContext } from 'react';
import { SettingContext } from '../../context/setting-context';

const Emoticon:React.FC = () => {
	const { eyes, color, mouth } = useContext(SettingContext)

	return (
		<div className='emoticon' style={{ backgroundColor: colorsData[color-1].value }}>
			<img className="emoticon__eyes" src={eyesData[eyes-1].image} />
			<img className="emoticon__mouth" src={mouthData[mouth-1].image} />
		</div>
	);
}

export default Emoticon;