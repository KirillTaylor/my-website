import React from 'react';
import './style.css';
import Chip from '@mui/material/Chip';
import { Box, Button, Card, CardContent, CardMedia, Link, SxProps, Typography } from '@mui/material';
import { Slide } from './ICarousel';
import { isMobile } from 'utils/helpers';

const CarouselSlide = (props: Slide) => {
    const description = Array.isArray(props.description) ? props.description : [props.description];

    const isMobileView = isMobile();
    const mainBoxStyle: SxProps = isMobileView ? { display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' } : { display: 'flex', flexDirection: 'row', gap: 2 };
    const cardContentStyle: SxProps = isMobileView ? { display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' } : { display: 'flex', flexDirection: 'row', gap: 2 };
    const cardMediaStyle: SxProps = isMobileView ? {} : { height: 400, width: 500, objectFit: 'contain', backgroundColor: props.backgroundColor || 'transparent' };
    const buttonBoxStyle: SxProps = isMobileView ? { display: 'flex', flexDirection: 'column', gap: 1 } : { display: 'flex', flexDirection: 'row', gap: 2};
    return (
        <div className="carousel-slide" style={props.style}>
            <Card>
                <Box sx={mainBoxStyle}>
                    <CardMedia
                        component="img"
                        image={props.image}
                        alt={props.title}
                        sx={cardMediaStyle}
                    />
                    <CardContent sx={{cardContentStyle}}>
                        <Typography variant="h5" component="h3">
                            {props.title}
                        </Typography>
                        {description.map((desc, key) => <Typography sx={{ mb: 1, maxWidth: '400px' }} variant="body1" color="text.secondary" key={key}>{desc}</Typography>)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            {props.tags && props.tags.map((tag, key) => <Chip key={key} label={tag} />)}
                        </Box>
                        <Box sx={{...buttonBoxStyle, marginTop: 2, alignItems: 'center'}}>
                            {props.link && Array.isArray(props.link) && props.link.map((link, key) => (
                                key === 0 ?  
                                    <Button variant="contained" color="primary" href={link.href} target="_blank" rel="noopener noreferrer" key={key}>{link.text}</Button>
                                    :
                                    <Link 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    key={key}
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}

export default CarouselSlide;