window.onload = function(){
    onlineCheck();
    loadLocation();
}

function onlineCheck(){

    //------------offline mode---------------//
    if(navigator.onLine === false){

        document.getElementById("alert").style.display = "block";
        document.getElementById("offline_btn").style.display = "block";
        document.getElementById("submit_btn").style.display = "none";

        offline_API();
        offline_Filter();
    }

    //------------online mode---------------//
    else{

        loadAPI_Bahagian();
        loadAPI_Unit();
        loadAPI_Bahagian_pegawai();
        loadAPI_Pegawai_all();
        loadAPI_Lembangan();
        loadAPI_Sub();
        loadAPI_PTD();
        loadAPI_PBT();
        loadAPI_Mukim();
        loadAPI_Gunatanah();
        loadAPI_KategoriLaporan();
        loadAPI_JenisAduan();
        loadAPI_SumberAirTerlibat();
        loadAPI_TempatKejadian();
        loadAPI_MukaSauk();
        loadAPI_LRA();
        loadAPI_SumberAduan();
        loadAPI_KategoriAduan();
        loadAPI_JenisPengadu();
        loadAPI_Jawatan();
        loadAPI_Aktiviti();
        loadAPI_Premis();
        loadAPI_Pegawai_Pengesahan();
        loadAPI_Aktiviti_Utama();
        loadAPI_Sub_Aktiviti();
    }
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
    //document.getElementById("utama4_unit").innerHTML = unit2;

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

    var jenis_aktiviti = localStorage.getItem("jenis_aktiviti");
    document.getElementById("aduan_aktiviti").innerHTML = jenis_aktiviti;

    var status_premis = localStorage.getItem("status_premis");
    document.getElementById("aduan_status_premis").innerHTML = status_premis;

    var pegawai_pengesahan = localStorage.getItem("pegawai_pengesahan");
    document.getElementById("pengesahan_semak_nama_pegawai").innerHTML = pegawai_pengesahan;
    document.getElementById("pengesahan_sah_nama_pegawai").innerHTML = pegawai_pengesahan;

    var jawatan = localStorage.getItem("jawatan");
    document.getElementById("utama2_jawatan").innerHTML = jawatan;
    document.getElementById("utama3_jawatan").innerHTML = jawatan;
    document.getElementById("utama4_jawatan").innerHTML = jawatan;
    document.getElementById("pengesahan_semak_jawatan").innerHTML = jawatan;
    document.getElementById("pengesahan_sah_jawatan").innerHTML = jawatan;

    var aktiviti_utama = localStorage.getItem("aktiviti_utama");
    document.getElementById("aktiviti_utama").innerHTML = aktiviti_utama;

    var sub_aktiviti = localStorage.getItem("sub_aktiviti");
    document.getElementById("sub_aktiviti").innerHTML = sub_aktiviti;
}

function loadLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(loadPosition);
    } else { 
        alert("Geolocation is not supported by this device.");
    }
  
}

function loadPosition(position) {
    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("lon").value = position.coords.longitude;
}


var baseUrl_Bahagian = "http://175.136.253.77:8181/api/bahagian/all";
var baseUrl_Unit = "http://175.136.253.77:8181/api/unit/all";
var baseUrl_Bahagian_pegawai = "http://175.136.253.77:8181/api/bahagian/pegawai/all";
var baseUrl_Pegawai_all = "http://175.136.253.77:8181/api/pegawai/a/all";
var baseUrl_Lembangan = "http://175.136.253.77:8181/api/lembangan/all";
var baseUrl_Sub = "http://175.136.253.77:8181/api/sub/all";
var baseUrl_PTD = "http://175.136.253.77:8181/api/ptd/all";
var baseUrl_PBT = "http://175.136.253.77:8181/api/pbt/all";
var baseUrl_Mukim = "http://175.136.253.77:8181/api/mukim/all";
var baseUrl_Gunatanah = "http://175.136.253.77:8181/api/gunatanah/all";
var baseUrl_Jawatan = "http://175.136.253.77:8181/api/jawatan/all";
var baseUrl_JenisAduan = "http://175.136.253.77:8181/api/jenisaduan/all";
var baseUrl_SumberAir = "http://175.136.253.77:8181/api/sumberair/all";
var baseUrl_TempatKejadian = "http://175.136.253.77:8181/api/tempatkejadian/all";
var baseUrl_MukaSauk = "http://175.136.253.77:8181/api/mukasauk/all";
var baseUrl_LRA = "http://175.136.253.77:8181/api/lra/all";
var baseUrl_SumberAduan = "http://175.136.253.77:8181/api/sumberaduan/all";
var baseUrl_KategoriAduan = "http://175.136.253.77:8181/api/kategoriaduan/all";
var baseUrl_JenisPengadu = "http://175.136.253.77:8181/api/jenispengadu/all";
var baseUrl_KategoriLaporan = "http://175.136.253.77:8181/api/kategorilaporan/all";
var baseUrl_Aktiviti = "http://175.136.253.77:8181/api/kategoriaktiviti/all";
var baseUrl_Premis = "http://175.136.253.77:8181/api/statuspremis/all";
var baseUrl_PegawaiPengesahan = "http://175.136.253.77:8181/api/pegawaipengesahan";
var baseUrl_AktivitiUtama = "http://175.136.253.77:8181/api/aktivitirekod/1";
var baseUrl_SubAktiviti = "http://175.136.253.77:8181/api/subaktivitirekod/1";


function loadAPI_Bahagian(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Bahagian ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var bahagian_api = JSON.parse(xmlhttp.responseText);

            var bahagian="";
            //var bahagian="<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<bahagian_api.length; i++) {
                bahagian += '<option value="'+ bahagian_api[i].id_bahagian +'" class="'+ bahagian_api[i].id_bahagian +'">' + bahagian_api[i].bahagian +'</option>';
            }

            document.getElementById("utama_bahagian").innerHTML = bahagian;
            localStorage.setItem("bahagian", bahagian);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Unit(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Unit ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var unit_api = JSON.parse(xmlhttp.responseText);

            var unit="";
            var unit2 = "";

            for (var i=0; i<unit_api.length; i++) {
            
                unit += '<option value="'+ unit_api[i].id_unit +'" data-pub="'+ unit_api[i].id_bahagian +'">' + unit_api[i].unit +'</option>';
                unit2 += '<option value="'+ unit_api[i].unit +'" data-pub="'+ unit_api[i].id_bahagian +'" class="'+ unit_api[i].id_bahagian +'">' + unit_api[i].unit +'</option>';
            }

            unit2 += '<option value="Tidak Berkaitan">Tidak Berkaitan</option>';

            document.getElementById("utama_unit").innerHTML = unit;
            document.getElementById("utama2_unit").innerHTML = unit2;
            document.getElementById("utama3_bahagian").innerHTML = unit2;
            //document.getElementById("utama4_unit").innerHTML = unit2;
            localStorage.setItem("unit", unit);
            localStorage.setItem("unit2", unit2);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Bahagian_pegawai(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Bahagian_pegawai ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var bahagian_pegawai_api = JSON.parse(xmlhttp.responseText);

            var bahagianP="";

            for (var i=0; i<bahagian_pegawai_api.length; i++) {
                bahagianP += '<option value="'+ bahagian_pegawai_api[i].bahagian +'" class="'+ bahagian_pegawai_api[i].id_bahagian +'">' + bahagian_pegawai_api[i].bahagian + '</option>';
            }

            document.getElementById("utama2_bahagian").innerHTML = bahagianP;
            document.getElementById("utama4_unit").innerHTML = bahagianP;
            document.getElementById("pengesahan_semak_bahagian").innerHTML = bahagianP;
            document.getElementById("pengesahan_sah_bahagian").innerHTML = bahagianP;
            localStorage.setItem("bahagianP", bahagianP);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Pegawai_all(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Pegawai_all ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pegawai_all_api = JSON.parse(xmlhttp.responseText);

            var nama_pegawai="";
            var nama_pegawai2="";
            // var nama_pegawai="<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<pegawai_all_api.length; i++) {
                nama_pegawai += '<option value="'+ pegawai_all_api[i].nama +'" class="'+ pegawai_all_api[i].id_jawatan +'" data-pub="'+ pegawai_all_api[i].id_bahagian +'">'+ pegawai_all_api[i].nama +'</option>';
                nama_pegawai2 += '<option value="'+ pegawai_all_api[i].id +'" class="'+ pegawai_all_api[i].id_jawatan +'" data-pub="'+ pegawai_all_api[i].id_bahagian +'">'+ pegawai_all_api[i].nama +'</option>';
            }

            document.getElementById("utama2_nama_pegawai").innerHTML = nama_pegawai;
            document.getElementById("utama3_nama_pegawai").innerHTML = nama_pegawai2;
            document.getElementById("utama4_nama_pegawai").innerHTML = nama_pegawai2;

            localStorage.setItem("nama", nama_pegawai);
            localStorage.setItem("nama2", nama_pegawai2);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Jawatan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Jawatan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jawatan_api = JSON.parse(xmlhttp.responseText);

            var nama_jawatan="";
            // var nama_jawatan="<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<jawatan_api.length; i++) {
                if(jawatan_api[i].id_jawatan == 2){
                    nama_jawatan += '<option value="'+ jawatan_api[i].jawatan +'" data-pub="'+ jawatan_api[i].id_jawatan +'" selected>' + jawatan_api[i].jawatan + '</option>';
                }

                else{
                    nama_jawatan += '<option value="'+ jawatan_api[i].jawatan +'" data-pub="'+ jawatan_api[i].id_jawatan +'">' + jawatan_api[i].jawatan + '</option>';
                }
                
            }

            document.getElementById("utama2_jawatan").innerHTML = nama_jawatan;
            document.getElementById("utama3_jawatan").innerHTML = nama_jawatan;
            document.getElementById("utama4_jawatan").innerHTML = nama_jawatan;
            document.getElementById("pengesahan_semak_jawatan").innerHTML = nama_jawatan;
            document.getElementById("pengesahan_sah_jawatan").innerHTML = nama_jawatan;
            localStorage.setItem("jawatan", nama_jawatan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Lembangan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Lembangan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var lembangan_api = JSON.parse(xmlhttp.responseText);

            var nama_lembangan="";
            //var nama_lembangan="<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<lembangan_api.length; i++) {
                nama_lembangan += '<option value="'+ lembangan_api[i].lembangan +'">' + lembangan_api[i].lembangan + '</option>';
            }

            document.getElementById("aduan_lembangan").innerHTML = nama_lembangan;
            localStorage.setItem("lembangan", nama_lembangan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Sub(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Sub ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var sub_api = JSON.parse(xmlhttp.responseText);

            var namaa_sub = "";
            //var namaa_sub = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<sub_api.length; i++) {
                namaa_sub += '<option value="'+ sub_api[i].nama_sub_lembangan +'">' + sub_api[i].nama_sub_lembangan + '</option>';
            }

            document.getElementById("aduan_sub").innerHTML = namaa_sub;
            localStorage.setItem("nama_sub", namaa_sub);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_PTD(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_PTD ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var ptd_api = JSON.parse(xmlhttp.responseText);

            var namaa_ptd = "";
            //var namaa_ptd = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<ptd_api.length; i++) {
                namaa_ptd += '<option value="'+ ptd_api[i].nama_ptd +'">' + ptd_api[i].nama_ptd + '</option>';
            }

            document.getElementById("aduan_ptd").innerHTML = namaa_ptd;
            localStorage.setItem("nama_ptd", namaa_ptd);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_PBT(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_PBT ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pbt_api = JSON.parse(xmlhttp.responseText);

            var namaa_pbt = "";
            // var namaa_pbt = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<pbt_api.length; i++) {
                namaa_pbt += '<option value="'+ pbt_api[i].pbt +'">' + pbt_api[i].pbt + '</option>';
            }

            document.getElementById("aduan_pbt").innerHTML = namaa_pbt;
            localStorage.setItem("pbt", namaa_pbt);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Mukim(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Mukim ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var mukim_api = JSON.parse(xmlhttp.responseText);

            var nama_mukim = "";
            // var nama_mukim = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<mukim_api.length; i++) {
                nama_mukim += '<option value="'+ mukim_api[i].mukim +'">' + mukim_api[i].mukim + '</option>';
            }

            document.getElementById("aduan_mukim").innerHTML = nama_mukim;
            localStorage.setItem("mukim", nama_mukim);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Gunatanah(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Gunatanah ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var gunatanah_api = JSON.parse(xmlhttp.responseText);

            var nama_gunatanah = "";
            //var nama_gunatanah = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<gunatanah_api.length; i++) {
                nama_gunatanah += '<option value="'+ gunatanah_api[i].g_tanah1 +'">' + gunatanah_api[i].g_tanah1 + '</option>';
            }

            document.getElementById("aduan_gunatanah").innerHTML = nama_gunatanah;
            localStorage.setItem("g_tanah1", nama_gunatanah);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_KategoriLaporan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_KategoriLaporan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var kategorilaporan_api = JSON.parse(xmlhttp.responseText);

            var nama_kategorilaporan = "";
            //var nama_kategorilaporan = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<kategorilaporan_api.length; i++) {
                nama_kategorilaporan += '<option value="'+ kategorilaporan_api[i].kategori_laporan +'">' + kategorilaporan_api[i].kategori_laporan + '</option>';
            }

            document.getElementById("utama_kategori").innerHTML = nama_kategorilaporan;
            localStorage.setItem("kategori_laporan", nama_kategorilaporan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_JenisAduan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_JenisAduan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jenisaduan_api = JSON.parse(xmlhttp.responseText);

            var nama_jenisaduan = "";

            for (var i=0; i<jenisaduan_api.length; i++) {
                nama_jenisaduan += '<option id="'+ jenisaduan_api[i].jenis_aduan +'" value="'+ jenisaduan_api[i].jenis_aduan +'">' + jenisaduan_api[i].jenis_aduan + '</option>';
            }

            document.getElementById("aduan_jenis").innerHTML = nama_jenisaduan;
            localStorage.setItem("jenis_aduan", nama_jenisaduan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_SumberAirTerlibat(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_SumberAir ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var sumberair_api = JSON.parse(xmlhttp.responseText);

            var nama_sumberair = "";

            for (var i=0; i<sumberair_api.length; i++) {
                nama_sumberair += '<option id="'+ sumberair_api[i].sumber_air +'" value="'+ sumberair_api[i].sumber_air +'">' + sumberair_api[i].sumber_air + '</option>';
            }

            document.getElementById("aduan_sumber_terlibat").innerHTML = nama_sumberair;
            localStorage.setItem("sumber_air", nama_sumberair);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_TempatKejadian(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_TempatKejadian ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var tempatkejadian_api = JSON.parse(xmlhttp.responseText);

            var nama_tempatkejadian = "";

            for (var i=0; i<tempatkejadian_api.length; i++) {
                nama_tempatkejadian += '<option id="'+ tempatkejadian_api[i].tempat_kejadian +'" value="'+ tempatkejadian_api[i].tempat_kejadian +'">' + tempatkejadian_api[i].tempat_kejadian + '</option>';
            }

            document.getElementById("aduan_tempat_kejadian").innerHTML = nama_tempatkejadian;
            localStorage.setItem("tempat_kejadian", nama_tempatkejadian);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_MukaSauk(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_MukaSauk ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var mukasauk_api = JSON.parse(xmlhttp.responseText);

            var nama_mukasauk = "";
            // var nama_mukasauk = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<mukasauk_api.length; i++) {
                nama_mukasauk += '<option value="'+ mukasauk_api[i].ms +'">' + mukasauk_api[i].ms + '</option>';
            }

            document.getElementById("aduan_mukasauk_terdekat").innerHTML = nama_mukasauk;
            localStorage.setItem("ms", nama_mukasauk);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_LRA(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_LRA ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var lra_api = JSON.parse(xmlhttp.responseText);

            var nama_lra = "";
            // var nama_lra = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<lra_api.length; i++) {
                nama_lra += '<option value="'+ lra_api[i].lra +'">' + lra_api[i].lra + '</option>';
            }

            document.getElementById("aduan_loji_rawatan_terdekat").innerHTML = nama_lra;
            localStorage.setItem("lra", nama_lra);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_SumberAduan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_SumberAduan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var sumber_aduan_api = JSON.parse(xmlhttp.responseText);

            var nama_sumber_aduan = "";

            for (var i=0; i<sumber_aduan_api.length; i++) {
                nama_sumber_aduan += '<option id="'+ sumber_aduan_api[i].sumber_aduan +'" value="'+ sumber_aduan_api[i].sumber_aduan +'">' + sumber_aduan_api[i].sumber_aduan + '</option>';
            }

            document.getElementById("pengadu_sumber").innerHTML = nama_sumber_aduan;
            localStorage.setItem("sumber_aduan", nama_sumber_aduan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_KategoriAduan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_KategoriAduan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var kategoriaduan_api = JSON.parse(xmlhttp.responseText);

            var nama_kategoriaduan = "";

            for (var i=0; i<kategoriaduan_api.length; i++) {
                nama_kategoriaduan += '<option id="'+ kategoriaduan_api[i].kategori_aduan +'" value="'+ kategoriaduan_api[i].kategori_aduan +'">' + kategoriaduan_api[i].kategori_aduan + '</option>';
            }

            document.getElementById("pengadu_kategori").innerHTML = nama_kategoriaduan;
            localStorage.setItem("kategori_aduan", nama_kategoriaduan);
        }
    }

    xmlhttp.send();
}

function loadAPI_JenisPengadu(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_JenisPengadu ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var jenispengadu_api = JSON.parse(xmlhttp.responseText);

            var nama_jenispengadu = "";
            var nama_kategoripelaku = "";

            for (var i=0; i<jenispengadu_api.length; i++) {
                nama_jenispengadu += '<option id="'+ jenispengadu_api[i].jenis_pengadu +'" value="'+ jenispengadu_api[i].jenis_pengadu +'">'+ jenispengadu_api[i].jenis_pengadu +'</option>';
                nama_kategoripelaku += '<option id="'+ jenispengadu_api[i].jenis_pengadu +'_'+ jenispengadu_api[i].jenis_pengadu +'" value="'+ jenispengadu_api[i].jenis_pengadu +'">'+ jenispengadu_api[i].jenis_pengadu +'</option>';
            }

            document.getElementById("pengadu_pengadu").innerHTML = nama_jenispengadu;
            document.getElementById("pelaku_kategori").innerHTML = nama_kategoripelaku;
            localStorage.setItem("jenis_pengadu", nama_jenispengadu);
            localStorage.setItem("kategori_pelaku", nama_kategoripelaku);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Aktiviti(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Aktiviti ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var aktiviti_api = JSON.parse(xmlhttp.responseText);

            var nama_jenisaktiviti = "";
            // var nama_jenisaktiviti = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<aktiviti_api.length; i++) {
                nama_jenisaktiviti += '<option value="'+ aktiviti_api[i].kategori_aktiviti +'">' + aktiviti_api[i].kategori_aktiviti + '</option>';
            }

            document.getElementById("aduan_aktiviti").innerHTML = nama_jenisaktiviti;
            localStorage.setItem("jenis_aktiviti", nama_jenisaktiviti);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Premis(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_Premis ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var premis_api = JSON.parse(xmlhttp.responseText);

            var nama_premis = "";
            // var nama_premis = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<premis_api.length; i++) {
                nama_premis += '<option value="'+ premis_api[i].status_premis +'">' + premis_api[i].status_premis + '</option>';
            }

            document.getElementById("aduan_status_premis").innerHTML = nama_premis;
            localStorage.setItem("status_premis", nama_premis);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Pegawai_Pengesahan(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_PegawaiPengesahan ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var pegawai_pengesahan_api = JSON.parse(xmlhttp.responseText);

            var nama_pengesahan = "";
            // var nama_pengesahan = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<pegawai_pengesahan_api.length; i++) {
                nama_pengesahan += '<option class="'+ pegawai_pengesahan_api[i].id_jawatan +'" data="'+ pegawai_pengesahan_api[i].id_bahagian +'" value="'+ pegawai_pengesahan_api[i].nama +'">' + pegawai_pengesahan_api[i].nama + '</option>';
            }

            document.getElementById("pengesahan_semak_nama_pegawai").innerHTML = nama_pengesahan;
            document.getElementById("pengesahan_sah_nama_pegawai").innerHTML = nama_pengesahan;
            localStorage.setItem("pegawai_pengesahan", nama_pengesahan);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Aktiviti_Utama(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_AktivitiUtama ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var aktiviti_utama_api = JSON.parse(xmlhttp.responseText);

            var nama_aktiviti_utama = "";
            // var nama_aktiviti_utama = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<aktiviti_utama_api.length; i++) {
                nama_aktiviti_utama += '<option value="'+ aktiviti_utama_api[i].id_aktiviti +'">' + aktiviti_utama_api[i].aktiviti + '</option>';
            }

            document.getElementById("aktiviti_utama").innerHTML = nama_aktiviti_utama;
            localStorage.setItem("aktiviti_utama", nama_aktiviti_utama);
           
        }
    }

    xmlhttp.send();
}

function loadAPI_Sub_Aktiviti(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseUrl_SubAktiviti ,true);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var sub_aktiviti_api = JSON.parse(xmlhttp.responseText);

            var nama_sub_aktiviti = "";
            // var nama_sub_aktiviti = "<option value='' disabled selected>Sila Pilih</option>";

            for (var i=0; i<sub_aktiviti_api.length; i++) {
                nama_sub_aktiviti += '<option value="'+ sub_aktiviti_api[i].id_sub_aktiviti +'">' + sub_aktiviti_api[i].sub_aktiviti + '</option>';
            }

            document.getElementById("sub_aktiviti").innerHTML = nama_sub_aktiviti;
            localStorage.setItem("sub_aktiviti", nama_sub_aktiviti);
           
        }
    }

    xmlhttp.send();
}


function offline_Filter(){

    setTimeout(function(){ 

        $('#utama_bahagian').on('change', function(e) {
            //let selector = $(this).val();
            let selector = $('select[name="bahagian"] option:selected').attr('class');
    
            $("#utama_unit > option").hide();
            $("#utama_unit > option").filter(function(){return $(this).data('pub') == selector}).show();
        });
    
        $('#utama2_bahagian').on('change', function(e) {
            let selector2 = $('select[id="utama2_bahagian"] option:selected').attr('class');
    
            $("#utama2_unit > option").hide();
            $("#utama2_unit > option").filter(function(){return $(this).data('pub') == selector2}).show();
    
            $( "#utama2_unit" ).append( "<option value='Tidak Berkaitan'>Tidak Berkaitan</option>" );
        });
    
        $('#utama2_nama_pegawai').on('change', function(e) {
            let selector3 = $('select[id="utama2_nama_pegawai"] option:selected').attr('class');
    
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
    
    }, 2000);
    
}