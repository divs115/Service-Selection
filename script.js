$(init);
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = [];
}
var totalCost = 0;
var name;
var price;
var row=0;

function init() {
  $('.item').draggable({
    revert: 'invalid',
    cursor: 'move'
  });
  $('.cart').droppable({
    onDragEnter: function(e, source) {
      $(source).draggable('options').cursor = 'auto';
    },
    onDragLeave: function(e, source) {
      $(source).draggable('options').cursor = 'not-allowed';
    },
    onDrop: function(e, source) {
      name = $(source).find('p:eq(0)').html();
      price = $(source).find('p:eq(1)').html();
      addProduct();
      source.remove();
      for (var i = 0; i < data.length; i++) {
        data[i][0] = name;
        data[i][1] = document.getElementById('quantity').value;
        data[i][2] = price;
      }
    }
  });
}

function addProduct() {
  price = parseFloat(price.split('$')[1]);
  row++;
  $('#cartcontent').append(
    "<tr id=row><td>" + name + "</td><td><input type='number' id='quantity' value='1' style='width:100%;'></td><td><button onclick='updateQuantity()' style='width:100%';>Ok</button></td><td align='center'>" + '$' + price + "</td><td><button onclick='removeProduct(this)' style='width:100%;'>x</button></td>"
  );
}

function removeProduct(el) {
  var tr = $(el).closest('tr');
  tr.remove();
}

function myFunction() {
  var x = document.getElementsByClassName('Biostatistics');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x = document.getElementsByClassName('ClinicalLaboratory');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x = document.getElementsByClassName('Something');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
}
document.getElementById('Biostatistics').onclick = function() {
  myFunction();
  var x = document.getElementsByClassName('Biostatistics');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
};
document.getElementById('ClinicalLaboratory').onclick = function() {
  myFunction();
  var x = document.getElementsByClassName('ClinicalLaboratory');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
};
document.getElementById('Something').onclick = function() {
  myFunction();
  var x = document.getElementsByClassName('Something');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
};