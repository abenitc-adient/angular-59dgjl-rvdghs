import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  DiagramComponent,
  NodeConstraints,
  NodeModel,
  SnapConstraints,
  SnapSettingsModel,
  ConnectorModel,
  SelectorModel,
} from '@syncfusion/ej2-angular-diagrams';

import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

/**
 * Sample for tooltip
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram: DiagramComponent;

  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 60,
      height: 60,
      offsetX: 35,
      offsetY: 120,
      // tooltip: {
      //   content: 'Queries from the customer',
      //   position: 'BottomRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node2',
      width: 75,
      height: 70,
      offsetX: 140,
      offsetY: 120,
      // tooltip: {
      //   content: 'Whether the provided information is enough?',
      //   position: 'BottomRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node3',
      width: 60,
      height: 50,
      offsetX: 270,
      offsetY: 120,
      // tooltip: {
      //   content: 'Analysing the query',
      //   position: 'BottomRight',
      //   relativeMode: 'Object',
      // },
    },
    {
      id: 'node4',
      width: 75,
      height: 70,
      offsetX: 370,
      offsetY: 120,
      tooltip: {
        content: 'proceed to validate?',
        position: 'BottomRight',
        relativeMode: 'Object',
      },
    },
  ];

  public getNodeDefaults(obj: NodeModel): NodeModel {
    obj.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
    return obj;
  }

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
