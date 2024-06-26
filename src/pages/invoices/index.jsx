import React from 'react'
import {Box,Typography,useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import {mockDataInvoices} from "../../data/mockData"

import Header from '../../components/Header'
import { tokens } from '../../theme'

const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "NAME",
            flex: 1,
            cellClassName: "name-colmn--cell"
        }, {
            field: "email",
            headerName: "Email",
            flex:1
        },
        {
            field: "cost",
            headerName: "Cost",
            flex:1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "phone",
            headerName: "Phone",
            flex:1
        },
        {
            field: "date",
            headerName: "Date",
            flex:1
        },
    
    ]
    return (
        <Box m="20px">
            <Header title="Invoices" subTitle="List of Invoices"/>
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border:"none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom:"none"
                },
                "& .name-colmn--cell": {
                    color:colors.redAccent[500]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor:colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor:colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor:colors.blueAccent[700],
                    mb: "20px"
                },
                "& .MuiCheckbox-root": {
                    color:colors.greenAccent[200],
                },

            }}>
                <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
            </Box>
        </Box>
    )
}

export default Invoices