import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    ImageContainer,
    Title
 
} from './Projects.style';
import { Container, Relative, Flex} from '../../theme/grid';
import { A } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2'

class Projects extends Component {
    render() {
        return (
            <Container>
                <Title>Web Projects</Title>
                <Relative marginTop='100px' marginBottom="50px">
                    <Index>
                        <h1>001</h1>
                    </Index>
                    <h1>project <A href="">link</A></h1>                
                </Relative>
                    <Flex justify={'center'} marginBottom='5em'>
                        <Zoomy
                        imageUrl={require('../../assets/water1.jpg')}
                        renderThumbnail={({ showImage }) =>
                        <ImageButton onClick={showImage}>
                            <img 
                                src={require('../../assets/waterThumb.jpg')} 
                                alt="waves"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                                style: {
                                    width: '100vw',
                                    height: 'auto'
                                    }
                                }}
                            />
                    </Flex>
                <Relative marginBottom="50px">
                    <Index>
                        <h1>002</h1>
                    </Index>
                    <h1>project <A href="">link</A></h1>                
                </Relative>
                    <Flex justify={'center'} marginBottom='5em'>
                        <Zoomy
                        imageUrl={require('../../assets/water1.jpg')}
                        renderThumbnail={({ showImage }) =>
                        <ImageButton onClick={showImage}>
                            <img 
                                src={require('../../assets/waterThumb.jpg')} 
                                alt="waves"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                                style: {
                                    width: '100vw',
                                    height: 'auto'
                                    }
                                }}
                            />
                    </Flex>
                <Relative marginTop='100px' marginBottom="50px">
                    <Index>
                        <h1>003</h1>
                    </Index>
                    <h1>project <A href="">link</A></h1>                
                </Relative>
                    <Flex justify={'center'} marginBottom='5em'>
                        <Zoomy
                        imageUrl={require('../../assets/water1.jpg')}
                        renderThumbnail={({ showImage }) =>
                        <ImageButton onClick={showImage}>
                            <img 
                                src={require('../../assets/waterThumb.jpg')} 
                                alt="waves"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                                style: {
                                    width: '100vw',
                                    height: 'auto'
                                    }
                                }}
                            />
                    </Flex>

                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </Container>
        );
    }
}



export default Projects;