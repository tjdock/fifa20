import {Entity, model, property} from '@loopback/repository';

@model()
export class EaAttribute extends Entity {
    @property.array(Number) chemistryBonus: Array<Number>;
    @property({type: 'string'}) name: string;
    @property({type: 'number'}) value: number;

    constructor(data?: Partial<EaAttribute>) {
        super(data);
    }
}


