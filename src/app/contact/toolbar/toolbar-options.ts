import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  isBackEnabled: boolean;
  title: string;
  actions: ToolbarAction[];

  constructor(isBackEnabled: boolean, title: string, actions: ToolbarAction[]) {
    this.isBackEnabled = isBackEnabled;
    this.title = title;
    this.actions = actions;
  }
}
