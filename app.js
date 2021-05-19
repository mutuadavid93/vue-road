// Non Vue controlled helper functions can live outside Vue App
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      // Deal a damage which is a random whole number between 5 and 12 i.e.
      // Minimum and Maximum
      this.monsterHealth -= getRandomValue(5, 12);

      // Mimic monster retaliating when it's attacked
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomValue(5, 18);
    },
  },
  computed: {
    monsterHealthBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
});

app.mount("#game");
