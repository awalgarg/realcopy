var stat = document.getElementById("status");
var customTextArea = document.getElementById("custom-textarea");

chrome.tabs.executeScript({
	code: "window.getSelection().toString()",
}, function(selection) {
	customTextArea.value = selection;
	customTextArea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? "Successfully copied the following text!" : "Wasn't able to copy the text :/";
		stat.textContent = msg;
	} catch (err) {
		stat.textContent = "Wasn't able to copy the text :(";
	}
});

