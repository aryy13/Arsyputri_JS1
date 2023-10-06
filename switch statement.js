let logbook = "jumat";

switch (logbook) {
    case "senin":
        console.log("gak bikin logbook, besok aja");
        break;
    case "selasa":
        console.log("masih males bikin, hari rabu aja");
        break;
    case "rabu":
       console.log("besok aja kali, ya?");
       break;
    case "kamis":
        console.log("besok aja deh, sekalian logbook mingguan");
        break;
    case "jumat":
        console.log(" sekarang pokoknya harus bikin logbook buat seminggu");
        break;
    default: 
        console.log ("akhirnya logbooknya dikerjain dua minggu kemudian"); 
        break;
}