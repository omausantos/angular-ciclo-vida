import { Item } from 'src/app/interfaces/iItem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() changeItem = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  public editar(): void {
    this.changeItem.emit(this.item);
  }

}
