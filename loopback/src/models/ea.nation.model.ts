import {Entity, model, property} from '@loopback/repository';

@model()
class EaNationImageType {
    @property({type: 'string'}) large: string;
    @property({type: 'string'}) medium: string;
    @property({type: 'string'}) small: string;
}

@model()
export class EaNation extends Entity {
    @property({type: 'string'}) abbrName: string;
    @property({type: 'number'}) id: number;
    @property({type: EaNationImageType}) imageUrls: EaNationImageType;
    @property({type: 'string'}) imgUrl: string;
    @property({type: 'string'}) name: string;


    constructor(data?: Partial<EaNation>) {
        super(data);
    }
}


