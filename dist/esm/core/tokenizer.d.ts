import { LinkedList } from '@utils/data-structures';
import { Config, Token } from '@types';
export default class Tokenizer {
    private static escapeParen;
    private static createStringPattern;
    private static createLineCommentRegex;
    private static createMultiWordRegex;
    private static createWordRegex;
    private static createStringRegex;
    private static createParenRegex;
    private static createPlaceholderRegex;
    private static getEscapedPlaceholderKey;
    private static getReservedWordToken;
    private cfg;
    /**
     * @param {Object} cfg
     *  @param {String[]} cfg.reservedWords Reserved words in SQL
     *  @param {String[]} cfg.reservedToplevelWords Words that are set to new line separately
     *  @param {String[]} cfg.reservedNewlineWords Words that are set to newline
     *  @param {String[]} cfg.stringTypes String types to enable: "", '', ``, [], N''
     *  @param {String[]} cfg.openParens Opening parentheses to enable, like (, [
     *  @param {String[]} cfg.closeParens Closing parentheses to enable, like ), ]
     *  @param {String[]} cfg.indexedPlaceholderTypes Prefixes for indexed placeholders, like ?
     *  @param {String[]} cfg.namedPlaceholderTypes Prefixes for named placeholders, like @ and :
     *  @param {String[]} cfg.lineCommentTypes Line comments to enable, like # and --
     *  @param {String[]} cfg.specialWordChars Special chars that can be found inside of words, like @ and #
     */
    constructor(cfg: Config);
    /**
     * Takes a SQL string and breaks it into tokens.
     * Each token is an object with type and value.
     *
     * @param {String} input The SQL string
     * @return {Object[]} tokens An array of tokens.
     *  @return {String} token.type
     *  @return {String} token.value
     */
    tokenize: (input: string) => LinkedList<Token>;
    private getNextToken;
    private static matchRegex;
    private getRegexes;
}
