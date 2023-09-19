import MegjelenitSor from "./MegjelenítSorView.js";

export class Megjelenit {
    #lista = [];
    constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem.append(`<table class="table table-bordered">
        <tbody class="tablazat">
        <thead>
      <tr>
        <th>Tevékenység</th>
        <th>Határidő</th>
      </tr>
    </thead>
        </tbody>
        </table>`);
    this.elem = $(".tablazat");
    this.tablazatbaIr();
  }
  tablazatbaIr(){
    let txt = "<tr>";
    this.#lista.forEach((elemek) => {
        new MegjelenitSor(elemek, this.elem);
       
    });
  }
 
}
export default Megjelenit;
