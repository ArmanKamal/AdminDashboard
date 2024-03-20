import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'

const index = () => {
  return (
    <Box m="20px">
        <Box display="flex" justify-content="space-between" alignItems="center">
            <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />

        </Box>
    </Box>
  )
}

export default index