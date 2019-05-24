import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ToolbarOptions} from './toolbar-options';
import {ToolbarService} from '../services/toolbar-service';

@Component({
  selector: 'dtca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private  toolbar: ToolbarService) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onMenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
  }
}
