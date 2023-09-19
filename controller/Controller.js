import Model from "../model/model.js";
import Megjelenit from "../view/MegjelenitView.js";
import MegjelenitSor from "../view/MegjelenítSorView.js";
import Urlap from "../view/UrlapView.js";

class Controller {
  constructor() {
    let szuloElem = $(".tarolo");
    let form = $(".ujadat");

    const obj = {
      tevekenyseg: "",
      hatarido: "",
    };
    const MODEL = new Model();
    new Megjelenit(MODEL.getList(), szuloElem);
    console.log("teszteles");
    $(window).on("torles", (event) => {
      event.detail.sorElem.remove();
    });
    new Urlap(obj, form);
    $(window).on("ujAdatHozzaAdas", (event) => {
      console.log(event.detail);
      MODEL.ujAdat(event.detail);
      console.log(MODEL.getList());
      szuloElem.empty();
      new Megjelenit(MODEL.getList(), szuloElem);
      //console.log(event.detail)
      //new MegjelenitSor(event.detail, elem);
      
      
    });

    

    let elem = $(".tablazat");
  }
}
export default Controller;
