// DO WHILE 

let dikte = "infinite Learning";
let i = 0;

do {
    console.log(dikte[i]);
    i++;
} while (i < dikte.length); 



// IF ELSE 

let weekend = "ada_tugas";

if (weekend === "ada_tugas") {
    console.log("yah, ada tugas, gak jadi nonton drakor"); 
}

else if (weekend = "ga_ada_tugas") {
    console.log("yeay, ga adda tugas. Lanjut nonton drakor");
}
 else  {
    console.log("ga ada tugas, tapi pergi, gak jadi nonton");
 }





 // SWITCH STATEMENT 

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



 // FOR STATEMENT 

 for (let i = 1; i <= 10; i++) {
    let hasil = i * 5;
    console.log(`${i} x 5 = ${hasil}`);
}



// FUNCTION
function moving (strength1 = 'terbang', strength2 = "sixsense", strength3 = "regenerasi", 
strength4 = "pandai menembak") {
 console.log(` Kim Dusik memiliki kekuatan yaitu  ${strength1} dan ${strength4}. 
 Kemudian Lee mihyun, ${strength2} dan ${strength4}. 
 dan Jang juwoon memiliki kekuatan ${strength3}. 
 Mereka bertiga adalah character dari moving Kdrama`);  }

moving();