function dich() {
    let tu = document.getElementById("nhap").value;
    let anh = ["banana", "apple", "mission sucess", "mission faile", "good", "stupid", "goosebumps"]
    let viet = ["chuối", "táo", "nhiện vụ thành công", "nhiệm vụ thất bại", "tốt", "ngu", "ngáo"]
    let dich = "";
    for (let i = 0; i < anh.length; i++) {
        if (tu === anh[i]) {
            dich = i
            for (let j = 0; j < viet.length; j++) {
                if (dich === j) {
                    dich = viet[j]
                }
            }
        } else {
           dich = "Bạn ngu vcl, hãy nhập đúng"
        }
    }
    document.getElementById("ketqua").innerHTML = dich

}