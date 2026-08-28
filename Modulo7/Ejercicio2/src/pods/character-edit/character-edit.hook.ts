import { CharacterEntityVm } from "#pods/character-collection/character-collection.vm.js";
import { useState } from "react";

export const useCharacterEdit = () => {
    const [characterUpdated, setCharacterUpdated] = useState<CharacterEntityVm | null>(null);
    const updateCharacter = async (id: number, character: CharacterEntityVm) => {
      const response = await updateCharacterApi(id, character);
      setCharacterUpdated(response as unknown as CharacterEntityVm);
    };
    return { characterUpdated, updateCharacter };
  };
  
  
  const updateCharacterApi = async (id: number, character: CharacterEntityVm) => {
    const response = await fetch(`http://localhost:3000/api/character/${id}`, {
      method: 'PUT',
      body: JSON.stringify(character),
    });
    const data = await response.json();
    return data;
  };