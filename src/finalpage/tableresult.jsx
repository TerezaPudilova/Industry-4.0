import React from 'react'
import { Table} from 'semantic-ui-react'

const tableData = [
  { name: 'Jimmy', status: 'Requires Action', notes: undefined },
  { name: 'Jamie', status: undefined, notes: 'Hostile' },
  { name: 'Jill', status: undefined, notes: undefined },
]

const headerRow = ['Oblast', 'Výsledek hodnocení', 'Doporučení']

const renderBodyRow = ({ name, status, notes }, i) => ({
  key: name || `row-${i}`,
  warning: !!(status && status.match('Requires Action')),
  cells: [
    name ? { content: name } : '',
    status ? { key: 'status', icon: '', content: status } : 'Unknown',
    notes
      ? { key: 'notes', icon: '', content: notes, warning: true }
      : 'None',
  ],
})

export const TableExampleWarningShorthand = (props) => (
  <Table className="ui blue table"

    celled
    headerRow={headerRow}
    renderBodyRow={renderBodyRow}
    tableData={props.tableResult}
  />
)

