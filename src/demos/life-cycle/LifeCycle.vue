<script lang="ts" setup>
// Playground Link: https://sfc.vuejs.org/#eNqdVltPIzcU/ivuoEpBm0woqqpqNmR3QUjloepDu0+EB2fsSbx47NHYCUQ0/30/X+YWAuwCEozP7Ts3+5yn5EtVpdsNT7JkZvJaVJZIqlYXi8SaRUIMt5tqvlCirHRtyROpeTEmWv2tN8pyRvakqHVJFglMLJKPreCNyi831mrV8NNpS3JwXnah7K7i5J+NrTaWXMA633JlM2JsLdTqI8kdyqfmTP4naiMl2XvVXCtjiVnrB2jCq1FBpeGn4AWObqyCNwsQt3fz0e1dJ5JLTusWfXRKLubkaaFI1E23VG44OLd3UHGoQY0y1inpLPp/XDutNmY90g4zuN2mbtTDO/CY6XxTIhFpXnNq+bXk7jRCSehSInXOWgsjGDQWSTj5tJLOwFKzXUqriit2tRaSjYKYd8f9mU1DzVFhHCwvKwlAnAiZMbFFhqgx6AUpCj7Jd0jYIvHcwI+fhPzrytDVPNfoAuVK2QjMloHzOZciv4fFWLhf3P/Wpvt5egpF3e9b3WlQboCnHfLASWPpqvMPzM6h7UQUERRN/Vlq1+BtHUGadlpNFqDE0VHzI2ERpS36SjFeczabDvL23MHO9GESeg0Iv6/cKZb1tZjX5/Ogk82m+I5U3xu9KOpeTmd2Pb92Vwu+rg/oMbYrjaY8EMChswKLyEiha/g90mMiTolQ0VskMLvnO3DEoJYzy+aop079vUZJYZEd4/uLfsjvweOzDa/JxSDvOBq7k5yYXFfc2Ui7ng2XrEK98Ypk5Ddeuv53SqnvmaN8Qkpar4TKyDkvyZmnLGl+v6rhK5vkWuo6I0suVtzzGoKETGPeOx2sF8jvpKClkLuMfKkFlWPyF5dbbkVOx8RQZSaG16IIQLpGbzkQSSvDM2fdf3nug2B2DT/Pzn4dIlk2bj/XATdYgnD1SIyWeC1OGGPeTBvwn9XjgZ06U3Y9yf2T4Wp3Go09i/+kOHe/b2SgcSYiTqyu4NG5h+2oS41OLHsMyx/thEqxQhEkL+wLNTg5+53SP0JMkfSwFtblCj7giXONgY5IxkmYTpOSVuk3oxWGnvcLfesZmHhZ8NTR/JjK8LG2tjLZdGqK3M2ubybV9WqKr7RG24qSp9yUk2WtH1BBGF4kKENrYwriFsWM70X9ms0D0Wd2nVnEtEcog3H6g9PbqbsB7sdHM4ji6ZLjbnNPG1C+VgxXLJLCYajyVZU9pXiKMgoV/A9vHQ7PNoV2Cvu7H2b4mRtKcS24ATtEeF0Ka9x+4EyOcBswkPQKWSaYvj+6NJxmZKuF65L+/sCjacYLobgHmh0Az0fBqaAAYDf2B5jdIPfmMKije7GVvHBsCe9d1k3oFbdxvl/ubhhUTcVzvA6Y8p9SdwHiw+zV/cwO7gPBLQS6mkiYd+JxvejVcUTNTuX9xSZoDYQ4axYK+kAFRlssmY+60WiI2VFV71Z/tXkR912Ix7H63flWoEHqPXH2NVvoeAteRo0CPwc4UDoMM9yqN+MMYu8KtK/aRdrc5ldibUR+Mtqh2pvbaFydBHNrXHNFepuUM/bhQ7t9YKtodoqwM7Tr1GBtSPbfAbfXaCM=
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
