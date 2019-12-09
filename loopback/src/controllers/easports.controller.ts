import {get, param,} from '@loopback/rest';
import {inject} from "@loopback/context";
import {EasportsService} from "../services";
import {Easports} from "../models";

export class EasportsController {
    constructor(
        @inject('services.EasportsService')
        protected srv: EasportsService,
    ) {
    }

    //获取所有球员
    @get('/getPlayers', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {'x-ts-type': Easports},
                    },
                },
            },
        },
    })
    async getPlayers(
        @param.query.number('page') page: number,
        @param.query.number('league') league: number,
        @param.query.number('club') club: number,
        @param.query.number('country') country: number,
    ): Promise<Easports> {
        return this.srv.getPlayers(page, league, club, country);
    }

    //根据姓名获取列表
    @get('/getPlayersByName/{name}', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {'x-ts-type': Easports},
                    },
                },
            },
        },
    })
    async getPlayersByName(
        @param.path.string('name') name: string,
        @param.query.number('page') page: number,
    ): Promise<Easports> {
        return this.srv.getPlayersByName(name, page);
    }
}
