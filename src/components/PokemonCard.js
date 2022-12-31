import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({item}) {

  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={item.name} onClick={handleClick} src={isClicked ? item.sprites.front : item.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {item.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
