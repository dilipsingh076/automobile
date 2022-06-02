const nano={ 
    engine:1,
    battery:"5000 voltage",
    wheel:4,
    brake:1,
    handel:1,
    gear:4,
    airbag:2,

};

const nanoeletric = Object.create(nano)
nanoeletric.gier=1
console.log('nanoeeletric :',nanoeletric)

const sportCar = Object.create(nano)
sportCar.sheetBelt=1;
console.log('sportCar :',sportCar)

const miniVan = Object.create(nanoeletric)
miniVan.window=2;
console.log('miniVan :',miniVan)

const micro = Object.create(sportCar)
micro.sheet=2;
console.log('micro :',micro)

function Constructor(e,w,b,s,battery,air,handel,gear){
    this.engine=e;
    this.wheel=w;
    this.brake=b;
    this.sheetMetal=s;
    this.battery=battery;
    this.airbag=air;
    this.handel = handel;
    this.gear= gear;

}


Constructor.prototype.sheetBelt=1

let s1= new Constructor(1,4,1,2,1,2,1,4)
console.log('s1 :',s1)
