import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import ArcDashboard from '../../components/ArcDashboard/ArcDashboard';
import DetailItem from '../../components/DetailItem/DetailItem';
import './PlayerDetail.scss';
import { withRouter } from 'react-router-dom';

const PlayerDetail = props => {
  const player = useSelector(state => state.player.player);
  const dispatch = useDispatch();
  const onGetPlayer = useCallback(
    playerId => dispatch(actions.getPlayerDetail(playerId)),
    [dispatch]
  );

  useEffect(() => {
    onGetPlayer(props.match.params.playerId);

    //加入props.match.params.playerId，惦记后退按钮会报错
  }, [onGetPlayer]);

  return (
    player && (
      <div className="details">
        <div className="left">
          <div className={'player-card ' + player.quality}>
            <div className="base">
              <span className="rat">{player.rating}</span>
              <span>{player.position}</span>
              <img
                alt="nation"
                src={player.nation.imageUrls.small}
                className="nation"
              />
              <img
                alt="club"
                src={player.league.imageUrls.light}
                className="club"
              />
            </div>
            <img alt="avatar" className="avatar" src={player.headshot.imgUrl} />
            <span className="name">{player.name}</span>
            <div className="data-left">
              <span>{player.attributes[0].value} PAC</span>
              <span>{player.attributes[1].value} SHO</span>
              <span>{player.attributes[2].value} PAS</span>
            </div>
            <div className="data-right">
              <span>{player.attributes[3].value} DRI</span>
              <span>{player.attributes[4].value} DEF</span>
              <span>{player.attributes[5].value} PHY</span>
            </div>
          </div>

          <div className="grid">
            <div className="row">
              <div className="col label">Club</div>
              <div className="col">{player.club.name}</div>
            </div>
            <div className="row">
              <div className="col label">League</div>
              <div className="col">{player.league.name}</div>
            </div>
            <div className="row">
              <div className="col label">Nation</div>
              <div className="col">{player.nation.name}</div>
            </div>
            <div className="row">
              <div className="col label">Strong Foot</div>
              <div className="col">{player.foot}</div>
            </div>
            <div className="row">
              <div className="col label">Skill Moves</div>
              <div className="col">
                {Array(player.skillMoves)
                  .fill(0)
                  .map((_, i) => {
                    return <span className="icon-star" key={i}></span>;
                  })}
              </div>
            </div>
            <div className="row">
              <div className="col label">Week Foot</div>
              <div className="col">
                {Array(player.weekFoot)
                  .fill(0)
                  .map((_, i) => {
                    return <span className="icon-star" key={i}></span>;
                  })}
              </div>
            </div>
            <div className="row">
              <div className="col label">Age</div>
              <div className="col">
                {player.age} - {player.birthdate}
              </div>
            </div>
            <div className="row">
              <div className="col label">Height</div>
              <div className="col">{player.height}cm</div>
            </div>
            <div className="row">
              <div className="col label">Weight</div>
              <div className="col">{player.weight}kg</div>
            </div>
          </div>
        </div>
        <div className="right">
          {player.isGK ? (
            <div className="summary">
              <div className="summary-item">
                <p className="title">DIVING</p>
                <ArcDashboard value={player.attributes[0].value} />

                <DetailItem title="Diving" value={player.gkdiving} />
              </div>
              <div className="summary-item">
                <p className="title">HANDLING</p>
                <ArcDashboard value={player.attributes[1].value} />

                <DetailItem title="Handling" value={player.gkhandling} />
              </div>
              <div className="summary-item">
                <p className="title">KICKING</p>
                <ArcDashboard value={player.attributes[2].value} />

                <DetailItem title="Kicking" value={player.gkkicking} />
              </div>
              <div className="summary-item">
                <p className="title">REFLEXES</p>
                <ArcDashboard value={player.attributes[3].value} />

                <DetailItem title="Reflexes" value={player.gkreflexes} />
              </div>
              <div className="summary-item">
                <p className="title">SPEED</p>
                <ArcDashboard value={player.attributes[4].value} />

                <DetailItem title="Acceleration" value={player.acceleration} />
                <DetailItem title="Sprint Speed" value={player.sprintspeed} />
              </div>
              <div className="summary-item">
                <p className="title">POSITIONING</p>
                <ArcDashboard value={player.attributes[5].value} />

                <DetailItem title="Positioning" value={player.gkpositioning} />
              </div>
            </div>
          ) : (
            <div className="summary">
              <div className="summary-item">
                <p className="title">PACE</p>
                <ArcDashboard value={player.attributes[0].value} />

                <DetailItem title="Acceleration" value={player.acceleration} />
                <DetailItem title="Sprint Speed" value={player.sprintspeed} />
              </div>
              <div className="summary-item">
                <p className="title">SHOOTING</p>
                <ArcDashboard value={player.attributes[1].value} />

                <DetailItem title="Positioning" value={player.positioning} />
                <DetailItem title="Finishing" value={player.finishing} />
                <DetailItem title="Shot Power" value={player.shotpower} />
                <DetailItem title="Long Shots" value={player.longshots} />
                <DetailItem title="Volleys" value={player.volleys} />
                <DetailItem title="Penalties" value={player.penalties} />
              </div>
              <div className="summary-item">
                <p className="title">PASSING</p>
                <ArcDashboard value={player.attributes[2].value} />

                <DetailItem title="Vision" value={player.vision} />
                <DetailItem title="Crossing" value={player.crossing} />
                <DetailItem title="Free Kick" value={player.freekickaccuracy} />
                <DetailItem title="Short Passing" value={player.shortpassing} />
                <DetailItem title="Long Passing" value={player.longpassing} />
                <DetailItem title="Curve" value={player.curve} />
              </div>
              <div className="summary-item">
                <p className="title">DRIBBLING</p>
                <ArcDashboard value={player.attributes[3].value} />

                <DetailItem title="Agility" value={player.agility} />
                <DetailItem title="Balance" value={player.balance} />
                <DetailItem title="Reactions" value={player.reactions} />
                <DetailItem title="Ball Control" value={player.ballcontrol} />
                <DetailItem title="Dribbling" value={player.dribbling} />
                <DetailItem title="Composure" value={player.composure} />
              </div>
              <div className="summary-item">
                <p className="title">DEFENSE</p>
                <ArcDashboard value={player.attributes[4].value} />

                <DetailItem
                  title="Interceptions"
                  value={player.interceptions}
                />
                <DetailItem title="Heading" value={player.headingaccuracy} />
                <DetailItem title="Def. Awareness" value={player.marking} />
                <DetailItem
                  title="Standing Tackle"
                  value={player.standingtackle}
                />
                <DetailItem
                  title="Sliding Tackle"
                  value={player.slidingtackle}
                />
              </div>
              <div className="summary-item">
                <p className="title">PHYSICAL</p>
                <ArcDashboard value={player.attributes[5].value} />

                <DetailItem title="Jumping" value={player.jumping} />
                <DetailItem title="Stamina" value={player.stamina} />
                <DetailItem title="Strength" value={player.strength} />
                <DetailItem title="Aggression" value={player.aggression} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default withRouter(PlayerDetail);
