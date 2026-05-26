export class Character{
    constructor(name, maxHp, dmg)  {
         this.name = name;
        this.maxHp = Math.max(10, maxHp);  
        this.hp = this.maxHp;              
        this.dmg = Math.max(0, dmg);
        this.isAlive = true;
    }
}
