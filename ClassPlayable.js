import {Character} from './ClassCharacter.js';
import {Church} from './ClassChurch.js'

export class Playable extends Character{
    #xp = 0;
    _level = 1;
    _limitXp = 10;
    static count = 0;
    constructor(name, maxHp, dmg){
        super(name,maxHp,dmg)
        this.maxHp = Math.max(10,maxHp);
        this.hp = this.maxHp;
        this.#xp = 0;
        this._level = 1;
        this._limitXp = 10
        Playable.count++
    }


    upLevel() {
        if(this.isAlive===false) return `Там где существа не могут дышать - мы все на равных...`
        if(this.#xp>=this._limitXp){
        while(this.#xp>=this._limitXp) {
            this._level++;
            this.#xp-=this._limitXp;
            this._limitXp+=2;
            this.maxHp+=3
            this.hp = this.maxHp;
            this.dmg+=3; }
            return `Вы повысились до ${this._level} уровня\nОстаток опыта на повышение: ${this.#xp}/${this._limitXp}`
        } else {return `У вас недостаточно опыта для повышения уровня: ${this.#xp}/${this._limitXp}`}
    }

    static get countPlayableCharacter () {
        return `Всего ${this.count} игровых персонажей`
    }

    equipWeapon(weapon) {
        if(this.isAlive===false) return `Оружия - это привелегия живых...`
        if(!(/^[1-9][0-9]*(\.[0-9]+)?$/.test(weapon.dmg))) return `Неверно указанный урон, начинайте с чисел '1-9'`
        this.weapon = {name:weapon.name,
        dmg:weapon.dmg,
        abilityConst:weapon.abilityConst};
        if(/neverness/i.test(weapon.abilityConst)) return `Получено оружие: ${weapon.name}... Я немного начинаю забывать кто я есть, зачем пришел в этот мир и еще... Я забыл зачем я это говорю`;
        if(/everness/i.test(weapon.abilityConst)) return `Получено оружие: ${weapon.name}... Будто новые знания, мысли, воспоминания хлынули... Голова начинает трещать`;
        return `Получено оружие: ${weapon.name}`}
    

    takeXp(enemy) {
        this.#xp+=enemy.givenXp;
        return this.#xp;
    }

    defeatingPlayable() {
    this.isAlive=false;
    return `Герой: '${this.name}' уже был побежден или не был найден`
    }

    purify() {
        if(!this.isAlive) {
            this.isAlive = true;
            this.hp = this.maxHp;
            if(/^neverness$/i.test(this.weapon?.abilityConst)) return `${Church.priest.name} попробовал помочь душе: Резонанирование 'Святого покоя' и 'Небытия' преобразуется в нечто поистине таинственное... Кто знает к чему это приведет...`
            if(/^everness$/i.test(this.weapon?.abilityConst)) return `${Church.priest.name} попробовал помочь душе: Резонирование 'Святого покоя' и 'Вечности' переливается радугой, словно во время дождя... Обычно это сулит благими вестями...`
            return `${Church.priest.name} попробовал помочь душе: 'Святой покой' не обрел связи с другими постоянствами, но придал жизни усопшему...`
        } else {this.hp=Math.min(this.maxHp,this.hp+4); return `${Church.priest.name} попробовал помочь душе: ${this.name} почувствовал, будто соприкоснулся с чем-то или кем-то не осизаемо великим. +4 к Здоровью героя;`}
    }
}
