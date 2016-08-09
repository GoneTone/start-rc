/**
 * 判斷作業系統，進入語音群
 * @param {Number} sid 群ID
 */
function goChannel(sid) {
	windows = (navigator.userAgent.indexOf("Windows",0) != -1)?1:0;
	android = (navigator.userAgent.indexOf("Android",0) != -1)?1:0;
	if (windows) {
		location.href = 'rctw://enterServer/?sid=' + sid;
	} else if (android) {
		alert("Android 版RC語音無法直接開啟進入語音群，請手動搜尋，群ID：" + sid);
	} else {
		alert("您的作業系統無法使用RC語音，請使用支援的作業系統 (Windows 或 Android)。");
	}
}