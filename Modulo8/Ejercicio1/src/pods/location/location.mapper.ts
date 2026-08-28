import { LocationEntityVm } from "./location.vm";

export const mapLocationFromApiToVm = (location: any): LocationEntityVm => {
    return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents,
        url: location.url,
        created: location.created,
    };
};