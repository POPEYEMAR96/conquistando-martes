//obtener la referencia del lienzo y almacenarlo en una variable.
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

/*definir el ancho y alto de la imagen del rover y almacenarlo dentro de
 variables*/
rover_width = 100;
rover_height = 90;
//carga la imagen de marte cerca instruccion: 
background_image = "mars.jpg";
//carga la imagen del rover instruccion: 
rover_image = "rover.png";

// posicion del rover (coordenadas) instruccion: 
rover_x =10;
 rover_y =10;


/*esta es la función add(); cuando se cargue el body para añadir una imagen de fondo de Marte y añadir la
imagen del rover*/

function add() {

    //define una variable con la imagen nueva instruccion:
	 background_imgTag = new Image();

	// establece la función para cargar esta variable instru:
	background_imgTag.onload = uploadBackground;

	// carga la imagen instru: 
	background_imgTag.src = background_image; 



	//define una variable para la imagen nueva instru:
	rover_imgTag = new Image();
    
    // establece la función para cargar esta variable instru: 
	rover_imgTag.onload = uploadrover;
	
    // carga la imagen instru: 
	rover_imgTag.src = rover_image;
}





//función uploadBackground, la cual se llama para subir la imagen del fondo.
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}



// la función uploadrover, se llama para subir la imagen del rover
function uploadrover() {
	//Establece la imagen del rover en el lienzo.
 ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height)
}


/*Añadir el código para controlar el rover. Utilizar el evento listener “keydown” para obtener el valor de la
tecla presionada*/
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	if (keyPressed=="38"){
		up();
	}
	if (keyPressed=="40"){
		down();
	}
	if (keyPressed=="37"){
		left();
	}	
	if (keyPressed=="39"){
		right();
	}
}




function up(){
if(rover_y>=0){
rover_y=rover_y-10;
uploadBackground();
uploadBackground();
}	
}

function down(){
	if(rover_y<=500){
		rover_y=rover_y+10;
		uploadBackground();
		uploadBackground();
		}
}

function left(){
	if(rover_x>=0){
		rover_x=rover_x-10;
		uploadBackground();
		uploadBackground();
		}	
}

function right(){
	if(rover_x<=700){
		rover_x=rover_x+10;
		uploadBackground();
		uploadBackground();
		}
}
	