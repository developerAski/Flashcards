const Card = ({ question, selected, handleClick }) => {
	return (
		<div className={selected === question.id ? "selected" : ""} onClick={() => handleClick(question.id)}>
			<p>{selected === question.id ? question.answer : question.question}</p>
		</div>
	);
};

export default Card;
