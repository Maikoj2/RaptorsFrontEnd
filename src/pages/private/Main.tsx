import { Box, CssBaseline, useMediaQuery } from "@mui/material"
import { useEffect, useState, Suspense } from 'react';
import { Navbar, Sidebar } from "./components"
import { Outlet } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { BackgroundUrl, BackgrounUrl } from "./models/ImageUrl";



export const Main = () => {
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const [isSidebarOpen, setisSidebarOpen] = useState(isNonMobile);
    useEffect(() => {
        isNonMobile && setisSidebarOpen(!isSidebarOpen)
    }, [isNonMobile])
    return (
        <Suspense fallback={<Loading />}>
            <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%" >
                <CssBaseline />
                <Sidebar
                    isNonMobile={isNonMobile}
                    drawerWidth='15.625rem'
                    isSidebarOpen={isSidebarOpen}
                    setisSidebarOpen={setisSidebarOpen}
                />
                <Box flexGrow={1} marginLeft='1rem'>
                    <Navbar
                        isNonMobile={isNonMobile}
                        isSidebarOpen={isSidebarOpen}
                        setisSidebarOpen={setisSidebarOpen} />
                    <Box flexGrow={2} sx={
                        {
                            background: `linear-gradient(to right top, rgb(39 39 39 / 50% ) , rgb(39 39 39 / 60% ) 20%, rgb(39 39 39 / 10%)), linear-gradient(to right bottom, #272727, transparent 66%), linear-gradient(to bottom, transparent, #272727 80%), url(${BackgroundUrl}) no-repeat`,
                            backgroundSize: 'auto 48.25rem',
                            display: 'flex',
                            padding: '62rem 0 0 2rem',
                            boxShadow: ' inset 31px 36px 92px 17px #272727',
                        }
                    }>
                        <Outlet />
                    </Box>

                </Box>
            </Box>

        </Suspense>

    )
}