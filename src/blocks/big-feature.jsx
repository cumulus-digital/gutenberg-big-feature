import './column.jsx';
import icons from './icons.js';

const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
} = wp.blockEditor;

const myId = 'cumulus-gutenberg/big-feature';
const bigFeature = registerBlockType(myId, {
	apiVersion: 2,
	title: 'Big Feature',
	description: 'Large Panel of featured content in a grid',
	keywords: ['feature', 'panel', 'hero'],
	category: 'cmls',
	icon: icons.bigFeature,

	supports: {
		html: false,
		anchor: true,
		align: true,
		alignWide: true,
		customClassName: false,
	},

	attributes: {},

	edit: (props) => {
		const blockProps = useBlockProps({
			className: 'g-big-feature'
		});
		const innerBlockProps = useInnerBlocksProps(
			{},
			{
				template: [
					['cumulus-gutenberg/big-feature-column'],
					['cumulus-gutenberg/big-feature-column'],
					['cumulus-gutenberg/big-feature-column'],
				],
				templateLock: 'insert'
			}
		);

		return (
			<section {...blockProps}>
				{ innerBlockProps.children }
			</section>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save({
			className: 'g-big-feature'
		});
		return (
			<section {...blockProps}>
				<InnerBlocks.Content />
			</section>
		);
	}
});