
var no_ic = localStorage.getItem("no_ic");
document.getElementById("no_ic").value = no_ic;


//-----------------------------------------------------MAP-----------------------------------------------------//

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

        var acc = position.coords.accuracy;

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lon").value = position.coords.longitude;
        document.getElementById("accuracy").innerHTML = "Accuracy : <input type='text' value='"+ acc.toFixed(0) +" m' readonly>";

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

        var acc = position.coords.accuracy;

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lon").value = position.coords.longitude;
        document.getElementById("accuracy").innerHTML = "Accuracy :<input readonly type='text' value='"+ acc.toFixed(0) +" m'>";
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
            alert("Please try again.")
            break;
            case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
            case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}



//-------------------------------------------------FORM---------------------------------------------------------//

$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};




$("#form_id").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

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
            var ph_backup = document.getElementById("input_backup").value;
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
            var ms_backup = document.getElementById("input_backup").value;
            muka_sauk_arr.push(ms_backup);
        }

    //-------------------jarak muka sauk----------------------
    var aduan_mukasauk_no = document.getElementsByName("jarak_muka_sauk"); 
    var jarak_muka_sauk_arr = [];
    aduan_mukasauk_no.forEach(element => {
        jarak_muka_sauk_arr.push(element.value);
    });

        if(jarak_muka_sauk_arr.length <= 0){
            var jms_backup = document.getElementById("input_backup").value;
            jarak_muka_sauk_arr.push(jms_backup);
        }

    //----------------------lra----------------------
    var aduan_loji_rawatan_terdekat = document.getElementsByName("loji_rawatan_air"); 
    var lra_arr = [];
    aduan_loji_rawatan_terdekat.forEach(element => {
        lra_arr.push(element.value);
    });

        if(lra_arr.length <= 0){
            var lra_backup = document.getElementById("input_backup").value;
            lra_arr.push(lra_backup);
        }

    //-------------------jarak lra----------------------
    var aduan_loji_rawatan_no = document.getElementsByName("jarak_loji_rawatan_air"); 
    var jarak_lra_arr = [];
    aduan_loji_rawatan_no.forEach(element => {
        jarak_lra_arr.push(element.value);
    });

        if(jarak_lra_arr.length <= 0){
            var jlra_backup = document.getElementById("input_backup").value;
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

    

    //------------------------------------------------------------------------------

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

    var count_row = document.getElementById("laporan_gambar_table").rows.length;
    var count_row2 = count_row-1;

    if(count_row2>0){
        var myobj = document.getElementById("img_this");
        myobj.remove();
    }
    
    for (var i = 0; i < gambar_caption_arr.length; i++) {

        var files = $('.fileToUpload')[i].files[0];

        formData.append('keterangan_gambar_laporan[]', gambar_caption_arr[i]);
        formData.append("gambar_laporan[]", files);
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
        //data: form.serialize(), // serializes the form's elements.
        data : formData,
        success: function(data)
        {
            alert("Laporan anda telah dihantar");
            window.location.href = "new_report.html";
        },
        error: function (data) {
            storeData();
            alert("Laporan anda telah disimpan");
        }
    });

});




function storeData(){
    
    var db = new PouchDB('luas', {auto_compaction: true});

        // var jsonText = JSON.stringify($('form').serializeObject());
        // console.log(jsonText);

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

        //-------------------------------------------aduan------------------------------------------------------
        
        var jenis_aduan = [];

        var j_a = document.getElementById("aduan_jenis");

        for (var i = 0; i < j_a.options.length; i++) {
            if(j_a.options[i].selected ==true){
                jenis_aduan.push(j_a.options[i].value);
            }
        }

        var aduan_sumber_terlibat = [];
        var s_a = document.getElementById("aduan_sumber_terlibat"); 

        for(var j = 0; j < s_a.options.length; j++){
            if(s_a.options[j].selected ==true){
                aduan_sumber_terlibat.push(s_a.options[j].value);
            }
        }

        var tempat_kejadian = [];
        var t_k = document.getElementById("aduan_tempat_kejadian");

        for(var k=0; k<t_k.options.length; k++){
            if(t_k.options[k].selected ==true){
                tempat_kejadian.push(t_k.options[k].value);
            }
        }

        var aktiviti_utama = document.getElementById("aktiviti_utama").value;
        var sub_aktiviti = document.getElementById("sub_aktiviti").value;
        var sumber_air = document.getElementById("aduan_nama_sumber").value;
        var lat = document.getElementById("lat").value;
        var lon = document.getElementById("lon").value;
        var aduan_lembangan = document.getElementById("aduan_lembangan").value;
        var aduan_sub = document.getElementById("aduan_sub").value;
        var aduan_ptd = document.getElementById("aduan_ptd").value;
        var aduan_pbt = document.getElementById("aduan_pbt").value;
        var aduan_mukim = document.getElementById("aduan_mukim").value;
        var aduan_no_lot = document.getElementById("aduan_no_lot").value;
        var kegunaan_air = document.getElementById("aduan_kegunaan_air").value;
        var aduan_gunatanah = document.getElementById("aduan_gunatanah").value;
        var aduan_aktiviti = document.getElementById("aduan_aktiviti").value;
        var aduan_status_premis = document.getElementById("aduan_status_premis").value;

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

        var pengadu_sumber = [];
        var p_s = document.getElementById("pengadu_sumber");

        for(var l=0; l<p_s.options.length; l++){
            if(p_s.options[l].selected ==true){
                pengadu_sumber.push(p_s.options[l].value);
            }
        }

        var aduan_tarikh = document.getElementById("aduan_tarikh").value;

        var pengadu_kategori = [];
        var p_k = document.getElementById("pengadu_kategori");
        for(var l=0; l<p_k.options.length; l++){
            if(p_k.options[l].selected ==true){
                pengadu_kategori.push(p_k.options[l].value);
            }
        }

        var pengadu_pengadu = [];
        var p_p = document.getElementById("pengadu_pengadu");
        for(var l=0; l<p_p.options.length; l++){
            if(p_p.options[l].selected ==true){
                pengadu_pengadu.push(p_p.options[l].value);
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

        var laporan_caption = document.getElementById("laporan_caption").value;

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

        var owner = localStorage.getItem("no_ic");
        var user_type = document.getElementById("user_type").value;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        // var count_row = document.getElementById("laporan_gambar_table").rows.length;
        // var count_row2 = count_row-1;

        // if(count_row2 > 0){
        //     var files = $('.fileToUpload')[0].files[0];
        // }

        db.put({
            _id: fail_rujukan,
            kategori_laporan: kategori_laporan,
            jenis_aduan : jenis_aduan,
            sumber_air: sumber_air,
            tempat_kejadian: tempat_kejadian,
            current_date: today,
            no_ic: owner,
            user_type: user_type,

            utama_bahagian: utama_bahagian,
            utama_unit : utama_unit,
            utama_tarikhdari : utama_tarikhdari,
            utama_tarikhhingga: utama_tarikhhingga,
            utama_masadari : utama_masadari,
            utama_masahingga : utama_masahingga,
            utama_tajuk : tajuk,

            utama2_bahagian: bahagian_peg_hadir,
            utama2_unit : unit_peg_hadir,
            utama2_nama_pegawai : nama_peg_hadir,
            utama2_jawatan : jawatan_peg_hadir,

            utama3_arahan : utama3_arahan,
            utama3_nama_pegawai : utama3_nama_pegawai,
            utama3_jawatan : utama3_jawatan,
            utama3_bahagian : utama3_bahagian,
            utama3_tarikh : utama3_tarikh,
            utama4_arahan : utama4_arahan,
            utama4_nama_pegawai : utama4_nama_pegawai,
            utama4_jawatan : utama4_jawatan,
            utama4_unit : utama4_unit,
            utama4_tarikh : utama4_tarikh,

            aduan_sumber_terlibat: aduan_sumber_terlibat,
            lat : lat,
            lon : lon,
            aduan_lembangan : aduan_lembangan,
            aduan_sub : aduan_sub,
            aduan_ptd : aduan_ptd,
            aduan_pbt : aduan_pbt,
            aduan_mukim : aduan_mukim,
            aduan_no_lot : aduan_no_lot,
            aduan_kegunaan_air : kegunaan_air,
            aduan_gunatanah : aduan_gunatanah,
            aduan_mukasauk_terdekat : muka_sauk_arr,
            aduan_mukasauk_no : jarak_muka_sauk_arr,
            aduan_loji_rawatan_terdekat : lra_arr,
            aduan_loji_rawatan_no: jarak_lra_arr,
            aduan_premis : aduan_status_premis,
            aduan_aktiviti : aduan_aktiviti,
            aduan_aktiviti_utama : aktiviti_utama,
            aduan_sub_aktiviti : sub_aktiviti,

            pengadu_rujukan : pengadu_rujukan,
            pengadu_sumber : pengadu_sumber ,
            aduan_tarikh : aduan_tarikh,
            pengadu_kategori : pengadu_kategori,
            pengadu_pengadu : pengadu_pengadu ,
            pengadu_nama : pengadu_nama,
            pengadu_norumah : pengadu_norumah,
            pengadu_namajalan : pengadu_namajalan,
            pengadu_namataman : pengadu_namataman,
            pengadu_poskod : pengadu_poskod ,
            pengadu_bandar : pengadu_bandar,
            pengadu_negeri : pengadu_negeri ,
            pengadu_notelefon : pengadu_notelefon,
            pengadu_faks : pengadu_faks,

            pelaku_kategori : pelaku_kategori,
            pelaku_nama : pelaku_nama,
            pelaku_nokp : pelaku_nokp,
            pelaku_norumah : pelaku_norumah,
            pelaku_namajalan : pelaku_namajalan,
            pelaku_namataman : pelaku_namataman,
            pelaku_poskod : pelaku_poskod,
            pelaku_bandar : pelaku_bandar,
            pelaku_negeri : pelaku_negeri,
            pelaku_notelefon : pelaku_notelefon,
            pelaku_faks : pelaku_faks,

            laporan_tujuan : laporan_tujuan,
            laporan_kronologi : laporan_kronologi,
            laporan_hasil : laporan_hasil,
            laporan_pertimbangan : laporan_pertimbangan,
            laporan_cadangan : laporan_cadangan,
            laporan_kesimpulan : laporan_kesimpulan,
            laporan_caption : laporan_caption_arr,

            pengesahan_semak_nama_pegawai : pengesahan_semak_nama_pegawai,
            pengesahan_semak_jawatan : pengesahan_semak_jawatan,
            pengesahan_semak_bahagian : pengesahan_semak_bahagian,
            pengesahan_semak_tarikh : pengesahan_semak_tarikh,
            pengesahan_sah_nama_pegawai : pengesahan_sah_nama_pegawai,
            pengesahan_sah_jawatan : pengesahan_sah_jawatan,
            pengesahan_sah_bahagian : pengesahan_sah_bahagian,
            pengesahan_sah_tarikh : pengesahan_sah_tarikh

        }).then(function (response) {
            window.location.href = "status_report.html";
        }).catch(function (err) {
            alert("Please insert all essential details.");
            console.log(err);
        });

}

function theimage(){
    var filename = document.getElementById('img_this').value;
    document.getElementById('imgHere').innerHTML = filename.replace("C:\\fakepath\\", "");
}

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

//-----------------------------------------------------TABLE-----------------------------------------------------//

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

        cell1.innerHTML = mukasauk_terdekat + "<input type='hidden' value='"+ mukasauk_terdekat +"' name='muka_sauk'/>";
        cell2.innerHTML = mukasauk_no + "<input type='hidden' value='"+ mukasauk_no +"' name='jarak_muka_sauk'/>";
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

        cell1.innerHTML = lra_terdekat + "<input type='hidden' value='"+ lra_terdekat +"' name='loji_rawatan_air'/>";
        cell2.innerHTML = lra_no + "<input type='hidden' value='"+ lra_no +"' name='jarak_loji_rawatan_air'/>";
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

    cell1.innerHTML = utama2_bahagian + "<input type='hidden' value='"+ utama2_bahagian +"' name='bahagian_pegawai_hadir'/>";
    cell2.innerHTML = utama2_unit + "<input type='hidden' value='"+ utama2_unit +"' name='unit_pegawai_hadir'/>";
    //cell3.innerHTML = utama2_nama_pegawai + "<input type='hidden' value='"+ utama2_nama_pegawai +"' name='nama_pegawai_hadir'/>";
    cell3.innerHTML = utama2_nama_pegawai + '<input type="hidden" value="'+ utama2_nama_pegawai +'" name="nama_pegawai_hadir"/>';
    cell4.innerHTML = utama2_jawatan + "<input type='hidden' value='"+ utama2_jawatan +"' name='jawatan_pegawai_hadir'/>";
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
        //var lra_terdekat = document.getElementById("aduan_loji_rawatan_terdekat").value;
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

//-------------------------------------------------BADGE-------------------------------------------------------//


var db = new PouchDB('luas');

    db.allDocs({
        include_docs: true,
        attachments: true
    }).then(function (result) {

        if(result.total_rows>0){

            var badge = document.createElement("SPAN");
            badge.className = 'badge';
            badge.innerHTML = result.total_rows;
            document.getElementById("noti_badge").appendChild(badge);

            for(var i=0;i<result.total_rows;i++){

                var lab = document.createElement("LABEL");

                lab.innerHTML = "<label>"+ result.rows[i].doc._id +"<br>"+ result.rows[i].doc.current_date +"</label> <label style='background-color: orange;color: white; float: right;'>Pending</label> <hr>";
                document.getElementById("noti_list").appendChild(lab);
            }
        }

        else{
            //...do nothing...
        }
    
    }).catch(function (err) { console.log(err); });


//---------------------------------Filter Select Option-----------------------------------------//




//---------------------------------Camera-----------------------------------------//


let app = {
    init: function(){
        document.getElementById('take_photo').addEventListener('click', app.takephoto);
    },
    takephoto: function(){
        let opts = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            correctOrientation: true,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetHeight: 150,
            saveToPhotoAlbum: true
            //targetWidth: 300,
        };
        
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function(imgURI){
        //document.getElementById("img_here").style.display = "block";
        document.getElementById("msg").style.display = "block";
        document.getElementById('msg').textContent = imgURI;
        document.getElementById('photo').src = imgURI;
        
    },
    wtf: function(msg){
        document.getElementById('msg').textContent = msg;
    }
};

document.addEventListener('deviceready', app.init);


function onLoad() {
document.addEventListener("deviceready", onDeviceReady, false);
}


function onDeviceReady() {
console.log("Now safe to use device APIs");
}






















