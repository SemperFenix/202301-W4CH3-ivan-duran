import { Card } from "../components/card";
import { mockCharacters } from "../mocks/characters";

export function CardPage() {
  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {mockCharacters.map((item: any) => (
            <Card character={item}></Card>
          ))}
        </ul>
      </div>
      <div className="comunications">
        <p className="comunications__text display-1">
          Una frase que dice alguien
        </p>
        <img
          className="comunications__picture"
          src="img/no-one.jpg"
          alt="Nombre y familia del que habla"
        />
      </div>
    </>
  );
}
