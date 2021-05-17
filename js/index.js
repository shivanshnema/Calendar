window.onload = initAll;

var yr,dt,dtc,dtt,dttt,mntd,el,el2,bckyear,fwdyear,mainpage,cdb,jtd,va;
function initAll(){
	el = document.getElementById('col1');
	el2 = document.getElementById('col2');
	dtt = new Date();
	dtc = new Date();
	dt = new Date();
	mainpage = document.getElementById('main_page');
	cdb = document.getElementById('cdbtn');
	jtd = document.getElementById('jtdbtn');
	va = document.getElementById('vabtn');
	yr = document.getElementById('year_head');
	
	bckyear = document.getElementById('bck');
	fwdyear = document.getElementById('fwd');
	yr.innerHTML = dt.getFullYear();
	bckyear.onclick = goBack;
	fwdyear.onclick = goUp;
	cdb.onclick = currDt;
	jtd.onclick = jmpDt;
	yr.ondblclick = chgYear;
	va.onclick = showAllMonths;
	monthsDays();
	mntd = document.getElementsByClassName('months_list');
	for(n=0;n<mntd.length;n++){
		mntd[n].onclick = zob;
	}
	
}

function showAllMonths(){
	monthsDays();
	for(n=0;n<mntd.length;n++){
		mntd[n].onclick = zob;
	}
}

var elm;
function chgYear(){
	yr.innerHTML = '';
	elm = document.createElement('input');
	elm.className = 'inp_box';
	elm.id = 'chg_year';
	yr.appendChild(elm);
	var elm2 = document.createElement('input');
	elm2.type = 'button';
	elm2.className = 'btn';
	elm2.value = 'OK'
	elm2.id = 'chg_yearb';
	yr.appendChild(elm2);
	elm2.onclick = subYear;
	
}

function subYear(){
	yr.innerHTML = dt.getFullYear(dt.setFullYear(elm.value));
	monthsDays();
	for(n=0;n<mntd.length;n++){
		mntd[n].onclick = zob;
	}
}

function currDt(){
	tcount = dtc.getMonth();
	dt.setFullYear(dtc.getFullYear());
	yr.innerHTML = dt.getFullYear();
	zob();

}
var da='',mn='',y='';
function jmpDt(){
	var gdt = document.getElementById('inp');
	var str = gdt.value;
	gdt.value = '';
	for(i=0;i<str.length;i++){
		if(i<2)
			da = da + str[i];
		else if(i<5 && i>2)
			mn = mn + str[i];
		else if(i<str.length && i>5)
			y = y + str[i];
	}

	dt.setFullYear(y);
	tcount = mn - 1;
	yr.innerHTML = dt.getFullYear();
	zob();
	
}

function goBack(){	
	yr.innerHTML = dt.getFullYear(dt.setFullYear(dt.getFullYear()-1));
	monthsDays();
	for(n=0;n<mntd.length;n++){
		mntd[n].onclick = zob;
	}
}

function goUp(){
	yr.innerHTML = dt.getFullYear(dt.setFullYear(dt.getFullYear()+1));
	monthsDays();
	for(n=0;n<mntd.length;n++){
		mntd[n].onclick = zob;
	}
}
var elm = null;
var elm1 = null;
var elm2 = null;
var elm3 = null;
var elm4 = null;
var elm5 = null;
var id;
function monthsDays(){
	el.innerHTML = "";
	el2.innerHTML = "";
	var mnths = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
	var dys = ['S','M','T','W','Th','F','Sa'];
	var count = 0;
	var ceTble = document.getElementById('row2');
	ceTble.innerHTML = "";
	mainpage.style.backgroundImage = "url('images/summer.jpg')";
	for(i=0;i<3;i++){
		elm = document.createElement('tr');
		for(j=0;j<4;j++){
			elm1 = document.createElement('td');
			elm2 = document.createElement('span');
			elm2.innerHTML = mnths[count++];
			elm1.className = 'months_list';
			elm1.index = count-1;
			elm3 = document.createElement('table');
			elm3.className = 'days_table';
			var count2 = 1;
			dttt = new Date(dt.getFullYear(),count,0);
			for(l=0;l<7;l++){
				dtt.setDate(1);
				dtt.setFullYear(dt.getFullYear());
				dtt.setMonth(count-1);
				elm4 = document.createElement('tr');
				for(m=0;m<7;m++){
					if(count2 <= dttt.getDate()){
						elm5 = document.createElement('td');
						if(l == 0){
							elm5.innerHTML = dys[m];
						}
						else{
							if(count2 == 1){
								
								if(dtt.getDay() == m){
									elm5.innerHTML = count2++;
								}
							}
							else{
								elm5.innerHTML = count2++;
							}
						}

						if(count2-1 == dtc.getDate() && (count-1) == dtc.getMonth() && dt.getFullYear() == dtc.getFullYear()){
							elm5.id = 'tdate';
						}
					
						
						elm5.className = 'days_list';
						elm4.appendChild(elm5);
					}
				}
				elm3.appendChild(elm4);
				
			}
					
			elm1.appendChild(elm2);
			elm1.appendChild(elm3)
			elm.appendChild(elm1);
		}

		ceTble.appendChild(elm);

	}
	bckyear.onclick = goBack;
	fwdyear.onclick = goUp;
	
}

var count,tcount,hel;
function zob(){
	
	var mnths = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
	var dys = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	if(this == window){
		count = tcount;
	}
	else{
		count = this.index;
	}

	if(mnths[count] == 'January' || mnths[count] == 'Feburary'){
		mainpage.style.backgroundImage = "url('images/winter.jpg')";

	}
	if(mnths[count] == 'March' || mnths[count] == 'April'){
		mainpage.style.backgroundImage = "url('images/spring.jpg')";

	}
	if(mnths[count] == 'May' || mnths[count] == 'June'){
		mainpage.style.backgroundImage = "url('images/summer2.jpg')";

	}
	if(mnths[count] == 'July' || mnths[count] == 'August'){
		mainpage.style.backgroundImage = "url('images/monsoon.jpg')";

	}
	if(mnths[count] == 'September' || mnths[count] == 'October'){
		mainpage.style.backgroundImage = "url('images/autumn.jpg')";

	}
	if(mnths[count] == 'November' || mnths[count] == 'December'){
		mainpage.style.backgroundImage = "url('images/prewinter.jpg')";

	}


	var ceTble = document.getElementById('row2');
	ceTble.innerHTML = '';
	for(i=0;i<1;i++){
		elm = document.createElement('tr');
		for(j=0;j<1;j++){
			elm1 = document.createElement('td');
			elm2 = document.createElement('span');
			elm2.innerHTML = mnths[count];
			elm1.className = 'months_listb';
			elm3 = document.createElement('table');
			elm3.className = 'days_table2';
			var count2 = 1;
			dttt = new Date(dt.getFullYear(),count+1,0);
			for(l=0;l<7;l++){
				dtt.setDate(1);
				dtt.setFullYear(dt.getFullYear());
				dtt.setMonth(count);
				elm4 = document.createElement('tr');
				for(m=0;m<7;m++){
					if(count2 <= dttt.getDate()){
						elm5 = document.createElement('td');
						if(l == 0){
							elm5.innerHTML = dys[m];
						}
						else{
							if(count2 == 1){
								
								if(dtt.getDay() == m){
									elm5.innerHTML = count2++;
								}
							}
							else{
								elm5.innerHTML = count2++;
							}
						}
						if(count2-1 == dtc.getDate() && count == dtc.getMonth() && dt.getFullYear() == dtc.getFullYear()){
							elm5.id = 'tdate';
						}

						if((da != '') && (da == count2-1) && (count == mn-1) && (dt.getFullYear() == y)){
							
							elm5.id = 'tdate';
							da = '';
						}
						
						elm5.className = 'days_list2';
						elm4.appendChild(elm5);
					}
				}
				elm3.appendChild(elm4);
				
			}
					
			elm1.appendChild(elm2);
			elm1.appendChild(elm3)
			elm.appendChild(elm1);
		}
		ceTble.appendChild(elm);
	}
	
	el.innerHTML = '<img src="images/left.png" class="icon" id="lbut"/>';
	el2.innerHTML = '<img src="images/right.png" class="icon" id="rbut" />';

	bckyear.onclick = goBackB;
	fwdyear.onclick = goUpB;

	el3 = document.getElementById('lbut');
	el4 = document.getElementById('rbut');

	el3.onclick = goBackMB;
	el4.onclick = goUpMB;

}

function goBackB(){
	yr.innerHTML = dt.getFullYear(dt.setFullYear(dt.getFullYear()-1));
	tcount = count;
	zob();
}

function goUpB(){
	yr.innerHTML = dt.getFullYear(dt.setFullYear(dt.getFullYear()+1));
	tcount = count;
	zob();
}

function goBackMB(){
	tcount = count - 1;
	if(count == 0){
		goBackB();
		tcount = 11;
	}
	zob();
}

function goUpMB(){
	tcount = count + 1;
	if(count == 11){
		goUpB();
		tcount = 0;
	}
	zob();
}

