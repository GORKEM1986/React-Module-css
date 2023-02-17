import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./Card.module.css";

const Card = ({ lang, img, btn }) => {
  return (
    <div className="bg" >
      <h1 className= {CardStyle.title} > {lang} </h1>
      <img className= {CardStyle.images} src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
