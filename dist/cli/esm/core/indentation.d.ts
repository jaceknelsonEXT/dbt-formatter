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
    private indent;
    private indentTypes;
    constructor(indent: number);
    /**
     * Resets indentation.
     */
    reset: () => void;
    count: () => number;
    /**
     * Returns current indentation string.
     * @return {String}
     */
    getIndent: () => string;
    /**
     * Increases indentation by one top-level indent.
     */
    increaseToplevel: () => void;
    /**
     * Increases indentation by one block-level indent.
     */
    increaseBlockLevel: () => void;
    /**
     * Decreases indentation by one top-level indent.
     * Does nothing when the previous indent is not top-level.
     */
    decreaseTopLevel: () => void;
    /**
     * Decreases indentation by one block-level indent.
     * If there are top-level indents within the block-level indent,
     * throws away these as well.
     */
    decreaseBlockLevel: () => void;
}
