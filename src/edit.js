/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { RangeControl, PanelBody } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  props
 * @param  root0.setAttributes
 * @param  root0.attributes.columnWidth
 * @param  root0.attributes.content
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( {
	attributes: { columnWidth, paragraphLeft, paragraphRight },
	setAttributes,
} ) {
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
				<PanelBody
					title={ __( 'Settings', 'variable-column-block' ) }
					initialOpen={ true }
				>
					<RangeControl
						help="Please set the first column width, second column will adjust automatically."
						initialPosition={ columnWidth }
						label="Column Width"
						max={ 99 }
						min={ 1 }
						onChange={ ( newWidth ) =>
							setAttributes( { columnWidth: newWidth } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="vcb-block-wrapper-editor">
				<div
					className="vcb-block-left-paragraph"
					style={ { flexBasis: `${ columnWidth }%` } }
				>
					<RichText
						placeholder="Start typing left content..."
						tagName="p"
						value={ paragraphLeft }
						onChange={ ( newContent ) =>
							setAttributes( { paragraphLeft: newContent } )
						}
					/>
				</div>
				<div
					className="vcb-block-right-paragraph"
					style={ { flexBasis: `calc(100% - ${ columnWidth }%)` } }
				>
					<RichText
						placeholder="Start typing left content..."
						tagName="p"
						value={ paragraphRight }
						onChange={ ( newContent ) =>
							setAttributes( { paragraphRight: newContent } )
						}
					/>
				</div>
			</div>
		</div>
	);
}
