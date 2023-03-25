import { Component, DoCheck, OnInit } from "@angular/core";
import { Item } from "./interfaces/iItem";
import { ListaDeCompraService } from "./service/lista-de-compra.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, DoCheck {
  title = "app-lista-de-compras";
  public listaItens!: Array<Item>;
  public itemParaEditar!: Item;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngDoCheck(): void {
    this.listaDeCompraService.updateListLocalStorage();
  }

  ngOnInit(): void {
    this.listaItens = this.listaDeCompraService.getListaDeCompra();
  }

  public setItemEdit(item: Item): void {
    this.itemParaEditar = item;
  }

  public clearList(): void {
    this.listaItens = []
  }
}
