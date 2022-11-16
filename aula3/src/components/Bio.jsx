import Card from "./Card";
import profile from "../assets/profile.jpg";
function Bio() {
  return (
    <Card
      title="Lisandra Cruz"
      description="Olá eu sou a Lis, mamis de Lala e Minerva Pantufa. Pessoa desenvolvedora na Thougtworks. 
      Amo tecologia e educação e acredito fortemente na combinação delas para mudar o meio."
      imgPath={profile}
    />
  );
}

export default Bio;
