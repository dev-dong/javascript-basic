// const { execSync } = require('child_process');
//
// function getCurrentBranch() {
//     return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
// }
//
// const currentBranch = getCurrentBranch();
// const invalidPatterns = [/dev/, /develop/];
//
// if (currentBranch.startsWith('hotfix/') && invalidPatterns.some(pattern => pattern.test(currentBranch))) {
//     console.error('Error: Hotfix branch name should not contain "dev" or "develop".');
//     process.exit(1);
// }

console.log('Hello, World!');
