/**
 * 判斷作業系統，下載RC語音，並跳出訊息視窗
 */
function Download() {
	windows = (navigator.userAgent.indexOf("Windows",0) != -1)?1:0;
	android = (navigator.userAgent.indexOf("Android",0) != -1)?1:0;
	if (windows) {
		if(confirm("您的作業系統是 Windows，是否要下載「RC語音 v8.1.8 - 三欄版」？")) {
			location.href = 'http://update.raidtalk.com.tw/rctc/pc/raidcall_tw_v8.1.8_i.exe';
		}
	} else if (android) {
		if(confirm("您的作業系統是 Android，是否要下載「RC語音2.0 - 手機版」？")) {
			location.href = 'https://play.google.com/store/apps/details?id=com.raidcall';
		}
	} else {
		alert("您的作業系統無法使用RC語音，請使用支援的作業系統下載RC語音 (Windows 或 Android)。");
	}
}