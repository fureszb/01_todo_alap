class MegjelenitSor {
  constructor(objektum, szuloELem) {
    this.tablaElem = szuloELem;
    this.objektum = objektum;
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.sor();
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    this.bezarElem = this.sorElem.children("td").children(".torol");
    this.vissza = objektum["kesz"];

    this.pipaElem.on("click", () => {
      if (this.vissza == true) {
        this.sorElem.css("background-color", "white");
        this.vissza = false;
        this.pipaElem.text("✅");
      } else {
        this.sorElem.css("background-color", "green");

        this.pipaElem.text("❌");
        this.vissza = true;
        }

      this.objektum["kesz"] = this.vissza;
      console.log(this.objektum["kesz"]);
    });
    this.bezarElem.on("click", () => {
      //if(confirm("Biztos törölni akarod?"))
      {
        this.#esemenyTrigger("torles");
      }
    });
  }
  sor() {
    let txt = "<tr>";
    for (const key in this.objektum) {
      txt += `<td>${this.objektum[key]}</td>`;
    }
    txt += `<td>
                        <button type="button" class="btn btn-danger kesz">✅</button>
                        <button type="button" class="btn btn-default torol">❌</button>
                    <td>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }
  #esemenyTrigger(torles) {
    const esemenyem = new CustomEvent(torles, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default MegjelenitSor;
