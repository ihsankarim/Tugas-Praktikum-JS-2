function input(){
    event.preventDefault();

    var namalengkap = document.getElementById("nama").value,
        emailform = document.getElementById("email").value,
        jam = document.getElementById("jam-berangkat").value,
        tujuan = document.getElementById("tujuan-keberangkatan").value,
        jumlahtiket = document.getElementById("jumlah-tiket").value,
        paragraf = document.createElement("p");

    paragraf.innerHTML = "Nama Pelanggan : "+namalengkap + "</br>" + "Email : "+emailform + "</br>" + "Jam Berangkat : " + jam + "</br>" + "Tujuan Keberangkatan" + tujuan  + "</br>" + "Jumlah Tiket : " + jumlahtiket;
    document.getElementById("output").appendChild(paragraf);
}