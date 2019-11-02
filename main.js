(function(){
    const appID = 45;
    const fieldID = "f5517797";
    
    function getSelectedText()
    {
        return window.getSelection().toString();
    }

    function createSearchURL(keyword)
    {
        return "/k/" + appID + "/?q=" + fieldID + "%20like%20%22" + keyword + "%22";
    }

    function openKintoneSearchScreen()
    {
        const selectedText = getSelectedText();
        if (selectedText === ''){
            return;
        }
        const searchURL = createSearchURL(selectedText);
        window.open(searchURL, '_blank');
    }

    function makePopup(event)
    {
        closePopup();
        const selectedText = getSelectedText();
        if (selectedText === ''){
            return;
        }
        const popup = getPopupHTML(event.x, event.y + 60);      
        document.body.appendChild(popup);
    }

    function getPopupHTML(x, y)
    {
        const popup = document.createElement("button");
        popup.setAttribute("class", "kintone-search-popup");
        popup.setAttribute("title", "活動履歴を検索する");
        popup.onclick = openKintoneSearchScreen;
        popup.style.top = y + "px";
        popup.style.left = x + "px";
        return popup;
    }

    function closePopup()
    {
        const targetElements = document.getElementsByClassName('kintone-search-popup');
	    for (let i = 0; i < targetElements.length; i++) {
            targetElements[i].parentNode.removeChild(targetElements[i]);
        }
  
    }
    document.getElementsByClassName('mainarea')[0].onmouseup = makePopup;
}());