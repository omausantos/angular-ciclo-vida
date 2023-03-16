import { Component } from "@angular/core";
import { Item } from "./interfaces/iItem";
import { ListaDeCompraService } from "./service/lista-de-compra.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app-lista-de-compras";
  public listaItens!: Array<Item>;

  constructor(private listaDeCompraService: ListaDeCompraService) {
    this.listaItens = listaDeCompraService.getListaDeCompra();
  }
}
