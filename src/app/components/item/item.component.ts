import { Item } from "src/app/interfaces/iItem";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ListaDeCompraService } from "src/app/service/lista-de-compra.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() changeItem = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnInit(): void {}

  public editar(): void {
    this.changeItem.emit(this.item);
  }

  public editComprado(): void {
    this.item.comprado = !this.item.comprado;
    this.listaDeCompraService.editItemComplete(this.item);
  }
}
