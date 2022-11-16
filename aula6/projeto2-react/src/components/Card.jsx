const Card = ({ assunto }) => {
  return (
    <>
      <h2>{assunto.titulo}</h2>
      <img src={assunto.gif} alt="200" />
      <p>{assunto.descricao}</p>
      <a target="_blank" href={assunto.linkMaisInformacoes}>
        Clique para mais informações
      </a>
    </>
  );
};
export default Card;
