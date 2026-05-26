

export class Fight{

    static #deathEnemyBasic(playable,enemy) {
        if(playable.weapon){
            playable.takeXp(enemy);
            let strDefeating = enemy.defeatingEnemy();
            return `Вы нанесли ${playable.dmg+playable.weapon.dmg} урона, врагу: '${enemy.name}'\n${strDefeating}\nВы получили ${enemy.givenXp} очка опыта. Весь опыт мира моооой!!!`
        } else { 
            playable.takeXp(enemy);
            let strDefeating = enemy.defeatingEnemy();
            return `Вы нанесли ${playable.dmg} урона, врагу: '${enemy.name}'\n${strDefeating}\nВы получили ${enemy.givenXp} очка опыта. Весь опыт мира моооой!!!`
        }
    }
    
    static #deathEnemyAbility(playable,enemy) {
        if(/neverness/i.test(playable.weapon.abilityConst)) {
            playable.takeXp(enemy);
            let strDefeating = enemy.defeatingEnemy();
            return `Вы нанесли ${playable.dmg+playable.weapon.dmg} урона + 1 урона постоянства от эффекта 'Небытие', врагу: '${enemy.name}'\nТакже герой теряет воспоминание на 1 единицу здоровья\n${strDefeating}\nВы получили ${enemy.givenXp} очка опыта.`
        }
        if (/everness/i.test(playable.weapon.abilityConst)) {
            playable.takeXp(enemy);
            let strDefeating = enemy.defeatingEnemy(enemy);
            return `Вы нанесли ${playable.dmg+playable.weapon.dmg} урона + 1 урона постоянства от эффекта 'Вечность', врагу: '${enemy.name}\nТакже герой восстанавливает себе 1 здоровье\n${strDefeating}\nВы получили ${enemy.givenXp} очка опыта.`
        }
    }
        
        
    

    static characterDealDamage(playable,enemy) {
        if(playable.isAlive===false) return `Твой герой еще не нашел выход из мира мертвых...`
        if(enemy.isAlive===false) return `Враг уже мертв..`
        if(playable.weapon){
       enemy.hp -= playable.dmg+playable.weapon.dmg; 
        if(enemy.hp<=0){
            return this.#deathEnemyBasic(playable,enemy);
        };
        return `Вы нанесли ${playable.dmg+playable.weapon.dmg} урона, врагу: '${enemy.name}'\nУ врага осталось очков здоровья: ${enemy.hp}. Наверное просто не заточил кинжал`
        } else {
        if(enemy.hp<=0){
            return this.#deathEnemyBasic(playable,enemy);
        };
        enemy.hp -= playable.dmg;
        return `Вы нанесли ${playable.dmg} урона, врагу: '${enemy.name}'\nУ врага осталось очков здоровья: ${enemy.hp}. Живучая сволочь`}
    }

    static enemyDealDamage(enemy,playable) {
        if(playable.isAlive===false) return `Твой герой еще не нашел выход из мира мертвых...`
        playable.hp-=enemy.dmg;
        if(playable.hp<=0){
            playable.defeatingPlayable();
            return `Ваш игровой персонаж '${playable.name}' был повержен врагом '${enemy.name}'. Но мы, когда-нибудь, ему еще отомстим!!`
        } else {return `Вы получили урон в размере ${enemy.dmg} единиц, но не были повержены. Продолжайте сражаться!`}
    }

    static characterAbilityDamage(playable,enemy){
        if(playable.isAlive===false) return `В состоянии мертвых герой не имеет права быть частью чего-то великого`
        if(enemy.isAlive===false) return `Враги - не герои. Из лимбо не возвращаются..`
        if(!playable.weapon) return `С пустыми руками постоянством владеют только фантазеры)`
        if(playable.weapon.abilityConst===null) return `Не каждая палка владеет постоянством!`
        let abilityDmg = playable.dmg+playable.weapon.dmg;
        if(/neverness/i.test(playable.weapon.abilityConst)) {
            enemy.hp-=abilityDmg+2;
            playable.hp-=1
            if(enemy.hp<=0){
                return this.#deathEnemyAbility(playable,enemy);
            }
            return `Враг: '${enemy.name}' получает ${abilityDmg} урона + 2 урона постоянства, также герой теряет воспоминание на 1 единицу здоровья от эффекта 'Небытие'`;
        } else if (/everness/i.test(playable.weapon.abilityConst)) {
            enemy.hp-=abilityDmg+1;
            playable.hp+=1;
            if(enemy.hp<=0){
                return this.#deathEnemyAbility(playable,enemy);
            }
            return `Враг: '${enemy.name}' получает ${abilityDmg} урона + 1 урон постоянства, также герой обретает новое знание на 1 единицу здоровья от эффекта 'Вечность'`
        }
    }
}
