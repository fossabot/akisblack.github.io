function DiscordTag() {
    alert("Copied to your clipboard\nIf it didn't work, my tag is akisblack#6969");
    try {
        navigator.clipboard.writeText("akisblack#6969");
    }
    catch (err) {
        console.log("Clipboard copy failed, user agent:" + navigator.userAgent);
    } 
}

//Thanks to Odyssey346 for this