import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public nomeItem!: string;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }


  public submit(): void {
    this.listaDeCompraService.includeItemForList(this.nomeItem);
    this.clearInput();
  }

  private clearInput(): void {
    this.nomeItem = '';
  }
}
