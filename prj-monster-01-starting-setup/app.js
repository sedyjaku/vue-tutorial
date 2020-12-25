const getRandomValue = (min, max) =>
    Math.floor(Math.random() * (max - min) + min)

const app = Vue.createApp({
    data() {
        return {
            battleLog: [],
            gameOver: false,
            gameMessage: '',
            player: {
                name: 'You',
                health: 100,
                specialAttack: {
                    minDmg: 0,
                    maxDmg: 25,
                    cooldown: 0
                },
                attack: {
                    minDmg: 5,
                    maxDmg: 10
                },
                heal: {
                    minHeal: 10,
                    maxHeal: 20
                }
            },
            monster: {
                name: 'Monster',
                health: 100,
                specialAttack: {
                    minDmg: 5,
                    maxDmg: 50
                },
                attack: {
                    minDmg: 3,
                    maxDmg: 5
                },
                heal: {
                    minHeal: 1,
                    maxHeal: 3
                }
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if( this.monster.health <0){
                return {width: '0%'}
            }
            return {width: this.monster.health + '%'}
        },
        playerBarStyles() {
            if( this.player.health <0){
                return {width: '0%'}
            }
            return {width: this.player.health + '%'}
        }
    },
    watch:{
        'player.health'(value){
            console.log(value)
            if(value <= 0) {
                this.gameMessage = 'Slain by a vicious monster';
                this.gameOver = true;
            }
        },
        'monster.health'(value){
            if(value <= 0){
                this.gameMessage = 'You win';
                this.gameOver = true
            }
        }
    },
    methods: {
        attack(attacker, victim) {
            let damage = getRandomValue(attacker.attack.minDmg, attacker.attack.maxDmg);
            victim.health -= damage
            this.battleLog.push(attacker.name + ' dealt ' + damage + ' with basic attack to ' + victim.name)
        },
        specialAttack(attacker, victim) {
            if (attacker.specialAttack.cooldown > 0) {
                this.gameMessage = 'You cannot use special attack this round, you missed a turn';
                this.battleLog.push(attacker.name + ' missed a turn because he used special attack while on cd')
                return;
            }
            let damage = getRandomValue(attacker.specialAttack.minDmg, attacker.specialAttack.maxDmg);
            victim.health -= damage;
            attacker.specialAttack.cooldown = 3
            this.battleLog.push(attacker.name + ' dealt ' + damage + ' with special attack to ' + victim.name)
        },
        heal(character) {
            let healValue = getRandomValue(character.heal.minHeal, character.heal.maxHeal);
            if (character.health + healValue > 100) {
                character.health = 100;
                this.battleLog.push(character.name + ' healed to a maximum(100)')
            } else {
                character.health += healValue;
                this.battleLog.push(character.name + ' healed for ' + healValue)
            }
        },
        surrender() {
            this.gameOver = true;
            this.gameMessage = 'You surrendered and got eaten alive!'
        },
        processMonsterMove() {
            const randomMove = Math.random();
            if (randomMove < 0.5) {
                this.attack(this.monster, this.player)
            } else if (randomMove < 0.8) {
                this.specialAttack(this.monster, this.player)
            } else {
                this.heal(this.monster)
            }
        },
        processPlayerAttack() {
            this.gameMessage = ''
            this.attack(this.player, this.monster);
            this.processGame();
        },
        processPlayerSpecialAttack() {
            this.gameMessage = ''
            this.specialAttack(this.player, this.monster);
            this.processGame();
        },
        processPlayerHeal() {
            this.gameMessage = ''
            this.heal(this.player);
            this.processGame();
        },
        processGame() {
            if (!this.gameOver) {
                this.processMonsterMove();
                this.monster.specialAttack.cooldown = 0
                if (this.player.specialAttack.cooldown > 0) {
                    this.player.specialAttack.cooldown--
                }
            }
        },
        startGame() {
            this.gameMessage = '';
            this.player.health = 100;
            this.monster.health = 100;
            this.gameOver = false;
            this.battleLog = [];
        }
    }
})

app.mount('#game')