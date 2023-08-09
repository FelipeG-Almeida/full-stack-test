import './CardComponent.css';

export default function CardComponent(props) {
	const { name, city, country, favorite_sport } = props.props;
	return (
		<div>
			<ul className="card__container">
				<li>Name: {name}</li>
				<li>City: {city}</li>
				<li>Country: {country}</li>
				<li>Favorite Sport: {favorite_sport}</li>
			</ul>
		</div>
	);
}
