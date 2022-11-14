<script lang="ts" setup>
// Playground Link: https://sfc.vuejs.org/#eNqdVklv2zgU/itvFAxgo5aUCQaDgeq4bYoAk8NgDtOeohxokbLYUKQg0k6M1P+9j4s2Z2uaHEy+7XurHh+iT02T7LYsyqKlLlreGBBEbs7zyOg8As3MtlnlkteNag08QMvKBSj5r9pKwygcoGxVDXmEJvLofS94JYuLrTFKdvwk7UkWzsnm0uwbBv9tTbM1cI7W2Y5Jk4E2LZeb91BYlA/dHb6D3AoBB6daKKkN6ErdoSZ6NSuJ0GyOPM9RnVXkLT3E9c1qdn0ziBSCkbZHn83hfAUPuYSgm+yI2DLkXN+gikX1aoTSQUllwf+ntZNmq6uZspjWwDL1OcaM4sWwuhHEMLwBLCnfoUdEa8y94CWLiz06mEeO6/nhCPC/DXvIcaEw69KmrhNYrj3nYyF4cYsWQ6J+s7+9Tfv38OCTeDj0uqlX7oDTAXnipDZkM/iHzMGhXczLAIpN9FEo21B93pCUDlpdFlCJYQVXT4QFUhmso6SsZXSZTvL22MHB9HESRgVHvz/bW6jWSzFXZyuvky1TPAeqIWvReWCv7SinS1OtLm0ro6/VET3E9lnh/BwJ4GWwghYxI6Vq0e+ZWgCfA5fBW0xgdsv2yOGTWi4NXWE9VeLmCEuKFulTfDdYx/wRPB778LpcTPKOV232goEuVMOsjWToWT8GDdYbpzaDP1ht298qJa5nnuQD1KTdcJnBGavh1FHWpLjdtOgrjQslVJvBmvENc7yOIFCmM++c9tZLzG9ckpqLfQafWk7EAv5hYscML8gCNJE61qzlpQdSLfaWBRGk0Syz1t3Jce84NRX6eXr6+xTJ0EV/rDyut4TCzT1oJTiFE0qpM9MH/Hdzf2SnzaSp4qLigs5s7ebB2KP4T8oz+/9KBjpnAmJsVIMenTnYgbpW2In1iGHYvYmJ4BssgmCleaYGJ6d/EvKXjymQ7ipubK7QB/zE2cbAjogWkd8GcU2a5JtWEpeM8wv71jFww2TeU0tzayHDQ2VMo7M01WVhd8U3nah2k+IpabFtec0Sput43ao7rCAaziMsQ28jReIOixm+F+1LNo9EH9m1ZjGmA4YyWV8/uS2tul2Ybit0OzPcLhjONnO0CeVrQ3HEAslfpipfZT1SCrcgI7GCX/Bbh5dHm7nfem72/c48tYsprOErZPsIL2tutN3H1uQMpwEXktpglgG33c8u6XkGO8Vtl4z3NQumKSu5ZA5oeQS8mnmnvAIC2zU7wRxWrTM3690LreSEQ0s47zKgqtjWSE02zFwKZo8X+yuKqrphBX4d8mj+IbEDED7MTv3Q7e1cIgIK4yDFAs1bcUee1HFG9F4W44eE15oIeU0Ackc4LrZQMBdzJ98RsycUnUsWN3TT85hB4G14E6Uea9yZrwXppX4lyrFmDx0m4HnUIPA2wInScZh+ol6N04v9UqBj1SHSbpJfiLUTeWO0UzWH+NJLNDybOLVPuG48Rq8oa+zdu/7lgS+K7j3h3wv9U2ryZIgOPwDeCjPp
import { ref } from "vue";
import IncButton from "./IncButton.vue";

type Output = { event: string; count?: string | null };

const show = ref(false);
const output = ref<Output[]>([]);
const clearOutput = () => {
  output.value = [];
};
const addOutput = (o: Output) => {
  output.value.push(o);
};
</script>

<template>
  <div class="life-cycle">
    <div>
      Show IncButton component:
      <button @click="show = !show">
        {{ show }}
      </button>
    </div>
    <div class="stage">
      <IncButton v-if="show" @log="addOutput" />
      <template v-else>IncButton component not rendered</template>
    </div>
    <div>
      <button @click="clearOutput">Clear output</button>
    </div>
    <h2>Output:</h2>
    <table>
      <tr>
        <th>Event</th>
        <th>Button Content</th>
      </tr>
      <tr v-for="(o, i) in output" :key="i">
        <td>{{ o.event }}</td>
        <td>{{ o.count }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.life-cycle {
  padding: 1em;
}

.stage {
  padding: 1em;
  margin: 2em 0;
  background-color: beige;
  color: black;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
  color: black;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
