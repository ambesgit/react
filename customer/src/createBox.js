for(var x=100,y=200;x<1000 && y<1000; x+=100,y+=100){
	console.log(".Container"+x+"x"+y+"{\n"+
	"text-align: center;\n"+
	"border-radius:1%\n;"+
	"border:1px solid gray ;"+
	"box-shadow:1px 1px 1px 1px ;\n"+
	"width:"+x+"px;\n"+
	"height:"+y+"px;\n}" 
	)
}