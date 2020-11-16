window.onload = function(){
    //onlineCheck();
    offline_API();
}

function onlineCheck() {
    var x = navigator.onLine;
  
    if(navigator.onLine === false){

        //alert("You are offline!");
        // document.getElementById("online_btn").style.display = "none";
        // document.getElementById("offline_btn").style.display = "block";
    }

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

var no_ic = localStorage.getItem("no_ic");
document.getElementById("no_ic").value = no_ic;

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
    document.getElementById("utama_unit").innerHTML = unit;
    document.getElementById("utama2_unit").innerHTML = unit;
    document.getElementById("utama3_bahagian").innerHTML = unit;
    

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





//----------------------------------------REPORT---------------------------------------------//

    var url_page =  window.location.href;
    url_page = url_page.split("?");
    var url2 = url_page[1].split("=");

    var url_id = url2[1].split("%20").join(" ");

    console.log(url_id);

    var db = new PouchDB('luas');

    db.get(url_id).then(function (doc) {

        document.getElementById("content_submit").innerHTML = "<b> No. Rujukan : </b> " + doc._id + "<br>" +
                                                            "<b> Tajuk : </b>" + doc.utama_tajuk + "<br>" +
                                                            "<b> Kategori : </b>" + doc.kategori_laporan + "<br>" +
                                                            "<b> Sumber Air : </b>" + doc.sumber_air + "<br>";

        setTimeout(function(){ 

            document.getElementById("utama_rujukan").value = doc._id;
            document.getElementById("aduan_nama_sumber").value = doc.sumber_air;
            document.getElementById("utama_kategori").value = doc.kategori_laporan;

            for(var i=0; i<doc.jenis_aduan.length;i++){
                document.getElementById(doc.jenis_aduan[i]).selected = "true";
            }

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

        }, 800);
        

    });
    

$(function(){
    $("#form_id").submit(function(e) {
        e.preventDefault();

        var form = $(this);
        var url = form.attr('action');

        //------------------------------pegawai terlibat------------------------------

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

            if(bahagian_peg_hadir.length <= 0){
                var ph_backup = document.getElementById("pegawai_hadir_backup").value;
                bahagian_peg_hadir.push(ph_backup);
                unit_peg_hadir.push(ph_backup);
                nama_peg_hadir.push(ph_backup);
                jawatan_peg_hadir.push(ph_backup);
            }

        //------------------------------------------------------------------------------

        var jenis_aduan = [];
        var j_a = document.getElementById("aduan_jenis");
        for (var i = 0; i < j_a.options.length; i++) {
            if(j_a.options[i].selected ==true){
                jenis_aduan.push(j_a.options[i].value);
            }
        }

            if(jenis_aduan.length <= 0){
                var ja_backup = document.getElementById("input_backup").value;
                jenis_aduan.push(ja_backup);
            }

        //------------------------------------------------------------------------------
        var aduan_sumber_terlibat = [];
        var s_a = document.getElementById("aduan_sumber_terlibat"); 
        for(var j = 0; j < s_a.options.length; j++){
            if(s_a.options[j].selected ==true){
                aduan_sumber_terlibat.push(s_a.options[j].value);
            }
        }

            if(aduan_sumber_terlibat.length <= 0){
                var ast_backup = document.getElementById("input_backup").value;
                aduan_sumber_terlibat.push(ast_backup);
            }

        //------------------------------------------------------------------------------
        var tempat_kejadian = [];
        var t_k = document.getElementById("aduan_tempat_kejadian");
        for(var k=0; k<t_k.options.length; k++){
            if(t_k.options[k].selected ==true){
                tempat_kejadian.push(t_k.options[k].value);
            }
        }

            if(tempat_kejadian.length <= 0){
                var tk_backup = document.getElementById("input_backup").value;
                tempat_kejadian.push(tk_backup);
            }

        //-------------------muka sauk----------------------
        var aduan_mukasauk_terdekat = document.getElementsByName("muka_sauk"); 
        var muka_sauk_arr = [];
        aduan_mukasauk_terdekat.forEach(element => {
            muka_sauk_arr.push(element.value);
        });

            if(muka_sauk_arr.length <= 0){
                var ms_backup = document.getElementById("muka_sauk_backup").value;
                muka_sauk_arr.push(ms_backup);
            }

        //-------------------jarak muka sauk----------------------
        var aduan_mukasauk_no = document.getElementsByName("jarak_muka_sauk"); 
        var jarak_muka_sauk_arr = [];
        aduan_mukasauk_no.forEach(element => {
            jarak_muka_sauk_arr.push(element.value);
        });

            if(jarak_muka_sauk_arr.length <= 0){
                var jms_backup = document.getElementById("jarak_muka_sauk_backup").value;
                jarak_muka_sauk_arr.push(jms_backup);
            }

        //----------------------lra----------------------
        var aduan_loji_rawatan_terdekat = document.getElementsByName("loji_rawatan_air"); 
        var lra_arr = [];
        aduan_loji_rawatan_terdekat.forEach(element => {
            lra_arr.push(element.value);
        });

            if(lra_arr.length <= 0){
                var lra_backup = document.getElementById("loji_rawatan_air_backup").value;
                lra_arr.push(lra_backup);
            }

        //-------------------jarak lra----------------------
        var aduan_loji_rawatan_no = document.getElementsByName("jarak_loji_rawatan_air"); 
        var jarak_lra_arr = [];
        aduan_loji_rawatan_no.forEach(element => {
            jarak_lra_arr.push(element.value);
        });

            if(jarak_lra_arr.length <= 0){
                var jlra_backup = document.getElementById("jarak_loji_rawatan_air_backup").value;
                jarak_lra_arr.push(jlra_backup);
            }

        //------------------------------------------------------------------------------
        var pengadu_sumber = [];
        var p_s = document.getElementById("pengadu_sumber");
        for(var l=0; l<p_s.options.length; l++){
            if(p_s.options[l].selected ==true){
                pengadu_sumber.push(p_s.options[l].value);
            }
        }

            if(pengadu_sumber.length <= 0){
                var ps_backup = document.getElementById("input_backup").value;
                pengadu_sumber.push(ps_backup);
            }

        //------------------------------------------------------------------------------
        var pengadu_kategori = [];
        var p_k = document.getElementById("pengadu_kategori");
        for(var l=0; l<p_k.options.length; l++){
            if(p_k.options[l].selected ==true){
                pengadu_kategori.push(p_k.options[l].value);
            }
        }

            if(pengadu_kategori.length <= 0){
                var pk_backup = document.getElementById("input_backup").value;
                pengadu_kategori.push(pk_backup);
            }

        //------------------------------------------------------------------------------

        var pengadu_pengadu = [];
        var p_p = document.getElementById("pengadu_pengadu");
        for(var l=0; l<p_p.options.length; l++){
            if(p_p.options[l].selected ==true){
                pengadu_pengadu.push(p_p.options[l].value);
            }
        }

            if(pengadu_pengadu.length <= 0){
                var pp_backup = document.getElementById("input_backup").value;
                pengadu_pengadu.push(pp_backup);
            }

        //------------------------------------------------------------------------------

        var pelaku_kategori = [];
        var p_k2 = document.getElementById("pelaku_kategori");
        for(var l=0; l<p_k2.options.length; l++){
            if(p_k2.options[l].selected ==true){
                pelaku_kategori.push(p_k2.options[l].value);
            }
        }

            if(pelaku_kategori.length <= 0){
                var pk2_backup = document.getElementById("input_backup").value;
                pelaku_kategori.push(pk2_backup);
            }


        //----------------------------gambar--------------------------------------
        var laporan_gambar_caption = document.getElementsByName("keterangan_gambar_laporan"); 
        var gambar_caption_arr = [];
        laporan_gambar_caption.forEach(element => {
            gambar_caption_arr.push(element.value);
        });

            if(gambar_caption_arr.length <= 0){
                var caption_backup = document.getElementById("input_backup").value;
                gambar_caption_arr.push(caption_backup);
            }

        //------------------------------------------------------------------------------

        var myobj = document.getElementById("img_this");
        myobj.remove();

        //------------------------------------------------------------------------------


        var formData2 = {
            'no_rujukan'        : $('input[name=no_rujukan]').val(),
            'kategori_laporan'  : $('select[name=kategori_laporan]').val(),
            'bahagian'    : $('select[name=bahagian]').val(),
            'unit'    : $('select[name=unit]').val(),
            'tarikh_mula'  : $('input[name=tarikh_mula]').val(),
            'tarikh_akhir' : $('input[name=tarikh_akhir]').val(),
            'masa_mula'    : $('input[name=masa_mula]').val(),
            'masa_akhir'   : $('input[name=masa_akhir]').val(),
            'tajuk'        : $('input[name=tajuk]').val(),
            'bahagian_pegawai_hadir' : bahagian_peg_hadir,
            'unit_pegawai_hadir'    : unit_peg_hadir,
            'nama_pegawai_hadir'    : nama_peg_hadir,
            'jawatan_pegawai_hadir'  : jawatan_peg_hadir,
            'KU_minit' : $('textarea[name=KU_minit]').val(),
            'KU_nama_pegawai' : $('select[name=KU_nama_pegawai]').val(),
            'KU_jawatan'    : $('select[name=KU_jawatan]').val(),
            'KU_bahagian_unit'  : $('select[name=KU_bahagian_unit]').val(),
            'KU_tarikh'    : $('input[name=KU_tarikh]').val(),
            'KB_minit' : $('textarea[name=KB_minit]').val(),
            'KB_nama_pegawai'  : $('select[name=KB_nama_pegawai]').val(),
            'KB_jawatan'    : $('select[name=KB_jawatan]').val(),
            'KB_bahagian_unit'    : $('select[name=KB_bahagian_unit]').val(),
            'KB_tarikh'    : $('input[name=KB_tarikh]').val(),

            'jenis_aduan'    : jenis_aduan,
            'sumber_air'    : aduan_sumber_terlibat,
            'aktiviti_utama'    : $('select[name=aktiviti_utama]').val(),
            'sub_aktiviti'    : $('select[name=sub_aktiviti]').val(),
            'tempat_kejadian'    : tempat_kejadian,
            'nama_sumber_air'  : $('input[name=nama_sumber_air]').val(),
            'tarikh_siasatan'  : $('input[name=tarikh_siasatan]').val(),
            'masa_siasatan'  : $('input[name=masa_siasatan]').val(),
            'latitude'  : $('input[name=latitude]').val(),
            'longitude'  : $('input[name=longitude]').val(),
            'lembangan'    : $('select[name=lembangan]').val(),
            'sub'    : $('select[name=sub]').val(),
            'ptd'    : $('select[name=ptd]').val(),
            'pbt'    : $('select[name=pbt]').val(),
            'aktiviti_yang_dijalankan'    : $('select[name=aktiviti_yang_dijalankan]').val(),
            'kegunaan_air'  : $('input[name=kegunaan_air]').val(),
            'status_premis'    : $('select[name=status_premis]').val(),
            'mukim'    : $('select[name=mukim]').val(),
            'no_lot'  : $('input[name=no_lot]').val(),
            'guna_tanah' : $('select[name=guna_tanah]').val(),
            'muka_sauk' : muka_sauk_arr,
            'jarak_muka_sauk' : jarak_muka_sauk_arr,
            'loji_rawatan_air' : lra_arr,
            'jarak_loji_rawatan_air' : jarak_lra_arr,

            'no_rujukan_surat_aduan' : $('input[name=no_rujukan_surat_aduan]').val(),
            'sumber_aduan'    : pengadu_sumber,
            'tarikh_aduan'  : $('input[name=tarikh_aduan]').val(),
            'kategori_aduan'    : pengadu_kategori,
            'jenis_pengadu'    : pengadu_pengadu,
            'nama_pengadu' : $('input[name=nama_pengadu]').val(),
            'no_rumah_pengadu'    : $('input[name=no_rumah_pengadu]').val(),
            'nama_jalan_pengadu'   : $('input[name=nama_jalan_pengadu]').val(),
            'nama_taman_pengadu'   : $('input[name=nama_taman_pengadu]').val(),
            'poskod_pengadu'   : $('input[name=poskod_pengadu]').val(),
            'bandar_pengadu'   : $('input[name=bandar_pengadu]').val(),
            'negeri_pengadu'    : $('select[name=negeri_pengadu]').val(),
            'no_telefon_pengadu'   : $('input[name=no_telefon_pengadu]').val(),
            'no_faks_pengadu'   : $('input[name=no_faks_pengadu]').val(),

            'kategori_pelaku'    : pelaku_kategori,
            'nama_pelaku'   : $('input[name=nama_pelaku]').val(),
            'no_kp_pelaku'   : $('input[name=no_kp_pelaku]').val(),
            'no_rumah_pelaku'   : $('input[name=no_rumah_pelaku]').val(),
            'nama_jalan_pelaku'   : $('input[name=nama_jalan_pelaku]').val(),
            'nama_taman_pelaku'   : $('input[name=nama_taman_pelaku]').val(),
            'poskod_pelaku'   : $('input[name=poskod_pelaku]').val(),
            'bandar_pelaku'   : $('input[name=bandar_pelaku]').val(),
            'negeri_pelaku'    : $('select[name=negeri_pelaku]').val(),
            'no_telefon_pelaku'   : $('input[name=no_telefon_pelaku]').val(),
            'no_faks_pelaku'   : $('input[name=no_faks_pelaku]').val(),

            'tujuan_latarbelakang' : $('textarea[name=tujuan_latarbelakang]').val(),
            'kronologi_aduan' : $('textarea[name=kronologi_aduan]').val(),
            'hasil_lawatan' : $('textarea[name=hasil_lawatan]').val(),
            'asas_pertimbangan' : $('textarea[name=asas_pertimbangan]').val(),
            'cadangan_penyelesaian' : $('textarea[name=cadangan_penyelesaian]').val(),
            'kesimpulan' : $('textarea[name=kesimpulan]').val(),
            //'nama_gambar_laporan' : $('input[name=nama_gambar_laporan]').val(),
            //'nama_gambar_laporan' : gambarArr,
            'keterangan_gambar_laporan' : $('textarea[name=keterangan_gambar_laporan]').val(),

            'nama_pegawai_semak'    : $('select[name=nama_pegawai_semak]').val(),
            'jawatan_pegawai_semak'    : $('select[name=jawatan_pegawai_semak]').val(),
            'bahagian_pegawai_semak'    : $('select[name=bahagian_pegawai_semak]').val(),
            'tarikh_semak'   : $('input[name=tarikh_semak]').val(),
            'nama_pegawai_sah'    : $('select[name=nama_pegawai_sah]').val(),
            'jawatan_pegawai_sah'    : $('select[name=jawatan_pegawai_sah]').val(),
            'bahagian_pegawai_sah'    : $('select[name=bahagian_pegawai_sah]').val(),
            'tarikh_sah'   : $('input[name=tarikh_sah]').val(),

            'no_ic'   : $('input[name=no_ic]').val(),
            'user_type'   : $('input[name=user_type]').val()
        };

        var formData = new FormData($(this)[0]);

        formData.append('no_rujukan', $('input[name=no_rujukan]').val());
        formData.append('kategori_laporan', $('select[name=kategori_laporan]').val());
        formData.append('bahagian', $('select[name=bahagian]').val());
        formData.append('unit', $('select[name=unit]').val());
        formData.append('tarikh_mula', $('input[name=tarikh_mula]').val());
        formData.append('tarikh_akhir', $('input[name=tarikh_akhir]').val());
        formData.append('masa_mula', $('input[name=masa_mula]').val());
        formData.append('masa_akhir', $('input[name=masa_akhir]').val());
        formData.append('tajuk', $('input[name=tajuk]').val());
    
        for (var i = 0; i < bahagian_peg_hadir.length; i++) {
            formData.append('bahagian_pegawai_hadir[]', bahagian_peg_hadir[i]);
        }
    
        for (var i = 0; i < unit_peg_hadir.length; i++) {
            formData.append('unit_pegawai_hadir[]', unit_peg_hadir[i]);
        }
    
        for (var i = 0; i < nama_peg_hadir.length; i++) {
            formData.append('nama_pegawai_hadir[]', nama_peg_hadir[i]);
        }
    
        for (var i = 0; i < jawatan_peg_hadir.length; i++) {
            formData.append('jawatan_pegawai_hadir[]', jawatan_peg_hadir[i]);
        }
    
        formData.append('KU_minit', $('textarea[name=KU_minit]').val());
        formData.append('KU_nama_pegawai', $('select[name=KU_nama_pegawai]').val());
        formData.append('KU_jawatan', $('select[name=KU_jawatan]').val());
        formData.append('KU_bahagian_unit', $('select[name=KU_bahagian_unit]').val());
        formData.append('KU_tarikh', $('input[name=KU_tarikh]').val());
        formData.append('KB_minit', $('textarea[name=KB_minit]').val());
        formData.append('KB_nama_pegawai', $('select[name=KB_nama_pegawai]').val());
        formData.append('KB_jawatan', $('select[name=KB_jawatan]').val());
        formData.append('KB_bahagian_unit', $('select[name=KB_bahagian_unit]').val());
        formData.append('KB_tarikh', $('input[name=KB_tarikh]').val());
    
        for (var i = 0; i < jenis_aduan.length; i++) {
            formData.append('jenis_aduan[]', jenis_aduan[i]);
        }
    
        for (var i = 0; i < aduan_sumber_terlibat.length; i++) {
            formData.append('sumber_air[]', aduan_sumber_terlibat[i]);
        }
    
        for (var i = 0; i < tempat_kejadian.length; i++) {
            formData.append('tempat_kejadian[]', tempat_kejadian[i]);
        }
    
        formData.append('nama_sumber_air', $('input[name=nama_sumber_air]').val());
        formData.append('tarikh_siasatan', $('input[name=tarikh_siasatan]').val());
        formData.append('masa_siasatan', $('input[name=masa_siasatan]').val());
        formData.append('latitude', $('input[name=latitude]').val());
        formData.append('longitude', $('input[name=longitude]').val());
        formData.append('lembangan', $('input[name=lembangan]').val());
        formData.append('sub', $('select[name=sub]').val());
        formData.append('ptd', $('select[name=ptd]').val());
        formData.append('pbt', $('select[name=pbt]').val());
        formData.append('aktiviti_yang_dijalankan', $('select[name=aktiviti_yang_dijalankan]').val());
        formData.append('kegunaan_air', $('input[name=kegunaan_air]').val());
        formData.append('status_premis', $('select[name=status_premis]').val());
        formData.append('mukim', $('select[name=mukim]').val());
        formData.append('no_lot', $('input[name=no_lot]').val());
        formData.append('guna_tanah', $('select[name=guna_tanah]').val());
    
        for (var i = 0; i < muka_sauk_arr.length; i++) {
            formData.append('muka_sauk[]', muka_sauk_arr[i]);
        }
    
        for (var i = 0; i < jarak_muka_sauk_arr.length; i++) {
            formData.append('jarak_muka_sauk[]', jarak_muka_sauk_arr[i]);
        }
    
        for (var i = 0; i < lra_arr.length; i++) {
            formData.append('loji_rawatan_air[]', lra_arr[i]);
        }
    
        for (var i = 0; i < jarak_lra_arr.length; i++) {
            formData.append('jarak_loji_rawatan_air[]', jarak_lra_arr[i]);
        }
    
        formData.append('no_rujukan_surat_aduan', $('input[name=no_rujukan_surat_aduan]').val());
    
        for (var i = 0; i < pengadu_sumber.length; i++) {
            formData.append('sumber_aduan[]', pengadu_sumber[i]);
        }
    
        formData.append('tarikh_aduan', $('input[name=tarikh_aduan]').val());
    
        for (var i = 0; i < pengadu_kategori.length; i++) {
            formData.append('kategori_aduan[]', pengadu_kategori[i]);
        }
    
        for (var i = 0; i < pengadu_pengadu.length; i++) {
            formData.append('jenis_pengadu[]', pengadu_pengadu[i]);
        }
    
        formData.append('nama_pengadu', $('input[name=nama_pengadu]').val());
        formData.append('no_rumah_pengadu', $('input[name=no_rumah_pengadu]').val());
        formData.append('nama_jalan_pengadu', $('input[name=nama_jalan_pengadu]').val());
        formData.append('nama_taman_pengadu', $('input[name=nama_taman_pengadu]').val());
        formData.append('poskod_pengadu', $('input[name=poskod_pengadu]').val());
        formData.append('bandar_pengadu', $('input[name=bandar_pengadu]').val());
        formData.append('negeri_pengadu', $('select[name=negeri_pengadu]').val());
        formData.append('no_telefon_pengadu', $('input[name=no_telefon_pengadu]').val());
        formData.append('no_faks_pengadu', $('input[name=no_faks_pengadu]').val());
    
        for (var i = 0; i < pelaku_kategori.length; i++) {
            formData.append('kategori_pelaku[]', pelaku_kategori[i]);
        }
    
        formData.append('nama_pelaku', $('input[name=nama_pelaku]').val());
        formData.append('no_kp_pelaku', $('input[name=no_kp_pelaku]').val());
        formData.append('no_rumah_pelaku', $('input[name=no_rumah_pelaku]').val());
        formData.append('nama_jalan_pelaku', $('input[name=nama_jalan_pelaku]').val());
        formData.append('nama_taman_pelaku', $('input[name=nama_taman_pelaku]').val());
        formData.append('poskod_pelaku', $('input[name=poskod_pelaku]').val());
        formData.append('bandar_pelaku', $('input[name=bandar_pelaku]').val());
        formData.append('negeri_pelaku', $('input[name=negeri_pelaku]').val());
        formData.append('no_telefon_pelaku', $('input[name=no_telefon_pelaku]').val());
        formData.append('no_faks_pelaku', $('input[name=no_faks_pelaku]').val());
    
        formData.append('tujuan_latarbelakang', $('textarea[name=tujuan_latarbelakang]').val());
        formData.append('kronologi_aduan', $('textarea[name=kronologi_aduan]').val());
        formData.append('hasil_lawatan', $('textarea[name=hasil_lawatan]').val());
        formData.append('asas_pertimbangan', $('textarea[name=asas_pertimbangan]').val());
        formData.append('cadangan_penyelesaian', $('textarea[name=cadangan_penyelesaian]').val());
        formData.append('kesimpulan', $('textarea[name=kesimpulan]').val());

        // var count_row = document.getElementById("laporan_gambar_table").rows.length;
        // var count_row2 = count_row-1;
    
        // if(count_row2 > 0){
        //     var files = $('.fileToUpload')[0].files[0];
        // }
    
        for (var i = 0; i < gambar_caption_arr.length; i++) {
            formData.append('keterangan_gambar_laporan[]', gambar_caption_arr[i]);
            // formData.append("gambar_laporan[]", files);
        }
    
        formData.append('nama_pegawai_semak', $('select[name=nama_pegawai_semak]').val());
        formData.append('jawatan_pegawai_semak', $('select[name=jawatan_pegawai_semak]').val());
        formData.append('bahagian_pegawai_semak', $('select[name=bahagian_pegawai_semak]').val());
        formData.append('tarikh_semak', $('input[name=tarikh_semak]').val());
        formData.append('nama_pegawai_sah', $('select[name=nama_pegawai_sah]').val());
        formData.append('jawatan_pegawai_sah', $('select[name=jawatan_pegawai_sah]').val());
        formData.append('bahagian_pegawai_sah', $('select[name=bahagian_pegawai_sah]').val());
        formData.append('tarikh_sah', $('input[name=tarikh_sah]').val());
    
        formData.append('no_ic', $('input[name=no_ic]').val());
        formData.append('user_type', $('input[name=user_type]').val());

        $.ajax({
            type: "POST",
            url: url,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            data : formData,
            success: function(data)
            {
                alert("Report has been successfully sent!");
                deleteDB();

                setTimeout(function(){ 
                    window.location.href = "status_report.html";
                }, 100);
            },
            error: function (data) {
                alert("Unsuccessful. Please try again later.");
            }
        });

    });


});


function deleteDB(){
    db.get(url_id).then(function (doc) {
        return db.remove(doc);
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


