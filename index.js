function tinhTienLuong() {
    // input:tienluong1h;số giờ làm number
    var tienLuong = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;

    var tongLuong = 0;
    tongLuong = tienLuong * soGioLam;

    document.getElementById('tongLuong').innerHTML = tongLuong;

    // console.log('tienLuong',tienLuong);
    // console.log('soGioLam',soGioLam);
}

function tinhTbc() {

    var soM = document.getElementById('s1').value;
    var soH = document.getElementById('s2').value;
    var soB = document.getElementById('s3').value;
    var soC = document.getElementById('s4').value;
    var soD = document.getElementById('s5').value;

    var tongTbc = 0;
    tongTbc = ((soM * 1) + (soH * 1) + (soB * 1) + (soC * 1) + (soD * 1)) / 5;

    document.getElementById('tongTbc').innerHTML = tongTbc;
}

function tinhChuviDientich() {

    var chieuDai = document.getElementById('CD').value;
    var chieuRong = document.getElementById('CR').value;

    var chuVi = 0;
    chuVi = ((chieuDai * 1) + (chieuRong * 1)) * 2;
    document.getElementById('chuVi').innerHTML = chuVi;

    var dienTich = 0;
    dienTich = (chieuDai * 1) * (chieuRong * 1);
    document.getElementById('dienTich').innerHTML = dienTich;
}


function doiTie() {
    // input:tienluong1h;số giờ làm number
    var doiTen = document.getElementById('tienDo').value;

    var tongDoi = 0;
    tongDoi = (doiTen * 1) * 23000;

    document.getElementById('tongLuon').innerHTML = tongDoi;

    // console.log('tienLuong',tienLuong);
    // console.log('soGioLam',soGioLam);
}


function kySo() {


    var soKySo = document.getElementById('kySo').value;

    var num1 = soKySo % 10;
    var num2 = Math.floor(soKySo / 10);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = result;

}