import {Entity, hasMany, model, property} from '@loopback/repository';
import {EaClub} from "./ea-club.model";

@model()
class EaLeagueImageType {
  @property({type: 'string'}) dark: string;
  @property({type: 'string'}) light: string;
}

@model()
export class EaLeague extends Entity {
  @property({type: 'string'}) abbrName: string;
  @property({type: 'number', id: true}) id: number;
  @property({type: EaLeagueImageType}) imageUrls: EaLeagueImageType;
  @property({type: 'string'}) imgUrl: string;
  @property({type: 'string'}) name: string;

  @hasMany(() => EaClub,{keyTo: 'leagueId'})
  //@property.array(EaClub)
  specificInfos?: EaClub[];

  constructor(data?: Partial<EaLeague>) {
    super(data);
  }
}
