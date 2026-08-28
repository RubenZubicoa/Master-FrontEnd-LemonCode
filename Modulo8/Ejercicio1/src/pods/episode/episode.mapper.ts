import { EpisodeEntityVm } from "./episode.vm";

export const mapEpisodeFromApiToVm = (episode: any): EpisodeEntityVm => {
    return {
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        characters: episode.characters,
        url: episode.url,
        created: episode.created,
    };
};