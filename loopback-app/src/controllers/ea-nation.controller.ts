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
import {EaNation} from '../models';
import {EaNationRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
import {OPERATION_SECURITY_SPEC} from '../utils/security-spec';

export class EaNationController {
  constructor(
    @repository(EaNationRepository)
    public eaNationRepository: EaNationRepository,
  ) {}

  @post('/ea-nations', {
    responses: {
      '200': {
        description: 'EaNation model instance',
        content: {'application/json': {schema: getModelSchemaRef(EaNation)}},
      },
    },
  })
  async create(@requestBody() eaNation: EaNation): Promise<EaNation> {
    return this.eaNationRepository.create(eaNation);
  }

  @get('/ea-nations/count', {
    responses: {
      '200': {
        description: 'EaNation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EaNation))
    where?: Where<EaNation>,
  ): Promise<Count> {
    return this.eaNationRepository.count(where);
  }

  @get('/ea-nations', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'Array of EaNation model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaNation, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async find(
    @param.query.object('filter', getFilterSchemaFor(EaNation))
    filter?: Filter<EaNation>,
  ): Promise<EaNation[]> {
    return this.eaNationRepository.find(filter);
  }

  @get('/ea-nations/{id}', {
    responses: {
      '200': {
        description: 'EaNation model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EaNation, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(EaNation))
    filter?: Filter<EaNation>,
  ): Promise<EaNation> {
    return this.eaNationRepository.findById(id, filter);
  }
}
