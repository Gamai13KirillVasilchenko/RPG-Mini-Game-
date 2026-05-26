import {Character}from './ClassCharacter.js';
import {Church} from './ClassChurch.js'
export class Enemy extends Character{
    
    constructor(name,maxHp,dmg,givenXp) {
        super(name, maxHp, dmg);
    this.givenXp = Math.max(2, givenXp);

    if(this.hp < 8) {
        this.hp = 8;
        this.maxHp = 8;
    }
}

defeatingEnemy() {
    this.isAlive = false;
    this.hp=0;
    return `Враг '${this.name}' был рассыпан`
}
    purify(){
    if(this.isAlive) {
    this.hp-=999;
    if(this.hp<=0) {return `${Church.priest.name} попробовал помочь душе, но она не смогла свой покой и была отвергнута карой в -999 очков здоровья!\n${this.defeatingEnemy()}`;
        } else {return `${Church.priest.name} попробовал помочь душе, но она не смогла свой покой и была отвергнута карой в -999 очков здоровья!`}
        } else {return `${Church.priest.name} попробовал помочь душе, но она была отвергнута...`}
    }
}
