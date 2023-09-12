import { TODOLIST, TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

$(function(){
    let szuloElem = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloElem);
    console.log("teszteles");
    $(window).on("torles", event=>{
        event.detail.sorElem.remove();
    })
       
    
});