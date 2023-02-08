import { AnyCharacter } from "../mocks/characters";

import { CounselorCard } from "./counselor-card/counselor.card";
import { FighterCard } from "./fighter-card/fighter.card";
import { KingCard } from "./king-card/king.card";
import { SquireCard } from "./squire-card/squire.card";

type CardProps = {
  character: AnyCharacter;
};

export function Card({ character }: CardProps) {
  const checkClass = (item: any) => {
    if (item.weapon) {
      return <FighterCard {...item}></FighterCard>;
    }
    if (item.kingYears) {
      return <KingCard {...item}></KingCard>;
    }
    if (item.servilism) {
      return <SquireCard {...item}></SquireCard>;
    }
    return <CounselorCard {...item}></CounselorCard>;
  };

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={"assets/img/" + character.name.toLowerCase() + ".jpg"}
          alt={character.name + " " + character.family}
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {character.name} {character.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {character.age}</li>
              <li>
                Estado:
                <i className="fas fa-thumbs-down inactive"></i>
                <i className="fas fa-thumbs-up"></i>
              </li>
            </ul>
          </div>

          <div className="character__overlay">
            <ul className="list-unstyled">{checkClass(character)}</ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji"></i>
      </div>
    </li>
  );
}
