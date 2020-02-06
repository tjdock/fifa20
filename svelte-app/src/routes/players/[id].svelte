<script context="module">
  export function preload(page, session) {
    let id = page.params.id;
    mainStore.setLoading(true);
    return this.fetch(API_URL + "/ea-players/" + id)
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetching failed, please try again later!");
        }
        return res.json();
      })
      .then(data => {
        mainStore.setLoading(false);
        playerStore.setPlayer(data);
      })
      .catch(err => {
        mainStore.setLoading(false);
        this.error(500, JSON.stringify(err));
      });
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { playerStore } from "../../store/player";
  import mainStore from "../../store/main";
  import { API_URL } from "../../shared/Consts";
  import ArcDashboard from "../../components/ArcDashboard.svelte";
  import DetailItem from "../../components/DetailItem.svelte";

  let player = null;
  let unsubscribe;
  $: weakFoot = player ? Array(player.weakFoot).fill(0) : [];
  $: skillMoves = player ? Array(player.skillMoves).fill(0) : [];

  onMount(() => {
    unsubscribe = playerStore.subscribe(item => {
      player = item;
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<style>
  .details {
    display: flex;
    height: 100%;
  }
  .details .left {
    flex: 1;
    border-radius: 2px;
    border-top: 3px solid #940000;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    margin-right: 5px;
  }
  .details .right {
    flex: 3;
    border-radius: 2px;
    border-top: 3px solid #940000;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    margin-left: 5px;
  }
  .details .player-card {
    width: 212px;
    height: 315px;
    margin: 0 auto;
    position: relative;
  }
  .details .player-card.gold {
    background: url("https://futhead.cursecdn.com/static/img/20/cards/large/1_1_3.png")
      center center;
    background-size: cover;
  }
  .details .player-card.silver {
    background: url("https://futhead.cursecdn.com/static/img/20/cards/large/1_1_2.png")
      center center;
    background-size: cover;
  }
  .details .player-card.bronze {
    background: url("https://futhead.cursecdn.com/static/img/20/cards/large/1_1_1.png")
      center center;
    background-size: cover;
  }
  .details .player-card .avatar {
    width: 135px;
    height: 135px;
    position: absolute;
    top: 30px;
    right: 10px;
  }
  .details .player-card .base {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 120px;
    position: absolute;
    top: 40px;
    left: 40px;
    align-items: center;
    justify-content: space-between;
  }
  .details .player-card .base .rat {
    font-size: 24px;
    font-weight: bold;
  }
  .details .player-card .base .nation {
    width: 30px;
    height: 18px;
  }
  .details .player-card .base .club {
    width: 30px;
    height: 30px;
  }

  .details .player-card .name {
    position: absolute;
    top: 170px;
    width: 100%;
    text-align: center;
  }
  .details .player-card .name::before {
    content: "";
    width: 100px;
    height: 2px;
    background: #b7a55d;
    position: absolute;
    top: 25px;
    left: 55px;
  }
  .details .player-card .name::after {
    content: "";
    width: 0.5px;
    height: 50px;
    background: #b7a55d;
    position: absolute;
    top: 35px;
    left: 104px;
  }
  .details .player-card .data-left {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 45px;
    bottom: 55px;
    font-size: 14px;
  }
  .details .player-card .data-right {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 45px;
    bottom: 55px;
    font-size: 14px;
  }

  .details .grid {
    padding: 8px;
    font-size: 13px;
  }
  .details .grid .row {
    display: flex;
    border-bottom: 1px solid #eee;
    height: 30px;
    line-height: 30px;
  }
  .details .grid .row .col {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .details .grid .row .col.label {
    color: #999;
  }
  .details .icon-star:before {
    content: "*";
    color: #bc9600;
    font-weight: bold;
  }

  .details .summary {
    display: flex;
    padding: 20px 0;
  }
  .details .summary .summary-item {
    flex: 1;
    padding: 0 8px;
  }

  .details .summary .summary-item:not(:last-child) {
    border-right: 1px solid #ddd;
  }
  .details .summary .title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
</style>

{#if player}
  <div class="details">
    <div class="left">
      <div class="player-card {player.quality}">
        <div class="base">
          <span class="rat">{player.rating}</span>
          <span>{player.position}</span>
          <img
            alt="nation"
            src={player.nation.imageUrls.small}
            class="nation" />
          <img alt="club" src={player.league.imageUrls.light} class="club" />
        </div>
        <img alt="avatar" class="avatar" src={player.headshot.imgUrl} />
        <span class="name">{player.name}</span>
        <div class="data-left">
          <span>{player.attributes[0].value} PAC</span>
          <span>{player.attributes[1].value} SHO</span>
          <span>{player.attributes[2].value} PAS</span>
        </div>
        <div class="data-right">
          <span>{player.attributes[3].value} DRI</span>
          <span>{player.attributes[4].value} DEF</span>
          <span>{player.attributes[5].value} PHY</span>
        </div>
      </div>

      <div class="grid">
        <div class="row">
          <div class="col label">Club</div>
          <div class="col">{player.club.name}</div>
        </div>
        <div class="row">
          <div class="col label">League</div>
          <div class="col">{player.league.name}</div>
        </div>
        <div class="row">
          <div class="col label">Nation</div>
          <div class="col">{player.nation.name}</div>
        </div>
        <div class="row">
          <div class="col label">Strong Foot</div>
          <div class="col">{player.foot}</div>
        </div>
        <div class="row">
          <div class="col label">Skill Moves</div>
          <div class="col">
            {#each weakFoot as _}
              <span class="icon-star" />
            {/each}
          </div>
        </div>
        <div class="row">
          <div class="col label">Week Foot</div>
          <div class="col">
            {#each skillMoves as _}
              <span class="icon-star" />
            {/each}
          </div>
        </div>
        <div class="row">
          <div class="col label">Age</div>
          <div class="col">{player.age} - {player.birthdate}</div>
        </div>
        <div class="row">
          <div class="col label">Height</div>
          <div class="col">{player.height}cm</div>
        </div>
        <div class="row">
          <div class="col label">Weight</div>
          <div class="col">{player.weight}kg</div>
        </div>
      </div>
    </div>
    <div class="right">
      {#if player.isGK}
        <div class="summary">
          <div class="summary-item">
            <p class="title">DIVING</p>
            <ArcDashboard value={player.attributes[0].value} index="0" />

            <DetailItem title="Diving" value={player.gkdiving} />
          </div>
          <div class="summary-item">
            <p class="title">HANDLING</p>
            <ArcDashboard value={player.attributes[1].value} index="1" />

            <DetailItem title="Handling" value={player.gkhandling} />
          </div>
          <div class="summary-item">
            <p class="title">KICKING</p>
            <ArcDashboard value={player.attributes[2].value} index="2" />

            <DetailItem title="Kicking" value={player.gkkicking} />
          </div>
          <div class="summary-item">
            <p class="title">REFLEXES</p>
            <ArcDashboard value={player.attributes[3].value} index="3" />

            <DetailItem title="Reflexes" value={player.gkreflexes} />
          </div>
          <div class="summary-item">
            <p class="title">SPEED</p>
            <ArcDashboard value={player.attributes[4].value} index="4" />

            <DetailItem title="Acceleration" value={player.acceleration} />
            <DetailItem title="Sprint Speed" value={player.sprintspeed} />
          </div>
          <div class="summary-item">
            <p class="title">POSITIONING</p>
            <ArcDashboard value={player.attributes[5].value} index="5" />

            <DetailItem title="Positioning" value={player.gkpositioning} />
          </div>
        </div>
      {:else}
        <div class="summary">
          <div class="summary-item">
            <p class="title">PACE</p>
            <ArcDashboard value={player.attributes[0].value} index="0" />

            <DetailItem title="Acceleration" value={player.acceleration} />
            <DetailItem title="Sprint Speed" value={player.sprintspeed} />
          </div>
          <div class="summary-item">
            <p class="title">SHOOTING</p>
            <ArcDashboard value={player.attributes[1].value} index="1" />

            <DetailItem title="Positioning" value={player.positioning} />
            <DetailItem title="Finishing" value={player.finishing} />
            <DetailItem title="Shot Power" value={player.shotpower} />
            <DetailItem title="Long Shots" value={player.longshots} />
            <DetailItem title="Volleys" value={player.volleys} />
            <DetailItem title="Penalties" value={player.penalties} />
          </div>
          <div class="summary-item">
            <p class="title">PASSING</p>
            <ArcDashboard value={player.attributes[2].value} index="2" />

            <DetailItem title="Vision" value={player.vision} />
            <DetailItem title="Crossing" value={player.crossing} />
            <DetailItem title="Free Kick" value={player.freekickaccuracy} />
            <DetailItem title="Short Passing" value={player.shortpassing} />
            <DetailItem title="Long Passing" value={player.longpassing} />
            <DetailItem title="Curve" value={player.curve} />
          </div>
          <div class="summary-item">
            <p class="title">DRIBBLING</p>
            <ArcDashboard value={player.attributes[3].value} index="3" />

            <DetailItem title="Agility" value={player.agility} />
            <DetailItem title="Balance" value={player.balance} />
            <DetailItem title="Reactions" value={player.reactions} />
            <DetailItem title="Ball Control" value={player.ballcontrol} />
            <DetailItem title="Dribbling" value={player.dribbling} />
            <DetailItem title="Composure" value={player.composure} />
          </div>
          <div class="summary-item">
            <p class="title">DEFENSE</p>
            <ArcDashboard value={player.attributes[4].value} index="4" />

            <DetailItem title="Interceptions" value={player.interceptions} />
            <DetailItem title="Heading" value={player.headingaccuracy} />
            <DetailItem title="Def. Awareness" value={player.marking} />
            <DetailItem title="Standing Tackle" value={player.standingtackle} />
            <DetailItem title="Sliding Tackle" value={player.slidingtackle} />
          </div>
          <div class="summary-item">
            <p class="title">PHYSICAL</p>
            <ArcDashboard value={player.attributes[5].value} index="5" />

            <DetailItem title="Jumping" value={player.jumping} />
            <DetailItem title="Stamina" value={player.stamina} />
            <DetailItem title="Strength" value={player.strength} />
            <DetailItem title="Aggression" value={player.aggression} />
          </div>
        </div>
      {/if}

    </div>
  </div>
{/if}
