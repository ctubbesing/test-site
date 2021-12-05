const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    // make sure there are no uncommitted changes
    await execa("git", ["update-index", "--refresh"]); 

    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    console.log("Cleaning up...")
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed");
  } catch (e) {
    if (e.cmd === 'git update-index --refresh') {
      console.log('Please stash or commit changes first!')
    }
    console.log("Error: " + e.message);
    process.exit(1);
  }
})();