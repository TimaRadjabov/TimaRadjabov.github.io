import thirdBottle from '../../../uikit/static/sixth-section/03.svg';
import SixthSectionCard from '../SixthSectionCard';
import './ThirdCard.css';

const ThirdCard=()=>{

	const list =[
		'Экстракт ламинарии и диатомит являются компонентами липосомальных технологий, обладают большей проникающей способностью, что помогает глубокому увлажнению кожи, защищает ее от потери влаги и внешних загрязнителей.',
		'Экстракт листьев мелиссы лекарственной освежает кожу и дарит ей сияющий и здоровый вид.',
		'Экстракт листьев гамамелиса вирджинского минимизирует покраснения.',
		'Экстракт цветков липы сердцевидной способствует увлажнению кожи, обеспечивает ощущение комфорта.',
	];

	const shotList=[
		'Экстракт ламинарии и диатомит являются компонентами липосомальных технологий, обладают большей проникающей способностью, что помогает глубокому увлажнению кожи, защищает ее от потери влаги и внешних загрязнителей.',
		'Экстракт листьев мелиссы',
	]
	
	return(
		<SixthSectionCard list={list} shotList={shotList} imgStyle={'third__card-img'} backgroundImg={thirdBottle} title={'Мицеллярный лосьон для глубокого очищения кожи		'} />
	)
}

export default ThirdCard;