import {Typography,useTheme} from "@mui/material"
import FlexBetween from "../../components/FlexBetween"
import widgetWrapper from "../../components/WidgetWrapper"
import WidgetWrapper from "../../components/WidgetWrapper";


const AdverWidget=()=>{
    const {palette} = useTheme();
    const dark= palette.neutral.dark;
    const main= palette.neutral.main;
    const medium = palette.neutral.medium;
    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored

                </Typography>
                <Typography color={medium}>
                    Create Ad
                </Typography>
            </FlexBetween>
            <img width="100%"
            height="auto"
            alt="advert"
            src="https://social-media-app-server-chi.vercel.app/assets/info4.jpeg"
            style={{borderRadius :"0.75rem",margin:"0.75rem 0"}}
            />
            <FlexBetween>
                <Typography color={main} >MikaCosmetics</Typography>
                <Typography color={medium} >MikaCosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning and immaculate beauty and made sure your skin is exfolishing skin and shining like light.
            </Typography>
        </WidgetWrapper>
    )
}

export default AdverWidget