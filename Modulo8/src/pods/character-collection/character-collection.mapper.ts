import { CharacterEntityVm } from "./character-collection.vm";

export const mapCharacterFromApiToVm = (character: any): CharacterEntityVm => {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
  };
};