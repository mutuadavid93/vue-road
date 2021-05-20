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
    };
  },
  methods: {
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
  },
  computed: {
    monsterHealthBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount("#game");
