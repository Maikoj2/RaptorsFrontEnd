import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import React from 'react'
import MuiPagination from '@mui/material/Pagination'
import { type TablePaginationProps } from '@mui/material/TablePagination'
export interface CustomPaginationProps {}
function Pagination ({
  page,
  onPageChange,
  className
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
	  <MuiPagination
		color="primary"
		className={className}
		count={pageCount}
		page={page + 1}
		onChange={(event, newPage) => {
		  onPageChange(event as any, newPage - 1)
		}}
	  />
  )
}

const CustomPagination: React.FC<CustomPaginationProps> = (props: any) => {
  return <GridPagination ActionsComponent={Pagination} {...props} />
}

export default CustomPagination
