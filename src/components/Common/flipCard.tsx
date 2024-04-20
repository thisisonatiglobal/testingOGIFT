

const FlipCard = ({ frontTitle, backTitle }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{frontTitle}</p>
          <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
          <p className="title">{backTitle}</p>
          <p>JOIN US</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
