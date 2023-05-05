import React from 'react';
import './App.css';

import { useState } from 'react';
import { Box, Button, Grid, GridItem, Image, Label } from './components';

function App() {
	const [count, setCount] = useState(0);
	const [darkMode, setDarkMode] = useState(false);
	const variants = [
		{
			srcVariants: [
				'https://pixabay.com/get/gb3e069d314b88cf9a3f9c6cdaf735b6dc45c550448ecd893efcc82feaf55c48c9d869e59c93841a2483313684804ef571b1d83680818767d5ae9876cc02b0f8ea3d3b383beab6b63f9bebcd975b9b7fc_640.jpg',
				'https://pixabay.com/get/gc0a07c1ed3837ebd6da69631e56a25669fdc70b52f674c20cf7074a06e174540d5dab744bb4de8bab12417dba3484a1116342bd58c45e0bbcfd45957122f0c2e1ea942f3abb35352b720a6654d3b1ccb_1280.jpg',
				'https://pixabay.com/get/gfdbee312b6c058f83c89c7e8a5e79ee2ccce182825a3102d586291773c9a7a212424d3067700659d74f1e4359ff40774e8aaeb694e1e56fb2cefd7b2db512a98b4471fecccfc10eac2fc569cb4e14387_1920.jpg',
			],
			sizeVariants: ['640px', '1280px', '1920px'],
		},
	];

	return (
		<div className={`App ${darkMode ? 'dark' : ''}`}>
			<Box reverse>
				<Label darkMode={darkMode} type="header-1">
					Text
				</Label>
				<Label darkMode={darkMode} type="header-2">
					Text
				</Label>
				<Label darkMode={darkMode} type="header-3">
					Text
				</Label>
				<Label darkMode={darkMode} type="header-4">
					Text
				</Label>
				<Label darkMode={darkMode} type="header-5">
					Text
				</Label>
				<Label darkMode={darkMode} type="header-6">
					Text
				</Label>
				<Label darkMode={darkMode}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae, dolor
					voluptate error tempora eum eaque commodi ex aperiam obcaecati voluptatum alias
					eius sed soluta nam debitis. Ad, hic qui. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolorem vel excepturi quaerat amet maiores doloribus nulla
					incidunt provident rem, consequatur eligendi deleniti. Quos labore omnis aliquam
					itaque minima ipsam iste? Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Expedita minus eaque suscipit ex veritatis placeat! Omnis, perferendis.
					Debitis facilis voluptate at deserunt incidunt, dolor nesciunt doloremque
					tempore repellat sequi quaerat. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quam accusamus maiores doloremque exercitationem! Dolorum at
					in ipsam? Reiciendis neque iure, rerum quia possimus facilis, itaque eaque id
					repellendus maxime libero.
				</Label>
			</Box>
			<Box direction="col">
				<Label darkMode={darkMode} type="header-1" textStyle="secondary">
					This is a big header!
				</Label>
				<Label darkMode={darkMode} type="header-2" textStyle="secondary">
					This is a sub header or a medium header
				</Label>
				<Label darkMode={darkMode} type="header-3" textStyle="secondary">
					This is a sub sub header (a little bit smaller)
				</Label>
				<Label darkMode={darkMode} type="header-4" textStyle="secondary">
					This is a small sub header, let's write a larger text for this hehe
				</Label>
				<Label darkMode={darkMode} type="header-5" textStyle="secondary">
					This is the smallest subheader before a paragraph, so this is a very long text
					just for testing
				</Label>
				<Label darkMode={darkMode} type="header-6" textStyle="secondary">
					This is the smallest subheader before a paragraph, so this is a very long text
					just for testing
				</Label>
				<Label darkMode={darkMode} textStyle="secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae, dolor
					voluptate error tempora eum eaque commodi ex aperiam obcaecati voluptatum alias
					eius sed soluta nam debitis. Ad, hic qui. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolorem vel excepturi quaerat amet maiores doloribus nulla
					incidunt provident rem, consequatur eligendi deleniti. Quos labore omnis aliquam
					itaque minima ipsam iste? Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Expedita minus eaque suscipit ex veritatis placeat! Omnis, perferendis.
					Debitis facilis voluptate at deserunt incidunt, dolor nesciunt doloremque
					tempore repellat sequi quaerat. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quam accusamus maiores doloremque exercitationem! Dolorum at
					in ipsam? Reiciendis neque iure, rerum quia possimus facilis, itaque eaque id
					repellendus maxime libero.
				</Label>
			</Box>
			<Grid columns={5} rows={3} style={{ border: '1px solid black', padding: '10px' }}>
				<GridItem area="top" col="full">
					<Button
						buttonType="outlined"
						darkMode={darkMode}
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="left" col={1}>
					<Button
						buttonType="flat"
						darkMode={darkMode}
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="mid" col={3}>
					<Button
						buttonType="text"
						darkMode={darkMode}
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="right" col={1}>
					<Button
						buttonType="elevated"
						darkMode={darkMode}
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="bottom" col="full">
					<Button
						buttonType="filled"
						darkMode={darkMode}
						onClick={() => setDarkMode(prev => !prev)}
						style={{ width: '100%' }}
					>
						<Label>Toggle dark mode</Label>
					</Button>
				</GridItem>
			</Grid>
			<Grid columns={4} rows={3} style={{ border: '1px solid black', padding: '10px' }}>
				<GridItem area="header" col={2} row={2}>
					<Button
						buttonType="outlined"
						darkMode={darkMode}
						theme="secondary"
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Header: Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="main" col={2} row={2}>
					<Button
						buttonType="text"
						darkMode={darkMode}
						theme="secondary"
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Main: Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem col={1} row={1} />
				<GridItem area="sidebar" col={1} row={1}>
					<Button
						buttonType="flat"
						darkMode={darkMode}
						theme="secondary"
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Sidebar: Check out my course {count}!</Label>
					</Button>
				</GridItem>
				<GridItem area="footer" col={2} row={1}>
					<Button
						buttonType="elevated"
						darkMode={darkMode}
						theme="secondary"
						onClick={() => setCount(count => count + 1)}
						style={{ width: '100%' }}
					>
						<Label>Footer: Check out my course {count}!</Label>
					</Button>
				</GridItem>
			</Grid>
			<Box>
				<Image variants={variants} />
				<Image variants={variants} lazy />
			</Box>
		</div>
	);
}

export default App;
