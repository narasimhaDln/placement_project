
const QuestionCard = ({ question, options, handleAnswerClick }) => {
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h2>{question}</h2>
      <div style={{backgroundColor:"teal"}}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{ margin: '10px', padding: '10px', cursor: 'pointer',borderRadius:"10px"}}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
