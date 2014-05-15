/**
 * jQuery ClassData Plugin - Enable reading and writing of data stored via the classNames of an/a set of element(s)
 *
 * @author	Bram Van Damme (aka Bramus!) - http://www.bram.us/
 * @version	1.0
 *
 * @license	BSD License - http://creativecommons.org/licenses/BSD/
 *
 * @note	This is the jQuery blend of the PrototypeJS ClassData Extension by Jurriaan Persyn (http://www.jurriaanpersyn.com)
 */

// closure
(function($) {

	/**
	 * Gets or sets a string stored in the classnames of a DOM-element in the form of "$key$glue$data"
	 *
	 * @param	string		key 		the key of the classname
	 * @param	string		data		optional, the value you want to set the key to
	 *
	 * @return	mixed_var 	jQuery or string
	 */

		// yay, jQuery Plugin!
		$.fn.classData = function (key, data)
		{

			// get glue
			var glue = $(this).classDataGlue();

			// no data set -> get classData
			if ((data == undefined) || (data == null) || (!data))
			{

				// define toReturn;
				toReturn = Array(this.length);

				// rework key
				key = key + glue;

				// Loop all elements
				this.each(function(i) {

					// this ref
					var el = $(this);

					// Loop all classes
					$.each( el.attr('class').split(' ') , function(index, className) {

						// Check if it's the one we're looking for.
						if (className.substr(0, key.length) == key)
						{

							// Match! -> set toReturn
							toReturn[i] = decodeURIComponent(className.replace(key, ""));

							// break out of each
							return false;

						}

					});


				});

				// return what we just collected
				return toReturn;

			}

			// data set -> set classData
			else
			{

				// loop all elements (and return them to not break chaining!)
				return this.each(function() {

					// this ref
					var el = $(this);

					// remove previous data
					el.removeClass(key + glue + el.classData(key));

					// set new data
					el.addClass(key + glue + encodeURIComponent(data));

				});

			}

		}

	/**
	 * Gets or sets a the classData glue
	 *
	 * @param	string		glue 		the glue to be used
	 *
	 * @return	mixed_var 	jQuery or string
	 */

		// yay, jQuery Plugin!
		$.fn.classDataGlue = function(glue) {

				// set glue
				if (glue != undefined) {

					// set glue
					$.fn.classData.glue = glue;

					// return current selection
					return this;

				}

				// get glue
				else
				{

					// default glue
					if (!$.fn.classData.glue)
					{
						$.fn.classData.glue = '-';
					}

					// the glue
					return $.fn.classData.glue;

				}

			}

// end closure
})(jQuery);
