import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "[recursive]",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.css"]
})
export class TreeViewComponent {
  @Input() level: number;
  @Input() children: any;
  @Input() parent: any;

  @Input() search: (any) => Observable<any>;

  self = this;
  open(item) {
    item.isOpen = !item.isOpen;
    if (!item.children) {
      item.loading="...."
      this.search(item.id).subscribe(res=>{
        item.loading=null
        item.children=res;
      })
    }
  }
}
