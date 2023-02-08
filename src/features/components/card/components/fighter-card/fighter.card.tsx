import { Fighter } from "../../models/fighter";

export function FighterCard(character: Fighter) {
  return (
    <>
      <li>Arma: {character.weapon}</li>
      <li>Destreza: {character.dexterity}</li>{" "}
    </>
  );
}
