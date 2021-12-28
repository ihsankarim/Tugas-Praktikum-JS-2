function imgpicker(){
    let pick = document.getElementById("pilihan").value;
    let img = document.getElementById("figureimg");

    if (pick == "degea") {
        img.src = "degea.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar degea.jpg";
        alert("Ini adalah gambar degea.jpg");
    } else if (pick == "lewandowski") {
        img.src = "lewandowski.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar lewandowski.jpg";
        alert("Ini adalah gambar lewandowski.jpg");
    } else if (pick == "marcelo") {
        img.src = "marcelo.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar marcelo.jpg";
        alert("Ini adalah gambar marcelo.jpg");
    } else if (pick == "messi") {
        img.src = "messi.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar messi.jpg";
        alert("Ini adalah gambar messi.jpg");
    } else if (pick == "neymar") {
        img.src = "neymar.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar neymar.jpg";
        alert("Ini adalah gambar neymar.jpg");
    } else if (pick == "pogba") {
        img.src = "pogba.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar pogba.jpg";
        alert("Ini adalah gambar pogba.jpg");
    } else if (pick == "ronaldo") {
        img.src = "ronaldo.jpg";
        img.width = 400;
        img.alt = "Ini adalah gambar ronaldo.jpg";
        alert("Ini adalah gambar ronaldo.jpg");
    } 
    
}
