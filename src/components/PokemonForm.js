import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [name, setName] = useState("");
  const [hp, setHP] = useState(Number);
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const pokemonData = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImg,
        back: backImg
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemonData)
    })
      .then((res) => res.json())
      .then((newPokemon) => onAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHP(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={(e) => setFrontImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={(e) => setBackImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
