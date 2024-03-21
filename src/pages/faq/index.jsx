import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from '../../theme'


const FAQ = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subTitle="Frequently Questions" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores repellat aperiam magnam earum ducimus, 
                         rem eligendi suscipit commodi, sequi harum mollitia adipisci quod quaerat,
                          maxime doloribus eum aspernatur numquam deleniti.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores repellat aperiam magnam earum ducimus, 
                         rem eligendi suscipit commodi, sequi harum mollitia adipisci quod quaerat,
                          maxime doloribus eum aspernatur numquam deleniti.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores repellat aperiam magnam earum ducimus, 
                         rem eligendi suscipit commodi, sequi harum mollitia adipisci quod quaerat,
                          maxime doloribus eum aspernatur numquam deleniti.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores repellat aperiam magnam earum ducimus, 
                         rem eligendi suscipit commodi, sequi harum mollitia adipisci quod quaerat,
                          maxime doloribus eum aspernatur numquam deleniti.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores repellat aperiam magnam earum ducimus, 
                         rem eligendi suscipit commodi, sequi harum mollitia adipisci quod quaerat,
                          maxime doloribus eum aspernatur numquam deleniti.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ