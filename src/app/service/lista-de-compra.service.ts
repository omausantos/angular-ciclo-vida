import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    // {
    //   "id": 1,
    //   "nome": "Queijo prato",
    //   "data": "Segunda-feira (31/10/2022) às 08:30",
    //   "comprado": false
    // },
  ]

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
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

  public editItem(item: Item, nome: string): void {
    item.nome = nome;
    const id = item.id;
    this.listaDeCompra.splice(Number(id)-1,1,item);
  }
  
}
