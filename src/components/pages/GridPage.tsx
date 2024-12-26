import { CSSProperties, FunctionComponent } from "react";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableColumnDefinition,
} from "@fluentui/react-components";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  main: {
    border: "solid white 1px",
    position: "relative",
    overflow: "auto",
  },
  dataGrid: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
};

type Data = { id: number; companyCode: number; accountCode: string };

const data: Data[] = [
  {
    id: 1,
    companyCode: 1001,
    accountCode: "0000100001",
  },
  {
    id: 2,
    companyCode: 1002,
    accountCode: "0000100002",
  },
  {
    id: 3,
    companyCode: 1003,
    accountCode: "0000100003",
  },
  {
    id: 4,
    companyCode: 1004,
    accountCode: "0000100004",
  },
  {
    id: 5,
    companyCode: 1005,
    accountCode: "0000100005",
  },
  {
    id: 6,
    companyCode: 1006,
    accountCode: "0000100006",
  },
  {
    id: 7,
    companyCode: 1007,
    accountCode: "0000100007",
  },
  {
    id: 8,
    companyCode: 1008,
    accountCode: "0000100008",
  },
  {
    id: 9,
    companyCode: 1009,
    accountCode: "0000100009",
  },
  {
    id: 10,
    companyCode: 1010,
    accountCode: "0000100010",
  },
  {
    id: 11,
    companyCode: 1011,
    accountCode: "0000100011",
  },
  {
    id: 12,
    companyCode: 1012,
    accountCode: "0000100012",
  },
  {
    id: 13,
    companyCode: 1013,
    accountCode: "0000100013",
  },
  {
    id: 14,
    companyCode: 1014,
    accountCode: "0000100014",
  },
  {
    id: 15,
    companyCode: 1015,
    accountCode: "0000100015",
  },
  {
    id: 16,
    companyCode: 1016,
    accountCode: "0000100016",
  },
  {
    id: 17,
    companyCode: 1017,
    accountCode: "0000100017",
  },
  {
    id: 18,
    companyCode: 1018,
    accountCode: "0000100018",
  },
  {
    id: 19,
    companyCode: 1019,
    accountCode: "0000100019",
  },
  {
    id: 20,
    companyCode: 1020,
    accountCode: "0000100020",
  },
];

const columns: TableColumnDefinition<Data>[] = [
  {
    columnId: 1,
    renderHeaderCell: () => "CompanyCode",
    renderCell: (item: Data) => item.companyCode,
    compare: (a: Data, b: Data) => a.companyCode - b.companyCode,
  },
  {
    columnId: 2,
    renderHeaderCell: () => "AccountCode",
    renderCell: (item: Data) => item.accountCode,
    compare: (a: Data, b: Data) => a.accountCode.localeCompare(b.accountCode),
  },
];

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const GridPage: FunctionComponent = () => {
  return (
    <main style={styles.main}>
      <DataGrid
        items={data}
        columns={columns}
        getRowId={(item: Data) => item.id}
        sortable
        focusMode="composite"
        selectionMode="multiselect"
        style={styles.dataGrid}
      >
        <DataGridHeader>
          <DataGridRow
            selectionCell={{
              checkboxIndicator: { "aria-label": "Select all rows" },
            }}
          >
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Data>>
          {({ item, rowId }) => (
            <DataGridRow<Data>
              key={rowId}
              selectionCell={{
                checkboxIndicator: { "aria-label": "Select row" },
              }}
            >
              {({ renderCell }) => (
                <DataGridCell>{renderCell(item)}</DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </main>
  );
};

export default GridPage;
