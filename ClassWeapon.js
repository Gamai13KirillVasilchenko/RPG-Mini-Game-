export class Weapon{
    constructor(name, dmg, abilityConst) {
        this.name = name;
        this.dmg = Math.max(4,dmg);
        this.abilityConst = abilityConst;

        if(/^everness$/i.test(this.abilityConst)) {
            this.dmg+=1.5;
        }
        else if (/^neverness$/i.test(this.abilityConst)) {
            this.dmg-=1;
        }
        else {this.abilityConst=null}
    }


}
