import { Component, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  NodeConstraints,
  NodeModel,
} from '@syncfusion/ej2-angular-diagrams';

import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram: DiagramComponent;

  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 40,
      height: 40,
      offsetX: 20,
      offsetY: 120,
      // constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
      // tooltip: {
      //   content: 'Queries from the customer',
      //   position: 'TopRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node2',
      width: 40,
      height: 40,
      offsetX: 80,
      offsetY: 120,
      // constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
      // tooltip: {
      //   content: 'Queries from the customer',
      //   position: 'TopRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node3',
      width: 40,
      height: 40,
      offsetX: 140,
      offsetY: 120,
      // constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
      // tooltip: {
      //   content: 'Analysing the query',
      //   position: 'BottomRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node4',
      width: 40,
      height: 40,
      offsetX: 200,
      offsetY: 120,
    },
  ];

  @ViewChild('tooltip')
  public workCellTooltip: TooltipComponent;
  selectedNodeId: string;

  onDiagramClick(eventArgs) {
    if (!eventArgs || !eventArgs.element) return;
    if (this.diagram.selectedItems.nodes.length != 1) {
      this.workCellTooltip.close();
      return;
    }
    this.selectedNodeId = this.diagram.selectedItems.nodes[0].id;

    this.workCellTooltip.appendTo(`#${this.selectedNodeId}_groupElement`);
    this.workCellTooltip.open();
  }
}
