import React, { Component, ProtoTypes } from 'react';
import { Container } from '../../theme/grid';
import { 
	Image,
	HeroImage,
	RevealP
 } from './Home.style';


export default class Home extends Component {
	static protoTypes = {};

	render(){
		return(
			<Container>
				<HeroImage>
					<h2>Nicholas Noochla-or</h2>
					<h3>Web Dev</h3>
				</HeroImage>
			<RevealP>
				Nicholas Noochla-or here and I am ready for coding jam sessions. I am a web developer with a passion for the depths of the web. 
				I am from the West of the West, California. Currently I am studying Computer Science and camping at free code camp. 
				My Background is in Fine Art, Architecture and Information Technology.
			</RevealP>

			<RevealP>
				Jianbing post-ironic photo booth put a bird on it shaman. 
				Sartorial man braid whatever paleo truffaut cornhole trust fund. 
				Hashtag direct trade try-hard fanny pack.
			</RevealP>

			<RevealP>
				Jianbing post-ironic photo booth put a bird on it shaman. 
				Sartorial man braid whatever paleo truffaut cornhole trust fund. 
				Hashtag direct trade try-hard fanny pack.
			</RevealP>
			</Container>
		);
	}
}