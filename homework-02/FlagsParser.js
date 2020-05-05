class FlagsParser {
  constructor(args) {
    this.args = args;
    this.flags = new Map();

    this._parseFlags();
  }

  _parseFlags() {
    for (let i = 0; i < this.args.length; i++) {
      let currentArgument = this.args[i];
      let nextArgument = this.args[i + 1];

      if (
        this.isShortFlag(currentArgument) && currentArgument.slice(1).length === 0
        || this.isLongFlag(currentArgument) && currentArgument.slice(2).length === 0
      ) {
        throw new Error('Flag name can\'t be empty string');
      }

      if (
        this.isShortFlag(currentArgument) && this.flags.has(currentArgument.slice(1))
        || this.isLongFlag(currentArgument) && this.flags.has(currentArgument.slice(2))
      ) {
        throw new Error('Duplicate flags');
      }

      if (
        (
          this.isFlag(currentArgument)
          && nextArgument === undefined
        )
        || (
          this.isFlag(currentArgument)
          && nextArgument !== undefined
          && this.isFlag(nextArgument)
        )
      ) {
        this.flags.set(
          this.isShortFlag(currentArgument) ? currentArgument.slice(1) : currentArgument.slice(2),
          true
        );
      }

      if (
        this.isFlag(currentArgument)
        && nextArgument !== undefined
        && !this.isFlag(nextArgument)
      ) {
        this.flags.set(
          this.isShortFlag(currentArgument) ? currentArgument.slice(1) : currentArgument.slice(2),
          nextArgument
        );
      }
    }
  }

  isFlag(flagName) {
    return this.isLongFlag(flagName) || this.isShortFlag(flagName);
  }

  isLongFlag(flagName) {
    return flagName.startsWith('--');
  }

  isShortFlag(flagName) {
    return flagName.startsWith('-') && !flagName.startsWith('--');
  }
  
  getFlags() {
    return this.flags;
  }

  getFlag() {
    for (let i = 0; i < arguments.length; i++) {
      if (this.flags.has(arguments[i])) {
        return this.flags.get(arguments[i]);
      }
    }
  }
}

module.exports = FlagsParser;

