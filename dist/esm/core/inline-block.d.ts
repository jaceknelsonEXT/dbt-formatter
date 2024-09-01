import { Token, Node } from '@types';
export default class InlineBlock {
    private static isForbiddenToken;
    private level;
    /**
     * Begins inline block when lookahead through upcoming tokens determines
     * that the block would be smaller than INLINE_MAX_LENGTH.
     * @param  {Object[]} tokens Array of all tokens
     * @param  {Number} index Current token position
     */
    beginIfPossible: (node: Node<Token>) => void;
    /**
     * Finishes current inline block.
     * There might be several nested ones.
     */
    end: () => void;
    /**
     * True when inside an inline block
     * @return {Boolean}
     */
    isActive: () => boolean;
    private isInlineBlock;
}
