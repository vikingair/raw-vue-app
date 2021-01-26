<template>
  <div class="App">
    <header>
      <img src="./assets/logo.svg" alt="logo" />
    </header>
    <Main />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Main from "./components/Main.vue";

@Options({
  components: {
    Main
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #34363b;
  color: #fff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.App {
  header {
    display: flex;
    align-items: center;
    background-color: #1a1c20;
    height: 3em;
    color: #fff;

    img {
      height: 2.5em;
      padding: 0.25em 0.25em;
    }
  }

  .article-filter {
    display: inline-block;
    margin: 0 1em 0 auto;

    input {
      padding: 0.4em 0.75em;
      border-radius: 0.5em;
      outline: 0;
    }

    button {
      padding: 0.5em 1em;
      margin-left: 0.5em;
      border-radius: 0.5em;
      background-color: white;
      border: none;
      outline: 0;

      svg {
        width: 1em;
      }
    }
  }

  main.loading {
    margin: 2em 0;
    text-align: center;
  }

  .article-list {
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;

    @media (min-width: 450px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  svg.icon.big-spinner {
    width: 3em;
    animation: rotating 1s infinite steps(8);
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
