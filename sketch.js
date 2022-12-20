
function start(){
clear_Can(); 
t.c.font="25px Forte";
t.set1(50,250,-90);
ch=event.key;

t.c.fillText("Key that is hit is "+ch,30,30);
//rowPoly(t,40,10,5);t.fd(80);
tesPoly(t,l,n,r,total);//nside must be even
t.Col="red";
t.set1(900,300,0);
duoPoly(t,60,100,60,135);
//poly(t,50,10);t.fd(100);
//rowHex(t,50,8);t.fd(100);
//tesHex(t,40,12,5);
/*for(let j=0;j<(tot);j++){
sq(t,j*10);t.Col="rgb("+10*j+",0,"+10*j+")";
t.c.fillText("test "+j+"  "+tot,20,30+25*j);
}
stairSq(t,25,tot);*/
}

function reStart1(){
 ch=event.key;
clear_Can();
t.c.font="25px Eras Bold ITC";
switch(ch){
    case 'a':
	t.set1(10,550,0);t.Col="blue";
	kochL(t,150,5);
	t.c.font="30px";
	t.c.fillText(alph[2],40,40);
	break;
	case 'b':
	t.c.font="30px Eras Bold ITC";
	t.c.fillText(" testing font  "+ch,40,60);
	t.set1(450,250,-90);
	duoPoly(t,100,30,120,45);
	break;
	case 'c':
	t.set1(400,500,-90);t.Col="orange";
	v1(t,150,5);
	break;
	case 'd':
	t.set1(450,400,-90);t.Col="rgb(200,50,200)";
	t.c.font="25px Eras Bold ITC";
	t.c.fillText("HeighWay's Dragon",30,30);
    HDs(t,350,14,1);
	break;
	case 'e':
	t.set1(550,650,-90);t.Col="rgb(200,50,200)";
	t.c.fillText("SierPinski's Dragon",30,30);
    SD(t,600,8,1);
	break;
	case 'f':
	t.set1(550,650,-90);t.Col="rgb(20,50,200)";
	t.c.fillText("McWorter's Pentigree"+con,30,30);
	pentG(t,700,6);
    break;
	case 'g':
	t.set1(1050,650,-90);t.Col="rgb(150,200,100)";
    t.c.fillText("Hilbert's Curve"+con,30,30);
	hilBert(t,20,5,1);
	break;
	case 'h':
	t.set1(1050,650,-90);t.Col="rgb(250,0,100)";
    t.c.fillText("koch on Hilbert Curve",30,30);
	hilB(t,15,10,4,3,1);
	break;
	case 'i':
	t.set1(500,700,-90);t.Col="rgb(200,100,20)";
    t.c.fillText("non3 w kochL",30,30);
	nonGon3(3,t,200,3,kochL);
	break;
	case 'j':
	t.set1(100,600,-60);t.Col="rgb(20,150,200)";
    t.c.fillText("sierp triangle",30,30);
	triRec2(t,650,8);
	break;
	case 'k':
	t.set1(350,450,-60);t.Col="rgb(20,50,200)";
    t.c.fillText("sierp triangle",30,30);
	triRec(t,250,7);
	break;
	case 'l':
	t.set1(450,550,-90);t.Col="rgb(200,150,200)";
    t.c.fillText("Barnsley Leaf",30,30);
	barnsL(t,250,Math.PI*15,12);
	break;
	
	case 'm':
	t.set1(300,250,-90);t.Col="rgb(200,150,200)";
    t.c.fillText("new recursion",30,30);
	sqRec(t,7,7);t.fd(50);
	t.c.fillText(fibOne(t,9),300,100);
	default:
	t.c.font="25px Arial";
	t.c.fillText("finding default",100,100);
	break;
	}
}

function showKochL(){
   if(chbox1.checked){
   clear_Can();   
   t.set1(500,700,-90);
    t.c.fillText("testing1",300,30);
   nonGon3(3,t,200,3,kochL);}
   else{clear_Can();}
}

function showKochR(){
   if(chbox2.checked){
   clear_Can();   
   t.set1(500,700,-90);
    t.c.fillText("testing2",300,30);
   nonGon3(3,t,200,3,kochR);}
   else{clear_Can();}
}

function showarcRandom(){
   if(chbox3.checked){
   clear_Can();   
   t.set1(500,700,-90);
    t.c.fillText("testing3",300,30);
   nonGon3(3,t,6,3,arcRandom);}
   else{clear_Can();}
}


function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
