interface IAlias{
    AliasName: string;
    AliasValue: string;
}

class Alias implements IAlias{
    AliasName: string;
    AliasValue: string;
    constructor(name: string){
        this.AliasName = name;
        this.AliasValue = "";
    }
}
