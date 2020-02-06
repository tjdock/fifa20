<script>
  export let title;
  export let value;
  $: getColors = () => {
    if (value >= 90) {
      return "col1 color90";
    } else if (value >= 80 && value <= 89) {
      return "col1 color80";
    } else if (value >= 70 && value <= 79) {
      return "col1 color70";
    } else if (value >= 50 && value <= 69) {
      return "col1 color5060";
    } else if (value <= 49) {
      return "col1 color40";
    }
  };
</script>

<style>
  .row {
    display: flex;
    font-size: 12px;
    height: 30px;
  }
  .row .col4 {
    flex: 4;
  }
  .row .col1 {
    flex: 1;
    text-align: right;
  }
  .row .col1.color90 {
    color: #007e33;
  }
  .row .col1.color80 {
    color: #4caf50;
  }
  .row .col1.color70 {
    color: #fbc02d;
  }
  .row .col1.color5060 {
    color: #fb8c00;
  }
  .row .col1.color40 {
    color: #f44336;
  }
</style>

<div class="row">
  <div class="col4">{title}</div>
  <div class={getColors()}>{value}</div>
</div>
