import {getService, juggler} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {EasportsDatasource} from '../datasources';
import {Easports} from "../models";

export interface EasportsService {
    getPlayers(page: Number, league: Number, club: Number, country: Number): Promise<Easports>;

    getPlayersByName(name: String, page: Number): Promise<Easports>;
}

export class EasportsServiceProvider implements Provider<EasportsService> {
    constructor(
        // restds must match the name property in the datasource json file
        @inject('datasources.easports')
        protected dataSource: juggler.DataSource = new EasportsDatasource(),
    ) {
    }

    value(): Promise<EasportsService> {
        return getService(this.dataSource);
    }
}
