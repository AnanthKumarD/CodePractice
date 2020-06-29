Basic CSS:
		(1)	Backgrounds:-
				background-color : lightblue;
				background-image : url("paper.gif");
				background-repeat : repeat-x; repeat-y; no-repeat;
				background-attachment : fixed; 
				background-position : right top;

		(2) Borders:-
				border-style : [
					dotted - Defines a dotted border
					dashed - Defines a dashed border
					solid - Defines a solid border
					double - Defines a double border
					groove - Defines a 3D grooved border. The effect depends on the border-color value
					ridge - Defines a 3D ridged border. The effect depends on the border-color value
					inset - Defines a 3D inset border. The effect depends on the border-color value
					outset - Defines a 3D outset border. The effect depends on the border-color value
					none - Defines no border
					hidden - Defines a hidden border
				],

				border-width: 5px;
				border-color: red;

				Border-individual-style 
					[
						border-top-style: dotted;
						border-right-style: solid;
						border-bottom-style: dotted;
						border-left-style: solid;
					]
				border-left: 6px solid red;
				border-bottom: 6px solid red;
				border-radius: 5px;

(IMP)	(3) Margins:- [ CSS margin properties are used to create space around elements,outside of any defined borders. ]
			
				[ margin-top , margin-right ,margin-bottom ,margin-left ]

					All the margin properties can have the following values:

						auto - the browser calculates the margin
						length - specifies a margin in px, pt, cm, etc.
						% - specifies a margin in % of the width of the containing element
						inherit - specifies that the margin should be inherited from the parent element

(IMP)	(4) Padding:- [ CSS padding properties are used to generate space around an element's content, inside of any defined borders. ]
				
				[ padding-top, padding-right, padding-bottom, padding-left]
					All the padding properties can have the following values:

						length - specifies a padding in px, pt, cm, etc.
						% - specifies a padding in % of the width of the containing element
						inherit - specifies that the padding should be inherited from the parent element


		(5) Height and Width:-
				height: 200px;
		    	width: 50%;

		    	max-width [ this instead, in this situation, will improve the browser's handling of small windows.]

(IMP)   (6)	BoxModel :-
		    	Explanation of the different parts:

					Content - The content of the box, where text and images appear
					Padding - Clears an area around the content. The padding is transparent
					Border - A border that goes around the padding and content
					Margin - Clears an area outside the border. The margin is transparent

		(7) Outline:- [outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out"]
				[outline-style , outline-color, outline-width, outline-offset, outline]

		(8) Text:- 
				color: blue; [color property is used to set the color of the text.],
				text-align: center; left; right; justify;
				text-decoration: none; overline; line-through; underline;
				text-transform: uppercase; lowercase; capitalize;
				text-indent: 50px;
				letter-spacing: 3px;
				line-height: 0.8;
				direction: rtl;
				word-spacing: 10px;
				text-shadow: 3px 2px red;

				text-overflow : clip; ellipsis;
				word-wrap :  break-word; 
				word-break : keep-all; break-all;

		(9)	Fonts:-
				In CSS, there are two types of font family names:

					generic family - a group of font families with a similar look (like "Serif" or "Monospace")
					font family - a specific font family (like "Times New Roman" or "Arial")

					The font-style property is mostly used to specify italic text.

						This property has three values:

						normal - The text is shown normally
						italic - The text is shown in italics
						oblique - The text is "leaning" (oblique is very similar to italic, but less supported)


					Example:-
						font-family: "Times New Roman", Times, serif;
						font-size: 40px;
						font-weight: normal;
						font-variant: normal;


		(10) Links:-
				The four links states are:
					a:link - a normal, unvisited link
					a:visited - a link the user has visited
					a:hover - a link when the user mouses over it
					a:active - a link the moment it is clicked

				text-decoration: none;

		(11) Lists:-
				list-style-type : none; circle; upper-roman; lower-roman; square;
				list-style-image : url('sqpurple.gif');
				list-style-position: outside; inside;

		(12) Display:-
				inline , inline-block , block

				display: none; [is commonly used with JavaScript to hide and show elements without deleting and recreating them]
				visibility: hidden; [ it hides the element but takes the space ]

(IMP)	(13) Position:-
				The position property specifies the type of positioning method used for an element [
					static:- Static positioned elements are not affected by the top, bottom, left, and right properties,
					relative :- it takes top,bottom,left,right properties,
					fixed :- which means it always stays in the same place even if the page is scrolled and also adjust with top,bottom,left,right properties,
					absolute :- positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
					sticky :- An element with position: sticky; is positioned based on the user's scroll position.
				].
				z-index:- property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

		(14) Overflow:-
				The overflow property specifies whether to clip content or to add scrollbars when the content of an element is too big to fit in a specified area.

				The overflow property has the following values:

				visible - Default. The overflow is not clipped. It renders outside the element's box
				hidden - The overflow is clipped, and the rest of the content will be invisible
				scroll - The overflow is clipped, but a scrollbar is added to see the rest of the content
				auto - If overflow is clipped, a scrollbar should be added to see the rest of the content

				example:-
					overflow: auto; visible; hidden; scroll;
					overflow-x: hidden; /* Hide horizontal scrollbar */
			    	overflow-y: scroll; /* Add vertical scrollbar */

		(15) Float and Clear:-

				The float property can have one of the following values:

					left - The element floats to the left of its container
					right- The element floats to the right of its container
					none - The element does not float (will be displayed just where it occurs in the text). This is default
					inherit - The element inherits the float value of its parent

				The clear property can have one of the following values:

					none - Allows floating elements on both sides. This is default
					left - No floating elements allowed on the left side
					right- No floating elements allowed on the right side
					both - No floating elements allowed on either the left or the right side
					inherit - The element inherits the clear value of its parent

				ClearFix :- [ If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container: ]
					.clearfix {
					    overflow: auto;
					}

				Center Vertically - Using padding [ https://www.w3schools.com/css/css_align.asp ]
					padding: 70px 0;
					- To center both vertically and horizontally, use padding and text-align: center:
					- Another trick is to use the line-height property with a value that is equal to the height property.
					- If padding and line-height are not options, a third solution is to use positioning and the transform property:

(IMP)	(16) Combinators:-
				[ 
					Descendant selector (space):- All Child matches the tag inside element example: div p [all p Tags],
					Child selector (>):- All First Child matches the tag inside element example: div p [all first p Tags],
					Adjacent sibling selector (+):- Element selected next to the div element example [ https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_pluss ],
					General sibling selector (~) :- all siblings except without nested element tag example [https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_tilde]
				]

		Pseudo-classes:- [ A pseudo-class is used to define a special state of an element. ] 
			Example:- :link , :visited , :hover , :active
		Pseudo-element :- ::before, ::after etc;

		Opacity / Transparency [0.0 - 1.0]

		Image sprite:-  is a collection of images put into a single image.
			example:- background: url(img_navsprites.gif) 0 0;


(IMP)	(17) Attribute Selectors:- [ The [attribute] selector is used to select elements with a specified attribute. ]

				example : 
					In html:-	<a href="http://www.disney.com" target="_blank">disney.com</a>

					in CSS:- 
						a[target] {
							background-color: yellow;
						}

				The [attribute="value"] selector is used to select elements with a specified attribute and value.
				The [attribute~="value"] selector is used to select elements with an attribute value containing a specified word.
				The [attribute|="value"] selector is used to select elements with the specified attribute starting with the specified value.
				The [attribute^="value"] selector is used to select elements whose attribute value begins with a specified value.
				The [attribute$="value"] selector is used to select elements whose attribute value ends with a specified value.
				The [attribute*="value"] selector is used to select elements whose attribute value contains a specified value.

		
(IMP)	(18) Counters:- [CSS counters are "variables" maintained by CSS whose values can be incremented by CSS rules]

				To work with CSS counters we will use the following properties:

					counter-reset - Creates or resets a counter
					counter-increment - Increments a counter value
					content - Inserts generated content
					counter() or counters() function - Adds the value of a counter to an element

					Examples : 
						https://www.w3schools.com/css/tryit.asp?filename=trycss_counters1
						https://www.w3schools.com/css/tryit.asp?filename=trycss_counters2

		(19) Specificity?
				If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

					-- Inline styles - An inline style is attached directly to the element to be styled. Example: <h1 style="color: #ffffff;">.
					-- IDs - An ID is a unique identifier for the page elements, such as #navbar.
					-- Classes, attributes and pseudo-classes - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.
					-- Elements and pseudo-elements - This category includes element names and pseudo-elements, such as h1, div, :before and :after.

		(20) !important :- by using this property we are forcebily appllying the style.means overrite if any defined for that element


Advanced CSS:


	(1)	2D Transforms:-
		CSS transforms allow you to translate, rotate, scale, and skew elements.
			transform: translate(50px, 100px); rotate(20px); scale(2,3); skewX(20deg); skewY(20deg); skew(20deg, 10deg);
			 matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())

	(2) 3D Transforms:-
			transoform: rotateX(); rotateY(); rotateZ()

	(3) CSS Transitions:- [CSS transitions allows you to change property values smoothly (from one value to another), over a given duration. ]

		example:-
			transition: width 2s, height 2s, transform 2s;;
			transition-delay: 1s;
		The "transition-timing-function" property specifies the speed curve of the transition effect.

			The transition-timing-function property can have the following values:

			ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
			linear - specifies a transition effect with the same speed from start to end
			ease-in - specifies a transition effect with a slow start
			ease-out - specifies a transition effect with a slow end
			ease-in-out - specifies a transition effect with a slow start and end
			cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

	(4) CSS Animations
		CSS animations allows animation of most HTML elements without using JavaScript or Flash!

 
Flex:-


	display:flex;
		flex-direction : row | column | row-reverse | column-revers;

		flex-wrap: wrap | nowrap | wrap-reverse


		flex-flow : row wrap
			its a shorhand for flex-direction and flex-wrap

		justify-content: flex-start | flex-end | center | space-around | space-between | space-evenly








		


