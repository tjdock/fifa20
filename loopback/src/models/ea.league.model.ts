import {Entity, model, property} from '@loopback/repository';

@model()
class EaLeagueImageType {
    @property({type: 'string'}) dark: string;
    @property({type: 'string'}) light: string;
}

@model()
export class EaLeague extends Entity {
    @property({type: 'string'}) abbrName: string;
    @property({type: 'number'}) id: number;
    @property({type: EaLeagueImageType}) imageUrls: EaLeagueImageType;
    @property({type: 'string'}) imgUrl: string;
    @property({type: 'string'}) name: string;


    constructor(data?: Partial<EaLeague>) {
        super(data);
    }
}


