import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {EaClub} from '../models';
import {EaClubRepository} from '../repositories';

export class EaClubController {
  constructor(
    @repository(EaClubRepository)
    public eaClubRepository : EaClubRepository,
  ) {}

  @post('/ea-clubs', {
    responses: {
      '200': {
        description: 'EaClub model instance',
        content: {'application/json': {schema: getModelSchemaRef(EaClub)}},
      },
    },
  })
  async create(@requestBody() eaClub: EaClub): Promise<EaClub> {
    return this.eaClubRepository.create(eaClub);
  }

  @get('/ea-clubs/count', {
    responses: {
      '200': {
        description: 'EaClub model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EaClub)) where?: Where<EaClub>,
  ): Promise<Count> {
    return this.eaClubRepository.count(where);
  }

  @get('/ea-clubs', {
    responses: {
      '200': {
        description: 'Array of EaClub model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaClub, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EaClub)) filter?: Filter<EaClub>,
  ): Promise<EaClub[]> {
    return this.eaClubRepository.find(filter);
  }


  @get('/ea-clubs/{id}', {
    responses: {
      '200': {
        description: 'EaClub model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EaClub, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(EaClub)) filter?: Filter<EaClub>
  ): Promise<EaClub> {
    return this.eaClubRepository.findById(id, filter);
  }

}
