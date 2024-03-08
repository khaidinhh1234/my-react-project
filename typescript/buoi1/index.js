var a = 10;
var b = 20;
var sum = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        return 0;
    return a + b;
};
console.log(sum(a, b));
var ten = "Nguyen Dinh Khai";
var age = "19 tuổi";
var trangthai = true;
var thongtin = {
    id: 1,
    name: "khai",
    tuoi: 19,
};
var show = function (data) {
    return "".concat(data.name, " ").concat(data.tuoi, "tuoi");
};
console.log(show(thongtin));
var arrQuanly = [
    { id: 1, name: "khai", namsinh: 2004, gioitinh: "nam" },
    { id: 2, name: "dat", namsinh: 2003, gioitinh: "nam" },
    { id: 3, name: "Hoa", namsinh: 2005, gioitinh: "nữ" }
];
var sp = document.querySelector("#root");
var hienthi = function (dataload) {
    if (!Array.isArray(dataload))
        return "Data is not array";
    return dataload.map(function (item, i) { return "\n<table><tr>\n<th>".concat(item.id, "</th>\n<th>").concat(item.name, "</th></tr></table>"); }).join("");
};
document.querySelector("#root").innerHTML = hienthi(arrQuanly);
