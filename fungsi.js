var dataMhs = [
    [20753022, "Muhammad Dzaky", "Lampung", "dzaky@mail.com"],
    [20753030, "Rival Ramli Mursat", "Padang", "rival@mail.com"],
    [20753013, "Haikal Hifzon", "Lampung", "haikal@mail.com"]
];

var tbody = document.querySelector("tbody");
var template = document.querySelector('#template');
for (let i = 0; i < dataMhs.length; i++) {
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    clone.querySelectorAll("tr[data-id]")[0].setAttribute("data-id", i);
    td[0].textContent = dataMhs[i][0];
    td[1].textContent = dataMhs[i][1];
    td[2].textContent = dataMhs[i][2];
    td[3].textContent = dataMhs[i][3];
    tbody.appendChild(clone);
}

function kosong() {
    document.querySelector("input[name=npm]").value = "";
    document.querySelector("input[name=nama]").value = "";
    document.querySelector("input[name=alamat]").value = "";
    document.querySelector("input[name=email]").value = "";
}

function addMhs() {

    var id = document.querySelectorAll("form[data-id]")[0].getAttribute("data-id");

    if(id !== "") {
        var npm = document.querySelector("input[name=npm]").value;
        var nama = document.querySelector("input[name=nama]").value;
        var alamat = document.querySelector("input[name=alamat]").value;
        var email = document.querySelector("input[name=email]").value;

        dataMhs[id][0] = npm;
        dataMhs[id][1] = nama;
        dataMhs[id][2] = alamat;
        dataMhs[id][3] = email;

        document.querySelector(`tr[data-id="${id}"]`).querySelector(".data-npm").innerText = npm;
        document.querySelector(`tr[data-id="${id}"]`).querySelector(".data-nama").innerText = nama;
        document.querySelector(`tr[data-id="${id}"]`).querySelector(".data-alamat").innerText = alamat;
        document.querySelector(`tr[data-id="${id}"]`).querySelector(".data-email").innerText = email;
        document.querySelectorAll("form[data-id]")[0].setAttribute("data-id", "");

        kosong();
        alert("data berhasil diedit");
    } else {
        var npm = document.querySelector("input[name=npm]").value == "";
        var nama = document.querySelector("input[name=nama]").value == "";
        var alamat = document.querySelector("input[name=alamat]").value == "";
        var email = document.querySelector("input[name=email]").value == "";
        if (npm && nama && alamat && email) {
            alert("harap diisi");
        } else {
            var npm = document.querySelector("input[name=npm]").value;
            var nama = document.querySelector("input[name=nama]").value;
            var alamat = document.querySelector("input[name=alamat]").value;
            var email = document.querySelector("input[name=email]").value;
            dataMhs.push([npm, nama, alamat, email]);
        
            var tbody = document.querySelector("tbody");
            var template = document.querySelector('#template');
            var clone = template.content.cloneNode(true);
            var td = clone.querySelectorAll("td");
            clone.querySelectorAll("tr[data-id]")[0].setAttribute("data-id", dataMhs.length-1);
            td[0].textContent = npm;
            td[1].textContent = nama;
            td[2].textContent = alamat;
            td[3].textContent = email;
            tbody.appendChild(clone);

            kosong();
            alert("data berhasil ditambahkan");
        }
    }

}

function edit(e) {
    var tr = e.firstChild.parentElement.parentElement.parentElement;
    var id = tr.getAttribute("data-id");

    var npm = document.querySelector("input[name=npm]").value = dataMhs[id][0];
    var nama = document.querySelector("input[name=nama]").value = dataMhs[id][1];
    var alamat = document.querySelector("input[name=alamat]").value = dataMhs[id][2];
    var email = document.querySelector("input[name=email]").value = dataMhs[id][3];
    document.querySelectorAll("form[data-id]")[0].setAttribute("data-id", id);

    dataMhs[id][0] = npm;
    dataMhs[id][1] = nama;
    dataMhs[id][2] = alamat;
    dataMhs[id][3] = email;
}

function hapus(e) {
    if(confirm("yakin ingin hapus data ini?")) {
        var tr = e.firstChild.parentElement.parentElement.parentElement;
        var id = tr.getAttribute("data-id");
        dataMhs.splice(id, 1);
        tr.remove();
        for(let z = 0; z < dataMhs.length; z++) {
            document.querySelectorAll("tr[data-id]")[z].setAttribute("data-id", z);
        }
        document.querySelectorAll("form[data-id]")[0].setAttribute("data-id", "");
        kosong();
    }
}