import { Card } from "../components/card";
import { mockCharacters } from "../mocks/characters";

export function CardPage() {
  return (
    <>
      {mockCharacters.map((item: any) => (
        <Card character={item}></Card>
      ))}
    </>
  );
}
