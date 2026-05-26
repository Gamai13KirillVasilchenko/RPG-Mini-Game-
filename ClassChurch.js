import {Character} from './ClassCharacter.js'
import {Playable} from  './ClassPlayable.js'
import {Enemy} from './ClassEnemy.js'

export class Church{
    
    static priest = new Character('Священник Криадир',15,10);
    
    //Церковь и ее служители были одарены постоянством Sabbathness (Субботний покой, Благоговение, Святой покой) 
    //Суббота в библейской традиции — это день, который Бог благословил и освятил (Быт. 2:3)

    static #sabbathness(exister){
        if(exister instanceof Playable || exister instanceof Enemy) { return exister.purify();}
       else {return `${Church.priest.name} не понимает почему Постоянство 'Святого покоя' слепо перед этой сущностью...`}
    }

    static priestBlessing (exister) {
        return this.#sabbathness(exister)
    }

}
