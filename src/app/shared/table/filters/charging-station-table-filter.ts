import { ChargingStationsDialogComponent } from '../../../shared/dialogs/charging-stations/charging-stations-dialog.component';
import { FilterType, TableFilterDef } from '../../../types/Table';
import { TableFilter } from './table-filter';

export class ChargingStationTableFilter extends TableFilter {
  public constructor(siteIDs?: readonly string[]) {
    super();
    // Define filter
    const filterDef: TableFilterDef = {
      id: 'charger',
      httpId: 'ChargingStationID',
      type: FilterType.DIALOG_TABLE,
      label: '',
      name: 'chargers.titles',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: ChargingStationsDialogComponent,
      multiple: true,
      cleared: true,
    };
    if (siteIDs) {
      filterDef.dialogComponentData = {
        staticFilter: {
          SiteID: siteIDs.join('|'),
        },
      };
    }
    // Set
    this.setFilterDef(filterDef);
  }
}
