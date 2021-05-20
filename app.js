// Non Vue controlled helper functions can live outside Vue App
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  methods: {
    startNewGame() {
      // Reset all state props to defaults
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    attackMonster() {
      this.currentRound++;
      // Deal a damage which is a random whole number between 5 and 12 i.e.
      // Minimum and Maximum
      this.monsterHealth -= getRandomValue(5, 12);

      // Mimic monster retaliating when it's attacked
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomValue(5, 18);
    },
    launchSpecialAttack() {
      this.currentRound++;
      const hugeDamage = getRandomValue(10, 25);
      this.monsterHealth -= hugeDamage;
      this.attackPlayer(); // monster attacks back too
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      console.log(healValue, this.playerHealth, this.playerHealth + healValue);
      const healed = this.playerHealth + healValue > 100;
      healed ? (this.playerHealth = 100) : (this.playerHealth += healValue);

      // As player heals can as well be attacked
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
  computed: {
    monsterHealthBarStyles() {
      if (this.monsterHealth <= 0) return { width: "0%" };
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyles() {
      if (this.playerHealth <= 0) return { width: "0%" };
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Player Lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // Draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Monster Lost
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
