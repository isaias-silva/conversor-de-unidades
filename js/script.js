//capturando os selects
var t1 = window.document.getElementById("tm");
var t2 = window.document.getElementById("tm2");
var a1 = window.document.getElementById("ar");
var a2 = window.document.getElementById("ar2");
var vol1 = window.document.getElementById("vol");
var vol2 = window.document.getElementById("vol2");
//capturando os inputs
var v1 = window.document.getElementById("v1");
var v2 = window.document.getElementById("v2");

//variavel de controle de unidade
var unidade = "tamanho";


//calculo
function calcule() {

    //garantindo que os valores não sejam negativos
    if (v1.value >= 0) {



        //se a unidade for tamanho
        if (unidade == "tamanho") {
            //variavel para a unidade de medida
            var uni1 = t1.value;
            var uni2 = t2.value;
            //variavel para o valor
            var va1 = v1.value;
            var va2 = v1.value;

            //variavel para a ordem de grandeza
            var x;
            var y;

            switch (uni1) {
                //tamanho

                case "km":
                    x = 1000;
                    break;
                case "hm":
                    x = 100;
                    break;
                case "dam":
                    x = 10;
                    break;
                case "m":
                    x = 1;
                    break;

                case "dm":
                    x = 0.1;
                    break;

                case "cm":
                    x = 0.01;
                    break;

                case "mm":
                    x = 0.001;
                    break;

                default:
                    x = 0;
                    break;
            }

            switch (uni2) {
                //tamanho
                case "km":
                    y = 1000;
                    break;
                case "hm":
                    y = 100;
                    break;
                case "dam":
                    y = 10;
                    break;
                case "m":
                    y = 1;
                    break;

                case "dm":
                    y = 0.1;
                    break;

                case "cm":
                    y = 0.01;
                    break;

                case "mm":
                    y = 0.001;
                    break;

                default:
                    y = 0;
                    break;
            }

            //formula do calculo
            va2 = (va1 * x) / y;

            //escrevendo os valores no input;
            v1.value = va1;
            v2.value = va2;
        } else if (unidade == "area") {
            uni1 = a1.value;
            uni2 = a2.value;
            var va1 = v1.value;
            var va2 = v1.value;

            switch (uni1) {
                case "km2":
                    x = 1000000;
                    break;
                case "hm2":
                    x = 10000;
                    break;
                case "dam2":
                    x = 100;
                    break;
                case "m2":
                    x = 1;
                    break;

                case "dm2":
                    x = 0.01;
                    break;

                case "cm2":
                    x = 0.0001;
                    break;

                case "mm2":
                    x = 0.000001;
                    break;

                default:
                    x = 0;
                    break;
            }

            switch (uni2) {
                //tamanho
                case "km2":
                    y = 1000000;
                    break;
                case "hm2":
                    y = 10000;
                    break;
                case "dam2":
                    y = 100;
                    break;
                case "m2":
                    y = 1;
                    break;

                case "dm2":
                    y = 0.01;
                    break;

                case "cm2":
                    y = 0.0001;
                    break;

                case "mm2":
                    y = 0.000001;
                    break;

                default:
                    y = 0;
                    break;
            }

            va2 = (va1 * x) / y;
            v1.value = va1;
            v2.value = va2;
        } else if (unidade == "volume") {
            uni1 = vol1.value;
            uni2 = vol2.value;
            var va1 = v1.value;
            var va2 = v1.value;


            switch (uni1) {
                case "km3":
                    x = 1000000000;
                    break;
                case "hm3":
                    x = 1000000;
                    break;
                case "dam3":
                    x = 1000;
                    break;
                case "m3":
                    x = 1;
                    break;

                case "dm3":
                    x = 0.001;
                    break;

                case "cm3":
                    x = 0.000001;
                    break;

                case "mm3":
                    x = 0.000000001;
                    break;

                default:
                    x = 0;
                    break;
            }

            switch (uni2) {
                //tamanho
                case "km3":
                    y = 1000000000;
                    break;
                case "hm3":
                    y = 1000000;
                    break;
                case "dam3":
                    y = 1000;
                    break;
                case "m3":
                    y = 1;
                    break;

                case "dm3":
                    y = 0.001;
                    break;

                case "cm3":
                    y = 0.000001;
                    break;

                case "mm3":
                    y = 0.000000001;
                    break;

                default:
                    y = 0;
                    break;
            }

            va2 = (va1 * x) / y;
            v1.value = va1;
            v2.value = va2;
        }
    } else { alert("digite um valor valido") }
}

function check(valu) {
    if (valu == "area") {
        unidade = "area";
        window.document.getElementById("ar").style.display = "inline-block";
        window.document.getElementById("ar2").style.display = "inline-block";
        window.document.getElementById("tm").style.display = "none";
        window.document.getElementById("tm2").style.display = "none";
        window.document.getElementById("vol").style.display = "none";
        window.document.getElementById("vol2").style.display = "none";
    }

    if (valu == "tamanho") {
        unidade = "tamanho";
        window.document.getElementById("tm").style.display = "inline-block";
        window.document.getElementById("tm2").style.display = "inline-block";
        window.document.getElementById("ar").style.display = "none";
        window.document.getElementById("ar2").style.display = "none";
        window.document.getElementById("vol").style.display = "none";
        window.document.getElementById("vol2").style.display = "none";
    }

    if (valu == "volume") {
        unidade = "volume";
        window.document.getElementById("vol").style.display = "inline-block";
        window.document.getElementById("vol2").style.display = "inline-block";
        window.document.getElementById("ar").style.display = "none";
        window.document.getElementById("ar2").style.display = "none";
        window.document.getElementById("tm").style.display = "none";
        window.document.getElementById("tm2").style.display = "none";
    }
}