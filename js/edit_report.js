window.onload = function(){
    //onlineCheck();
    offline_API();
}


function onlineCheck() {
    // var x = navigator.onLine;
  
    // if(navigator.onLine === false){

    //     alert("You are offline!");
    //     document.getElementById("online_btn").style.display = "none";
    //     document.getElementById("offline_btn").style.display = "block";
    // }

    // else{

    //     loadAPI_Bahagian();
    //     loadAPI_Unit();
    //     loadAPI_Bahagian_pegawai();
    //     loadAPI_Pegawai_all();
    //     loadAPI_Lembangan();
    //     loadAPI_Sub();
    //     loadAPI_PTD();
    //     loadAPI_PBT();
    //     loadAPI_Mukim();
    //     loadAPI_Gunatanah();
    //     loadAPI_KategoriLaporan();
    //     loadAPI_JenisAduan();
    //     loadAPI_SumberAirTerlibat();
    //     loadAPI_TempatKejadian();
    //     loadAPI_MukaSauk();
    //     loadAPI_LRA();
    //     loadAPI_SumberAduan();
    //     loadAPI_KategoriAduan();
    //     loadAPI_JenisPengadu();
    // }
}

function offline_API(){

    var kategori_laporan = localStorage.getItem("kategori_laporan");
    document.getElementById("utama_kategori").innerHTML = kategori_laporan;

    var jenis_pengadu = localStorage.getItem("jenis_pengadu");
    document.getElementById("pengadu_pengadu").innerHTML = jenis_pengadu;

    var kategori_pelaku = localStorage.getItem("kategori_pelaku");
    document.getElementById("pelaku_kategori").innerHTML = kategori_pelaku;

    var kategori_aduan = localStorage.getItem("kategori_aduan");
    document.getElementById("pengadu_kategori").innerHTML = kategori_aduan;

    var sumber_aduan = localStorage.getItem("sumber_aduan");
    document.getElementById("pengadu_sumber").innerHTML = sumber_aduan;

    var lra = localStorage.getItem("lra");
    document.getElementById("aduan_loji_rawatan_terdekat").innerHTML = lra;

    var ms = localStorage.getItem("ms");
    document.getElementById("aduan_mukasauk_terdekat").innerHTML = ms;

    var tempat_kejadian = localStorage.getItem("tempat_kejadian");
    document.getElementById("aduan_tempat_kejadian").innerHTML = tempat_kejadian;

    var sumber_air = localStorage.getItem("sumber_air");
    document.getElementById("aduan_sumber_terlibat").innerHTML = sumber_air;

    var jenis_aduan = localStorage.getItem("jenis_aduan");
    document.getElementById("aduan_jenis").innerHTML = jenis_aduan;

    var g_tanah1 = localStorage.getItem("g_tanah1");
    document.getElementById("aduan_gunatanah").innerHTML = g_tanah1;

    var mukim = localStorage.getItem("mukim");
    document.getElementById("aduan_mukim").innerHTML = mukim;

    var pbt = localStorage.getItem("pbt");
    document.getElementById("aduan_pbt").innerHTML = pbt;

    var nama_ptd = localStorage.getItem("nama_ptd");
    document.getElementById("aduan_ptd").innerHTML = nama_ptd;

    var nama_sub = localStorage.getItem("nama_sub");
    document.getElementById("aduan_sub").innerHTML = nama_sub;

    var lembangan = localStorage.getItem("lembangan");
    document.getElementById("aduan_lembangan").innerHTML = lembangan;

    var bahagian = localStorage.getItem("bahagian");
    document.getElementById("utama_bahagian").innerHTML = bahagian;

    var unit = localStorage.getItem("unit");
    var unit2 = localStorage.getItem("unit2");
    document.getElementById("utama_unit").innerHTML = unit;
    document.getElementById("utama2_unit").innerHTML = unit2;
    document.getElementById("utama3_bahagian").innerHTML = unit2;

    var bahagianP = localStorage.getItem("bahagianP");
    document.getElementById("utama2_bahagian").innerHTML = bahagianP;
    document.getElementById("utama4_unit").innerHTML = bahagianP;
    document.getElementById("pengesahan_semak_bahagian").innerHTML = bahagianP;
    document.getElementById("pengesahan_sah_bahagian").innerHTML = bahagianP;

    var nama = localStorage.getItem("nama");
    document.getElementById("utama2_nama_pegawai").innerHTML = nama;

    var nama2 = localStorage.getItem("nama2");

    document.getElementById("utama3_nama_pegawai").innerHTML = nama2;
    document.getElementById("utama4_nama_pegawai").innerHTML = nama2;

    var jawatan = localStorage.getItem("jawatan");
    document.getElementById("utama2_jawatan").innerHTML = jawatan;
    document.getElementById("utama3_jawatan").innerHTML = jawatan;
    document.getElementById("utama4_jawatan").innerHTML = jawatan;
    document.getElementById("pengesahan_semak_jawatan").innerHTML = jawatan;
    document.getElementById("pengesahan_sah_jawatan").innerHTML = jawatan;

    var statPremis = localStorage.getItem("status_premis");
    document.getElementById("aduan_status_premis").innerHTML = statPremis;

    var aktiviti = localStorage.getItem("jenis_aktiviti");
    document.getElementById("aduan_aktiviti").innerHTML = aktiviti;

    var pegawai_pengesahan = localStorage.getItem("pegawai_pengesahan");
    document.getElementById("pengesahan_semak_nama_pegawai").innerHTML = pegawai_pengesahan;
    document.getElementById("pengesahan_sah_nama_pegawai").innerHTML = pegawai_pengesahan;

    var aktiviti_utama = localStorage.getItem("aktiviti_utama");
    document.getElementById("aktiviti_utama").innerHTML = aktiviti_utama;

    var sub_aktiviti = localStorage.getItem("sub_aktiviti");
    document.getElementById("sub_aktiviti").innerHTML = sub_aktiviti;
    
}

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "200px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav2").style.width = "0";
}

//--------------------------------------MAP-----------------------------------------------//

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } 
    
    else { 
        alert("Geolocation is not supported by this device.");
    }
}

var clicked = 0;

function showPosition(position) {

    clicked = clicked + 1;

    if(clicked > 1){

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lon").value = position.coords.longitude;
        document.getElementById("accuracy").innerHTML = "Accuracy : <input type='text' value='"+ position.coords.accuracy +" m' readonly>";

        var removemap = document.getElementById("map");
        removemap.remove();

        var createmap = document.createElement("DIV");
        createmap.id = "map";

        var createpopup = document.createElement("DIV");
        createpopup.id = "popup";

        var createimg = document.createElement('img'); 
        createimg.src = 'img/svg/station_pin.svg'; 

        document.getElementById("map_here").appendChild(createmap);
        document.getElementById("map_here").appendChild(createpopup);
        document.getElementById('popup').appendChild(createimg); 

        document.getElementById("map").className = "map";

        document.getElementById("map").style.display = "block";
        document.getElementById("popup").style.display = "block";

        setTimeout(function(){ 
                var popup = new ol.Overlay({
                element: document.getElementById('popup')
                });
            
                var osmLayer = new ol.layer.Tile({
                    source: new ol.source.OSM()
                });
            
                var ol_sprint_location = ol.proj.transform([position.coords.longitude, position.coords.latitude], 'EPSG:4326', 'EPSG:3857');
            
                var view = new ol.View({
                    center: ol_sprint_location,
                    zoom: 14
                });
            
                var map = new ol.Map({
                    target: 'map'
                });
            
                map.addLayer(osmLayer);
                map.setView(view);
            
                map.addOverlay(popup);
                popup.setPosition(ol_sprint_location); 
        }, 100);
    }

    else{

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lon").value = position.coords.longitude;
        document.getElementById("accuracy").innerHTML = "Accuracy : <input readonly type='text' value='"+ position.coords.accuracy +" m'>";
        document.getElementById("map").style.display = "block";
        document.getElementById("popup").style.display = "block";

            var popup = new ol.Overlay({
            element: document.getElementById('popup')
            });
        
            var osmLayer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });
        
            var ol_sprint_location = ol.proj.transform([position.coords.longitude, position.coords.latitude], 'EPSG:4326', 'EPSG:3857');
        
            var view = new ol.View({
                center: ol_sprint_location,
                zoom: 14
            });
        
            var map = new ol.Map({
                target: 'map'
            });
        
            map.addLayer(osmLayer);
            map.setView(view);
        
            map.addOverlay(popup);
            popup.setPosition(ol_sprint_location);

    }

    console.log(position.coords.accuracy);

}


function showError(error) {
    switch(error.code) {
            case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
            case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
            case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
            case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}


//--------------------------------------TAB-----------------------------------------------//

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

function loadPengadu(){
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
    document.documentElement.scrollTop = 0
}

function loadPelaku(){
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
    document.documentElement.scrollTop = 0
}

function loadLaporanBertulis(){
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
    document.documentElement.scrollTop = 0
}

function loadPengesahan(){ 

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


//----------------------------------------REPORT---------------------------------------------//

    var url_page =  window.location.href;
    url_page = url_page.split("?");
    var url2 = url_page[1].split("=");

    var url_id = url2[1].split("%20").join(" ");
    //var url_id = url2[1].replace(/%20/g, " ");  --> alternate method for above

    console.log(url_id);

    var db = new PouchDB('luas');

    db.get(url_id).then(function (doc) {

        //console.log(doc.laporan_caption[0]);
        setTimeout(function(){ 

            document.getElementById("utama_rujukan").value = doc._id;
            document.getElementById("aduan_nama_sumber").value = doc.sumber_air;
            document.getElementById("utama_kategori").value = doc.kategori_laporan;
            document.getElementById("user_type").value = doc.user_type;

            //document.getElementById("aduan_jenis").value = doc.jenis_aduan;

            for(var i=0; i<doc.jenis_aduan.length;i++){
                document.getElementById(doc.jenis_aduan[i]).selected = "true";
            }

            //document.getElementById("aduan_tempat_kejadian").value = doc.tempat_kejadian;

            for(var k=0; k<doc.tempat_kejadian.length;k++){
                document.getElementById(doc.tempat_kejadian[k]).selected = "true";
            }

            document.getElementById("utama_bahagian").value = doc.utama_bahagian;
            document.getElementById("utama_unit").value = doc.utama_unit;
            document.getElementById("utama_tarikhdari").value = doc.utama_tarikhdari;
            document.getElementById("utama_tarikhhingga").value = doc.utama_tarikhhingga;
            document.getElementById("utama_masadari").value = doc.utama_masadari;
            document.getElementById("utama_masahingga").value = doc.utama_masahingga;
            document.getElementById("utama_tajuk").value = doc.utama_tajuk;

            var tbody_report_pegawai = "";

            for(var i=0; i<doc.utama2_bahagian.length; i++){
                tbody_report_pegawai += "<tr> <td>"+ doc.utama2_bahagian[i] +" <input type='hidden' value='"+ doc.utama2_bahagian[i] +"' name='bahagian_pegawai_hadir' /> </td> <td>"+ doc.utama2_unit[i] +" <input type='hidden' value='"+ doc.utama2_unit[i] +"' name='unit_pegawai_hadir' /> </td> <td>"+ doc.utama2_nama_pegawai[i] +" <input type='hidden' value='"+ doc.utama2_nama_pegawai[i] +"' name='nama_pegawai_hadir' /> </td> <td>"+ doc.utama2_jawatan[i] +" <input type='hidden' value='"+ doc.utama2_jawatan[i] +"' name='jawatan_pegawai_hadir' /> </td> <td><button class='table_delete_button' onclick='killRowPegawai(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button></td> </tr>";
            }

            document.getElementById("table_body_pghadir").innerHTML = tbody_report_pegawai;
            
            document.getElementById("utama3_arahan").value = doc.utama3_arahan;
            document.getElementById("utama3_nama_pegawai").value = doc.utama3_nama_pegawai;
            document.getElementById("utama3_jawatan").value = doc.utama3_jawatan;
            document.getElementById("utama3_bahagian").value = doc.utama3_bahagian;
            document.getElementById("utama3_tarikh").value = doc.utama3_tarikh;
            document.getElementById("utama4_arahan").value = doc.utama4_arahan;
            document.getElementById("utama4_nama_pegawai").value = doc.utama4_nama_pegawai;
            document.getElementById("utama4_jawatan").value = doc.utama4_jawatan;
            document.getElementById("utama4_unit").value = doc.utama4_unit;
            document.getElementById("utama4_tarikh").value = doc.utama4_tarikh;

            for(var j=0; j<doc.aduan_sumber_terlibat.length;j++){
                document.getElementById(doc.aduan_sumber_terlibat[j]).selected = "true";
            }

            document.getElementById("aktiviti_utama").value = doc.aduan_aktiviti_utama;
            document.getElementById("sub_aktiviti").value = doc.aduan_sub_aktiviti;
            document.getElementById("lat").value = doc.lat;
            document.getElementById("lon").value = doc.lon;
            document.getElementById("aduan_lembangan").value = doc.aduan_lembangan;
            document.getElementById("aduan_sub").value = doc.aduan_sub;
            document.getElementById("aduan_ptd").value = doc.aduan_ptd;
            document.getElementById("aduan_pbt").value = doc.aduan_pbt;
            document.getElementById("aduan_mukim").value = doc.aduan_mukim;
            document.getElementById("aduan_no_lot").value = doc.aduan_no_lot;
            document.getElementById("aduan_gunatanah").value = doc.aduan_gunatanah;

            var tbody_mukasauk = "";
            var tbody_lra = "";

            for(var i=0; i<doc.aduan_mukasauk_no.length; i++){
                tbody_mukasauk += "<tr> <td>"+ doc.aduan_mukasauk_terdekat[i] +" <input type='hidden' value='"+ doc.aduan_mukasauk_terdekat[i] +"' name='muka_sauk' /> </td> <td>"+ doc.aduan_mukasauk_no[i] +" <input type='hidden' value='"+ doc.aduan_mukasauk_no[i] +"' name='jarak_muka_sauk' /> </td> <td><button class='table_delete_button' onclick='killRowMukaSauk(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button></td> </tr>";
            }

            document.getElementById("table_body_mukasauk").innerHTML = tbody_mukasauk;

            for(var i=0; i<doc.aduan_loji_rawatan_no.length; i++){
                tbody_lra += "<tr> <td>"+ doc.aduan_loji_rawatan_terdekat[i] +" <input type='hidden' value='"+ doc.aduan_loji_rawatan_terdekat[i] +"' name='loji_rawatan_air' /> </td> <td>"+ doc.aduan_loji_rawatan_no[i] +" <input type='hidden' value='"+ doc.aduan_loji_rawatan_no[i] +"' name='jarak_loji_rawatan_air' /> </td> <td><button class='table_delete_button' onclick='killRowLRA(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button></td> </tr>";
            }

            document.getElementById("table_body_lra").innerHTML = tbody_lra;

            document.getElementById("pengadu_rujukan").value = doc.pengadu_rujukan;
            for(var j=0; j<doc.pengadu_sumber.length;j++){
                document.getElementById(doc.pengadu_sumber[j]).selected = "true";
            }

            document.getElementById("aduan_tarikh").value = doc.aduan_tarikh;
            for(var j=0; j<doc.pengadu_kategori.length;j++){
                document.getElementById(doc.pengadu_kategori[j]).selected = "true";
            }

            for(var j=0; j<doc.pengadu_pengadu.length;j++){
                document.getElementById(doc.pengadu_pengadu[j]).selected = "true";
            }

            //document.getElementById("pengadu_pengadu").value = doc.pengadu_pengadu;
            document.getElementById("pengadu_nama").value = doc.pengadu_nama;
            document.getElementById("pengadu_norumah").value = doc.pengadu_norumah;
            document.getElementById("pengadu_namajalan").value = doc.pengadu_namajalan;
            document.getElementById("pengadu_namataman").value = doc.pengadu_namataman;
            document.getElementById("pengadu_poskod").value = doc.pengadu_poskod;
            document.getElementById("pengadu_bandar").value = doc.pengadu_bandar;
            document.getElementById("pengadu_negeri").value = doc.pengadu_negeri;
            document.getElementById("pengadu_notelefon").value = doc.pengadu_notelefon;
            document.getElementById("pengadu_faks").value = doc.pengadu_faks;

            for(var j=0; j<doc.pelaku_kategori.length;j++){
                document.getElementById(doc.pelaku_kategori[j] + "_" + doc.pelaku_kategori[j]).selected = "true";
            }
            //document.getElementById("pelaku_kategori").value = doc.pelaku_kategori;
            document.getElementById("pelaku_nama").value = doc.pelaku_nama;
            document.getElementById("pelaku_nokp").value = doc.pelaku_nokp;
            document.getElementById("pelaku_norumah").value = doc.pelaku_norumah;
            document.getElementById("pelaku_namajalan").value = doc.pelaku_namajalan;
            document.getElementById("pelaku_namataman").value = doc.pelaku_namataman;
            document.getElementById("pelaku_poskod").value = doc.pelaku_poskod;
            document.getElementById("pelaku_bandar").value = doc.pelaku_bandar;
            document.getElementById("pelaku_negeri").value = doc.pelaku_negeri;
            document.getElementById("pelaku_notelefon").value = doc.pelaku_notelefon;
            document.getElementById("pelaku_faks").value = doc.pelaku_faks;

            document.getElementById("laporan_tujuan").value = doc.laporan_tujuan;
            document.getElementById("laporan_kronologi").value = doc.laporan_kronologi;
            document.getElementById("laporan_hasil").value = doc.laporan_hasil;
            document.getElementById("laporan_pertimbangan").value = doc.laporan_pertimbangan;
            document.getElementById("laporan_cadangan").value = doc.laporan_cadangan;
            document.getElementById("laporan_kesimpulan").value = doc.laporan_kesimpulan;

            var tbody_gambar = "";

            for(var i=0; i<doc.laporan_caption.length; i++){
                tbody_gambar += "<tr> <td></td> <td>"+ doc.laporan_caption[i] +" <input type='hidden' value='"+ doc.laporan_caption[i] +"' name='keterangan_gambar_laporan' /> </td> <td><button class='table_delete_button' onclick='killRowGambar(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button></td> </tr>";
            }

            document.getElementById("table_body_gambar").innerHTML = tbody_gambar;

            document.getElementById("pengesahan_semak_nama_pegawai").value = doc.pengesahan_semak_nama_pegawai;
            document.getElementById("pengesahan_semak_jawatan").value = doc.pengesahan_semak_jawatan;
            document.getElementById("pengesahan_semak_bahagian").value = doc.pengesahan_semak_bahagian;
            document.getElementById("pengesahan_semak_tarikh").value = doc.pengesahan_semak_tarikh;
            document.getElementById("pengesahan_sah_nama_pegawai").value = doc.pengesahan_sah_nama_pegawai;
            document.getElementById("pengesahan_sah_jawatan").value = doc.pengesahan_sah_jawatan;
            document.getElementById("pengesahan_sah_bahagian").value = doc.pengesahan_sah_bahagian;
            document.getElementById("pengesahan_sah_tarikh").value = doc.pengesahan_sah_tarikh;

        }, 1000);
        

    });
    

function keepStorage(){

    var fail_rujukan = document.getElementById("utama_rujukan").value;
    var kategori_laporan = document.getElementById("utama_kategori").value;

    var utama_bahagian = document.getElementById("utama_bahagian").value;
    var utama_unit = document.getElementById("utama_unit").value;
    var utama_tarikhdari = document.getElementById("utama_tarikhdari").value;
    var utama_tarikhhingga = document.getElementById("utama_tarikhhingga").value;
    var utama_masadari = document.getElementById("utama_masadari").value;
    var utama_masahingga = document.getElementById("utama_masahingga").value;
    var tajuk = document.getElementById("utama_tajuk").value;

    var utama2_bahagian = document.getElementsByName("bahagian_pegawai_hadir"); 
    var bahagian_peg_hadir = [];
    utama2_bahagian.forEach(element => {
        bahagian_peg_hadir.push(element.value);
    });

    var utama2_unit = document.getElementsByName("unit_pegawai_hadir"); 
    var unit_peg_hadir = [];
    utama2_unit.forEach(element => {
        unit_peg_hadir.push(element.value);
    });

    var utama2_nama_pegawai = document.getElementsByName("nama_pegawai_hadir"); 
    var nama_peg_hadir = [];
    utama2_nama_pegawai.forEach(element => {
        nama_peg_hadir.push(element.value);
    });

    var utama2_jawatan = document.getElementsByName("jawatan_pegawai_hadir"); 
    var jawatan_peg_hadir = [];
    utama2_jawatan.forEach(element => {
        jawatan_peg_hadir.push(element.value);
    });

    var utama3_arahan = document.getElementById("utama3_arahan").value;
    var utama3_nama_pegawai = document.getElementById("utama3_nama_pegawai").value;
    var utama3_jawatan = document.getElementById("utama3_jawatan").value;
    var utama3_bahagian = document.getElementById("utama3_bahagian").value;
    var utama3_tarikh = document.getElementById("utama3_tarikh").value;

    var utama4_arahan = document.getElementById("utama4_arahan").value;
    var utama4_nama_pegawai = document.getElementById("utama4_nama_pegawai").value;
    var utama4_jawatan = document.getElementById("utama4_jawatan").value;
    var utama4_unit = document.getElementById("utama4_unit").value;
    var utama4_tarikh = document.getElementById("utama4_tarikh").value;

    //------------------------------------------aduan------------------------------------------------------

    var jenis_aduan = [];

    var j_a = document.getElementById("aduan_jenis");

    for (var i = 0; i < j_a.options.length; i++) {
        if(j_a.options[i].selected ==true){
            jenis_aduan.push(j_a.options[i].value);
        }
    }

    var sumber_air = document.getElementById("aduan_nama_sumber").value;

    //var tempat_kejadian = document.getElementById("aduan_tempat_kejadian").value;
    var tempat_kejadian = [];
    var t_k = document.getElementById("aduan_tempat_kejadian");
    for (var k = 0; k < t_k.options.length; k++) {
        if(t_k.options[k].selected ==true){
            tempat_kejadian.push(t_k.options[k].value);
        }
    }


    var aduan_sumber_terlibat = [];
    var s_a = document.getElementById("aduan_sumber_terlibat");
    for (var j = 0; j < s_a.options.length; j++) {
        if(s_a.options[j].selected ==true){
            aduan_sumber_terlibat.push(s_a.options[j].value);
        }
    }

    var aktiviti_utama = document.getElementById("aktiviti_utama").value;
    var sub_aktiviti = document.getElementById("sub_aktiviti").value;
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
    var aduan_lembangan = document.getElementById("aduan_lembangan").value;
    var aduan_sub = document.getElementById("aduan_sub").value;
    var aduan_ptd = document.getElementById("aduan_ptd").value;
    var aduan_pbt = document.getElementById("aduan_pbt").value;
    var aduan_mukim = document.getElementById("aduan_mukim").value;
    var aduan_no_lot = document.getElementById("aduan_no_lot").value;
    var aduan_gunatanah = document.getElementById("aduan_gunatanah").value;
    var kegunaan_air = document.getElementById("aduan_kegunaan_air").value;
    var aduan_aktiviti = document.getElementById("aduan_aktiviti").value;

    var aduan_mukasauk_terdekat = document.getElementsByName("muka_sauk"); 
    var muka_sauk_arr = [];
    aduan_mukasauk_terdekat.forEach(element => {
        muka_sauk_arr.push(element.value);
    });

    var aduan_mukasauk_no = document.getElementsByName("jarak_muka_sauk"); 
    var jarak_muka_sauk_arr = [];
    aduan_mukasauk_no.forEach(element => {
        jarak_muka_sauk_arr.push(element.value);
    });

    var aduan_loji_rawatan_terdekat = document.getElementsByName("loji_rawatan_air"); 
    var lra_arr = [];
    aduan_loji_rawatan_terdekat.forEach(element => {
        lra_arr.push(element.value);
    });

    var aduan_loji_rawatan_no = document.getElementsByName("jarak_loji_rawatan_air"); 
    var jarak_lra_arr = [];
    aduan_loji_rawatan_no.forEach(element => {
        jarak_lra_arr.push(element.value);
    });

    //------------------------------------------pengadu------------------------------------------------------

    var pengadu_rujukan = document.getElementById("pengadu_rujukan").value;

    //var pengadu_sumber = document.getElementById("pengadu_sumber").value;
    var pengadu_sumber = [];
    var p_s = document.getElementById("pengadu_sumber");

    for (var i = 0; i < p_s.options.length; i++) {
        if(p_s.options[i].selected ==true){
            pengadu_sumber.push(p_s.options[i].value);
        }
    }

    var aduan_tarikh = document.getElementById("aduan_tarikh").value;
    //var pengadu_kategori = document.getElementById("pengadu_kategori").value;
    var pengadu_kategori = [];
    var p_k = document.getElementById("pengadu_kategori");

    for (var i = 0; i < p_k.options.length; i++) {
        if(p_k.options[i].selected ==true){
            pengadu_kategori.push(p_k.options[i].value);
        }
    }


    var pengadu_pengadu = [];
    var p_p = document.getElementById("pengadu_pengadu");

    for (var i = 0; i < p_p.options.length; i++) {
        if(p_p.options[i].selected ==true){
            pengadu_pengadu.push(p_p.options[i].value);
        }
    }

    //var pengadu_pengadu = document.getElementById("pengadu_pengadu").value;
    var pengadu_nama = document.getElementById("pengadu_nama").value;
    var pengadu_norumah = document.getElementById("pengadu_norumah").value;
    var pengadu_namajalan = document.getElementById("pengadu_namajalan").value;
    var pengadu_namataman = document.getElementById("pengadu_namataman").value;
    var pengadu_poskod = document.getElementById("pengadu_poskod").value;
    var pengadu_bandar = document.getElementById("pengadu_bandar").value;
    var pengadu_negeri = document.getElementById("pengadu_negeri").value;
    var pengadu_notelefon = document.getElementById("pengadu_notelefon").value;
    var pengadu_faks = document.getElementById("pengadu_faks").value;

    //------------------------------------------pelaku------------------------------------------------------

    //var pelaku_kategori = document.getElementById("pelaku_kategori").value;

    var pelaku_kategori = [];
    var p_k2 = document.getElementById("pelaku_kategori");
    for(var l=0; l<p_k2.options.length; l++){
        if(p_k2.options[l].selected ==true){
            pelaku_kategori.push(p_k2.options[l].value);
        }
    }

    var pelaku_nama = document.getElementById("pelaku_nama").value;
    var pelaku_nokp = document.getElementById("pelaku_nokp").value;
    var pelaku_norumah = document.getElementById("pelaku_norumah").value;
    var pelaku_namajalan = document.getElementById("pelaku_namajalan").value;
    var pelaku_namataman = document.getElementById("pelaku_namataman").value;
    var pelaku_poskod = document.getElementById("pelaku_poskod").value;
    var pelaku_bandar = document.getElementById("pelaku_bandar").value;
    var pelaku_negeri = document.getElementById("pelaku_negeri").value;
    var pelaku_notelefon = document.getElementById("pelaku_notelefon").value;
    var pelaku_faks = document.getElementById("pelaku_faks").value;

    //------------------------------------------bertulis------------------------------------------------------

    var laporan_tujuan = document.getElementById("laporan_tujuan").value;
    var laporan_kronologi = document.getElementById("laporan_kronologi").value;
    var laporan_hasil = document.getElementById("laporan_hasil").value;
    var laporan_pertimbangan = document.getElementById("laporan_pertimbangan").value;
    var laporan_cadangan = document.getElementById("laporan_cadangan").value;
    var laporan_kesimpulan = document.getElementById("laporan_kesimpulan").value;

    var laporan_caption = document.getElementsByName("keterangan_gambar_laporan"); 
    var laporan_caption_arr = [];
    laporan_caption.forEach(element => {
        laporan_caption_arr.push(element.value);
    });

    //------------------------------------------pengesahan------------------------------------------------------

    var pengesahan_semak_nama_pegawai = document.getElementById("pengesahan_semak_nama_pegawai").value;
    var pengesahan_semak_jawatan = document.getElementById("pengesahan_semak_jawatan").value;
    var pengesahan_semak_bahagian = document.getElementById("pengesahan_semak_bahagian").value;
    var pengesahan_semak_tarikh = document.getElementById("pengesahan_semak_tarikh").value;
    var pengesahan_sah_nama_pegawai = document.getElementById("pengesahan_sah_nama_pegawai").value;
    var pengesahan_sah_jawatan = document.getElementById("pengesahan_sah_jawatan").value;
    var pengesahan_sah_bahagian = document.getElementById("pengesahan_sah_bahagian").value;
    var pengesahan_sah_tarikh = document.getElementById("pengesahan_sah_tarikh").value;

    var user_type = document.getElementById("user_type").value;


    db.get(url_id).then(function (doc) {
        // update the data
        doc._id = fail_rujukan;
        doc.sumber_air = sumber_air;
        doc.kategori_laporan = kategori_laporan;
        doc.jenis_aduan = jenis_aduan;
        doc.tempat_kejadian = tempat_kejadian;
        doc.user_type = user_type;

        doc.utama_bahagian = utama_bahagian;
        doc.utama_unit = utama_unit;
        doc.utama_tarikhdari = utama_tarikhdari;
        doc.utama_tarikhhingga = utama_tarikhhingga;
        doc.utama_masadari = utama_masadari;
        doc.utama_masahingga = utama_masahingga;
        doc.utama_tajuk = tajuk,
        doc.utama2_bahagian = bahagian_peg_hadir;
        doc.utama2_unit = unit_peg_hadir;
        doc.utama2_nama_pegawai = nama_peg_hadir;
        doc.utama2_jawatan = jawatan_peg_hadir;
        doc.utama3_arahan = utama3_arahan;
        doc.utama3_nama_pegawai = utama3_nama_pegawai;
        doc.utama3_jawatan = utama3_jawatan;
        doc.utama3_bahagian = utama3_bahagian;
        doc.utama3_tarikh = utama3_tarikh;
        doc.utama4_arahan = utama4_arahan;
        doc.utama4_nama_pegawai = utama4_nama_pegawai;
        doc.utama4_jawatan = utama4_jawatan;
        doc.utama4_unit = utama4_unit;
        doc.utama4_tarikh = utama4_tarikh;

        doc.aduan_sumber_terlibat = aduan_sumber_terlibat;
        doc.lat = lat;
        doc.lon = lon;
        doc.aduan_lembangan = aduan_lembangan;
        doc.aduan_sub = aduan_sub;
        doc.aduan_ptd = aduan_ptd;
        doc.aduan_pbt = aduan_pbt;
        doc.aduan_mukim = aduan_mukim;
        doc.aduan_no_lot = aduan_no_lot;
        doc.aduan_gunatanah = aduan_gunatanah;
        doc.aduan_mukasauk_terdekat = muka_sauk_arr;
        doc.aduan_mukasauk_no = jarak_muka_sauk_arr;
        doc.aduan_loji_rawatan_terdekat = lra_arr;
        doc.aduan_loji_rawatan_no = jarak_lra_arr;
        doc.aduan_kegunaan_air = kegunaan_air;
        doc.aduan_aktiviti = aduan_aktiviti;
        doc.aduan_aktiviti_utama = aktiviti_utama;
        doc.aduan_sub_aktiviti = sub_aktiviti;

        doc.pengadu_rujukan = pengadu_rujukan;
        doc.pengadu_sumber = pengadu_sumber;
        doc.aduan_tarikh = aduan_tarikh;
        doc.pengadu_kategori = pengadu_kategori;
        doc.pengadu_pengadu = pengadu_pengadu;
        doc.pengadu_nama = pengadu_nama;
        doc.pengadu_norumah = pengadu_norumah;
        doc.pengadu_namajalan = pengadu_namajalan;
        doc.pengadu_namataman = pengadu_namataman;
        doc.pengadu_poskod = pengadu_poskod;
        doc.pengadu_bandar = pengadu_bandar;
        doc.pengadu_negeri = pengadu_negeri;
        doc.pengadu_notelefon = pengadu_notelefon;
        doc.pengadu_faks = pengadu_faks;

        doc.pelaku_kategori = pelaku_kategori;
        doc.pelaku_nama = pelaku_nama;
        doc.pelaku_nokp = pelaku_nokp;
        doc.pelaku_norumah = pelaku_norumah;
        doc.pelaku_namajalan = pelaku_namajalan;
        doc.pelaku_namataman = pelaku_namataman;
        doc.pelaku_poskod = pelaku_poskod;
        doc.pelaku_bandar = pelaku_bandar;
        doc.pelaku_negeri = pelaku_negeri;
        doc.pelaku_notelefon = pelaku_notelefon;
        doc.pelaku_faks = pelaku_faks;

        doc.laporan_tujuan = laporan_tujuan;
        doc.laporan_kronologi = laporan_kronologi;
        doc.laporan_hasil = laporan_hasil;
        doc.laporan_pertimbangan = laporan_pertimbangan;
        doc.laporan_cadangan = laporan_cadangan;
        doc.laporan_kesimpulan = laporan_kesimpulan;
        doc.laporan_caption = laporan_caption_arr;

        doc.pengesahan_semak_nama_pegawai = pengesahan_semak_nama_pegawai;
        doc.pengesahan_semak_jawatan = pengesahan_semak_jawatan;
        doc.pengesahan_semak_bahagian = pengesahan_semak_bahagian;
        doc.pengesahan_semak_tarikh = pengesahan_semak_tarikh;
        doc.pengesahan_sah_nama_pegawai = pengesahan_sah_nama_pegawai;
        doc.pengesahan_sah_jawatan = pengesahan_sah_jawatan;
        doc.pengesahan_sah_bahagian = pengesahan_sah_bahagian;
        doc.pengesahan_sah_tarikh = pengesahan_sah_tarikh;

        // put them back
        return db.put(doc);
      }).then(function () {
        // fetch data again
        //return db.get(url_id);
        window.location.href = "status_report.html";
      });

}

function logOut(){
    localStorage.removeItem("no_ic"); 
    window.location.href = "index.html";
}


//----------------------------------------TABLE---------------------------------------------//

function addMukaSauk(){

    var x = document.getElementById("aduan_mukasauk_no").value;
    var y = document.getElementById("aduan_mukasauk_no"); 

    if(x == ""){
        y.style.border = '2px solid coral';
    }

    else{

        y.style.border = '1px solid #ccc';

        var table = document.getElementById("aduan_table_mukasauk");
        var mukasauk_terdekat = document.getElementById("aduan_mukasauk_terdekat").value;
        var mukasauk_no = document.getElementById("aduan_mukasauk_no").value;

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = mukasauk_terdekat;
        cell2.innerHTML = mukasauk_no;
        cell3.innerHTML = "<button class='table_delete_button' onclick='killRowMukaSauk(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button>";
    }
}

function addLRA(){

    var x = document.getElementById("aduan_loji_rawatan_no").value;
    var y = document.getElementById("aduan_loji_rawatan_no"); 

    if(x == ""){
        y.style.border = '2px solid coral';
    }

    else{

        y.style.border = '1px solid #ccc';

        var table = document.getElementById("aduan_table_lra");
        var lra_terdekat = document.getElementById("aduan_loji_rawatan_terdekat").value;
        var lra_no = document.getElementById("aduan_loji_rawatan_no").value;

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = lra_terdekat;
        cell2.innerHTML = lra_no;
        cell3.innerHTML = "<button class='table_delete_button' onclick='killRowLRA(this)'> <i class='fa fa-trash' style='font-size:18px;color:white;'></i></button>";
    }
}

function addPegawai(){
    var table = document.getElementById("utama_table_pegawai");
    var utama2_bahagian = document.getElementById("utama2_bahagian").value;
    var utama2_unit = document.getElementById("utama2_unit").value;
    var utama2_nama_pegawai = document.getElementById("utama2_nama_pegawai").value;
    var utama2_jawatan = document.getElementById("utama2_jawatan").value;

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = utama2_bahagian;
    cell2.innerHTML = utama2_unit;
    cell3.innerHTML = utama2_nama_pegawai;
    cell4.innerHTML = utama2_jawatan;
    cell5.innerHTML = "<button class='table_delete_button' onclick='killRowPegawai(this)'><i class='fa fa-trash' style='font-size:18px;color:white;'></i></button>";
}

var gambar_click = 0;

function addGambar(){

    var x = document.getElementById("laporan_caption").value;
    var y = document.getElementById("laporan_caption"); 

    if(x == ""){
        y.style.border = '2px solid coral';
    }

    else{

        gambar_click++;

        y.style.border = '1px solid #ccc';

        var table = document.getElementById("laporan_gambar_table");
        var caption = document.getElementById("laporan_caption").value;

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = "<img id='preview"+ gambar_click +"' style='max-width:200px;max-height:200px;' /> <div style='display:none' class='img_here"+ gambar_click +"'></div>";
        cell2.innerHTML = caption + "<input type='hidden' value='"+ caption +"' name='keterangan_gambar_laporan'/>";
        cell3.innerHTML = "<button class='table_delete_button' onclick='killRowGambar(this)'> <i class='fa fa-trash' style='font-size:18px;color:white;'></i></button>";

        $(document).ready(function(){
            $("#img_this").clone().appendTo(".img_here"+gambar_click);
        });

        var files = $('.fileToUpload')[0].files[0];
        document.getElementById('preview'+ gambar_click).src = window.URL.createObjectURL(files)

        document.getElementById("laporan_caption").value = "";

    }
}

function killRowPegawai(){
  
    var index, table = document.getElementById("utama_table_pegawai");
    
      for(var i=0; i<table.rows.length; i++)
      {
        table.rows[i].cells[4].onclick = function()
            {
              index = this.parentElement.rowIndex;
              table.deleteRow(index);
            };
      }
}

function killRowLRA(){
  
    var index, table = document.getElementById("aduan_table_lra");
    
      for(var i=0; i<table.rows.length; i++)
      {
        table.rows[i].cells[2].onclick = function()
            {
              index = this.parentElement.rowIndex;
              table.deleteRow(index);
            };
      }
}

function killRowMukaSauk(){
  
    var index, table = document.getElementById("aduan_table_mukasauk");
    
      for(var i=0; i<table.rows.length; i++)
      {
        table.rows[i].cells[2].onclick = function()
            {
              index = this.parentElement.rowIndex;
              table.deleteRow(index);
            };
      }
}

function killRowGambar(){
  
    var index, table = document.getElementById("laporan_gambar_table");
    
      for(var i=0; i<table.rows.length; i++)
      {
        table.rows[i].cells[2].onclick = function()
            {
              index = this.parentElement.rowIndex;
              table.deleteRow(index);
            };
      }
}


//--------------------------------------FORM-----------------------------------------------//

$("#laporan_tujuan").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});

$("#laporan_kronologi").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});

$("#laporan_hasil").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});

$("#laporan_pertimbangan").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});

$("#laporan_cadangan").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});

$("#laporan_kesimpulan").keyup(function(event) {
    if(event.which != 13)
        return;
    var elm = $(this);
    var lines = elm.val().split("\n");
    for(var i=0; i<lines.length; i++)
        lines[i] = lines[i].replace(/(\d+\.\s|^)/, (i+1) + ". ");
    elm.val(lines.join("\n"));
});


//---------------------------------BADGE-----------------------------------------//


var db = new PouchDB('luas');

    db.allDocs({
        include_docs: true,
        attachments: true
    }).then(function (result) {

        if(result.total_rows>0){

            for(var i=0;i<result.total_rows;i++){

                var lab = document.createElement("LABEL");

                lab.innerHTML = "<label>"+ result.rows[i].doc._id +"<br>"+ result.rows[i].doc.current_date +"</label> <label style='background-color: orange;color: white; float: right;'>Pending</label> <hr>";
                document.getElementById("noti_list").appendChild(lab);

                var badge = document.createElement("SPAN");
                badge.className = 'badge';

                badge.innerHTML = result.total_rows;

                document.getElementById("noti_badge").appendChild(badge);
            }
        }

        else{
            
        }
    
    }).catch(function (err) { console.log(err); });





//---------------------------------Filter Select Option-----------------------------------------//

setTimeout(function(){ 

    $('#utama_bahagian').on('change', function(e) {
        //let selector = $(this).val();
        let selector = $('select[name="bahagian"] option:selected').attr('class');

        $("#utama_unit > option").hide();
        $("#utama_unit > option").filter(function(){return $(this).data('pub') == selector}).show();
    });

    $('#utama2_bahagian').on('change', function(e) {
        let selector2 = $('select[name="utama2_bahagian"] option:selected').attr('class');

        $("#utama2_unit > option").hide();
        $("#utama2_unit > option").filter(function(){return $(this).data('pub') == selector2}).show();

        $( "#utama2_unit" ).append( "<option value='Tidak Berkaitan'>Tidak Berkaitan</option>" );
    });

    $('#utama2_nama_pegawai').on('change', function(e) {
        let selector3 = $('select[name="utama2_nama_pegawai"] option:selected').attr('class');

        $("#utama2_jawatan > option").hide();
        $("#utama2_jawatan > option").filter(function(){return $(this).data('pub') == selector3}).show();
    });

    $('#pengesahan_semak_nama_pegawai').on('change', function(e) {
        let selector4 = $('select[name="nama_pegawai_semak"] option:selected').attr('class');

        $("#pengesahan_semak_jawatan > option").hide();
        $("#pengesahan_semak_jawatan > option").filter(function(){return $(this).data('pub') == selector4}).show();
    });

    $('#pengesahan_sah_nama_pegawai').on('change', function(e) {
        let selector5 = $('select[name="nama_pegawai_sah"] option:selected').attr('class');

        $("#pengesahan_sah_jawatan > option").hide();
        $("#pengesahan_sah_jawatan > option").filter(function(){return $(this).data('pub') == selector5}).show();
    });


    $('#utama3_nama_pegawai').on('change', function(e) {
        let selector6 = $('select[name="KU_nama_pegawai"] option:selected').attr('class');

        $("#utama3_jawatan > option").hide();
        $("#utama3_jawatan > option").filter(function(){return $(this).data('pub') == selector6}).show();
    });

    $('#utama4_nama_pegawai').on('change', function(e) {
        let selector7 = $('select[name="KB_nama_pegawai"] option:selected').attr('class');

        $("#utama4_jawatan > option").hide();
        $("#utama4_jawatan > option").filter(function(){return $(this).data('pub') == selector7}).show();
    });

}, 1000);










// $(function(){
//     $("#form_id").submit(function(e) {
//         e.preventDefault();
//     });

//     $('#submit_btn').click(function() {

//         var fail_rujukan = document.getElementById("utama_rujukan").value;
//         var kategori_laporan = document.getElementById("utama_kategori").value;

//         var utama_bahagian = document.getElementById("utama_bahagian").value;
//         var utama_unit = document.getElementById("utama_unit").value;
//         var utama_tarikhdari = document.getElementById("utama_tarikhdari").value;
//         var utama_tarikhhingga = document.getElementById("utama_tarikhhingga").value;
//         var utama_masadari = document.getElementById("utama_masadari").value;
//         var utama_masahingga = document.getElementById("utama_masahingga").value;
//         var tajuk = document.getElementById("utama_tajuk").value;

//         var utama2_bahagian = document.getElementsByName("bahagian_pegawai_hadir"); 
//         var bahagian_peg_hadir = [];
//         utama2_bahagian.forEach(element => {
//             bahagian_peg_hadir.push(element.value);
//         });

//         var utama2_unit = document.getElementsByName("unit_pegawai_hadir"); 
//         var unit_peg_hadir = [];
//         utama2_unit.forEach(element => {
//             unit_peg_hadir.push(element.value);
//         });

//         var utama2_nama_pegawai = document.getElementsByName("nama_pegawai_hadir"); 
//         var nama_peg_hadir = [];
//         utama2_nama_pegawai.forEach(element => {
//             nama_peg_hadir.push(element.value);
//         });

//         var utama2_jawatan = document.getElementsByName("jawatan_pegawai_hadir"); 
//         var jawatan_peg_hadir = [];
//         utama2_jawatan.forEach(element => {
//             jawatan_peg_hadir.push(element.value);
//         });

//         var utama3_arahan = document.getElementById("utama3_arahan").value;
//         var utama3_nama_pegawai = document.getElementById("utama3_nama_pegawai").value;
//         var utama3_jawatan = document.getElementById("utama3_jawatan").value;
//         var utama3_bahagian = document.getElementById("utama3_bahagian").value;
//         var utama3_tarikh = document.getElementById("utama3_tarikh").value;

//         var utama4_arahan = document.getElementById("utama4_arahan").value;
//         var utama4_nama_pegawai = document.getElementById("utama4_nama_pegawai").value;
//         var utama4_jawatan = document.getElementById("utama4_jawatan").value;
//         var utama4_unit = document.getElementById("utama4_unit").value;
//         var utama4_tarikh = document.getElementById("utama4_tarikh").value;

//         //------------------------------------------aduan------------------------------------------------------

//         var jenis_aduan = [];

//         var j_a = document.getElementById("aduan_jenis");

//         for (var i = 0; i < j_a.options.length; i++) {
//             if(j_a.options[i].selected ==true){
//                 jenis_aduan.push(j_a.options[i].value);
//             }
//         }

//         var sumber_air = document.getElementById("aduan_nama_sumber").value;

//         //var tempat_kejadian = document.getElementById("aduan_tempat_kejadian").value;
//         var tempat_kejadian = [];
//         var t_k = document.getElementById("aduan_tempat_kejadian");
//         for (var k = 0; k < t_k.options.length; k++) {
//             if(t_k.options[k].selected ==true){
//                 tempat_kejadian.push(t_k.options[k].value);
//             }
//         }


//         var aduan_sumber_terlibat = [];
//         var s_a = document.getElementById("aduan_sumber_terlibat");
//         for (var j = 0; j < s_a.options.length; j++) {
//             if(s_a.options[j].selected ==true){
//                 aduan_sumber_terlibat.push(s_a.options[j].value);
//             }
//         }

//         var aktiviti_utama = document.getElementById("aktiviti_utama").value;
//         var sub_aktiviti = document.getElementById("sub_aktiviti").value;
//         var lat = document.getElementById("lat").value;
//         var lon = document.getElementById("lon").value;
//         var aduan_lembangan = document.getElementById("aduan_lembangan").value;
//         var aduan_sub = document.getElementById("aduan_sub").value;
//         var aduan_ptd = document.getElementById("aduan_ptd").value;
//         var aduan_pbt = document.getElementById("aduan_pbt").value;
//         var aduan_mukim = document.getElementById("aduan_mukim").value;
//         var aduan_no_lot = document.getElementById("aduan_no_lot").value;
//         var aduan_gunatanah = document.getElementById("aduan_gunatanah").value;
//         var kegunaan_air = document.getElementById("aduan_kegunaan_air").value;
//         var aduan_aktiviti = document.getElementById("aduan_aktiviti").value;

//         var aduan_mukasauk_terdekat = document.getElementsByName("muka_sauk"); 
//         var muka_sauk_arr = [];
//         aduan_mukasauk_terdekat.forEach(element => {
//             muka_sauk_arr.push(element.value);
//         });

//         var aduan_mukasauk_no = document.getElementsByName("jarak_muka_sauk"); 
//         var jarak_muka_sauk_arr = [];
//         aduan_mukasauk_no.forEach(element => {
//             jarak_muka_sauk_arr.push(element.value);
//         });

//         var aduan_loji_rawatan_terdekat = document.getElementsByName("loji_rawatan_air"); 
//         var lra_arr = [];
//         aduan_loji_rawatan_terdekat.forEach(element => {
//             lra_arr.push(element.value);
//         });

//         var aduan_loji_rawatan_no = document.getElementsByName("jarak_loji_rawatan_air"); 
//         var jarak_lra_arr = [];
//         aduan_loji_rawatan_no.forEach(element => {
//             jarak_lra_arr.push(element.value);
//         });

//         //------------------------------------------pengadu------------------------------------------------------

//         var pengadu_rujukan = document.getElementById("pengadu_rujukan").value;

//         //var pengadu_sumber = document.getElementById("pengadu_sumber").value;
//         var pengadu_sumber = [];
//         var p_s = document.getElementById("pengadu_sumber");

//         for (var i = 0; i < p_s.options.length; i++) {
//             if(p_s.options[i].selected ==true){
//                 pengadu_sumber.push(p_s.options[i].value);
//             }
//         }

//         var aduan_tarikh = document.getElementById("aduan_tarikh").value;
//         //var pengadu_kategori = document.getElementById("pengadu_kategori").value;
//         var pengadu_kategori = [];
//         var p_k = document.getElementById("pengadu_kategori");

//         for (var i = 0; i < p_k.options.length; i++) {
//             if(p_k.options[i].selected ==true){
//                 pengadu_kategori.push(p_k.options[i].value);
//             }
//         }


//         var pengadu_pengadu = [];
//         var p_p = document.getElementById("pengadu_pengadu");

//         for (var i = 0; i < p_p.options.length; i++) {
//             if(p_p.options[i].selected ==true){
//                 pengadu_pengadu.push(p_p.options[i].value);
//             }
//         }

//         //var pengadu_pengadu = document.getElementById("pengadu_pengadu").value;
//         var pengadu_nama = document.getElementById("pengadu_nama").value;
//         var pengadu_norumah = document.getElementById("pengadu_norumah").value;
//         var pengadu_namajalan = document.getElementById("pengadu_namajalan").value;
//         var pengadu_namataman = document.getElementById("pengadu_namataman").value;
//         var pengadu_poskod = document.getElementById("pengadu_poskod").value;
//         var pengadu_bandar = document.getElementById("pengadu_bandar").value;
//         var pengadu_negeri = document.getElementById("pengadu_negeri").value;
//         var pengadu_notelefon = document.getElementById("pengadu_notelefon").value;
//         var pengadu_faks = document.getElementById("pengadu_faks").value;

//         //------------------------------------------pelaku------------------------------------------------------

//         //var pelaku_kategori = document.getElementById("pelaku_kategori").value;

//         var pelaku_kategori = [];
//         var p_k2 = document.getElementById("pelaku_kategori");
//         for(var l=0; l<p_k2.options.length; l++){
//             if(p_k2.options[l].selected ==true){
//                 pelaku_kategori.push(p_k2.options[l].value);
//             }
//         }

//         var pelaku_nama = document.getElementById("pelaku_nama").value;
//         var pelaku_nokp = document.getElementById("pelaku_nokp").value;
//         var pelaku_norumah = document.getElementById("pelaku_norumah").value;
//         var pelaku_namajalan = document.getElementById("pelaku_namajalan").value;
//         var pelaku_namataman = document.getElementById("pelaku_namataman").value;
//         var pelaku_poskod = document.getElementById("pelaku_poskod").value;
//         var pelaku_bandar = document.getElementById("pelaku_bandar").value;
//         var pelaku_negeri = document.getElementById("pelaku_negeri").value;
//         var pelaku_notelefon = document.getElementById("pelaku_notelefon").value;
//         var pelaku_faks = document.getElementById("pelaku_faks").value;

//         //------------------------------------------bertulis------------------------------------------------------

//         var laporan_tujuan = document.getElementById("laporan_tujuan").value;
//         var laporan_kronologi = document.getElementById("laporan_kronologi").value;
//         var laporan_hasil = document.getElementById("laporan_hasil").value;
//         var laporan_pertimbangan = document.getElementById("laporan_pertimbangan").value;
//         var laporan_cadangan = document.getElementById("laporan_cadangan").value;
//         var laporan_kesimpulan = document.getElementById("laporan_kesimpulan").value;
//         var laporan_caption = document.getElementById("laporan_caption").value;

//         //------------------------------------------pengesahan------------------------------------------------------

//         var pengesahan_semak_nama_pegawai = document.getElementById("pengesahan_semak_nama_pegawai").value;
//         var pengesahan_semak_jawatan = document.getElementById("pengesahan_semak_jawatan").value;
//         var pengesahan_semak_bahagian = document.getElementById("pengesahan_semak_bahagian").value;
//         var pengesahan_semak_tarikh = document.getElementById("pengesahan_semak_tarikh").value;
//         var pengesahan_sah_nama_pegawai = document.getElementById("pengesahan_sah_nama_pegawai").value;
//         var pengesahan_sah_jawatan = document.getElementById("pengesahan_sah_jawatan").value;
//         var pengesahan_sah_bahagian = document.getElementById("pengesahan_sah_bahagian").value;
//         var pengesahan_sah_tarikh = document.getElementById("pengesahan_sah_tarikh").value;

//         var user_type = document.getElementById("user_type").value;


//         db.get(url_id).then(function (doc) {
//             // update the data
//             doc._id = fail_rujukan;
//             doc.sumber_air = sumber_air;
//             doc.kategori_laporan = kategori_laporan;
//             doc.jenis_aduan = jenis_aduan;
//             doc.tempat_kejadian = tempat_kejadian;
//             doc.user_type = user_type;

//             doc.utama_bahagian = utama_bahagian;
//             doc.utama_unit = utama_unit;
//             doc.utama_tarikhdari = utama_tarikhdari;
//             doc.utama_tarikhhingga = utama_tarikhhingga;
//             doc.utama_masadari = utama_masadari;
//             doc.utama_masahingga = utama_masahingga;
//             doc.utama_tajuk = tajuk,
//             doc.utama2_bahagian = bahagian_peg_hadir;
//             doc.utama2_unit = unit_peg_hadir;
//             doc.utama2_nama_pegawai = nama_peg_hadir;
//             doc.utama2_jawatan = jawatan_peg_hadir;
//             doc.utama3_arahan = utama3_arahan;
//             doc.utama3_nama_pegawai = utama3_nama_pegawai;
//             doc.utama3_jawatan = utama3_jawatan;
//             doc.utama3_bahagian = utama3_bahagian;
//             doc.utama3_tarikh = utama3_tarikh;
//             doc.utama4_arahan = utama4_arahan;
//             doc.utama4_nama_pegawai = utama4_nama_pegawai;
//             doc.utama4_jawatan = utama4_jawatan;
//             doc.utama4_unit = utama4_unit;
//             doc.utama4_tarikh = utama4_tarikh;

//             doc.aduan_sumber_terlibat = aduan_sumber_terlibat;
//             doc.lat = lat;
//             doc.lon = lon;
//             doc.aduan_lembangan = aduan_lembangan;
//             doc.aduan_sub = aduan_sub;
//             doc.aduan_ptd = aduan_ptd;
//             doc.aduan_pbt = aduan_pbt;
//             doc.aduan_mukim = aduan_mukim;
//             doc.aduan_no_lot = aduan_no_lot;
//             doc.aduan_gunatanah = aduan_gunatanah;
//             doc.aduan_mukasauk_terdekat = muka_sauk_arr;
//             doc.aduan_mukasauk_no = jarak_muka_sauk_arr;
//             doc.aduan_loji_rawatan_terdekat = lra_arr;
//             doc.aduan_loji_rawatan_no = jarak_lra_arr;
//             doc.aduan_kegunaan_air = kegunaan_air;
//             doc.aduan_aktiviti = aduan_aktiviti;
//             doc.aduan_aktiviti_utama = aktiviti_utama;
//             doc.aduan_sub_aktiviti = sub_aktiviti;

//             doc.pengadu_rujukan = pengadu_rujukan;
//             doc.pengadu_sumber = pengadu_sumber;
//             doc.aduan_tarikh = aduan_tarikh;
//             doc.pengadu_kategori = pengadu_kategori;
//             doc.pengadu_pengadu = pengadu_pengadu;
//             doc.pengadu_nama = pengadu_nama;
//             doc.pengadu_norumah = pengadu_norumah;
//             doc.pengadu_namajalan = pengadu_namajalan;
//             doc.pengadu_namataman = pengadu_namataman;
//             doc.pengadu_poskod = pengadu_poskod;
//             doc.pengadu_bandar = pengadu_bandar;
//             doc.pengadu_negeri = pengadu_negeri;
//             doc.pengadu_notelefon = pengadu_notelefon;
//             doc.pengadu_faks = pengadu_faks;

//             doc.pelaku_kategori = pelaku_kategori;
//             doc.pelaku_nama = pelaku_nama;
//             doc.pelaku_nokp = pelaku_nokp;
//             doc.pelaku_norumah = pelaku_norumah;
//             doc.pelaku_namajalan = pelaku_namajalan;
//             doc.pelaku_namataman = pelaku_namataman;
//             doc.pelaku_poskod = pelaku_poskod;
//             doc.pelaku_bandar = pelaku_bandar;
//             doc.pelaku_negeri = pelaku_negeri;
//             doc.pelaku_notelefon = pelaku_notelefon;
//             doc.pelaku_faks = pelaku_faks;

//             doc.laporan_tujuan = laporan_tujuan;
//             doc.laporan_kronologi = laporan_kronologi;
//             doc.laporan_hasil = laporan_hasil;
//             doc.laporan_pertimbangan = laporan_pertimbangan;
//             doc.laporan_cadangan = laporan_cadangan;
//             doc.laporan_kesimpulan = laporan_kesimpulan;
//             doc.laporan_caption = laporan_caption;

//             doc.pengesahan_semak_nama_pegawai = pengesahan_semak_nama_pegawai;
//             doc.pengesahan_semak_jawatan = pengesahan_semak_jawatan;
//             doc.pengesahan_semak_bahagian = pengesahan_semak_bahagian;
//             doc.pengesahan_semak_tarikh = pengesahan_semak_tarikh;
//             doc.pengesahan_sah_nama_pegawai = pengesahan_sah_nama_pegawai;
//             doc.pengesahan_sah_jawatan = pengesahan_sah_jawatan;
//             doc.pengesahan_sah_bahagian = pengesahan_sah_bahagian;
//             doc.pengesahan_sah_tarikh = pengesahan_sah_tarikh;

//             // put them back
//             return db.put(doc);
//           }).then(function () {
//             // fetch data again
//             //return db.get(url_id);
//             window.location.href = "status_report.html";
//           });
//     });
// });
