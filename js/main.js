/**
 *? Ex1: Tính lương nhân viên
 * Khối 1: Input
 * Khai báo biến
 * + luongMotNgay: 100.000
 * + soNgayLam: 28
 * Khối 2: Process
 * tongLuong = LuongMotNgay * soNgayLam
 * Khối 3: Output
 * in ra tongLuong
 * */

var luongMotNgay = 100000
var soNgayLam = 28

tongLuong = luongMotNgay * soNgayLam
console.log('Tổng lương: ', tongLuong);

/**
 *? Ex2: Tính giá trị trung bình
 * Khối 1: Input
 * Khai báo mảng arrNum gồm 5 phần tử
 * Khối 2: Process
 * Khai báo biến tbCong và gán bằng 0
 * tbCong += arrNum[i] / 5
 * Khối 3: Output
 * in ra tbCong
 */

const arrNum = [1, 2, 3, 4, 5]
var tbCong = 0

for (var i in arrNum) {
  tbCong += arrNum[i] / 5
}

console.log(tbCong);

/**
 *? Ex3: Quy đổi tiền
 * Khối 1: Input
 * Khai báo
 * + giaUSD = 23.500 
 * + soTien
 * Khối 2: Process
 * tiGia = giaUSD * soTien
 * Khối 3: Output
 * in ra tiGia
 *  */

var giaUSD = 23500
var soTien = 2

var tiGia = 0
tiGia = giaUSD * soTien
console.log(tiGia);


/**
 *? Ex4: Tính chu vi, diện tích hcn
 * Khối 1: Input
 * chieuDai
 * chieuRong
 * Khối 2: Process
 * chuVi = (chieuDai + chieuRong) * 2
 * dienTich = (chieuDai * chieuRong)
 * Khối 3: Output
 * In ra chuVi, dienTich
 */

const chieuDai = 5
const chieuRong = 2
var chuVi = 0
var dienTich = 0

chuVi = (chieuDai + chieuRong) * 2
dienTich = chieuDai * chieuRong

console.log('Chu vi hcn: ', chuVi);
console.log('Diện tích hcn: ', dienTich);


/**
 *? Ex5: Tính tổng 2 ký số
 * Khối 1: Input
 * Khai báo số có 2 chữ số
 * Khối 2: process
 * soHangChuc = so / 10
 * soHangDonVi = so % 10
 * tongHaiSo = soHangChuc + soHangDonVi
 * Khối 3: Output
 * in ra tongHaiSo
 */

var so = 40
var soHangChuc = so / 10
var soHangDonVi = so % 10

var tongHaiSo = soHangChuc + soHangDonVi
console.log('Tổng 2 chữ số: ', tongHaiSo)
