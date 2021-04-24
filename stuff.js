function sq(t,len){
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
}

function polyExp(t,len,n,nt){
	for(let j=0;j<n;j++){
	t.fd(len);t.rt(360*nt/n);
	}
}	

function runPolyExp(){
	t.set1(250,450,-90);
    let val=document.getElementById("t1").value;
	let ar=val.split(',');
	polyExp(t,ar[0],ar[1],ar[2]);
}

function chgTot(){
	tot=document.getElementById("text1").value;
	let ar=tot.split(',');
	l=ar[0];n=ar[1];r=ar[2];total=ar[3];
	start();
}

function rowS(t,len,n){
	//t.rt(90);
	for(let j=0;j<n;j++){
	sq(t,len);t.rt(90);t.fd(len);t.lt(90);
	}
	t.rt(90);t.bk(len*n);t.lt(90);
}

function stairSq(t,len,num){
	for(let j=0;j<num;j++){
rowS(t2,len,j+1);t2.bk(len);
}
t2.fd(num*len);
	}
	
/*function poly(t,len,num){
	for(let j=0;j<num;j++){
		t.fd(len);t.rt(360/num);
	}
}*/

function v1(t,len,lev){
	if(len<15){let x=t.xpos();let y=t.ypos();
	let d=t.dir();chaos(t,5);t.set1(x,y,d);}
	else{t.rt(30);t.fd(len);v1(t,2*len/3,lev-1);t.bk(len);t.lt(60);t.fd(len);v1(t,2*len/3,lev-1);t.bk(len);t.rt(30);
	}
}
	
function chaos(t,n){
	if(n<2){}
	else{
	t.fd(10);t.rt(Math.random()*180);	
	chaos(t,n-1);
	}
}

/*function setLevel(){
 let strIn=	document.getElementById("text1").value;
let vecSplit=strIn.split(',');
lev=vecSplit[0];lenIn=vecSplit[1];
document.getElementById("par2").innerHTML ="WTlev is "+lenIn+" and len is "+lev;
 }*/

function triRec(t,len,lev){
	if(lev==0){}
	else{
	t.fd(len);triRec(t,len/2,lev-1);t.rt(120);	
	t.fd(len);triRec(t,len/2,lev-1);t.rt(120);
	t.fd(len);triRec(t,len/2,lev-1);t.rt(120);
	}
}

function triRec2(t,len,lev){
	if(lev==1){}
	else{
	triRec2(t,len/2,lev-1);t.fd(len);t.rt(120);	
	triRec2(t,len/2,lev-1);t.fd(len);t.rt(120);
	triRec2(t,len/2,lev-1);t.fd(len);t.rt(120);
	}
}




	
	
	
