<script>
  export let segment;
</script>

<style>

</style>

<div id="app">
  <div class="left-menu">
    <div class="logo">
      <img src="assets/images/logo.png" alt="logo" />
    </div>
    <div class="menu">
      <ul>
        <li class={segment === undefined ? 'active' : ''}>
          <a href=".">Positions</a>
        </li>
        <li class={segment === 'leagues' ? 'active' : ''}>
          <a href="leagues">Leagues</a>
        </li>
        <li class={segment === 'clubs' ? 'active' : ''}>
          <a href="clubs">Clubs</a>
        </li>
        <li class={segment === 'nations' ? 'active' : ''}>
          <a href="nations">Nations</a>
        </li>
        <li class={segment === 'players' ? 'active' : ''}>
          <a rel="prefetch" href="players">Players</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="right-container">
    <div class="top-bar">
      <a href="logout">logout</a>
    </div>
    <div class="content">
      <div class="main">
        <slot />
      </div>
    </div>
  </div>
</div>
