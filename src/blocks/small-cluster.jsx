import './square.jsx';

const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	__experimentalUseInnerBlocksProps: useInnerBlocksProps,
} = wp.blockEditor;

registerBlockType('cumulus-gutenberg/big-feature-small-cluster', {
	apiVersion: 2,
	title: 'Big Feature Small Cluster',
	description: 'Cluster of small boxes for a column within a Big Feature',
	keywords: ['feature', 'box'],
	icon: {
		src: 'columns',
		foreground: '#00588d'
	},
	parent: ['cumulus-gutenberg/big-feature-column'],
	supports: {
		html: false,
		anchor: false,
		alignWide: false,
		customClassName: false,
		align: false,
		spacing: { padding: false },
	},

	edit: (props) => {
		const blockProps = useBlockProps({
			className: 'g-bf-cluster'
		});
		const innerBlockProps = useInnerBlocksProps(
			{},
			{
				//renderAppender: InnerBlocks.ButtonBlockAppender,
				orientation: 'horizontal',
				template: [
					['cumulus-gutenberg/big-feature-square', { className: 'g-bf-small' }],
					['cumulus-gutenberg/big-feature-square', { className: 'g-bf-small' }]
				],
				templateLock: 'insert',
			}
		);
		return (
			<li {...blockProps}>
				<ul>
					{innerBlockProps.children}
				</ul>
			</li>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save({
			className: 'g-bf-cluster'
		});
		return (
			<li {...blockProps}>
				<ul>
					<InnerBlocks.Content />
				</ul>
			</li>
		);
	}
});