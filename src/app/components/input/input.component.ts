import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Item } from "src/app/interfaces/iItem";
import { ListaDeCompraService } from "src/app/service/lista-de-compra.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit, OnChanges {
  public nomeItem!: string;
  @Input() itemParaEditarInput!: Item;
  public textButton: string = 'Salvar item';

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const firstChange = changes["itemParaEditarInput"].firstChange;
    if (!firstChange) {
      this.editItem();
    }
  }

  private editItem(): void {
    this.nomeItem = this.itemParaEditarInput.nome;
    this.textButton = 'Editar item';
  }

  ngOnInit(): void {}

  public submit(): void {
    if (this.itemParaEditarInput) {
      this.listaDeCompraService.editItem(this.itemParaEditarInput,this.nomeItem);
    } else {
      this.listaDeCompraService.includeItemForList(this.nomeItem);

    }
    this.clearInput();
  }

  private clearInput(): void {
    this.nomeItem = "";
    this.itemParaEditarInput!;
  }
}
