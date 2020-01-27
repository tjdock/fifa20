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
import {EaLeague} from '../models';
import {EaLeagueRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
import {OPERATION_SECURITY_SPEC} from '../utils/security-spec';

export class EaLeagueController {
  constructor(
    @repository(EaLeagueRepository)
    public eaLeagueRepository: EaLeagueRepository,
  ) {}

  @post('/ea-leagues', {
    responses: {
      '200': {
        description: 'EaLeague model instance',
        content: {'application/json': {schema: getModelSchemaRef(EaLeague)}},
      },
    },
  })
  async create(@requestBody() eaLeague: EaLeague): Promise<EaLeague> {
    return this.eaLeagueRepository.create(eaLeague);
  }

  @get('/ea-leagues/count', {
    responses: {
      '200': {
        description: 'EaLeague model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EaLeague))
    where?: Where<EaLeague>,
  ): Promise<Count> {
    return this.eaLeagueRepository.count(where);
  }

  @get('/ea-leagues', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Array of EaLeague model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaLeague, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async find(
    @param.query.object('filter', getFilterSchemaFor(EaLeague))
    filter?: Filter<EaLeague>,
  ): Promise<EaLeague[]> {
    return this.eaLeagueRepository.find(filter);
  }

  @get('/ea-leagues/{id}', {
    responses: {
      '200': {
        description: 'EaLeague model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EaLeague, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<EaLeague> {
    return this.eaLeagueRepository.findById(id);
  }
}
