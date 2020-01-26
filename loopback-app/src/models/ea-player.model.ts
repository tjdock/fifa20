import {Entity, model, property} from '@loopback/repository';
import {EaClub} from './ea-club.model';
import {EaLeague} from './ea-league.model';
import {EaNation} from './ea-nation.model';

@model()
export class EaAttribute extends Entity {
  @property.array(Number) chemistryBonus: Array<Number>;
  @property({type: 'string'}) name: string;
  @property({type: 'number'}) value: number;
}

@model()
class EaPlayerHeadshot extends Entity {
  @property({type: 'string'}) imgUrl: string;
  @property({type: 'boolean'}) isDynamicPortrait: boolean;
}

@model()
export class EaPlayer extends Entity {
  @property({type: 'number'}) acceleration: number; //加速 (PAC)
  @property({type: 'number'}) age: number; //年龄
  @property({type: 'number'}) aggression: number; //攻击性 (PHY)
  @property({type: 'number'}) agility: number; //灵敏行 (DRI)
  @property({type: 'string'}) atkWorkRate: string; //？
  @property.array(EaAttribute) attributes: EaAttribute[]; //3六项指标
  @property({type: 'number'}) balance: number; //平衡性 (DRI)
  @property({type: 'number'}) ballcontrol: number; //控球 (DRI)
  @property({type: 'number'}) baseId: number;
  @property({type: 'string'}) birthdate: string; //出生日期
  @property({type: EaClub}) club: EaClub;
  @property({type: 'string'}) commonName: string;
  @property({type: 'number'}) composure: number; //沉着 (DRI)
  @property({type: 'string'}) contracts: string; //？
  @property({type: 'number'}) crossing: number; //过人 (PAS)
  @property({type: 'number'}) curve: number; //弧度 (PAS)
  @property({type: 'string'}) defWorkRate: string; //？
  @property({type: 'number'}) discardValue: number; //？
  @property({type: 'number'}) dribbling: number; //盘带 (DRI)
  @property({type: 'number'}) finishing: number; //？  (SHO)
  @property({type: 'string'}) firstName: string; //名字
  @property({type: 'string'}) fitness: string; //健康度
  @property({type: 'string'}) foot: string; //左右脚
  @property({type: 'number'}) freekickaccuracy: number; //任意球精准度 (PAS)
  @property({type: 'number'}) gkdiving: number; //扑球
  @property({type: 'number'}) gkhandling: number; //抱球
  @property({type: 'number'}) gkkicking: number; //守门员脚法
  @property({type: 'number'}) gkpositioning: number; //守门员位置感
  @property({type: 'number'}) gkreflexes: number; //守门员反应
  @property({type: 'number'}) headingaccuracy: number; //头球精准度 (DEF)
  @property({type: EaPlayerHeadshot}) headshot: EaPlayerHeadshot;
  @property({type: 'number'}) height: number; //身高
  @property({type: 'string'}) iconAttributes: string; //？
  @property({type: 'string', id: true}) id: string;
  @property({type: 'number'}) interceptions: number; //拦截 (DEF)
  @property({type: 'boolean'}) isGK: boolean; //是否为守门员
  @property({type: 'boolean'}) isIcon: boolean;
  @property({type: 'boolean'}) isLoan: boolean;
  @property({type: 'boolean'}) isSpecialType: boolean;
  @property({type: 'string'}) itemType: string;
  @property({type: 'number'}) jumping: number; //跳跃 (PHY)
  @property({type: 'string'}) lastName: string; //姓
  @property({type: EaLeague}) league: EaLeague;
  @property({type: 'number'}) longpassing: number; //长传 (PAS)
  @property({type: 'number'}) longshots: number; //远射  (SHO)
  @property({type: 'number'}) marking: number; //Def. Awareness意识 (DEF)
  @property({type: 'string'}) modelName: string;
  @property({type: 'string'}) name: string; //姓名
  @property({type: EaNation}) nation: EaNation;
  @property({type: 'number'}) penalties: number; //点球 (SHO)
  @property({type: 'string'}) playStyle: string;
  @property({type: 'string'}) playStyleId: string;
  @property({type: 'string'}) playerType: string;
  @property({type: 'string'}) position: string; //位置2
  @property({type: 'string'}) positionFull: string; //位置全拼
  @property({type: 'number'}) positioning: number; //位置感 (SHO)
  @property({type: 'number'}) potential: number; //潜力
  @property({type: 'string'}) quality: string; //品质
  @property({type: 'number'}) rarityId: number;
  @property({type: 'number'}) rating: number; //评分 (1)
  @property({type: 'number'}) rawAttributeChemistryBonus: number;
  @property({type: 'number'}) reactions: number; //反应 (DRI)
  @property({type: 'number'}) shortpassing: number; //短传 (PAS)
  @property({type: 'number'}) shotpower: number; //射门力量  (SHO)
  @property({type: 'number'}) skillMoves: number; //招式
  @property({type: 'number'}) slidingtackle: number; //铲球 (DEF)
  @property({type: 'number'}) specialities: number; //专长
  @property({type: 'number'}) sprintspeed: number; //冲刺速度 (PAC)
  @property({type: 'number'}) squadPosition: number; //区域位置感
  @property({type: 'number'}) stamina: number; //耐力 (PHY)
  @property({type: 'number'}) standingtackle: number; //？ (DEF)
  @property({type: 'number'}) strength: number; //力量 (PHY)
  @property({type: 'number'}) traits: number; //特点
  @property({type: 'number'}) vision: number; //视野   (PAS)
  @property({type: 'number'}) volleys: number; //凌空  (SHO)
  @property({type: 'number'}) weakFoot: number; //非惯用脚
  @property({type: 'number'}) weight: number; //体重

  constructor(data?: Partial<EaPlayer>) {
    super(data);
  }
}
