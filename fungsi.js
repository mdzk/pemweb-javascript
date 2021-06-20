var dataMhs = [
    [20753022, "Muhammad Dzaky", "Lampung", "dzaky@mail.com"],
];

function showMhs() {
    var listMhs = document.getElementById("name");
    listMhs.innerHTML = "";
    for (let i = 0; i < dataMhs.length; i++){
        var btnEdit = "<a href='#' onclick='edit("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteMhs("+i+")'>Hapus</a>";
        listMhs.innerHTML += "<li>" + dataMhs[i][0] + "[" + btnEdit + "|" + btnHapus + "] </li>";
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

function deleteMhs(id) {
    dataMhs.splice(id, 1);
    showMhs();
}

// showMhs();

var tbody = document.querySelector("tbody");
var template = document.querySelector('#template');

var clone = template.content.cloneNode(true);
var td = clone.querySelectorAll("td");
td[0].textContent = "1235646565";
td[1].textContent = "Stuff";
tbody.appendChild(clone);

var clone2 = template.content.cloneNode(true);
td = clone2.querySelectorAll("td");
td[0].textContent = "0384928528";
td[1].textContent = "Acme Kidney Beans 2";

tbody.appendChild(clone2);