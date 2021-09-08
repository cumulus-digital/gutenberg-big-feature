import { get } from 'lodash';

const { registerBlockType } = wp.blocks;
const {
	Panel,
	PanelBody,
	PanelRow,
	ToolbarGroup,
	ToolbarButton,
	Flex,
	Button,
	TextControl,
	Dropdown,
	Icon,
} = wp.components;
const {
	useBlockProps,
	BlockControls,
	MediaReplaceFlow,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	__experimentalLinkControl: LinkControl,
	InspectorControls,
} = wp.blockEditor;
const { useState } = wp.element;

const stripDomain = (url) => (
	url.replace(/^https?:\/\//i, '').replace(window.location.host, '')
);

const WrapperA = (elProps) => {
	if (elProps.href) {
		return (
			<a
				href={elProps.href}
				target={elProps.linkTarget}
				rel={elProps.rel}
			>
				{elProps.children}
			</a>
		);
	};
	return (<>{elProps.children}</>);
};

const square = registerBlockType('cumulus-gutenberg/big-feature-square', {
	apiVersion: 2,
	title: 'Big Feature Square',
	description: 'Image square for a box within a Big Feature',
	keywords: ['feature', 'box', 'image'],
	icon: {
		src: 'format-image',
		foreground: '#00588d'
	},
	parent: [
		'cumulus-gutenberg/big-feature-column',
		'cumulus-gutenberg/big-feature-small-cluster',
		'cumulus-gutenberg/big-feature',
	],
	supports: {
		html: false,
		anchor: false,
		alignWide: false,
		customClassName: false,
		align: false,
		spacing: { padding: false },
	},
	attributes: {
		mediaUrl: {
			"type": "string",
			"source": "attribute",
			"selector": "img",
			"attribute": "src",
			"default": "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
		},
		alt: {
			"type": "string",
			"source": "attribute",
			"selector": "img",
			"attribute": "alt",
			"default": ""
		},
		href: {
			"type": "string",
			"source": "attribute",
			"selector": "a",
			"attribute": "href"
		},
		linkTarget: {
			"type": "string",
			"source": "attribute",
			"selector": "a",
			"attribute": "target"
		},
		rel: {
			"type": "string",
			"source": "attribute",
			"selector": "a",
			"attribute": "rel"
		}
	},

	edit: ({ className, attributes, setAttributes }) => {
		const warningIcon = <Icon icon="warning" style={{ color: 'red' }} />
		const [altIsOpen, setAltIsOpen] = useState(false);
		const [selectorVisible, showSelector] = useState(false);
		const blockProps = useBlockProps();
		const onSelectMedia = (media) => {
			// Try the "large" size URL, falling back to the "full" size URL below.
			let src = get(media, ['sizes', 'full', 'url']) || get(media, ['media_details', 'sizes', 'full', 'source_url']);
			let alt = get(media, ['alt']);
			let attr = {
				mediaUrl: stripDomain(src || media.url)
			};
			if (alt) {
				attr.alt = alt;
			}

			setAttributes(attr);
		};
		const isNotDefault = (attr) => {
			return attributes[attr] && attributes[attr] !== square.attributes[attr].default;
		};

		const AltInput = (
			<TextControl
				label="Image Alt Attribute"
				help={
					<>
						{(!attributes.alt &&
							<strong style={{ color: 'red', textDecoration: 'underline' }}>Alt attributes are important for SEO and accessibility!</strong>
						)}
						<> </>
						This should be the name of the show you're featuring
						or some other short, text interpretation of the image/link.
					</>
				}
				value={attributes.alt}
				onChange={(val) => {
					setAttributes({ alt: val });
				}}
			/>
		);

		const PostSearch = (
			<LinkControl
				searchInputPlaceholder="Search here..."
				value={{
					url: attributes.href,
					title: attributes.alt,
					opensInNewTab: attributes.linkTarget === '_blank',
					useTitleAsAlt: true
				}}
				settings={[
					{
						id: 'opensInNewTab',
						title: 'New tab?',
					},
					{
						id: 'useTitleAsAlt',
						title: 'Use Post title as alt attribute?'
					}
				]}
				onChange={(val) => {
					setAttributes({
						href: stripDomain(val.url),
						alt: val.useTitleAsAlt ? val.title : attributes.alt,
						linkTarget: val.opensInNewTab ? '_blank' : '_self',
						rel: val.opensInNewTab ? 'noopener' : ''
					});
				}}
			>
			</LinkControl>
		);

		return (
			<li {...blockProps}>
				<BlockControls>
					{isNotDefault('mediaUrl') && (
						<>
							<ToolbarGroup>
								<MediaReplaceFlow
									mediaId={attributes.mediaId}
									mediaURL={attributes.mediaUrl}
									allowedTypes={['image']}
									accept="image/*"
									onSelect={onSelectMedia}
									//onSelectURL={onSelectURL}
									//onError={onUploadError}
								/>
							</ToolbarGroup>
							{ ! attributes.alt && (
								<ToolbarGroup>
									<Dropdown
										headerTitle="Alt Attribute"
										contentClassName="is-alternate"
										renderToggle={({ isOpen, onToggle }) => (
											<ToolbarButton
												icon={warningIcon}
												label="Set an alt attribute!"
												showTooltip={true}
												aria-expanded={isOpen}
												onClick={onToggle}
											/>
										)}
										renderContent={() => {
											return (
												<div style={{ minWidth: '250px' }}>
													{AltInput}
												</div>
											);
										}}
									/>
								</ToolbarGroup>
							)}
							<ToolbarGroup>
								<Dropdown
									headerTitle="Link"
									renderToggle={({ isOpen, onToggle }) => (
										<ToolbarButton
											icon="admin-links"
											label="Set a link"
											showTooltip={true}
											aria-expanded={isOpen}
											onClick={onToggle}
										/>
									)}
									renderContent={() => (PostSearch)}
								/>
							</ToolbarGroup>
						</>
					)}
				</BlockControls>
				<InspectorControls>
					<Panel>
						<PanelBody title="Image Settings">
							{isNotDefault('mediaUrl') && (
								<>
									<PanelRow>
										<img src={attributes.mediaUrl} width="100%" />
									</PanelRow>
									<PanelRow>
										<MediaUploadCheck>
											<MediaUpload
												Label="Square Image"
												type="image"
												value={attributes.mediaUrl}
												render={({ open }) => {
													return (
														<Flex>
															<Button
																className="button button-large"
																onClick={open}
															>
																{isNotDefault('mediaUrl')
																	? `Replace Image`
																	: `Choose Image`
																}
															</Button>
															{isNotDefault('mediaUrl') && (
																<Button
																	className="button button-large"
																	onClick={() => {
																		let newAttr = {};
																		for (var i in square.attributes) {
																			newAttr[i] = square.attributes[i].default;
																		}
																		setAttributes(newAttr);
																	}}
																>
																	Remove
																</Button>
															)}
														</Flex>
													)
												}}
												onSelect={onSelectMedia}
											/>
										</MediaUploadCheck>
									</PanelRow>
									<PanelRow style={{ display: 'block' }}>
										{AltInput}
									</PanelRow>
								</>
							)}
							{!isNotDefault('mediaUrl') && (
								<MediaPlaceholder
									icon="format-image"
									accept="image/*"
									allowedTypes={['image']}
									onSelect={onSelectMedia}
								/>
							)}
						</PanelBody>
					</Panel>
				</InspectorControls>
				{
					isNotDefault('mediaUrl') ?
						<img src={attributes.mediaUrl} alt={attributes.alt} />
						:
						<MediaUploadCheck>
							<MediaUpload
								Label="Square Image"
								type="image"
								value={attributes.mediaUrl}
								render={({ open }) => {
									return (
										<img
											className="g-bf-placeholder"
											src={attributes.mediaUrl}
											alt="Click to add an image!"
											title="Click to add an image!"
											onClick={open}
											style={{ cursor: 'pointer' }}
										/>
									)
								}}
								onSelect={onSelectMedia}
							/>
						</MediaUploadCheck>
				}
			</li>
		);
	},

	save: (props) => {
		const { attributes } = props;
		const blockProps = useBlockProps.save();
		if (attributes['mediaUrl'] && attributes['mediaUrl'] !== square.attributes['mediaUrl'].default) {
			return (
				<li { ...blockProps }>
					<WrapperA {...attributes}>
						<img
							src={attributes.mediaUrl}
							alt={attributes.alt}
						/>
					</WrapperA>
				</li>
			);
		}
		return (
			<li {...blockProps}></li>
		);
	}
});