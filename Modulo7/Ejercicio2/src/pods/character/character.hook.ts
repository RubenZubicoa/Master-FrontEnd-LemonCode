import { CharacterEntityVm } from "#pods/character-collection/character-collection.vm.js";
import { useState } from "react";

export const useCharacter = () => {
  const [character, setCharacter] = useState<CharacterEntityVm | null>(null);
  const loadCharacter = async (id: number) => {
    const character = await getCharacter(id);
    setCharacter(character);
  };
  return { character, loadCharacter };
};


const getCharacter = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/character/${id}`);
  const data = await response.json();
  return data;
};
export default useCharacter;