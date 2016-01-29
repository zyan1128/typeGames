window.onload=function(){
	var dazi1=document.getElementById('dazi1'),
		jishi=document.getElementById('jishi'),
		jians=document.getElementsByClassName('jian'),
		bord=document.getElementById('bord'),
		fen=document.getElementById('fen'),
		miao=document.getElementById('miao'),
		hmiao=document.getElementById('hmiao'),
		suijishu,kaiguan=true,delet,timerId,timerId2,timerIda,timerIdb,timerIdc,
		index1=1,aa=1,bb=1,cc=1;
	
	for (var i = 0; i < 60; i++) {
		var jian=document.createElement('div');
		jian.setAttribute('class','jian');
		dazi1.appendChild(jian);
		if (Math.random()>0.5) {
			suijishu=Math.floor(Math.random()*26)+65;
		}else{
			suijishu=Math.floor(Math.random()*26)+97;
		}
		jian.innerHTML=String.fromCharCode(suijishu);
	}
	document.onkeydown=function(e){
		if (kaiguan) {
			timerIda=setInterval(function(){
				hmiao.innerHTML=aa%60;
				aa++;
			},1000/60);
			timerId1b=setInterval(function(){
				miao.innerHTML=bb%60+':';
				bb++;
			},1000);
			timerIdc=setInterval(function(){
				fen.innerHTML=cc+':';
				cc++;
			},60000);
			kaiguan=false;
		}
		delet=String.fromCharCode(e.keyCode);
		
		if (e.shiftKey) {
			delet=delet.toLowerCase();
		}
		if (delet==jians[0].innerHTML) {
			dazi1.removeChild(jians[0]);
		}
		if (jians.length==0) {
			alert(fen.innerHTML+miao.innerHTML+hmiao.innerHTML);
			location.reload();
		}
	};
};