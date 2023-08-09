export default function CardComponent(props) {
    console.log(props)
	const { name, city, country, favorite_sport } = props.props;
    console.log(name)
	return (
        <>
            <p>{name}</p>
            <p>{city}</p>
        </>
    )
}
