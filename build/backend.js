/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/icons.js":
/*!*****************************!*\
  !*** ./src/blocks/icons.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icons = {};
icons.cumulus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "custom-icon custom-icon-cumulus",
  enableBackground: "new 0 0 645.28 645.45",
  viewBox: "0 0 645.28 645.45",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m543.62 329.45c-3.21 19.07-19.75 33.62-39.74 33.62-22.28 0-40.34-18.06-40.34-40.34s18.06-40.34 40.34-40.34c19.98 0 36.53 14.54 39.74 33.62h101.66c-3.59-175.13-146.57-316.01-322.56-316.01-178.23 0-322.72 144.49-322.72 322.72 0 178.24 144.49 322.72 322.72 322.72 175.98 0 318.96-140.88 322.55-316h-101.65zm-220.9 235.32c-133.68 0-242.04-108.37-242.04-242.04s108.37-242.05 242.04-242.05c77.12 0 145.76 36.11 190.09 92.3l-86.74 86.74c-21.26-34.79-59.58-58.02-103.34-58.02-66.84 0-121.02 54.18-121.02 121.02s54.18 121.02 121.02 121.02c43.76 0 82.09-23.23 103.34-58.02l86.74 86.74c-44.32 56.2-112.97 92.31-190.09 92.31z",
  fill: "#00598e"
}));
icons.bigFeature = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "custom-icon custom-icon-bigfeature",
  enableBackground: "new 0 0 20 20",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m18.58 0h-17.16c-.78 0-1.42.64-1.42 1.42v17.15c0 .79.64 1.43 1.42 1.43h17.15c.79 0 1.42-.64 1.42-1.42v-17.16c.01-.78-.63-1.42-1.41-1.42zm-9.38 17.77c0 .43-.35.78-.78.78h-6.19c-.43 0-.78-.35-.78-.78v-6.19c0-.43.35-.78.78-.78h6.19c.43 0 .78.35.78.78zm9.35 0c0 .43-.35.78-.78.78h-6.19c-.43 0-.78-.35-.78-.78v-6.19c0-.43.35-.78.78-.78h6.19c.43 0 .78.35.78.78zm0-9.47c0 .43-.35.78-.78.78h-15.54c-.43 0-.78-.35-.78-.78v-6.07c0-.43.35-.78.78-.78h15.54c.43 0 .78.35.78.78z",
  fill: "#00588d"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/big-feature.jsx":
/*!************************************!*\
  !*** ./src/blocks/big-feature.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _column_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column.jsx */ "./src/blocks/column.jsx");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/icons.js");



var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    useBlockProps = _wp$blockEditor.useBlockProps,
    useInnerBlocksProps = _wp$blockEditor.__experimentalUseInnerBlocksProps;
var myId = 'cumulus-gutenberg/big-feature';
var bigFeature = registerBlockType(myId, {
  apiVersion: 2,
  title: 'Big Feature',
  description: 'Large Panel of featured content in a grid',
  keywords: ['feature', 'panel', 'hero'],
  category: 'cmls',
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_2__.default.bigFeature,
  supports: {
    html: false,
    anchor: true,
    align: true,
    alignWide: true,
    customClassName: false
  },
  attributes: {},
  edit: function edit(props) {
    var blockProps = useBlockProps({
      className: 'g-big-feature'
    });
    var innerBlockProps = useInnerBlocksProps({}, {
      template: [['cumulus-gutenberg/big-feature-column'], ['cumulus-gutenberg/big-feature-column'], ['cumulus-gutenberg/big-feature-column']],
      templateLock: 'insert'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", blockProps, innerBlockProps.children);
  },
  save: function save(props) {
    var blockProps = useBlockProps.save({
      className: 'g-big-feature'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/column.jsx":
/*!*******************************!*\
  !*** ./src/blocks/column.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square.jsx */ "./src/blocks/square.jsx");
/* harmony import */ var _small_cluster_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./small-cluster.jsx */ "./src/blocks/small-cluster.jsx");



var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    useBlockProps = _wp$blockEditor.useBlockProps,
    useInnerBlocksProps = _wp$blockEditor.__experimentalUseInnerBlocksProps;
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
    spacing: {
      padding: false
    }
  },
  edit: function edit(props) {
    var blockProps = useBlockProps({
      className: 'g-bf-container'
    });
    var innerBlockProps = useInnerBlocksProps({
      title: 'Big Feature Column'
    }, {
      //renderAppender: InnerBlocks.ButtonBlockAppender,
      template: [['cumulus-gutenberg/big-feature-square', {
        className: 'g-bf-big'
      }], ['cumulus-gutenberg/big-feature-small-cluster', {}]],
      templateLock: 'insert'
    });
    return (//<span {...blockProps}>
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", blockProps, innerBlockProps.children) //</span>

    );
  },
  save: function save(props) {
    var blockProps = useBlockProps.save({
      className: 'g-bf-container'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/small-cluster.jsx":
/*!**************************************!*\
  !*** ./src/blocks/small-cluster.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square.jsx */ "./src/blocks/square.jsx");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    useBlockProps = _wp$blockEditor.useBlockProps,
    useInnerBlocksProps = _wp$blockEditor.__experimentalUseInnerBlocksProps;
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
    spacing: {
      padding: false
    }
  },
  edit: function edit(props) {
    var blockProps = useBlockProps({
      className: 'g-bf-cluster'
    });
    var innerBlockProps = useInnerBlocksProps({}, {
      //renderAppender: InnerBlocks.ButtonBlockAppender,
      orientation: 'horizontal',
      template: [['cumulus-gutenberg/big-feature-square', {
        className: 'g-bf-small'
      }], ['cumulus-gutenberg/big-feature-square', {
        className: 'g-bf-small'
      }]],
      templateLock: 'insert'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, innerBlockProps.children));
  },
  save: function save(props) {
    var blockProps = useBlockProps.save({
      className: 'g-bf-cluster'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/square.jsx":
/*!*******************************!*\
  !*** ./src/blocks/square.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToolbarGroup = _wp$components.ToolbarGroup,
    ToolbarButton = _wp$components.ToolbarButton,
    Flex = _wp$components.Flex,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    Dropdown = _wp$components.Dropdown,
    Icon = _wp$components.Icon;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    LinkControl = _wp$blockEditor.__experimentalLinkControl,
    InspectorControls = _wp$blockEditor.InspectorControls;
var useState = wp.element.useState;

var stripDomain = function stripDomain(url) {
  return url.replace(/^https?:\/\//i, '').replace(window.location.host, '');
};

var WrapperA = function WrapperA(elProps) {
  if (elProps.href) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: elProps.href,
      target: elProps.linkTarget,
      rel: elProps.rel
    }, elProps.children);
  }

  ;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, elProps.children);
};

var square = registerBlockType('cumulus-gutenberg/big-feature-square', {
  apiVersion: 2,
  title: 'Big Feature Square',
  description: 'Image square for a box within a Big Feature',
  keywords: ['feature', 'box', 'image'],
  icon: {
    src: 'format-image',
    foreground: '#00588d'
  },
  parent: ['cumulus-gutenberg/big-feature-column', 'cumulus-gutenberg/big-feature-small-cluster', 'cumulus-gutenberg/big-feature'],
  supports: {
    html: false,
    anchor: false,
    alignWide: false,
    customClassName: false,
    align: false,
    spacing: {
      padding: false
    }
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
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var warningIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Icon, {
      icon: "warning",
      style: {
        color: 'red'
      }
    });

    var _useState = useState(false),
        _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
        altIsOpen = _useState2[0],
        setAltIsOpen = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
        selectorVisible = _useState4[0],
        showSelector = _useState4[1];

    var blockProps = useBlockProps();

    var onSelectMedia = function onSelectMedia(media) {
      // Try the "large" size URL, falling back to the "full" size URL below.
      var src = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(media, ['sizes', 'full', 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(media, ['media_details', 'sizes', 'full', 'source_url']);
      var alt = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(media, ['alt']);
      var attr = {
        mediaUrl: stripDomain(src || media.url)
      };

      if (alt) {
        attr.alt = alt;
      }

      setAttributes(attr);
    };

    var isNotDefault = function isNotDefault(attr) {
      return attributes[attr] && attributes[attr] !== square.attributes[attr].default;
    };

    var AltInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
      label: "Image Alt Attribute",
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, !attributes.alt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("strong", {
        style: {
          color: 'red',
          textDecoration: 'underline'
        }
      }, "Alt attributes are important for SEO and accessibility!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, " "), "This should be the name of the show you're featuring or some other short, text interpretation of the image/link."),
      value: attributes.alt,
      onChange: function onChange(val) {
        setAttributes({
          alt: val
        });
      }
    });
    var PostSearch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LinkControl, {
      searchInputPlaceholder: "Search here...",
      value: {
        url: attributes.href,
        title: attributes.alt,
        opensInNewTab: attributes.linkTarget === '_blank',
        useTitleAsAlt: true
      },
      settings: [{
        id: 'opensInNewTab',
        title: 'New tab?'
      }, {
        id: 'useTitleAsAlt',
        title: 'Use Post title as alt attribute?'
      }],
      onChange: function onChange(val) {
        setAttributes({
          href: stripDomain(val.url),
          alt: val.useTitleAsAlt ? val.title : attributes.alt,
          linkTarget: val.opensInNewTab ? '_blank' : '_self',
          rel: val.opensInNewTab ? 'noopener' : ''
        });
      }
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, isNotDefault('mediaUrl') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaReplaceFlow, {
      mediaId: attributes.mediaId,
      mediaURL: attributes.mediaUrl,
      allowedTypes: ['image'],
      accept: "image/*",
      onSelect: onSelectMedia //onSelectURL={onSelectURL}
      //onError={onUploadError}

    })), !attributes.alt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dropdown, {
      headerTitle: "Alt Attribute",
      contentClassName: "is-alternate",
      renderToggle: function renderToggle(_ref2) {
        var isOpen = _ref2.isOpen,
            onToggle = _ref2.onToggle;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
          icon: warningIcon,
          label: "Set an alt attribute!",
          showTooltip: true,
          "aria-expanded": isOpen,
          onClick: onToggle
        });
      },
      renderContent: function renderContent() {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          style: {
            minWidth: '250px'
          }
        }, AltInput);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dropdown, {
      headerTitle: "Link",
      renderToggle: function renderToggle(_ref3) {
        var isOpen = _ref3.isOpen,
            onToggle = _ref3.onToggle;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
          icon: "admin-links",
          label: "Set a link",
          showTooltip: true,
          "aria-expanded": isOpen,
          onClick: onToggle
        });
      },
      renderContent: function renderContent() {
        return PostSearch;
      }
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: "Image Settings"
    }, isNotDefault('mediaUrl') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: attributes.mediaUrl,
      width: "100%"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      Label: "Square Image",
      type: "image",
      value: attributes.mediaUrl,
      render: function render(_ref4) {
        var open = _ref4.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "button button-large",
          onClick: open
        }, isNotDefault('mediaUrl') ? "Replace Image" : "Choose Image"), isNotDefault('mediaUrl') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          className: "button button-large",
          onClick: function onClick() {
            var newAttr = {};

            for (var i in square.attributes) {
              newAttr[i] = square.attributes[i].default;
            }

            setAttributes(newAttr);
          }
        }, "Remove"));
      },
      onSelect: onSelectMedia
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, {
      style: {
        display: 'block'
      }
    }, AltInput)), !isNotDefault('mediaUrl') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaPlaceholder, {
      icon: "format-image",
      accept: "image/*",
      allowedTypes: ['image'],
      onSelect: onSelectMedia
    })))), isNotDefault('mediaUrl') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: attributes.mediaUrl,
      alt: attributes.alt
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MediaUpload, {
      Label: "Square Image",
      type: "image",
      value: attributes.mediaUrl,
      render: function render(_ref5) {
        var open = _ref5.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
          className: "g-bf-placeholder",
          src: attributes.mediaUrl,
          alt: "Click to add an image!",
          title: "Click to add an image!",
          onClick: open,
          style: {
            cursor: 'pointer'
          }
        });
      },
      onSelect: onSelectMedia
    })));
  },
  save: function save(props) {
    var attributes = props.attributes;
    var blockProps = useBlockProps.save();

    if (attributes['mediaUrl'] && attributes['mediaUrl'] !== square.attributes['mediaUrl'].default) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WrapperA, attributes, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: attributes.mediaUrl,
        alt: attributes.alt
      })));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", blockProps);
  }
});

/***/ }),

/***/ "./src/scss/backend.scss":
/*!*******************************!*\
  !*** ./src/scss/backend.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/backend.scss */ "./src/scss/backend.scss");
/* harmony import */ var _blocks_big_feature_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/big-feature.jsx */ "./src/blocks/big-feature.jsx");
/* harmony import */ var _blocks_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/icons.js */ "./src/blocks/icons.js");



wp.blocks.updateCategory('cmls', {
  icon: _blocks_icons_js__WEBPACK_IMPORTED_MODULE_2__.default.cumulus
});
}();
/******/ })()
;
//# sourceMappingURL=backend.js.map