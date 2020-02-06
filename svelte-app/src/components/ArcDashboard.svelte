<script>
  import { onMount, onDestroy } from "svelte";

  export let value;
  export let index;
  $: getColors = () => {
    if (value >= 90) {
      return "#007e33";
    } else if (value >= 80 && value <= 89) {
      return "#4caf50";
    } else if (value >= 70 && value <= 79) {
      return "#fbc02d";
    } else if (value >= 50 && value <= 69) {
      return "#fb8c00";
    } else if (value <= 49) {
      return "#f44336";
    }
  };

  onMount(() => {
    let deg = ((value - 50) * 90) / 50;
    document
      .getElementById("arc1" + index)
      .setAttribute("d", describeArc(52, 52, 50, -90, 90));
    document
      .getElementById("arc2" + index)
      .setAttribute("d", describeArc(52, 52, 50, -90, deg));
  });

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
    ].join(" ");

    return d;
  };
</script>

<style>
  svg {
    display: block;
    margin: 10px auto;
  }
</style>

<svg height="50" version="1.1" width="104" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="#ddd" stroke-width="4" id="arc1{index}" />
  <path fill="none" stroke={getColors()} stroke-width="4" id="arc2{index}" />
  <text
    x="50%"
    y="75%"
    dominant-baseline="middle"
    text-anchor="middle"
    fill={getColors()}
    font-size="22">
    {value}
  </text>
</svg>
