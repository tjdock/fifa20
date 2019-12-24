import {getService, juggler} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {EaSportsDatasource} from '../datasources';
import {EaPlayer, EaSports} from "../models";

export interface EaSportsService {
    getPlayers(page: Number, league: Number, club: Number, country: Number): Promise<EaSports>;

    getPlayersByName(name: String, page: Number): Promise<EaSports>;
    getEAPlayers(limit:Number,skip:Number): Promise<EaPlayer[]>;


}

export class EasportsServiceProvider implements Provider<EaSportsService> {
    constructor(
        // restds must match the name property in the datasource json file
        @inject('datasources.easports')
        protected dataSource: juggler.DataSource = new EaSportsDatasource(),
    ) {
    }

    value(): Promise<EaSportsService> {
        return getService(this.dataSource);
    }
}
