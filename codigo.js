//Declaracion de variables
let fecha, dia, diaMes, mesAnyo, any, data;

// En la variable fecha almacenamos la fecha completa del sistema
fecha = new Date();

// querySelector('div') selecciona todos los elementos <div> del documento HTML
// innerHTML asigna un nuevo valor al contenido del <div>
document.querySelector(".fecha").innerHTML = fecha;

// fecha.getDay() nos muestra el número de día de la semana
// Siendo 0 el domingo y 6 el sábado
dia = fecha.getDay();
switch (dia) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miércoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sábado";
    break;
}
document.querySelector("#dia").innerHTML = dia;

// Día del mes
diaMes = fecha.getDate();
document.querySelector("#diames").innerHTML = "/" + diaMes;

// Mes del año
// Devuelve un número, donde 0 es enero y 11 diciembre

mesAnyo = fecha.getMonth();
switch (mesAnyo) {
  case 0:
    mesAnyo = "Enero";
    break;
  case 1:
    mesAnyo = "Febrero";
    break;
  case 2:
    mesAnyo = "Marzo";
    break;
  case 3:
    mesAnyo = "Abril";
    break;
  case 4:
    mesAnyo = "Mayo";
    break;
  case 5:
    mesAnyo = "Junio";
    break;
  case 6:
    mesAnyo = "Julio";
    break;
  case 7:
    mesAnyo = "Agosto";
    break;
  case 8:
    mesAnyo = "Septiembre";
    break;
  case 9:
    mesAnyo = "Octubre";
    break;
  case 10:
    mesAnyo = "Noviembre";
    break;
  case 11:
    mesAnyo = "Diciembre";
    break;
}
document.querySelector("#mesanyo").innerHTML = "/" + mesAnyo;

// Obtener el número del año
any = fecha.getFullYear();
document.querySelector("#anyo").innerHTML = "/ " + any;

// Fecha Legible
document.querySelector("#fecha-legible").innerHTML =
  dia + " " + diaMes + " de " + mesAnyo + " de " + any;

// Obtener la hora local
document.querySelector("#hora").innerHTML =
  fecha.getHours() + " : " + fecha.getMinutes() + " h." + " ";
document.querySelector("#hora").innerHTML =
  fecha.getHours() + " : " + fecha.getMinutes() + " h." + " ";
document.querySelector("#hora").innerHTML =
  fecha.getHours() + " : " + fecha.getMinutes() + " h." + " ";
document.querySelector("#hora").innerHTML =
  fecha.getHours() + " : " + fecha.getMinutes() + " h." + " ";
document.querySelector("#hora").innerHTML =
  fecha.getHours() + " : " + fecha.getMinutes() + " h." + " / " + "COL";

/*==============animaciones===============*/













let mainAnimation = () => {
  TweenMax.staggerFrom(".nav > *", 3, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(".txt__header", 3, {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    // delay: 1
  });
};









let pageTran = () => {
  var tl = gsap.timeline();

  tl.to(".page-transition", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.8,
  });

  tl.to(".page-transition", {
    y: "-100%",
    delay: 0.5,
    duration: 0.3,
  });

  tl.set(".page-transition", {
    y: "-100%",
    opacity: 1,
  });
};









delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTran();
        await delay(1000);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
