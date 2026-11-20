/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
    const columnWidth = 2 * n -1                //this is how to find out how. many. times we need to loop over the columns
    const middle = Math.floor(columnWidth / 2);

    for (let row = 0; row < n; ++row) {         //Loop over rows from 0 to n
        let step = "";                      //create an empty ‘step’ string

        for (let column = 0; column < columnWidth; ++column) {          //loop over columns from 0 to ?
            if (column >= middle - row && column <= middle + row) {     //pattern on where to place the #s
            step += "#"
            }
            else {                                                      //when to add spaces
                step += " "
            }
        }
    console.log(step)
    }
};

module.exports = pyramid;
