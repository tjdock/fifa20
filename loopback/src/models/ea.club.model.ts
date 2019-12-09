import {Entity, model, property} from '@loopback/repository';

@model()
class EaImageSize {
    @property({type: 'string'}) large: string;
    @property({type: 'string'}) medium: string;
    @property({type: 'string'}) small: string;
}

@model()
class EaClubImageType {
    @property({type: EaImageSize}) dark: EaImageSize;
    @property({type: EaImageSize}) light: EaImageSize;
}

@model()
export class EaClub extends Entity {

    @property({type: 'string'}) abbrName: string;
    @property({type: 'number'}) id: number;
    @property({type: EaClubImageType}) imageUrls: EaClubImageType;
    @property({type: 'string'}) imgUrl: string;
    @property({type: 'string'}) name: string;

    constructor(data?: Partial<EaClub>) {
        super(data);
    }
}


