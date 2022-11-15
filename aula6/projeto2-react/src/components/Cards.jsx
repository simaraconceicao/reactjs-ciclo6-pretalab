import { lista } from "../data/subjects";
import Card from "./Card";

const Cards = () => {
  return lista.map((elemento) => {
    return <Card key={elemento.id} assunto={elemento} />;
  });
};

export default Cards;
