// Welcome to your project!
// Start coding below
import {Playable} from './ClassPlayable.js';
import {Enemy} from './ClassEnemy.js';
import {Weapon} from './ClassWeapon.js';
import {Fight} from './ClassFight.js';
import {Church} from './ClassChurch.js'
//Последовательность states: Name, maxHP, DMG, isAlive. (basic)
//+ givenXp у Enemy //
//Возможные ability для оружия: Neverness (Небытие), Everness (Вечность) или же их отсутствие null
//ability Church(способность Церкви) - Sabbathness 
let rapire  = new Weapon('Рапира',5,'neverness');
export const enemies = {};
export const playables = {};
enemies.zombie = new Enemy('Зомби',6,4,true,6);
enemies.skelet = new Enemy('Скелет',8,6,true,8);
enemies.slime = new Enemy('Слайм',7,4,true,4);
playables.indigojones = new Playable('Индиго Джонс',15,2,true);
playables.feordKastedas = new Playable('Феорд Кастедас',13,4,false);
console.log(playables.indigojones);
console.log(Church.priestBlessing(enemies.skelet));
console.log(Church.priestBlessing(enemies.skelet));
