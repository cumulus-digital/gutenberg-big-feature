import './image.jsx';

const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} = wp.blockEditor;

registerBlockType('cumulus-gutenberg/big-feature-big', {
	apiVersion: 2,
	title: 'Big Feature Box',
	description: 'Container for a box within a Big Feature',
	keywords: ['feature', 'box'],
	icon: {
		src: 'format-image',
		foreground: '#00588d'
	},
	parent: ['cumulus-gutenberg/big-feature'],
	supports: {
		html: false,
		anchor: false,
		alignWide: false,
		customClassName: false,
		align: false,
		spacing: { padding: false },
	},

	edit: (props) => {
		const blockProps = useBlockProps();
		const innerBlockProps = useInnerBlocksProps(
			{},
			{
				//renderAppender: InnerBlocks.ButtonBlockAppender,
				template: [['cumulus-gutenberg/big-feature-image', { className: 'g-bf-big' }]],
				templateLock: 'insert',
			}
		);
		return (
			<div { ...blockProps }>
				<div { ...innerBlockProps}>
					{innerBlockProps.children}
				</div>
			</div>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save();
		return (
			<div {...blockProps}>
				<InnerBlocks.Content />
			</div>
		);
	}
});