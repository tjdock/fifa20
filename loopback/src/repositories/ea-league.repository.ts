import {DefaultCrudRepository} from '@loopback/repository';
import {EaLeague} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EaLeagueRepository extends DefaultCrudRepository<
  EaLeague,
  typeof EaLeague.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(EaLeague, dataSource);
  }
}
