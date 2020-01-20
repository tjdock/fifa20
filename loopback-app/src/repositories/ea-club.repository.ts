import {DefaultCrudRepository} from '@loopback/repository';
import {EaClub} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EaClubRepository extends DefaultCrudRepository<
  EaClub,
  typeof EaClub.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EaClub, dataSource);
  }
}
