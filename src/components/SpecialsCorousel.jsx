import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import OilSpecial from '../assets/Oil-ChangeSpecialBanner2.png';
import TireS from '../assets/TireSpecialBanner2.png';

const specials = [
    { title: "Full Synthetic Oil-Change!", description: "Most Cars qualify, *UP-TO 5 QUARTERS", img: OilSpecial },
    { title: "New Tires Special Sale!", description: "Get a free car wash with any service above $50!", img: TireS }  
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export default function SpecialsCarousel(props) {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = specials.length;

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
                height: "100%", 
            }} 
            className={props.className}
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
                <KeyboardArrowLeft sx={{ fontSize: "5rem" }} />
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
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: "transparent",
                            color: "white",
                            minHeight: 500,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h3" fontWeight="bold" className="py-4">
                            {special.title}
                        </Typography>
                        <Typography variant="h5">{special.description}</Typography>
                        <img src={special.img} alt={special.title} style={{ maxWidth: "100%", height: "auto" }} />
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
                <KeyboardArrowRight sx={{ fontSize: "5rem" }} />
            </IconButton>
        </Box>
    );
}
