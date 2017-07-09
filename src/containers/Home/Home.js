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
				Yuccie freegan four dollar toast, YOLO flannel enamel pin tilde unicorn. 
				Fanny pack deep v church-key gluten-free,
				photo booth hella trust fund letterpress coloring book hoodie. 
				Plaid pabst biodiesel thundercats selvage organic cloud bread vice freegan iPhone cronut humblebrag asymmetrical. 
				Fam cardigan meh edison bulb, woke ennui pitchfork jean shorts tousled biodiesel. 
				Tattooed poke af umami, whatever chartreuse actually. 
				Pickled lyft drinking vinegar etsy scenester meditation venmo. 
				Raclette air plant hoodie bitters. 
				Butcher seitan celiac, gochujang biodiesel farm-to-table gentrify. 
				Hell of neutra bicycle rights meditation migas small batch. 
				Drinking vinegar vegan mixtape, vinyl ethical semiotics artisan pabst gluten-free organic chambray. 
				Jianbing post-ironic photo booth put a bird on it shaman. 
				Sartorial man braid whatever paleo truffaut cornhole trust fund. 
				Hashtag direct trade try-hard fanny pack.
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