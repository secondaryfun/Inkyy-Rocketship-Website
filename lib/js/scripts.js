(function (){
    var all = document.getElementsByTagName("*");
    var ids = [];
    var classes = [];

    for (var i=0, max=all.length; i < max; i++) {
        var elem = all[i];
         if(elem.id) {
            if (!ids.includes(elem.id)) {
                ids.push(elem.id);
            }
         }

         if(elem.className) {
            var classList = elem.className.split(" ");
            Array.prototype.push.apply(classes, classList);
         }
    }
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    classes = classes.filter(onlyUnique);


    console.log("Ids:");
    ids.forEach(function(e){
        console.log(e);
    });

    console.log("Classes:");
    classes.forEach(function(e){
        console.log(e);
    });
})();
