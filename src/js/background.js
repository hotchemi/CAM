chrome.contextMenus.create({
  "title" : "Copy as markdown",
  "type"  : "normal",
  "contexts" : ["all"],
  "onclick" : function(info, tab){
    if (info.mediaType === "image") {
      var text = "![image](" + info.srcUrl + ")";
      saveToClipboard(text);
    } else {
      var text = "[" + tab.title + "](" + tab.url + ")";
      saveToClipboard(text);
    }
  }
});

function saveToClipboard(str) {
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";
  document.body.appendChild(textArea);
  textArea.value = str;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
