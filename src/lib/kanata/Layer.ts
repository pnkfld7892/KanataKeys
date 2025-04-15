interface ILayer{
    LayerName:string;
    LayerKeys: string[];
    WriteLayer():string;
    UpdateLayerKey(index: number, key: string): void;
    
}

class Layer implements ILayer{

    constructor(layerName: string){
        this.LayerName = layerName;
        this.LayerKeys = [];
    }
    private _LayerName: string = "";
    public get LayerName(): string {
        return this._LayerName;
    }
    public set LayerName(value: string) {
        this._LayerName = value;
    }
    private _LayerKeys: string[] = [];
    public get LayerKeys(): string[] {
        return this._LayerKeys;
    }
    private set LayerKeys(value: string[]){
        this._LayerKeys = value;
    }


    WriteLayer(): string {
        return `(deflayer ${this.LayerName} ${this.LayerKeys.join(" ")})`;
    }

    AddLayerKey(key:string){
        this.LayerKeys.push(key);
    }

    UpdateLayerKey(index: number, key: string): void {
        if(index > this.LayerKeys.length)
            throw Error("Index out of range");
        this._LayerKeys[index] = key;
    }

}
