export class Album {
    constructor(        
        public id: string,
        public ref:string,
        public name:string,
        public title:string,
        public description:string,
        public duration:number,
        public status: string,
        public url?: string,
        public tags?: string[],
        public like?: string,
        ){}

    
};


export class List {
    constructor(
        id: string,
        list: []
    ){}

}
