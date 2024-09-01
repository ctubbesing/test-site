import { execa } from 'execa'

;(async () => {
  try {
    // make sure there are no uncommitted changes
    await execa('git', ['update-index', '--refresh'])

    // create empty gh-pages branch that is not based on any previous commit
    await execa('git', ['checkout', '--orphan', 'gh-pages'])

    // build project and commit resulting build files
    console.log('Building...')
    await execa('npm', ['run', 'build'])
    const folderName = 'dist'
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])

    // push committed files to origin/gh-pages
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])

    // clean up build files and local gh-pages branch
    console.log('Cleaning up...')
    await execa('rm', ['-r', folderName])
    await execa('git', ['checkout', '-f', 'main'])
    await execa('git', ['branch', '-D', 'gh-pages'])

    console.log('Successfully deployed')
  } catch (e) {
    if (e.cmd === 'git update-index --refresh') {
      console.log('Please stash or commit changes first!')
    }
    console.log('Error: ' + e.message)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
})()
