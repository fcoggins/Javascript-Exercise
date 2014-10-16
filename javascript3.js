function return_duplicates(list){
    var matched = {};
    var new_list = []
    var n = 0;
    while (n < list.length){
        if (list[n] in matched){
            matched[list[n]] += 1;
        }else{
            matched[list[n]] = 1;
        }
        
        if (matched[list[n]] === 2) {
            new_list.push(list[n]);
        }
        n += 1;
    }
    

console.log(matched);
console.log(new_list);    
}
var mylist = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"]
return_duplicates(mylist)