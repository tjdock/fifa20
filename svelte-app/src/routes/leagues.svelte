<style>
  .leagues {
    display: flex;
    flex-wrap: wrap;
  }
  .league-item {
    display: flex;
    align-items: center;
    width: 160px;
    height: 95px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 20px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .league-item img {
    width: 40px;
  }
  .league-item .league-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
  }
  .league-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="leagues">
  <div class="league-item">
    <img
      src="https://futhead.cursecdn.com/static/img/20/leagues/2012.png"
      alt="league" />
    <span class="league-name">CLS</span>
    <a href="/" class="btn-delete">x</a>
  </div>
</div>
