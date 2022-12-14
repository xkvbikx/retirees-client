import { ExpandMore } from "@mui/icons-material";
import { Button, CardHeader, Collapse, Divider, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import relativeTime from "dayjs/plugin/relativeTime"; // import plugin
import parse from "html-react-parser";
import { useState } from "react";
import { ExpandMoreIcon } from "./my/ExpandMore";

dayjs.extend(relativeTime);
dayjs.locale("pl");

export type PostType = {
    id: string;
    isTrip: boolean;
    title: string;
    startDate: Date;
    endDate: Date;
    imageURL: string;
    content: string;
};

function Post({ isTrip, title, startDate, endDate, imageURL, content }: PostType) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const isSameDay = () => {
        if (dayjs(startDate).isSame(endDate, "day")) {
            return true;
        } else {
            return false;
        }
    };

    const subheader = () => {
        if (isTrip) {
            if (isSameDay()) {
                return `Data rozpoczęcia [ ${dayjs(startDate).format(
                    "DD.MM.YYYY"
                )} ] [ jednodniowa ] [ ${dayjs(startDate).fromNow()} ]`;
            } else {
                return `Data rozpoczęcia [ ${dayjs(startDate).format("DD.MM.YY")} ] do [ ${dayjs(
                    endDate
                ).format("DD.MM.YY")} ] [ ${dayjs(startDate).fromNow()} ]`;
            }
        } else {
            return `Data  [ ${dayjs(startDate).format("DD.MM.YYYY")} ]`;
        }
    };

    return (
        <Card
            sx={{
                width: "100%",
                borderRadius: 2,
                backgroundColor: "background.default",
                boxShadow: 15,
            }}
        >
            <CardHeader
                title={<Typography sx={{ typography: { xs: "h6", sm: "h4" } }}>{title}</Typography>}
                subheader={
                    <Typography
                        sx={{ typography: { xs: "caption", sm: "h6" } }}
                        alignContent={"center"}
                    >
                        {subheader()}
                    </Typography>
                }
            />
            <Divider />

            {isTrip && (
                <>
                    <CardMedia
                        component="img"
                        image={imageURL}
                        sx={{ objectFit: "contain", minWidth: "100%" }}
                    />
                    <Divider />
                </>
            )}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ mx: "2%", my: "2%" }}>{parse(content)}</CardContent>
            </Collapse>
            <Stack
                component={Button}
                fullWidth
                direction={"row"}
                justifyContent="center"
                onClick={handleExpandClick}
            >
                <ExpandMoreIcon
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ height: "32px" }}
                >
                    <ExpandMore />
                </ExpandMoreIcon>
                <Typography variant="h6" alignContent={"center"}>
                    {expanded ? "Ukryj informacje" : "Pokaż informacje"}
                </Typography>
                <ExpandMoreIcon
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ height: "32px" }}
                >
                    <ExpandMore />
                </ExpandMoreIcon>
            </Stack>
        </Card>
    );
}
export default Post;
