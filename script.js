var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function eliminarIcono(index) {
  iconos.splice(index, 1);
  imprimirToodsLosIconos();
}
function mostrarIcono(icono, index) {
  var addIcono = document.getElementById('iconos_list');
  addIcono.insertAdjacentHTML('beforeend',
    `<li class="icon_container" onclick="mostrarIconoPrincipal('` + iconos.icono + `')">
    <i class="close_icon fas fa-times" onclick="eliminarIcono()"></i>
    <i class="`+ iconos.icono + `"></i>
    <div class="label">`+ iconos.icono + `</div>
  </li>`);
}
function añadirIcono() {
  var nombre = document.getElementById("icon_input").value;
  if (nombre.length < 1) {
    alert("tienes que ingresar un nombre");
  }
  else {
    iconos.push(nombre);
  }
  imprimirTodo();
}
function imprimirTodo() {
  document.getElementById("icons_list").innerHTML = "";
  iconos.forEach(mostrarIcono);
}
imprimirTodo();