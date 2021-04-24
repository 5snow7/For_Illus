function hex(t,len){
for(let j=0;j<6;j++){
t.fd(len);t.rt(60);
}
}

function rowHex(t,len,n){
	for(let j=0;j<n;j++){
		hex(t,len);t.rt(120);t.fd(len);t.lt(60);t.fd(len);
		t.lt(60);
	}
	for(let k=0;k<n;k++){
	t.lt(120);t.fd(len);t.rt(60);
     t.fd(len);t.rt(60);	
	}
	}
	
function tesHex(t,len,n,m){
	for(let j=0;j<m;j++){
	rowHex(t,len,n);t.rt(120);t.fd(len);t.rt(60);
    t.fd(len);t.lt(60);t.fd(len);t.rt(180);	
	}
}
 
function poly(t,len,nside){
for(let j=0;j<nside;j++){
t.fd(len);t.rt(360/nside);
}
}

function rowPoly(t,len,nside,nrow){
	for(let j=0;j<nrow;j++){
		poly(t,len,nside);t.rt(180-(360/nside));
		//t.c.fillText(360-360/nside, 30,30+20*j);
		for(let j=0;j<nside/2-1;j++){
		t.fd(len);t.lt(360/nside);
	}
}
	for(let k=0;k<nrow;k++){     t.lt(180-360/nside);
	for(let j=0;j<nside/2-1;j++){
	t.fd(len);t.rt(360/nside);}
}}
	
	
function tesPoly(t,len,nside,nrow,nums){
	let cnt=1;
	if(nside==6||nside==8){cnt=1;}
	if(nside==10||nside==12){cnt=2;}
	if(nside==14||nside==16){cnt=3;}
	if(nside==18||nside==20){cnt=4;}
	t.c.fillText(cnt,20,20);
	for(let j=0;j<nums;j++){
	rowPoly(t,len,nside,nrow);
	
	t.rt(180-(360/nside));
	for(let k=0;k<cnt;k++){t.fd(len);t.lt(360/nside);}
	t.rt(180-(360/nside));
	//t.rt(360-30/nside);
	
	for(let j=0;j<cnt;j++){t.fd(len);t.lt(360/nside);}
    t.fd(len);t.rt(180); 
}
}
 
function duoPoly(t,len1,len2,ang1,ang2){
let cnt=1;
do{
	t.vec(cnt*ang1,len1);
	t.vec(cnt*ang2,len1);
    cnt++;
}while((ang1*cnt%360!=0&&ang2*cnt%360!=0)||cnt<50);

}	