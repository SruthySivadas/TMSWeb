
import { Box } from '@mui/material';
import React from 'react'


export default function Widgets(data) {
    return (
        <Box className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.amount}
                </span>

            </div>
            <div className="right">
                {data.icon}
                <span className="link">{data.link}</span>
            </div>
        </Box>
    )
}