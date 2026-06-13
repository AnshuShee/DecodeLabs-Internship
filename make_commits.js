const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Initialize git if not already
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
  } catch (e) {
    execSync('git init');
    execSync('git branch -M main');
    execSync('git remote add origin https://github.com/AnshuShee/DecodeLabs-Internship.git');
  }

  // Ensure branch is main
  try {
    execSync('git branch -M main');
  } catch (e) {}

  // Initial commit for existing code
  try {
    execSync('git add .');
    execSync('git commit -m "Initial project setup"');
  } catch (e) {
    // Might fail if nothing to commit
  }
  
  // Make 110 small commits
  for (let i = 1; i <= 110; i++) {
    fs.appendFileSync('commit_log.txt', `\nCommit update ${i} - ${new Date().toISOString()}`);
    execSync('git add commit_log.txt');
    execSync(`git commit -m "Update commit log: entry ${i}"`);
    if (i % 10 === 0) console.log(`Created commit ${i}/110`);
  }

  console.log("All commits created successfully!");
  
} catch (error) {
  console.error("Error creating commits:", error.message);
}
