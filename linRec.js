let hLen=1/Math.sqrt(2);

function HDs(t,size,lev,p){
if(lev==0){t.fd(size);}
else{
t.lt(45*p);HDs(t,size*hLen,lev-1,1);
t.rt(90*p);HDs(t,size*hLen,lev-1,-1);
t.lt(45*p)
}
}

function SD(t,size,lev,p){
if(lev==0){t.fd(size);}
else{
t.lt(60*p);SD(t,size/2,lev-1,-1);
t.rt(60*p);SD(t,size/2,lev-1,1);
t.rt(60*p);SD(t,size/2,lev-1,-1);
t.lt(60*p);
}
}

let con=(3+Math.sqrt(5))/2;

function pentG(t,len,lev){
	if(lev==0){t.fd(len);}
  else{t.lt(36);
  pentG(t,len/con,lev-1);t.lt(72);
  pentG(t,len/con,lev-1);t.rt(144);
  pentG(t,len/con,lev-1);t.rt(72);
  pentG(t,len/con,lev-1);t.lt(72);
  pentG(t,len/con,lev-1);t.lt(72);
  pentG(t,len/con,lev-1);t.rt(36);
}
}







function hilBert(t,len,lev,p){
	if(lev==0){}
	else{
    t.lt(p*90);hilBert(t,len,lev-1,-1*p);t.fd(len);
    t.rt(p*90);hilBert(t,len,lev-1,p);t.fd(len);
    hilBert(t,len,lev-1,p);t.rt(p*90);t.fd(len);
    hilBert(t,len,lev-1,-1*p);t.lt(p*90);
	}
}












function arcR(t,len,fill){
	t.lt(90);
	for(let j=0;j<180;j++){
	t.fd(len);t.rt(1);	
	}
	t.lt(90);
}

function arcL(t,len,fill){
	t.rt(90);
	for(let j=0;j<180;j++){
	t.fd(len);t.lt(1);	
	}
	t.rt(90);
}

function arcRandom(t,len,fill){
	if(Math.random()<=.5){arcL(t,len);}
	else{arcR(t,len);}
}

function kochR(t,len,lev){
	if(lev==0){t.fd(len);}
	else{
	kochR(t,len/2,lev-1);t.rt(60);	
	kochR(t,len/2,lev-1);t.lt(120);
	kochR(t,len/2,lev-1);t.rt(60);
	kochR(t,len/2,lev-1);
	}
}

function kochL(t,len,lev){
	if(lev==0){t.fd(len);}
	else{
	kochL(t,len/2,lev-1);t.lt(60);	
	kochL(t,len/2,lev-1);t.rt(120);
	kochL(t,len/2,lev-1);t.lt(60);
	kochL(t,len/2,lev-1);
	}
}

function koch(t,len,lev,p){
	if(p>0){kochL(t,len,lev,p);}
else{kochR(t,len,lev,p);}
}

function hilKoch(t,len,lev,p){
	if(lev==0&&p<0){kochR(t,len,3);}
	if(lev==0&&p>0){kochL(t,len,3);}
	else{
    t.lt(p*90);hilKoch(t,len,lev-1,-1*p);t.fd(len);
    t.rt(p*90);hilKoch(t,len,lev-1,p);t.fd(len);
    hilKoch(t,len,lev-1,p);t.rt(p*90);t.fd(len);
    hilKoch(t,len,lev-1,-1*p);t.lt(p*90);
	}
}

function hilB(t,len,lenK,lev,levK,p){
	if(lev==0){}
	else{
    t.lt(p*90);hilB(t,len,lenK,lev-1,levK,-1*p);koch(t,len,levK,p);
    t.rt(p*90);hilB(t,len,lenK,lev-1,levK,p);koch(t,len,levK,p);
    hilB(t,len,lenK,lev-1,levK,p);t.rt(p*90);koch(t,len,levK,p);
    hilB(t,len,lenK,lev-1,levK,-1*p);t.lt(p*90);
	}
}

function nonGon3(lev3,t,len,lev,str){
	if(lev3==0){str(t,len,lev);}
	else{
		nonGon3(lev3-1,t,len/3,lev,str);t.lt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.rt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.rt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.rt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.lt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.lt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.lt(90);
		nonGon3(lev3-1,t,len/3,lev,str);t.rt(90);
		nonGon3(lev3-1,t,len/3,lev,str);
	}
}

let bL=Math.sqrt(2);

function barnsL(t,len,ang,lev){
if(lev<1){t.fd(2*len);t.bk(2*len);}
else{
	t.fd(len);barnsL(t,len/2,ang,lev-2);t.bk(len);
	t.lt(ang);barnsL(t,len/bL,ang,lev-1);t.rt(2*ang);
	barnsL(t,len/bL,ang,lev-1);t.lt(ang);
	
}
}	

function hexS(t,lenS,lenH,lev){
	for(let j=0;j<6;j++){
	tri(t,lenS,lev);t.fd(lenH);t.rt(60);	
	}
	}
	
	



	