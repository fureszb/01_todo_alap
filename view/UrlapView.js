class Urlap {
  #adat = {
    tevekenyseg: "",
    hatarido: "",
    kesz: "",
  };
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem.append(`<form>
        <div class="form-group">
          <label for="tev">Tevékenység:</label>
          <input type="text" class="form-control" id="tev">
        </div>
        <div class="form-group">
        <label for="hat">Határidő:</label>
        <input type="date" id="hat" name="hat">
        </div>
        <button type="button" class="btn btn-success mentes">Mentés</button>
      </form>
      `);
    this.tevElem = $("#tev");
    this.hatElem = $("#hat");
    this.submitElem = $(".mentes");
    this.submitElem.on("click", () => {
      this.#adat.tevekenyseg = this.tevElem.val();
      this.#adat.hatarido = this.hatElem.val();
      this.#adat.kesz = "false";
      this.#esemenyTrigger();
      this.hatElem.val('');
      this.tevElem.val('');
    });
  }
  #esemenyTrigger() {
    const esemenyem = new CustomEvent("ujAdatHozzaAdas", { detail: this.#adat });
    window.dispatchEvent(esemenyem);
  }
}
export default Urlap;
