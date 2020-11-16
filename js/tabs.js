var a = document.getElementById("tab1"); 
var b = document.getElementById("tab2"); 
var c = document.getElementById("tab3"); 
var d = document.getElementById("tab4"); 
var e = document.getElementById("tab5"); 
var f = document.getElementById("tab6"); 


function loadUtama(){

    document.getElementById("utama").style.display = "block";
    document.getElementById("aduan_kes").style.display = "none";
    document.getElementById("pelaporan_bertulis").style.display = "none";
    document.getElementById("pengadu").style.display = "none";
    document.getElementById("pelaku").style.display = "none";
    document.getElementById("pengesahan").style.display = "none";

    a.classList.add("completed"); 
    b.classList.remove("completed"); 
    c.classList.remove("completed"); 
    d.classList.remove("completed"); 
    e.classList.remove("completed"); 
    f.classList.remove("completed"); 

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}

function loadAduan(){

    var rujukan_input = document.getElementById("utama_rujukan").value; 
    var date_1 = document.getElementById("utama_tarikhdari").value; 
    var date_2 = document.getElementById("utama_tarikhhingga").value; 
    var time_1 = document.getElementById("utama_masadari").value; 
    var time_2 = document.getElementById("utama_masahingga").value; 

    var y = document.getElementById("utama_rujukan"); 
    var date1 = document.getElementById("utama_tarikhdari"); 
    var date2 = document.getElementById("utama_tarikhhingga"); 
    var time1 = document.getElementById("utama_masadari"); 
    var time2 = document.getElementById("utama_masahingga"); 

    var search_sym = rujukan_input.search("'");


    if(rujukan_input === ""){
        y.style.border = '2px solid coral';
    }

    if(date_1 == ""){
        date1.style.border = '2px solid coral';
    }

    if(date_2 == ""){
        date2.style.border = '2px solid coral';
    }

    if(search_sym >0){
        y.style.border = '2px solid coral';
    }

    if(time_1 == ""){
        time1.style.border = '2px solid coral';
    }

    if(time_2 == ""){
        time2.style.border = '2px solid coral';
    }


    else if(rujukan_input != "" && date_1 != "" && date_2 != "" && search_sym <= 0 && time_1 != "" && time_2 != ""){

        y.style.border = '1px solid #ccc';
        date1.style.border = '1px solid #ccc';
        date2.style.border = '1px solid #ccc';
        time1.style.border = '1px solid #ccc';
        time2.style.border = '1px solid #ccc';

        document.getElementById("utama").style.display = "none";
        document.getElementById("pengadu").style.display = "none";
        document.getElementById("aduan_kes").style.display = "block";
        document.getElementById("pelaporan_bertulis").style.display = "none";
        document.getElementById("pelaku").style.display = "none";
        document.getElementById("pengesahan").style.display = "none";
        
        a.classList.add("completed"); 
        b.classList.add("completed"); 
        c.classList.remove("completed"); 
        d.classList.remove("completed"); 
        e.classList.remove("completed");  
        f.classList.remove("completed"); 
        
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    
    
}

function loadPengadu(){

    var rujukan_input = document.getElementById("utama_rujukan").value; 
    var date_1 = document.getElementById("utama_tarikhdari").value; 
    var date_2 = document.getElementById("utama_tarikhhingga").value; 
    var time_1 = document.getElementById("utama_masadari").value; 
    var time_2 = document.getElementById("utama_masahingga").value; 

    var y = document.getElementById("utama_rujukan"); 
    var date1 = document.getElementById("utama_tarikhdari"); 
    var date2 = document.getElementById("utama_tarikhhingga"); 
    var time1 = document.getElementById("utama_masadari"); 
    var time2 = document.getElementById("utama_masahingga"); 

    var search_sym = rujukan_input.search("'");

    if(rujukan_input === ""){
        y.style.border = '2px solid coral';
    }

    if(date_1 == ""){
        date1.style.border = '2px solid coral';
    }

    if(date_2 == ""){
        date2.style.border = '2px solid coral';
    }

    if(search_sym >0){
        y.style.border = '2px solid coral';
    }

    if(time_1 == ""){
        time1.style.border = '2px solid coral';
    }

    if(time_2 == ""){
        time2.style.border = '2px solid coral';
    }

    else if(rujukan_input != "" && date_1 != "" && date_2 != "" && search_sym <= 0 && time_1 != "" && time_2 != ""){

        y.style.border = '1px solid #ccc';
        date1.style.border = '1px solid #ccc';
        date2.style.border = '1px solid #ccc';
        time1.style.border = '1px solid #ccc';
        time2.style.border = '1px solid #ccc';

        document.getElementById("aduan_kes").style.display = "none";
        document.getElementById("utama").style.display = "none";
        document.getElementById("pelaku").style.display = "none";
        document.getElementById("pengadu").style.display = "block";
        document.getElementById("pelaporan_bertulis").style.display = "none";
        document.getElementById("pengesahan").style.display = "none";

        a.classList.add("completed"); 
        b.classList.add("completed"); 
        c.classList.add("completed"); 
        d.classList.remove("completed"); 
        e.classList.remove("completed");  
        f.classList.remove("completed"); 

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    
}

function loadPelaku(){

    var rujukan_input = document.getElementById("utama_rujukan").value; 
    var date_1 = document.getElementById("utama_tarikhdari").value; 
    var date_2 = document.getElementById("utama_tarikhhingga").value; 
    var time_1 = document.getElementById("utama_masadari").value; 
    var time_2 = document.getElementById("utama_masahingga").value; 

    var y = document.getElementById("utama_rujukan"); 
    var date1 = document.getElementById("utama_tarikhdari"); 
    var date2 = document.getElementById("utama_tarikhhingga"); 
    var time1 = document.getElementById("utama_masadari"); 
    var time2 = document.getElementById("utama_masahingga"); 

    if(rujukan_input === ""){
        y.style.border = '2px solid coral';
    }

    if(date_1 == ""){
        date1.style.border = '2px solid coral';
    }

    if(date_2 == ""){
        date2.style.border = '2px solid coral';
    }

    if(time_1 == ""){
        time1.style.border = '2px solid coral';
    }

    if(time_2 == ""){
        time2.style.border = '2px solid coral';
    }

    else if(rujukan_input != "" && date_1 != "" && date_2 != "" && time_1 != "" && time_2 != ""){

        y.style.border = '1px solid #ccc';
        date1.style.border = '1px solid #ccc';
        date2.style.border = '1px solid #ccc';
        time1.style.border = '1px solid #ccc';
        time2.style.border = '1px solid #ccc';

        document.getElementById("aduan_kes").style.display = "none";
        document.getElementById("utama").style.display = "none";
        document.getElementById("pelaku").style.display = "block";
        document.getElementById("pengadu").style.display = "none";
        document.getElementById("pelaporan_bertulis").style.display = "none";
        document.getElementById("pengesahan").style.display = "none";
    
        a.classList.add("completed"); 
        b.classList.add("completed"); 
        c.classList.add("completed"); 
        d.classList.add("completed"); 
        e.classList.remove("completed");  
        f.classList.remove("completed"); 
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    
}

function loadLaporanBertulis(){

    var rujukan_input = document.getElementById("utama_rujukan").value; 
    var date_1 = document.getElementById("utama_tarikhdari").value; 
    var date_2 = document.getElementById("utama_tarikhhingga").value; 
    var time_1 = document.getElementById("utama_masadari").value; 
    var time_2 = document.getElementById("utama_masahingga").value; 

    var y = document.getElementById("utama_rujukan"); 
    var date1 = document.getElementById("utama_tarikhdari"); 
    var date2 = document.getElementById("utama_tarikhhingga"); 
    var time1 = document.getElementById("utama_masadari"); 
    var time2 = document.getElementById("utama_masahingga"); 

    if(rujukan_input === ""){
        y.style.border = '2px solid coral';
    }

    if(date_1 == ""){
        date1.style.border = '2px solid coral';
    }

    if(date_2 == ""){
        date2.style.border = '2px solid coral';
    }

    if(time_1 == ""){
        time1.style.border = '2px solid coral';
    }

    if(time_2 == ""){
        time2.style.border = '2px solid coral';
    }

    else if(rujukan_input != "" && date_1 != "" && date_2 != "" && time_1 != "" && time_2 != ""){

        y.style.border = '1px solid #ccc';
        date1.style.border = '1px solid #ccc';
        date2.style.border = '1px solid #ccc';
        time1.style.border = '1px solid #ccc';
        time2.style.border = '1px solid #ccc';

        document.getElementById("aduan_kes").style.display = "none";
        document.getElementById("utama").style.display = "none";
        document.getElementById("pelaku").style.display = "none";
        document.getElementById("pengadu").style.display = "none";
        document.getElementById("pelaporan_bertulis").style.display = "block";
        document.getElementById("pengesahan").style.display = "none";
    
        a.classList.add("completed"); 
        b.classList.add("completed"); 
        c.classList.add("completed"); 
        d.classList.add("completed"); 
        e.classList.add("completed");  
        f.classList.remove("completed"); 
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}

function loadPengesahan(){ 

    var rujukan_input = document.getElementById("utama_rujukan").value; 
    var date_1 = document.getElementById("utama_tarikhdari").value; 
    var date_2 = document.getElementById("utama_tarikhhingga").value; 
    var time_1 = document.getElementById("utama_masadari").value; 
    var time_2 = document.getElementById("utama_masahingga").value; 

    var y = document.getElementById("utama_rujukan"); 
    var date1 = document.getElementById("utama_tarikhdari"); 
    var date2 = document.getElementById("utama_tarikhhingga"); 
    var time1 = document.getElementById("utama_masadari"); 
    var time2 = document.getElementById("utama_masahingga"); 

    if(rujukan_input === ""){
        y.style.border = '2px solid coral';
    }

    if(date_1 == ""){
        date1.style.border = '2px solid coral';
    }

    if(date_2 == ""){
        date2.style.border = '2px solid coral';
    }

    if(time_1 == ""){
        time1.style.border = '2px solid coral';
    }

    if(time_2 == ""){
        time2.style.border = '2px solid coral';
    }

    else if(rujukan_input != "" && date_1 != "" && date_2 != "" && time_1 != "" && time_2 != ""){

        y.style.border = '1px solid #ccc';
        date1.style.border = '1px solid #ccc';
        date2.style.border = '1px solid #ccc';
        time1.style.border = '1px solid #ccc';
        time2.style.border = '1px solid #ccc';

        document.getElementById("aduan_kes").style.display = "none";
        document.getElementById("utama").style.display = "none";
        document.getElementById("pelaku").style.display = "none";
        document.getElementById("pengadu").style.display = "none";
        document.getElementById("pelaporan_bertulis").style.display = "none";
        document.getElementById("pengesahan").style.display = "block";
    
        a.classList.add("completed"); 
        b.classList.add("completed"); 
        c.classList.add("completed"); 
        d.classList.add("completed"); 
        e.classList.add("completed");  
        f.classList.add("completed"); 
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0

    }
    
} 


function openNav(){
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav2").style.width = "0";
}

function openNav2(){
    document.getElementById("mySidenav2").style.width = "200px";
    document.getElementById("mySidenav").style.width = "0";
}
  
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav2").style.width = "0";
}

function logOut(){
    localStorage.removeItem("no_ic"); 
    window.location.href = "index.html";
}