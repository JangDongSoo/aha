// html canvas size 변경
// let mql = window.matchMedia("screen and (max-width: 640px)");
// if(mql.matches){
//   // canvas.width = 370, canvas.hight = 360;
// 	$('#canvas').css('width', 370);
// 	$('#canvas').css('height', 360);
// } else {
	
// }

// **************************************************
// window.addEventListener("load", () => {
// 	const canvas = document.querySelector("#canvas");
// 	const ctx = canvas.getContext("2d");

// 	canvas.height = 500;
// 	canvas.width = window.innerWidth;

// 	let painting = false;

// 	function startPosition(){
// 		painting = true;
// 	}
// 	function finishedPosition(){
// 		painting = false;
// 	}
// 	function draw(e){
// 		if(!painting) return;
// 		ctx.lineWidth = 4;
// 		ctx.lineCap = "round";

// 		ctx.lineTo(e.clientX, e.clientY);
// 		ctx.stroke();
// 	}
// 	canvas.addEventListener("mousedown", startPosition);
// 	canvas.addEventListener("mouseup", finishedPosition);
// 	canvas.addEventListener("mousemove", draw);

// })

// **************************************************

// window.onload = function () {
// 	var canvas = document.createElement ( 'canvas' );

// 	let mql = window.matchMedia("screen and (max-width: 640px)");
// 	if(!mql.matches){
// 	canvas.width = '500';
// 	canvas.height = '500';
// 	canvas.style.border = '1px solid #000000';
// 	canvas.style.position = 'absolute';
// 	canvas.style.left = '50%';
// 	canvas.style.top = '50%';
// 	canvas.style.margin = '-195px 0 0 -250px';
// 	} else {
// 		canvas.width = '350';
// 		canvas.height = '370';
// 		canvas.style.border = '1px solid #000000';
// 		canvas.style.position = 'absolute';
// 		canvas.style.justifyContent = 'center';
// 		canvas.style.alignContent = 'center';
// 		canvas.style.marginTop = '215px';
		
// 	}
	

// 	var color = document.createElement ( 'input' );
	
// 	var clear = document.createElement ( 'input' );
	
// 	document.body.appendChild( canvas );
// 	document.body.appendChild( color );
// 	document.body.appendChild( clear );
	
// 	color.style.top = canvas.offsetTop + 'px';
// 	clear.style.top = canvas.offsetTop + 'px';
	
// 	var ctx = canvas.getContext ( '2d' );
	
// 	var mouseUp = true;
	
// 	function draw () {
// 		canvas.onmousemove = function ( event ) {
// 			if( !mouseUp ) {
// 				event = event || window.event;
// 				var x = event.clientX - canvas.offsetLeft,
// 				y = event.clientY - canvas.offsetTop;
// 				ctx.lineTo ( x, y );
// 				ctx.stroke ();
// 			}
// 		}
// 	}
	
// 	canvas.onmousedown = function ( event ) {
// 		ctx.beginPath ();
// 		ctx.strokeStyle = color.value;
// 		mouseUp = !mouseUp;
// 		event = event || window.event;
// 		var StartX = event.clientX - canvas.offsetLeft,
// 		StartY = event.clientY - canvas.offsetTop;
// 		ctx.moveTo ( StartX, StartY );
// 		draw ();
// 	}
	
// 	canvas.onmouseup = function () {
// 		mouseUp = !mouseUp;
// 		ctx.closePath ();
// 	}
	
// 	clear.onclick = function () {
// 		ctx.clearRect( 0, 0, canvas.width, canvas.height );
// 	}

// 	window.onresize = function () {
// 		color.style.top = canvas.offsetTop + 'px';
// 		clear.style.top = canvas.offsetTop + 'px';
// 	}
	
// }

// **************************************************

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 500;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 3;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let ratio = canvas.height / canvas.width;
function draw(e) {
  if (!isDrawing) return; 
  
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  } 
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('dblclick', (e) => {
  hue = 0;
  isDrawing = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//Prints canvas to pdf

// const buttonPrint = document.querySelector('#print');

// buttonPrint.addEventListener('click',   printPDF);

// function printPDF() {
//   html2canvas($("#draw"), {
      
//     onrendered: function(canvas){         
//         var imgData = canvas.toDataURL('image/png');              
//         var doc = new jsPDF('p', 'px');
//         var width = doc.internal.pageSize.width;    
//         var height = doc.internal.pageSize.height;
//         height = ratio * width;
//         doc.addImage(imgData, 'PNG', 0, 32, width, height);
//         doc.save('your-art.pdf');
//       }
//   });
// }	