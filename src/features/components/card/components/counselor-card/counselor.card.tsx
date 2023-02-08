import { Counselor } from "../../models/counselor";

export function CounselorCard(character: Counselor) {
  return (
    <li>
      Asesora a: {character.boss.name} {character.boss.family}
    </li>
  );
}
