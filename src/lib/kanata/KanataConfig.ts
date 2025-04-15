interface KanataConfig {

    defsrc: string;
    defLayers: string[];
    defAliases: string[];

    addLayer(layer: string): void;
    addAlias(alias: string): void;
}

