/** /

Author: Alessandro Mondragon
Alias: rurigk | gravyeth
Repository: https://github.com/rurigk/AjaxTester
Licence: MIT 

/**/

function AXInit(){
	AXStyles();
	var l = "<div id='AjaxTester' >"+
			"	<div>"+
			"		<div class='ax-ov ax-tb'>"+
			"			<div class='ax-l' style='margin-top: 4px;'><b>&nbsp;AjaxTester</b></div>"+
			"			<div class='ax-r'>"+
			"				Method: "+
			"				<select id='ax-method'>"+
			"					<option value='POST'>POST</option>"+
			"					<option value='GET'>GET</option>"+
			"				</select>&nbsp;&nbsp;&nbsp;"+
			"				Async: <input type='checkbox' id='AXAsync' checked>"+
			"				&nbsp;&nbsp;&nbsp;<button onclick='AXSend()'>Send</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>"+
			"	<div class='ax-section'>"+
			"		<div class='ax-pad'>"+
			"			Request URL: "+
			"		</div>"+
			"		<div class='ax-pad'>"+
			"			<input id='ax-url'>"+
			"		</div>"+
			"	</div>"+
			"	<div class='ax-section'>"+
			"		<div style='overflow: hidden;padding: 5px 0px 15px 0px;'>"+
			"			Request URL: "+
			"			<button class='ax-addbtn' onclick='AXAddHeader()'>Add</button>"+
			"		</div>"+
			"		<div class='ax-headers'>"+
			"			<div class='ax-header-cont'>"+
			"				<div class='ax-s50'>"+
			"					Header: "+
			"					<input class='ax-header' value='Content-Type'>"+
			"				</div>"+
			"				<div class='ax-s50'>"+
			"					Value: "+
			"					<input class='ax-value' value='text/html'>"+
			"				</div>"+
			"				<div class='ax-rm' onclick='AXRemoveHeader(this)'>X</div>"+
			"			</div>"+
			"		</div>"+
			"	</div>"+
			"	<div class='ax-section'>"+
			"		<div class='ax-pad'>"+
			"			<div class='ax-l' style='margin-top: 4px;'>Request Data:</div>"+
			"			<div class='ax-r'>"+
			"				Example: <b>foo=bar&amp;guy=cool</b>"+
			"			</div>"+
			"		</div>"+
			"		<div class='ax-pad'>"+
			"			<textarea id='ax-body'></textarea>"+
			"		</div>"+
			"	</div>"+
			"</div>";
			document.body.insertAdjacentHTML('beforeend',l);
}
function AXStyles(){
	var s = "<style type='text/css'>"+
			"	#AjaxTester{"+
			"		display: none;"+
			"		position: absolute;"+
			"		right: 2px;"+
			"		bottom: 0px;"+
			"		width: 720px;"+
			"		height: 500px;"+
			"		border: 1px solid #AAA;"+
			"		font-family: arial;"+
			"		box-shadow: 0 1px 2px rgba(0,0,0,0.25);"+
			"		border-radius: 5px 5px 0px 0px;"+
			"		overflow: hidden;"+
			"	}"+
			"	.ax-ov{"+
			"		overflow: hidden;"+
			"	}"+
			"	.ax-l{float: left;}"+
			"	.ax-r{float: right;}"+
			"	.ax-pad{"+
			"	}"+
			"	.ax-tb{"+
			"		padding: 5px;"+
			"		background-color: #1F2C42;"+
			"		color: #FFF;"+
			"	}"+
			"	#ax-url{"+
			"		width: 100%;"+
			"	}"+
			"	#ax-body{"+
			"		width: 100%;"+
			"		min-height: 100px;"+
			"	}"+
			"	.ax-section{"+
			"		padding: 10px;"+
			"		border-bottom: 1px solid rgba(0,0,0,0.1);"+
			"		min-height: 25px;"+
			"	}"+
			"	.ax-addbtn{"+
			"		color: #fff;"+
			"		font-size: 13px;"+
			"		font-weight: bold;"+
			"		padding: 4px 13px;"+
			"		text-shadow: 0 1px 1px rgba(0,0,0,0.4);"+
			"		border: 1px solid #4e6270;"+
			"		background-color: #4e6270;"+
			"		cursor: pointer;"+
			"		border-radius: 10px;"+
			"		float: right;"+
			"		margin-right: 10px;"+
			"	}"+
			"	.ax-header-cont{"+
			"		overflow: hidden;"+
			"		margin-bottom: 10px;"+
			"	}"+
			"	.ax-s50{"+
			"		width: calc(50% - 15px);"+
			"		float: left;"+
			"	}"+
			"	.ax-rm{"+
			"		width: 25px;"+
			"		height: 25px;"+
			"		float: right;"+
			"		background-color: red;"+
			"		border-radius: 8px;"+
			"		text-align: center;"+
			"		box-sizing: border-box;"+
			"		padding-top: 3px;"+
			"		color: #FFF;"+
			"		font-weight: bold;"+
			"		cursor: pointer;"+
			"	}"+
			"</style>";
			document.head.insertAdjacentHTML('beforeend',s);
}
function AXAddHeader(){
	var l = "<div class='ax-header-cont'>"+
			"	<div class='ax-s50'>"+
			"		Header: "+
			"		<input class='ax-header' value=''>"+
			"	</div>"+
			"	<div class='ax-s50'>"+
			"		Value: "+
			"		<input class='ax-value' value=''>"+
			"	</div>"+
			"	<div class='ax-rm' onclick='AXRemoveHeader(this)'>X</div>"
			"</div>";
	document.querySelector('.ax-headers').insertAdjacentHTML('beforeend',l);
}
function AXRemoveHeader(e){
	e.closest('.ax-header-cont').remove();
}
function AXShow(){document.getElementById('AjaxTester').style.display = "block";}
function AXHide(){document.getElementById('AjaxTester').style.display = "none";}

var AXOPENED = false;

window.addEventListener('load',AXInit);
window.addEventListener('keypress',function(e){
	if(e.key == "Pause"){
		if(AXOPENED){
			AXHide();
			AXOPENED = false;
		}else{
			AXShow();
			AXOPENED = true;
		}
	}
})
window.addEventListener('keypress',function(e){
	console.log(e.keyCode)
})

function AXSend(){
	var method = document.getElementById('ax-method').value;
	var url = document.getElementById('ax-url').value;
	var body = document.getElementById('ax-body').value;
	var async = document.getElementById('AXAsync').checked;
	var headersElements = document.querySelectorAll('.ax-header-cont');
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				console.log(httpRequest.responseText);
			} else {
				console.log('There was a problem with the request.');
			}
		}
	}
	httpRequest.open(method, url,async);
	for (var i = 0; i < headersElements.length; i++) {
		var headername = headersElements[i].querySelector('.ax-header').value;
		var headervalue = headersElements[i].querySelector('.ax-value').value;
		if(headername != ""){
			httpRequest.setRequestHeader(headername,headervalue);
		}
	};
	httpRequest.send((method == "POST")? body:null);
}