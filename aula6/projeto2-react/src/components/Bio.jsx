import { informacao } from "../data/profile-data";

const Bio = () => {
  return (
    <>
      <h2>{informacao.nome}</h2>
      <img src={informacao.foto} width="200" />
      <p>{informacao.apelido}</p>
      <p>{informacao.descricao}</p>
    </>
  );
};

export default Bio;
