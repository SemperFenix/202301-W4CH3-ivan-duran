import { Card } from "../components/card";
import { AnyCharacter, Characters, mockCharacters } from "../mocks/characters";

export function CardPage() {
  return (
    <>
      {mockCharacters.map((item: any) => (
        <Card character={item}></Card>
      ))}
    </>
  );
}
