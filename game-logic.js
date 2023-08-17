const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        goldCoins: 10
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        goldCoins: 10
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
}

let levelCounter = document.querySelector('.currentLevel')
let deathCounter = document.querySelector('.monsterDeaths')
let hero1Coins = document.querySelector('.hero1Coins')
let hero2Coins = document.querySelector('.hero2Coins')
let startGameButton = document.querySelector('.startGameButton')
let bossContainer = document.querySelector('.boss-container')
let bossLevel = document.querySelector('.bossLevel')
let hero1Container = document.querySelector('.hero1-container')
let hero2Container = document.querySelector('.hero2-container')
let bossHealthOutput = document.querySelector('.bossHealth')
let hero1HealthOutput = document.querySelector('.hero1-health')
let hero2HealthOutput = document.querySelector('.hero2-health')
let hero1 = heroes[0]
let hero2 = heroes[1]
let combinedDamage = hero1.damage + hero2.damage
let monsterDeaths = 0


startGameButton.addEventListener('click', () => {
    startGame()
    startGameButton.classList.add('hidden')
    bossContainer.classList.add('hidden')
    hero1Container.classList.add('hidden')
    hero2Container.classList.add('hidden')
})

function startGame() {
    bossAttack()
    checkDead()
    document.getElementsByClassName('main-container')[0].classList.add('active')
    setInterval(function () {
    }, 50)
}

bossContainer.addEventListener('click', () => {
    boss.health -= combinedDamage
    checkBoss()
})

setInterval(function () {
}, 1)

function checkBoss() {
    if (boss.health <= 0) {
        boss.level += 1
        boss.health = 500
        boss.damage += 15
        monsterDeaths += 1
        hero1.goldCoins++
        hero2.goldCoins += 2
    }
}
function bossAttack() {
    setInterval(function () {
        heroes.forEach(hero => {
            hero.health -= boss.damage
            console.log(hero.name + hero.health)
        })
    }, 5000)
}

function checkDead() {
    setInterval(function () {
        heroes.forEach(hero => {
            if (hero.health <= 0) {
                hero.health = 0
            }
        })
    })
}

setInterval(function () {
    updateHealth()
    bossLevel.innerHTML = `<h3 class="bossLevel">Lv. ${boss.level} Boss</h3>`
    levelCounter.innerHTML = boss.level
    deathCounter.innerHTML = monsterDeaths
    hero1Coins.innerHTML = hero1.goldCoins
    hero2Coins.innerHTML = hero2.goldCoins
}, 10)

function updateHealth() {
    bossHealthOutput.innerHTML = boss.health
    hero1HealthOutput.innerHTML = hero1.health
    hero2HealthOutput.innerHTML = hero2.health
}

function healHero(name) {
    heroes.forEach(hero => {
        if (hero.name === name && hero.goldCoins >= 2) {
            hero.health +=
                hero.goldCoins -= 2
            updateHealth()
        }
    })
}
