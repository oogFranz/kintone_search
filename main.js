(function(){
    const appID = 45;
    const fieldID = "f5517797";

    function main ()
    {
        if (!isTrigerKey(event)){
            return;
        }
        window.open(createSearchURL(), '_blank');
    }

    function isTrigerKey(event)
    {
        return event.keyCode === 13;
    }
    
    function getSelectedText()
    {
        return window.getSelection().toString();
    }

    function createSearchURL()
    {
        const selectedText = getSelectedText();
        return "/k/" + appID + "/?q=" + fieldID + "%20like%20%22" + selectedText + "%22";
    }

    document.onkeydown = main;
}());