<style>
  .clubs {
    display: flex;
    flex-wrap: wrap;
  }
  .club-item {
    display: flex;
    align-items: center;
    width: 250px;
    height: 55px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 20px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .club-item img {
    width: 40px;
  }
  .club-item .club-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
  }
  .club-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="clubs">
  <div class="club-item">
    <img
      src="https://futhead.cursecdn.com/static/img/20/clubs/111774.png"
      alt="club" />
    <span class="club-name">Tianjin Teda</span>
    <a href="/" class="btn-delete">x</a>
  </div>
</div>
