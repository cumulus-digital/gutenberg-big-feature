import './square.jsx';
import './small-cluster.jsx';

const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} = wp.blockEditor;

registerBlockType('cumulus-gutenberg/big-feature-column', {
	apiVersion: 2,
	title: 'Big Feature Column',
	description: 'Column within a Big Feature',
	keywords: ['feature', 'box'],
	icon: {
		src: 'columns',
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
		const blockProps = useBlockProps({
			className: 'g-bf-container'
		});
		const innerBlockProps = useInnerBlocksProps(
			{
				title: 'Big Feature Column'
			},
			{
				//renderAppender: InnerBlocks.ButtonBlockAppender,
				template: [
					['cumulus-gutenberg/big-feature-square', { className: 'g-bf-big' }],
					['cumulus-gutenberg/big-feature-small-cluster', {}]
				],
				templateLock: 'insert',
			}
		);
		return (
			//<span {...blockProps}>
				<ul {...blockProps}>
					{innerBlockProps.children}
				</ul>
			//</span>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save({
			className: 'g-bf-container'
		})
		return (
			<ul {...blockProps}><InnerBlocks.Content /></ul>
		);
	}
});