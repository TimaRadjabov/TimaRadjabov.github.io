import secondBottle from '../../../uikit/static/sixth-section/02.svg';
import SixthSectionCard from '../SixthSectionCard';
import './SecondCard.css';

const SecondCard=()=>{

	const list =[
		'Повышает упругость и эластичность, обеспечивает свежий и здоровый вид кожи.',
		'Уменьшает выраженность темных кругов и мешков под глазами.',
		'Разглаживает кожу вокруг глаз и сокращает число морщин.',
		'Заметно улучшает состояние деликатной, склонной к шелушению и раздражению кожи вокруг глаз.',
		'Обеспечивает длительное увлажнение и комфорт.',
		'Помогает улучшить защитные функции рогового слоя кожи.',
	];

	const shotList=[
		'Повышает упругость и эластичность, обеспечивает свежий и здоровый вид кожи.',
		'Уменьшает выраженность темных кругов и мешков под глазами.',
		'Разглаживает кожу вокруг глаз'
	]
	
	return(
		<SixthSectionCard list={list} shotList={shotList} imgStyle={'second__card-img'} backgroundImg={secondBottle} title={'Индивидуальный мультифункциональный крем для кожи вокруг глаз	'} />
	)
}

export default SecondCard;