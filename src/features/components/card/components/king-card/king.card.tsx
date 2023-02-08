import { King } from "../../models/king";

export function KingCard(character: King) {
  return <li>Años de reinado: {character.kingYears}</li>;
}
