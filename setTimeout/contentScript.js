try {
    eval("(function() {console.log('foo');})();");
} catch(e) {
    console.error("Eval:", e);
}
setTimeout("(function() {console.log('foo');})();", 1000);
setInterval("(function() {console.log('foo');})();", 2000);