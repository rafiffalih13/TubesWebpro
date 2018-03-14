jQuery(function(){
var j = jQuery;
var addInput = '#kuantitas';
var addInput2 = '#kuantitas2';
var n = 1;
var m = 1;

j(addInput).val(n);
j(addInput2).val(m);

j('#plus').on('click', function(){
  j(addInput).val(++n);
})

j('#min').on('click', function(){

  if (n >= 2) {
    j(addInput).val(--n);
  } else {

  }
});

j('#plus2').on('click', function(){
  j(addInput2).val(++m);
})

j('#min2').on('click', function(){

  if (m >= 2) {
    j(addInput2).val(--m);
  } else {

  }
});
});

$(document).ready(function(){
  var a = parseInt($('#harga').val(), 10);
  var b = parseInt($('#harga1').val(), 10);
  var sum = a + b;
  $("#total").val(sum);
  var c = parseInt($('#ongkir').val(), 10);
  var plus = sum + c;
  $("#all").val(plus);

  $('#plus').click(function () {
    var q = parseInt($('#kuantitas').val(), 10);
    var b = parseInt($('#harga1').val(), 10);
    var times = a * q;
    var sum = times + b;
    $("#harga").val(times);
    $("#total").val(sum);
    var all = parseInt($('#total').val(), 10);
    var y = all + c;
    $("#all").val(y);
  })

  $('#plus2').click(function () {
    var q = parseInt($('#kuantitas2').val(), 10);
    var a = parseInt($('#harga').val(), 10);
    var times = b * q;
    var sum = times + a;
    $("#harga1").val(times);
    $("#total").val(sum);
    var all = parseInt($('#total').val(), 10);
    var y = all + c;
    $("#all").val(y);
  })

  $('#min').click(function () {
    var q = parseInt($('#kuantitas').val(), 10);
    var b = parseInt($('#harga1').val(), 10);
    var times = a * q;
    var sum = times + b;
    $("#harga").val(times);
    $("#total").val(sum);
    var all = parseInt($('#total').val(), 10);
    var y = all + c;
    $("#all").val(y);
  })

  $('#min2').click(function () {
    var q = parseInt($('#kuantitas2').val(), 10);
    var a = parseInt($('#harga').val(), 10);
    var times = b * q;
    var sum = times + a;
    $("#harga1").val(times);
    $("#total").val(sum);
    var all = parseInt($('#total').val(), 10);
    var y = all + c;
    $("#all").val(y);
  })

});
