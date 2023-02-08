import { Squire } from "../../models/squire";

export function SquireCard(character: Squire) {
  return (
    <>
      <li>Peloteo: {character.servilism}</li>
      <li>
        Sirve a: {character.boss.name} {character.boss.family}
      </li>
    </>
  );
}
