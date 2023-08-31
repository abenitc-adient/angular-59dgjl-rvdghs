import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DiagramComponent,
  NodeModel,
  ConnectorModel,
} from '@syncfusion/ej2-angular-diagrams';
import {
  DiagramConstraints,
  NodeConstraints,
  SelectorConstraints,
  SelectorModel,
  SnapConstraints,
  SnapSettingsModel,
} from '@syncfusion/ej2-diagrams';

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
  public snapSettings: SnapSettingsModel = {
    constraints: SnapConstraints.None,
  };

  public nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 60,
      height: 60,
      offsetX: 35,
      offsetY: 120,
      annotations: [
        {
          content: 'Customer query',
          offset: { x: 0.5, y: 1 },
          margin: { top: 15 },
        },
      ],
      tooltip: {
        content: 'Queries from the customer',
        position: 'BottomRight',
        relativeMode: 'Object',
      },
      shape: {
        type: 'Bpmn',
        shape: 'Event',
        event: { event: 'Start', trigger: 'Message' },
      },
    },
    {
      id: 'node2',
      width: 75,
      height: 70,
      offsetX: 140,
      offsetY: 120,
      annotations: [{ content: 'Enough details?', offset: { x: 0.5, y: 0.5 } }],
      tooltip: {
        content: 'Whether the provided information is enough?',
        position: 'BottomRight',
        relativeMode: 'Object',
      },
      shape: { type: 'Bpmn', shape: 'Gateway' },
    },
    {
      id: 'node3',
      width: 60,
      height: 50,
      offsetX: 270,
      offsetY: 120,
      annotations: [{ content: 'Analyse', offset: { x: 0.5, y: 0.5 } }],
      tooltip: {
        content: 'Analysing the query',
        position: 'BottomRight',
        relativeMode: 'Object',
      },
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        activity: { activity: 'Task' },
      },
    },
    {
      id: 'node4',
      width: 75,
      height: 70,
      offsetX: 370,
      offsetY: 120,
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        gateway: { type: 'Exclusive' },
      },
      tooltip: {
        content: 'proceed to validate?',
        position: 'BottomRight',
        relativeMode: 'Object',
      },
    },
  ];

  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  }
  public getNodeDefaults(obj: NodeModel): NodeModel {
    obj.offsetX += 0.5;
    obj.offsetY += 0.5;
    obj.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
    obj.style = { strokeWidth: 2 };
    return obj;
  }

  public created(): void {
    this.diagram.fitToPage({ mode: 'Width' });
  }
  public selectedItems: SelectorModel = {
    constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip,
  };
}
