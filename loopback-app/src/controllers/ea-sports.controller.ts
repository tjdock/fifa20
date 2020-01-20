import {get, param,} from '@loopback/rest';
import {inject} from "@loopback/context";
import {EaSportsService} from "../services";
import {EaPlayer, EaSports} from "../models";
import {repository} from "@loopback/repository";
import {EaPlayerRepository} from "../repositories";

export class EaSportsController {
    constructor(
        @inject('services.EasportsService') protected srv: EaSportsService,
        @repository(EaPlayerRepository) public eaPlayerRepository: EaPlayerRepository
    ) {
    }

    //获取所有球员
    @get('/getPlayers', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {'x-ts-type': EaSports},
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
    ): Promise<EaSports> {
        return this.srv.getPlayers(page, league, club, country);

        //添加数据到本地

        //总共页数,已知
        //let totalPages = 908;
        // for (let i: number = 1; i <= totalPages; i++) {
        //     console.log('循环了' + i + '遍');
        //     let b: EaSports = await this.srv.getPlayers(i, league, club, country);
        //     for (let item of b.items){
        //         let player = new EaPlayer(item);
        //         await this.eaPlayerRepository.create(player);
        //         console.log('adding...，id='+item.id);
        //     }
        // }

        //频繁访问接口有误
        // let arr = Array.from({length: totalPages}, (r, i) => i + 1);
        // await Promise.all(arr.map(async uid => {
        //     //console.log('循环了' + uid + '遍');
        //     let b: EaSports = await this.srv.getPlayers(uid, league, club, country);
        //
        //     await Promise.all(b.items.map(async item => {
        //         let player = new EaPlayer(item);
        //         await this.eaPlayerRepository.create(player);
        //         console.log('adding...id=' + item.id);
        //     }))
        // }));

        //return null;
    }



    @get('/getEAPlayers', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {'x-ts-type': EaPlayer},
                    },
                },
            },
        },
    })
    async getEAPlayers(): Promise<EaPlayer[]> {
        //已废弃
        // let totalPages = 218;
        // for (let i: number = 0; i <= totalPages; i++) {
        //     console.log('循环了' + i + '遍');
        //     let b: EaPlayer[] = await this.srv.getEAPlayers(100,i*100);
        //     for (let item of b){
        //         let player = new EaPlayer(item);
        //         await this.eaPlayerRepository.create(player);
        //         console.log('adding...，id='+item.id);
        //     }
        // }
        return [];
    }
}
