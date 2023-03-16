import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  private createItem(name: string): Item {
    const index = this.listaDeCompra.length + 1;
    const newItem: Item = {
      id: index,
      nome: name,
      data: new Date().toLocaleTimeString('pt-BR'),
      comprado: false
    }
    return newItem;
  };

  public includeItemForList(name: string): void {
    const newItem = this.createItem(name);
    this.listaDeCompra.push(newItem);
  }
  
}
