let index = 1;
let changeImage = function () {
    let images = ["anh1.jpg", "anh2.jpg", "anh3.jpg", "anh4.jpg"];
    document.getElementById("img").src = images[index];
    index++;
    if (index === 4) {
        index = 0;
    }
}
setInterval(changeImage, 3000);

class Customer {
    name;
    phone;
    email;
    roomStyle;
    person;
    baby;
    checkin;
    checkout;

    constructor(name, phone, email, roomStyle, person, baby, checkin, checkout) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.roomStyle = roomStyle;
        this.person = person;
        this.baby = baby;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}

let person1 = new Customer("Âu Mạnh Tường", "0368568751", "Vantu@gmail.com", "Một giường đôi", 2, 0, "2022-10-20", "2022-10-30");
let person2 = new Customer("Nguyễn Phi Hùng", "0366684662", "hungnguyen@gmail.com", "Hai giường đôi", 5, 2, "2022-11-14", "2022-11-18");
let person3 = new Customer("Mai Minh Phương", "0974492555", "phuongcoi@gmail.com", "Ba giường đôi", 7, 0, "2022-12-05", "2022-12-30");
let person4 = new Customer("Trần Văn Tú", "0398384812", "tu182@gmail.com", "Phòng VIP", 3, 1, "2022-07-15", "2022-10-14");
let my_customer = [person1, person2, person3, person4];

    let divShow = document.getElementById("show");


function show() {
    let srt = "";
    for (let i = 0; i < my_customer.length; i++) {
        srt += "<tr>";
        srt += "<td style='width: 15%;text-align: left;padding-left: 30px'>" + my_customer[i].name + "</td>";
        srt += "<td>" + my_customer[i].phone + "</td>";
        srt += "<td style='text-align: left; padding-left: 30px'>" + my_customer[i].email + "</td>";
        srt += "<td style='text-align: left'>" + my_customer[i].roomStyle + "</td>";
        srt += "<td>" + my_customer[i].person + "</td>";
        srt += "<td>" + my_customer[i].baby + "</td>";
        srt += "<td>" + my_customer[i].checkin + "</td>";
        srt += "<td>" + my_customer[i].checkout + "</td>";
        srt += "<td style='width: 7%'><button style='background: lawngreen' onclick='sua(" + i + ")'>Sửa</button></td>";
        srt += "<td style='width: 5%'><button style='background: lawngreen' onclick='luu(" + i + ")'>Lưu</button></td>";
        srt += "<td style='width: 5%'><button style='background: lawngreen' onclick='xoa(" + i + ")'>Xóa</button></td>";
        srt += "</tr>";
    }
    divShow.innerHTML = srt;
}

show();

function add() {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let roomStyle = document.getElementById("inputRoom").value;
    let person = document.getElementById("inputPerson").value;
    let baby = document.getElementById("inputBaby").value;
    let checkin = document.getElementById("inputDayIn").value;
    let checkout = document.getElementById("inputDayOut").value;
    let newMy_customer = new Customer(name, phone, email, roomStyle, person, baby, checkin, checkout)
    my_customer.push(newMy_customer);
    show();
    Clear();
}

function Clear() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputRoom").value = "";
    document.getElementById("inputPerson").value = "";
    document.getElementById("inputBaby").value = "";
    document.getElementById("inputDayIn").value = "";
    document.getElementById("inputDayOut").value = "";
}

function xoa(index) {
    my_customer.splice(index, 1);
    show();
    Clear();
}

function sua(index) {
    document.getElementById("inputName").value = my_customer[index].name;
    document.getElementById("inputPhone").value = my_customer[index].phone;
    document.getElementById("inputEmail").value = my_customer[index].email;
    document.getElementById("inputRoom").value = my_customer[index].roomStyle;
    document.getElementById("inputPerson").value = my_customer[index].person;
    document.getElementById("inputBaby").value = my_customer[index].baby;
    document.getElementById("inputDayIn").value = my_customer[index].checkin;
    document.getElementById("inputDayOut").value = my_customer[index].checkout;
}

function luu(index) {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let roomStyle = document.getElementById("inputRoom").value;
    let person = document.getElementById("inputPerson").value;
    let baby = document.getElementById("inputBaby").value;
    let checkin = document.getElementById("inputDayIn").value;
    let checkout = document.getElementById("inputDayOut").value;
    let newMy_customer = new Customer(name, phone, email, roomStyle, person, baby, checkin, checkout)
    my_customer.splice(index, 1,newMy_customer);
    show();
    Clear();
}

function gioithieu() {
    location.assign("gioi thieu.html");
}

function hethongphong() {
    location.assign("hethongphong.html");
}