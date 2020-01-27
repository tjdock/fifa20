import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
} from '@loopback/rest';
import {EaPlayer, EaLeague, EaClub, EaNation} from '../models';
import {
  EaPlayerRepository,
  EaLeagueRepository,
  EaClubRepository,
  EaNationRepository,
} from '../repositories';
import {authenticate} from '@loopback/authentication';
import {OPERATION_SECURITY_SPEC} from '../utils/security-spec';

export class EaPlayerController {
  constructor(
    @repository(EaPlayerRepository)
    public eaPlayerRepository: EaPlayerRepository,
    @repository(EaLeagueRepository)
    public eaLeagueRepository: EaLeagueRepository,
    @repository(EaClubRepository)
    public eaClubRepository: EaClubRepository,
    @repository(EaNationRepository)
    public eaNationRepository: EaNationRepository,
  ) {}

  @get('/ea-players/count', {
    responses: {
      '200': {
        description: '获取球员数量',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EaPlayer))
    where?: Where<EaPlayer>,
  ): Promise<Count> {
    return this.eaPlayerRepository.count(where);
  }

  @get('/ea-players', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: '获取所有球员信息',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaPlayer, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async findPlayers(
    @param.query.object('filter', getFilterSchemaFor(EaPlayer))
    filter?: Filter<EaPlayer>,
  ): Promise<EaPlayer[]> {
    return this.eaPlayerRepository.find(filter);
  }

  @get('/ea-players/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'EaPlayer model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EaPlayer, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async findById(@param.path.number('id') id: string): Promise<EaPlayer> {
    return this.eaPlayerRepository.findById(id);
  }

  @get('/ea-players/league-club', {
    responses: {
      '200': {
        description: '从球员列表种提取联赛信息和俱乐部并创建到数据库中',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaPlayer, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findLeagueClub(): Promise<EaPlayer[]> {
    // let totalPages = 218;

    // for (let i: number = 0; i <= totalPages; i++) {
    //   console.log('循环了' + i + '遍');
    //   let filter: Filter = {fields: {league: true, club: true}, limit: 100, offset: i * 100};
    //   let players: EaPlayer[] = await this.eaPlayerRepository.find(filter);
    //   for (let item of players) {
    //     let league: EaLeague = item.league;
    //     let club: EaClub = item.club;
    //     club.leagueId = league.id;

    //     let haveLeague = await this.eaLeagueRepository.count({id: league.id});
    //     if (haveLeague.count == 0) {
    //       //如果联赛不存在
    //       await this.eaLeagueRepository.create(league);
    //       console.log('添加了一条league', league.abbrName);

    //       await this.eaClubRepository.create(club);
    //       console.log('添加了一条club', league.abbrName);
    //     } else {
    //       let haveClub = await this.eaClubRepository.count({id: club.id});
    //       if (haveClub.count == 0) {
    //         //如果俱乐部不存在
    //         await this.eaClubRepository.create(club);
    //         console.log('联赛已存在 添加了一条club', league.abbrName);
    //       }

    //     }
    //   }
    // }

    return [];
  }

  @get('/ea-players/nations', {
    responses: {
      '200': {
        description: '从球员列表种提取国籍信息创建到数据库中',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EaPlayer, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findNations(): Promise<EaPlayer[]> {
    // let totalPages = 218;

    // for (let i: number = 0; i <= totalPages; i++) {
    //   console.log('循环了' + i + '遍');
    //   let filter: Filter = {fields: {nation: true}, limit: 100, offset: i * 100};
    //   let players: EaPlayer[] = await this.eaPlayerRepository.find(filter);
    //   for (let item of players) {
    //     let nation: EaNation = item.nation;

    //     let haveNation = await this.eaNationRepository.count({id: nation.id});
    //     if (haveNation.count == 0) {
    //       //如果国籍不存在
    //       await this.eaNationRepository.create(nation);
    //       console.log('添加了一条nation', nation.abbrName);
    //     }
    //   }
    // }

    return [];
  }
}
