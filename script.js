var $botonGuardar = document.querySelector("#btImprimir");
var $pedido = document.querySelector("#pedido");
var $fecha = document.querySelector("#fecha");
var $cuenta = document.querySelector("#cuenta");
var $nombre1 = document.querySelector("#nombre1");
var $apellido = document.querySelector("#apellido");
var $direccion = document.querySelector("#direccion");
var $telefono = document.querySelector("#telefono");
var $barrio = document.querySelector("#barrio");
var $empresa = document.querySelector("#empresa");
var $telefono2 = document.querySelector("#telefono2");
var $direccion2 = document.querySelector("#direccion2");
var $cargo = document.querySelector("#cargo");
var $antiguo = document.querySelector("#antiguo");
var $sueldo = document.querySelector("#sueldo");
var $email = document.querySelector("#email");
var $fCobro = document.querySelector("#fCobro");
var $nNino = document.querySelector("#nNino");
var $ciudad = document.querySelector("#ciudad");
var $cNomb = document.querySelector("#cNomb");
var $cApell = document.querySelector("#cApell");
var $cEmpresa = document.querySelector("#cEmpresa");
var $ctele = document.querySelector("#ctele");
var $cDir = document.querySelector("#cDir");
var $cCargo = document.querySelector("#cCargo");
var $cAntig = document.querySelector("#cAntig");
var $cSueldo = document.querySelector("#cSueldo");
var $cmarca = document.querySelector("#cmarca");
var $cModelo = document.querySelector("#cModelo");
var $cPlaca = document.querySelector("#cPlaca");
var $rNomb1 = document.querySelector("#rNomb1");
var $rp1 = document.querySelector("#r-p-1");
var $rTele1 = document.querySelector("#rTele1");
var $rTeleres1 = document.querySelector("#rTele-res1");
var $rNomb2 = document.querySelector("#rNomb2");
var $rp2 = document.querySelector("#r-p-2");
var $rTele2 = document.querySelector("#rTele2");
var $rTeleres2 = document.querySelector("#rTele-res2");
var $rNomb3 = document.querySelector("#rNomb3");
var $rp3 = document.querySelector("#r-p-3");
var $rTele3 = document.querySelector("#rTele3");
var $rTeleres3 = document.querySelector("#rTele-res3");
var $rNomb4 = document.querySelector("#rNomb4");
var $rp4 = document.querySelector("#r-p-4");
var $rTele4 = document.querySelector("#rTele4");
var $rTeleres4 = document.querySelector("#rTele-res4");
var $oCuotas = document.querySelector("#oCuotas");
var $oValor = document.querySelector("#oValor");
var $cedula1 = document.querySelector("#cedula1");
var $cc1 = document.querySelector("#cc1");
var $ce1 = document.querySelector("#ce1");
var $relacionista = document.querySelector("#relacionista");
var $colaborador = document.querySelector("#colaborador");
var $director = document.querySelector("#director");
var $organizador = document.querySelector("#organizador");
var $rematador = document.querySelector("#rematador");
var $cedula2 = document.querySelector("#cedula2");
var $cc2 = document.querySelector("#cc2");
var $ce2 = document.querySelector("#ce2");
var $cedula3 = document.querySelector("#cedula3");
var $cedula4 = document.querySelector("#cedula4");
let $inputs = document.querySelector(".inputs");
const formulario = document.getElementById(".formulario");

function ejecFunc(){
    if(validarCampos()===true){
        alert(validarCampos());
        guardarPdf();
        enviarFormulario();
    }else{
        alert("Debes llenar todos los campos requeridos")
    }
}
$botonGuardar.onclick = ejecFunc;



function guardarPdf(){
    $botonGuardar.style.visibility = "hidden";

    $pedido.style.background = "transparent";
    $fecha.style.background = "transparent";
    $cuenta.style.background = "transparent";
    $nombre1.style.background = "transparent";
    $apellido.style.background = "transparent";
    $direccion.style.background = "transparent";
    $telefono.style.background = "transparent";
    $barrio.style.background = "transparent";
    $empresa.style.background = "transparent";
    $telefono2.style.background = "transparent";
    $direccion2.style.background = "transparent";
    $cargo.style.background = "transparent";
    $antiguo.style.background = "transparent";
    $sueldo.style.background = "transparent";
    $email.style.background = "transparent";
    $fCobro.style.background = "transparent";
    $nNino.style.background = "transparent";
    $ciudad.style.background = "transparent";
    $cNomb.style.background = "transparent";
    $cApell.style.background = "transparent";
    $cEmpresa.style.background = "transparent";
    $ctele.style.background = "transparent";
    $cDir.style.background = "transparent";
    $cCargo.style.background = "transparent";
    $cAntig.style.background = "transparent";
    $cSueldo.style.background = "transparent";
    $cmarca.style.background = "transparent";
    $cModelo.style.background = "transparent";
    $cPlaca.style.background = "transparent";
    $rNomb1.style.background = "transparent";
    $rp1.style.background = "transparent";
    $rTele1.style.background = "transparent";
    $rTeleres1.style.background = "transparent";
    $rNomb2.style.background = "transparent";
    $rp2.style.background = "transparent";
    $rTele2.style.background = "transparent";
    $rTeleres2.style.background = "transparent";
    $rNomb3.style.background = "transparent";
    $rp3.style.background = "transparent";
    $rTele3.style.background = "transparent";
    $rTeleres3.style.background = "transparent";
    $rNomb4.style.background = "transparent";
    $rp4.style.background = "transparent";
    $rTele4.style.background = "transparent";
    $rTeleres4.style.background = "transparent";
    $oCuotas.style.background = "transparent";
    $oValor.style.background = "transparent";
    $cedula1.style.background = "transparent";
    $cc1.style.background = "transparent";
    $ce1.style.background = "transparent";
    $relacionista.style.background = "transparent";
    $colaborador.style.background = "transparent";
    $director.style.background = "transparent";
    $organizador.style.background = "transparent";
    $rematador.style.background = "transparent";
    $cedula2.style.background = "transparent";
    $cc2.style.background = "transparent";
    $ce2.style.background = "transparent";
    $cedula3.style.background = "transparent";
    $cedula4.style.background = "transparent";

    window.print();

    $botonGuardar.style.visibility = "visible";
    $pedido.style.background = "white";
    $fecha.style.background = "white";
    $cuenta.style.background = "white";
    $nombre1.style.background = "white";
    $apellido.style.background = "white";
    $direccion.style.background = "white";
    $telefono.style.background = "white";
    $barrio.style.background = "white";
    $empresa.style.background = "white";
    $telefono2.style.background = "white";
    $direccion2.style.background = "white";
    $cargo.style.background = "white";
    $antiguo.style.background = "white";
    $sueldo.style.background = "white";
    $email.style.background = "white";
    $fCobro.style.background = "white";
    $nNino.style.background = "white";
    $ciudad.style.background = "white";
    $cNomb.style.background = "white";
    $cApell.style.background = "white";
    $cEmpresa.style.background = "white";
    $ctele.style.background = "white";
    $cDir.style.background = "white";
    $cCargo.style.background = "white";
    $cAntig.style.background = "white";
    $cSueldo.style.background = "white";
    $cmarca.style.background = "white";
    $cModelo.style.background = "white";
    $cPlaca.style.background = "white";
    $rNomb1.style.background = "white";
    $rp1.style.background = "white";
    $rTele1.style.background = "white";
    $rTeleres1.style.background = "white";
    $rNomb2.style.background = "white";
    $rp2.style.background = "white";
    $rTele2.style.background = "white";
    $rTeleres2.style.background = "white";
    $rNomb3.style.background = "white";
    $rp3.style.background = "white";
    $rTele3.style.background = "white";
    $rTeleres3.style.background = "white";
    $rNomb4.style.background = "white";
    $rp4.style.background = "white";
    $rTele4.style.background = "white";
    $rTeleres4.style.background = "white";
    $oCuotas.style.background = "white";
    $oValor.style.background = "white";
    $cedula1.style.background = "white";
    $cc1.style.background = "white";
    $ce1.style.background = "white";
    $relacionista.style.background = "white";
    $colaborador.style.background = "white";
    $director.style.background = "white";
    $organizador.style.background = "white";
    $rematador.style.background = "white";
    $cedula2.style.background = "white";
    $cc2.style.background = "white";
    $ce2.style.background = "white";
    $cedula3.style.background = "white";
    $cedula4.style.background = "white";    
}

function enviarFormulario(){
    /*$botonGuardar.addEventListener("click", () => {
        alert("prueba");
    })*/

    fetch('https://sheet.best/api/sheets/2a78aa3b-bb70-4d14-bddc-0fed465394da',{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "pedido": $pedido.value,
            "fecha": $fecha.value,
            "cuenta": $cuenta.value,
            "nombre1": $nombre1.value,
            "apellido": $apellido.value,
            "direccion": $direccion.value,
            "telefono": $telefono.value,
            "barrio": $barrio.value,
            "empresa": $empresa.value,
            "telefono2": $telefono2.value,
            "direccion2": $direccion2.value,
            "cargo": $cargo.value,
            "antiguo": $antiguo.value,
            "sueldo": $sueldo.value,
            "email": $email.value,
            "fCobro": $fCobro.value,
            "nNino": $nNino.value,
            "ciudad": $ciudad.value,
            "cNomb": $cNomb.value,
            "cApell": $cApell.value,
            "cEmpresa": $cEmpresa.value,
            "cTele": $ctele.value,
            "cDir": $cDir.value,
            "cCargo": $cCargo.value,
            "cAntig": $cAntig.value,
            "cSueldo": $cSueldo.value,
            "cmarca": $cmarca.value,
            "cModelo": $cModelo.value,
            "cPlaca": $cPlaca.value,
            "rNomb1": $rNomb1.value,
            "r-p-1": $rp1.value,
            "rTele1": $rTele1.value,
            "rTele-res1": $rTeleres1.value,
            "rNomb2": $rNomb2.value,
            "r-p-2": $rp2.value,
            "rTele2": $rTele2.value,
            "rTele-res2": $rTeleres2.value,
            "rNomb3": $rNomb3.value,
            "r-p-3": $rp3.value,
            "rTele3": $rTele3.value,
            "rTele-res3": $rTeleres3.value,
            "rNomb4": $rNomb4.value,
            "r-p-4": $rp4.value,
            "rTele4": $rTele4.value,
            "rTele-res4": $rTeleres4.value,
            "oCuotas": $oCuotas.value,
            "oValor": $oValor.value,
            "cedula1": $cedula1.value,
            "cc1": $cc1.value,
            "ce1": $ce1.value,
            "relacionista": $relacionista.value,
            "colaborador": $colaborador.value,
            "director": $director.value,
            "organizador": $organizador.value,
            "rematador": $rematador.value,
            "cedula2": $cedula2.value,
            "cc2": $cc2.value,
            "ce2": $ce2.value,
            "cedula3": $cedula3.value,
            "cedula4": $cedula4.value,
                       
        })
    });
}

function validarCampos(){
    if($pedido.value.length === 0 || $nombre1.value.length === 0 || apellido.value.length === 0 || $direccion.value.length === 0 || telefono.value.length === 0 || $email.value.length === 0 || $ciudad.value.length === 0 || $cedula1.value.length === 0 || $relacionista.value.length === 0 || $colaborador.value.length === 0){
        return false;
    }else{
        return true;
    }
}