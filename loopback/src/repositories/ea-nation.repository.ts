import {DefaultCrudRepository} from '@loopback/repository';
import {EaNation} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EaNationRepository extends DefaultCrudRepository<
  EaNation,
  typeof EaNation.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EaNation, dataSource);
  }
}
