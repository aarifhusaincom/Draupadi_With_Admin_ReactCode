import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'Mobile',
    headerName: 'Mobile',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Location',
    headerName: 'Location',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Mobile: '8548584858',Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Mobile: null },
  { id: 6, lastName: 'Melisandre', firstName: null, Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Mobile: '8548584858', Email:'j@gmail.com', Location: 'Mumbai'},
];

export default function OrderTable() {
  return (
    <div style={{ top: 20, position: 'relative', height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pMobileSize={15}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}