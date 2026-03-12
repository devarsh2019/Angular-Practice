import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pipe-child',
  standalone: false,
  templateUrl: './pipe-child.html',
  styleUrl: './pipe-child.scss',
})
export class PipeChild {
  @Input() data = { title: '', description: '' };
  @Output() saveClicked = new EventEmitter();
  onSave() {
    console.log('Save click :', this.data);
    this.saveClicked.emit(this.data);
  }
}
