import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import OilSpecial from '../assets/Oil-ChangeSpecialBanner2.png';
import TireS from '../assets/TireSpecialBanner2.png';

const specials = [
    { title: "Full Synthetic Oil Change!", description: "We have the best price for Full Synthetic Oil Change ", img: OilSpecial },
    { title: "New Tires Special Sale!", description: " Quality is only what we sale. FREE Alignment and Installation!", img: TireS }  
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export default function SpecialsCarousel() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = specials.length;

    const isMobile = useMediaQuery("(max-width:768px)");

    const handleNext = () => {
        setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <Box 
            sx={{ 
                maxWidth: "auto", 
                margin: "auto", 
                textAlign: "center", 
                position: "relative", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%", 
                height: isMobile ? "auto" : "100%",
                p: isMobile ? 0 : 2, 
            }} 
        >
            {/* Left Button (Back) */}
            <IconButton 
                onClick={handleBack} 
                sx={{
                    position: "absolute",
                    left: "2%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    fontSize: "5rem",
                    zIndex: 10, // Ensure it's clickable
                    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background for visibility
                    '&:hover': { backgroundColor: "rgba(0,0,0,0.7)" }
                }}
            >
                <KeyboardArrowLeft sx={{ fontSize: isMobile ? "2rem" : "5rem", }} />
            </IconButton>

            {/* Carousel */}
            <AutoPlaySwipeableViews
                index={activeStep}
                onChangeIndex={(index) => setActiveStep(index)}
                interval={5000} // Slides every 5 seconds
                enableMouseEvents
            >
                {specials.map((special, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: isMobile ? "40px 8px 10px 8px" : 3,
                            borderRadius: 2,
                            backgroundColor: "transparent",
                            color: "white",
                            minHeight: isMobile ? 300 : 500,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" className="py-4 text-cyan-200">
                            {special.title}
                        </Typography>
                        {!isMobile && (
                            <Typography variant="h5">{special.description}</Typography>
                        )}

                        <img 
                            src={special.img} 
                            alt={special.title} 
                            style={{ 
                                maxWidth: "100%", 
                                height: isMobile ? "200px" : "auto", // Adjust height for mobile & desktop
                                objectFit: "cover", // Crops the sides while keeping the center
                                objectPosition: "center", // Keeps the focus on the center
                            }} 
                        />
                    </Paper>
                ))}
            </AutoPlaySwipeableViews>

            {/* Right Button (Next) */}
            <IconButton 
                onClick={handleNext} 
                sx={{
                    position: "absolute",
                    right: "2%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "white",
                    fontSize: "5rem",
                    zIndex: 10, // Ensure it's clickable
                    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background for visibility
                    '&:hover': { backgroundColor: "rgba(0,0,0,0.7)" }
                }}
            >
                <KeyboardArrowRight sx={{ fontSize: isMobile ? "2rem" : "5rem" }} />
            </IconButton>
        </Box>
    );
}
