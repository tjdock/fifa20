import {Entity, model, property} from '@loopback/repository';
import {EaPlayer} from "./ea.player.model";

@model()
export class Easports extends Entity {
    @property({type: 'number'}) count: number;
    @property({type: 'number'}) page: number;
    @property({type: 'number'}) totalPages: number;
    @property({type: 'number'}) totalResults: number;
    @property.array(EaPlayer) items: EaPlayer[];


    constructor(data?: Partial<Easports>) {
        super(data);
    }
}


