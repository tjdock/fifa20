import {DefaultCrudRepository} from '@loopback/repository';
import {EaPlayer} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EaPlayerRepository extends DefaultCrudRepository<EaPlayer,
    typeof EaPlayer.prototype.id> {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(EaPlayer, dataSource);
    }
}
