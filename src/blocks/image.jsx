const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
} = wp.blockEditor;

registerBlockType('cumulus-gutenberg/big-feature-image', {
	apiVersion: 2,
	title: 'Big Feature Image',
	description: 'Image for a box within a Big Feature',
	keywords: ['feature', 'box', 'image'],
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
		console.log(props);
		const blockProps = useBlockProps();
		const innerBlockProps = useInnerBlocksProps(
			{},
			{
				//renderAppender: InnerBlocks.ButtonBlockAppender,
				template: [['core/image', {}, []]],
				templateLock: 'insert',
			}
		);
		return (
			<li {...blockProps}>{ innerBlockProps.children }</li>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save();
		return (
			<li { ...blockProps}><InnerBlocks.Content /></li>
		);
	}
});