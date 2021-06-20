var dataMhs = [[20753022, "Muhammad Dzaky", "Lampung", "dzaky@mail.com"]];

function showMhs() {
    // var listMhs = document.getElementById("name");
    // listMhs.innerHTML = "";
    // for (let i = 0; i < dataMhs.length; i++){
    //     var btnEdit = "<a href='#' onclick='edit("+i+")'>Edit</a>";
    //     var btnHapus = "<a href='#' onclick='deleteMhs("+i+")'>Hapus</a>";
    //     listMhs.innerHTML += "<li>" + dataMhs[i][0] + "[" + btnEdit + "|" + btnHapus + "] </li>";
    // }


    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#template');
    for (let i = 0; i < dataMhs.length; i++) {
        var clone = template.content.cloneNode(true);
        var td = clone.querySelectorAll("td");
        clone.querySelectorAll("button[data-id]")[0].setAttribute("data-id", i);
        td[0].textContent = dataMhs[i][0];
        td[1].textContent = dataMhs[i][1];
        td[2].textContent = dataMhs[i][2];
        td[3].textContent = dataMhs[i][3];
        tbody.appendChild(clone);
    }
}

function addMhs() {
    var npm = document.querySelector("input[name=npm]").value;
    var nama = document.querySelector("input[name=nama]").value;
    var alamat = document.querySelector("input[name=alamat]").value;
    var email = document.querySelector("input[name=email]").value;
    dataMhs.push([npm, nama, alamat, email]);
    showMhs();
}

function edit(id) {
    var newMhs = prompt("nama mhs", dataMhs[id]);
    dataMhs[id] = newMhs;
    showMhs();
}

function hapus(id) {
    dataMhs.splice(id, 1);
    document.querySelector("tbody").querySelectorAll("tr").style.display = 'none';
    showMhs();
}