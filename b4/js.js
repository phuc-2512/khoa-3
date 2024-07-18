// class Xe {
//     constructor(banh, mau, choNgoi, dongCo, tocDo){
//        this.banh = banh
//        this.mau = mau
//        this.choNgoi = choNgoi
//        this.dongCo = dongCo
//        this.tocDo = tocDo
//     }

//     inThongtin(){
//         console.log('Đây là xe với các thông tin:');
//         console.log(`Có ${this.banh} bánh xe`);
//         console.log(`Có màu ${this.mau}`);
//         console.log(`Có ${this.choNgoi} ghế`);
//         console.log(`Có ${this.dongCo} cc`);
//         console.log(`Có ${this.tocDo} km/h`);
//     }
// }

// class xeMotor extends Xe {
//     constructor(banh, mau, choNgoi, dongCo, tocDo, giayPhep){
//         super(banh, mau, choNgoi, dongCo, tocDo)           // Thuộc tính kế thừa từ ba nó
//         this.giayPhep = giayPhep   // Thuộc tính mà lớp cha ko có mô tả lại
//         this.loaiXe = 'xe motor xe gắn máy'
//     }

//     DuocLaiXe(){
//         if (this.giayPhep == 'A2'){
//             console.log('Được lái xe');
//         }
//         else if (this.dongCo < 175){
//             console.log('được lái xe');
//         }
//         else{
//             console.log('Ko được lái xe');
//         }
//     }
// }

// let winnerX = new xeMotor(2, 'đen vàng', 2, 150, 150, 'A1')
// winnerX.inThongtin()
// winnerX.DuocLaiXe()

// let z1000 = new xeMotor(2, 'đen', 2, 1000, 200, 'A1')
// z1000.inThongtin()
// z1000.DuocLaiXe()

// // let xeMay = new Xe(2, 'đen', 2, 30, 80);
// // xeMay.inThongtin();

// // let xeOto = new Xe(4, 'đen', 2, 300, 200);
// // xeOto.inThongtin();

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name)   
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);