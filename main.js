(function(){
    const appID = 45;
    const fieldID = "f5517797";

    function main ()
    {
        if (!isTrigerKey(event)){
            return;
        }
        openKintoneSearchScreen();
    }

    function isTrigerKey(event)
    {
        return event.keyCode === 13;
    }
    
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

    document.onkeydown = main;
}());