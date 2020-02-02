<script>
  import { createEventDispatcher } from "svelte";

  export let player;
  const dispatch = createEventDispatcher();

  const getColors = value => {
    if (value >= 90) {
      return "color90";
    } else if (value >= 80 && value <= 89) {
      return "color80";
    } else if (value >= 70 && value <= 79) {
      return "color70";
    } else if (value >= 50 && value <= 69) {
      return "color5060";
    } else if (value <= 49) {
      return "color40";
    }
  };
</script>

<style>
  .avatar {
    width: 50px;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  .name {
    font-weight: bold;
  }
  .tags {
    display: flex;
    align-items: center;
  }
  .tags .nation-img,
  .tags .league-img {
    width: 24px;
    margin-right: 5px;
  }
  .tags .club-img {
    width: 20px;
  }
  .rat {
    text-shadow: 0 0 1px #000;
    color: #fff;
    width: 27px;
    height: 27px;
    display: inline-block;
    line-height: 27px;
    border-radius: 4px;
  }
  .rat.gold {
    background: linear-gradient(
      45deg,
      #c6a009 0%,
      #f2c40b 50%,
      #f2c40b 51%,
      #f0cf4a 100%
    );
  }
  .rat.silver {
    background: linear-gradient(
      45deg,
      #a9aeb1 0%,
      #c2c7ca 50%,
      #c2c7ca 51%,
      #e9ecf0 100%
    );
  }
  .rat.bronze {
    background: linear-gradient(
      45deg,
      #6e4c35 0%,
      #9f7f69 50%,
      #9f7f69 51%,
      #ffd9aa 100%
    );
  }
  .fixed-width {
    /* width: 50px; */
    text-align: center;
  }
  .rat.color90 {
    background: #007e33;
  }
  .rat.color80 {
    background: #4caf50;
    color: #fff;
  }
  .rat.color70 {
    background: #fbc02d;
    color: #fff;
  }
  .rat.color5060 {
    background: #fb8c00;
    color: #fff;
  }
  .rat.color40 {
    background: #f44336;
    color: #fff;
  }
</style>

<tr on:click={() => dispatch('itemClick', player)}>
  <td class="fixed-width">
    <img alt="avatar" class="avatar" src={player.headshot.imgUrl} />
  </td>
  <td>
    <div class="name">{player.name}</div>
    <div class="tags">
      <img
        alt="nation"
        class="nation-img"
        src={player.nation.imageUrls.small} />
      <img
        alt="league"
        class="league-img"
        src={player.league.imageUrls.light} />
      <img
        alt="club"
        class="club-img"
        src={player.club.imageUrls.light.small} />
    </div>
  </td>
  <td class="fixed-width">
    <span class="rat {player.quality}">{player.rating}</span>
  </td>
  <td class="fixed-width">{player.position}</td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[0].value)}">
      {player.attributes[0].value}
    </span>
  </td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[1].value)}">
      {player.attributes[1].value}
    </span>
  </td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[2].value)}">
      {player.attributes[2].value}
    </span>
  </td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[3].value)}">
      {player.attributes[3].value}
    </span>
  </td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[4].value)}">
      {player.attributes[4].value}
    </span>
  </td>
  <td class="fixed-width">
    <span class="rat {getColors(player.attributes[5].value)}">
      {player.attributes[5].value}
    </span>
  </td>
  <td class="fixed-width">{player.skillMoves}*</td>
  <td class="fixed-width">{player.weakFoot}*</td>
  <td class="fixed-width">{player.foot.substr(0, 1)}</td>
  <td class="fixed-width">{player.height}cm</td>
  <td class="fixed-width">{player.weight}kg</td>
  <td class="fixed-width">{player.age}</td>
</tr>
