/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import './style.scss';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.attributes.content
 * @param  root0.attributes.columnWidth
 * @param  root0.attributes.paragraphLeft
 * @param  root0.attributes.paragraphRight
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {
	attributes: { columnWidth, paragraphLeft, paragraphRight },
} ) {
	return (
		<div { ...useBlockProps.save() }>
			<div className="vcb-block-wrapper">
				<div
					className="vcb-block-left-praragraph"
					style={ { width: `${ columnWidth }%` } }
				>
					<RichText.Content tagName="p" value={ paragraphLeft } />
				</div>
				<div
					className="vcb-block-right-praragraph"
					style={ { width: `calc(100% - ${ columnWidth }%)` } }
				>
					<RichText.Content tagName="p" value={ paragraphRight } />
				</div>
			</div>
		</div>
	);
}
