<style>
  .nations {
    display: flex;
    flex-wrap: wrap;
  }
  .nation-item {
    display: flex;
    align-items: center;
    width: 150px;
    height: 55px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 20px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .nation-item img {
    width: 40px;
  }
  .nation-item .nation-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
  }
  .nation-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="nations">
  <div class="nation-item">
    <img
      src="https://futhead.cursecdn.com/static/img/20/nations/21.png"
      alt="nation" />
    <span class="nation-name">Germany</span>
    <a href="/" class="btn-delete">x</a>
  </div>
</div>
