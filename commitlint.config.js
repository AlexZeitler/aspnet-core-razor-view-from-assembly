const {RuleConfigSeverity} = require('@commitlint/types');

module.exports = {
  extends: ['@commitlint/config-conventional'], rules: {
    "body-max-line-length": [0, "always", Infinity], 'subject-mixed-case': [RuleConfigSeverity.Error, 'always']
  }, plugins: [{
    rules: {
      // 
      // This rule allows subjects to consist only of:
      // - Fully lowercase words (with optional spaces or hyphens e.g., "commented-out")
      // - PascalCase words (with optional numbers, e.g., "GetManyAsync")
      // Mixed forms within a single word are not allowed.
      'subject-mixed-case': ({subject}) => {
        const lowerCaseRegex = /^[a-z\s-]+$/; // Erlaubt Kleinbuchstaben mit Leerzeichen & Bindestrichen
        const pascalCaseRegex = /^[A-Z][a-zA-Z0-9]*$/; // Erlaubt PascalCase mit Zahlen (z. B. GetManyAsync)

        const words = subject.split(' ');

        // Prüfen, ob jedes Wort entweder vollständig lower-case oder PascalCase ist
        const isValid = words.every(word => lowerCaseRegex.test(word) || pascalCaseRegex.test(word) || word.includes('-') && word.split('-').every(part => lowerCaseRegex.test(part)) // Erlaubt Bindestrich-Wörter wie "commented-out"
        );

        return [isValid, 'Subject darf nur lower-case, PascalCase oder Bindestrich-Wörter enthalten, aber keine Mischformen innerhalb eines Wortes.'];
      }
    }
  }]
};
