import { last, repeat } from 'lodash';

const INDENT_TYPE_TOP_LEVEL = 'top-level';
const INDENT_TYPE_BLOCK_LEVEL = 'block-level';

/**
 * Manages indentation levels.
 *
 * There are two types of indentation levels:
 *
 * - BLOCK_LEVEL : increased by open-parenthesis
 * - TOP_LEVEL : increased by RESERVED_TOPLEVEL words
 */
export default class Indentation {
  /**
   * @param {String} indent Indent value, default is "  " (2 spaces)
   */

  indent: string = '';
  indentTypes: string[] = [];

  constructor(indent: number) {
    this.indent = ' '.repeat(indent);
  }

  /**
   * Resets indentation.
   */
  reset = () => {
    this.indentTypes = [];
  };

  count = () => {
    return this.indentTypes.length;
  };

  /**
   * Returns current indentation string.
   * @return {String}
   */
  getIndent = (): string => {
    return repeat(this.indent, this.indentTypes.length);
  };

  /**
   * Increases indentation by one top-level indent.
   */
  increaseToplevel = () => {
    this.indentTypes.push(INDENT_TYPE_TOP_LEVEL);
  };

  /**
   * Increases indentation by one block-level indent.
   */
  increaseBlockLevel = () => {
    this.indentTypes.push(INDENT_TYPE_BLOCK_LEVEL);
  };

  /**
   * Decreases indentation by one top-level indent.
   * Does nothing when the previous indent is not top-level.
   */
  decreaseTopLevel = () => {
    if (last(this.indentTypes) === INDENT_TYPE_TOP_LEVEL) {
      this.indentTypes.pop();
    }
  };

  /**
   * Decreases indentation by one block-level indent.
   * If there are top-level indents within the block-level indent,
   * throws away these as well.
   */
  decreaseBlockLevel = () => {
    while (this.indentTypes.length > 0) {
      const type = this.indentTypes.pop();
      if (type !== INDENT_TYPE_TOP_LEVEL) {
        break;
      }
    }
  };
}
