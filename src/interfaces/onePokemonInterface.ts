export interface IOnePokemon {
    abilities: Ability[];
    forms: Form[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: any[];
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: OtherSprites;
}

interface OtherSprites {
    dream_world: DreamWorld;
    home: Home;
    official_artwork: OfficialArtwork;
    showdown: Showdown;
    versions: Versions;
}

interface DreamWorld {
    front_default: string | null;
    front_female: string | null;
}

interface Home {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

interface Showdown {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface Versions {
    generation_i: GenerationSprites;
    generation_ii: GenerationSprites;
    generation_iii: GenerationSprites;
    generation_iv: GenerationSprites;
    generation_v: GenerationSprites;
    generation_vi: GenerationSprites;
    generation_vii: GenerationSprites;
}

interface GenerationSprites {
    [key: string]: SpriteDetails;
}

interface SpriteDetails {
    back_default: string | null;
    back_shiny: string | null;
    back_transparent?: string | null;
    back_gray?: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_transparent?: string | null;
    front_gray?: string | null;
    animated?: AnimatedSprites;
}

interface AnimatedSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
}

interface StatDetail {
    name: string;
    url: string;
}
