//fungsi button + dan -
jQuery(function(){
  var j = jQuery; //variable untuk menggunakan jquery
  var addInput = '#kuantitas'; // bagian yang berubah saat di tekan tombol
  var addInput2 = '#kuantitas2'; // bagian yang berubah saat di tekan tombol
  var n = 1; // value pertama
  var m = 1; //value pertama

  j(addInput).val(n); //assign value ke bagian yang mau di ubah
  j(addInput2).val(m); //assign value ke bagian yang mau di ubah

  //fungsi + dan -
  j('#plus').on('click', function(){
    j(addInput).val(++n); //penambahan value jika tekan +
  })

  j('#min').on('click', function(){

    if (n >= 2) {
      j(addInput).val(--n); //pengurangan value jika tekan -
    } else {

    }
  });

  j('#plus2').on('click', function(){
    j(addInput2).val(++m); //penambahan value jika tekan +
  })

  j('#min2').on('click', function(){

    if (m >= 2) {
      j(addInput2).val(--m); //pengurangan value jika tekan -
    } else {

    }
  });
});

$(document).ready(function(){
  var a = parseInt($('#harga0').val(), 10); //variable menampung harga barang 1
  var b = parseInt($('#harga1').val(), 10); // variable menampung harga barang 2
  var sum = a + b; //total harga
  $("#total").val(sum); //assign ke form total harga barang
  var c = parseInt($('#ongkir').val(), 10); //variable menampung ongkir
  var plus = sum + c;//total harga + ongkir
  $("#all").val(plus); //assign total semua ke form total pembelanjaan

  //fungsi perhitungan harga
  $('#plus').click(function () {
    var q = parseInt($('#kuantitas').val(), 10); //variable menampung jumlah barang 1
    var b = parseInt($('#harga1').val(), 10); // variable menampung harga barang 2
    var times = a * q; //jumlah harga barang 1
    var sum = times + b; //total harga
    $("#harga0").val(times); //assign jumlah harga barang 1
    $("#total").val(sum); //assign ke form total harga barang
    var all = parseInt($('#total').val(), 10); //variable menampung total harga barang
    var y = all + c; //total harga + ongkir
    $("#all").val(y); //assign total semua ke form total pembelanjaan
  })

  $('#plus2').click(function () {
    var q = parseInt($('#kuantitas2').val(), 10); //variable menampung jumlah barang 2
    var a = parseInt($('#harga0').val(), 10); // variable menampung harga barang 1
    var times = b * q; //jumlah harga barang 2
    var sum = times + a;//total harga
    $("#harga1").val(times);//assign jumlah harga barang 2
    $("#total").val(sum);//assign ke form total harga barang
    var all = parseInt($('#total').val(), 10);//variable menampung total harga barang
    var y = all + c;//total harga + ongkir
    $("#all").val(y);//assign total semua ke form total pembelanjaan
  })

  $('#min').click(function () {
    var q = parseInt($('#kuantitas').val(), 10);//variable menampung jumlah barang 1
    var b = parseInt($('#harga1').val(), 10);// variable menampung harga barang 2
    var times = a * q;//jumlah harga barang 1
    var sum = times + b;//total harga
    $("#harga0").val(times);//assign jumlah harga barang 1
    $("#total").val(sum);//assign ke form total harga barang
    var all = parseInt($('#total').val(), 10);//variable menampung total harga barang
    var y = all + c;//total harga + ongkir
    $("#all").val(y);//assign total semua ke form total pembelanjaan
  })

  $('#min2').click(function () {
    var q = parseInt($('#kuantitas2').val(), 10);//variable menampung jumlah barang 2
    var a = parseInt($('#harga0').val(), 10);// variable menampung harga barang 1
    var times = b * q;//jumlah harga barang 2
    var sum = times + a;//total harga
    $("#harga1").val(times);//assign jumlah harga barang 2
    $("#total").val(sum);//assign ke form total harga barang
    var all = parseInt($('#total').val(), 10);//variable menampung total harga barang
    var y = all + c;//total harga + ongkir
    $("#all").val(y);//assign total semua ke form total pembelanjaan
  })
  //end fungsi perhitungan harga
});
