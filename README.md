# Developer's Resume Template

**Made with ❤️ by [Chrisko](https://chrisko.io/)**

...and

- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- [Vite](https://vitejs.dev) - Next Generation of Frontend Tooling
- [Ionicons](https://ionicons.com) - Open source icons. Lovingly hand-crafted.

## Create your own resume - host it on GitHub PagesA

This is a **template repository**.

You can create your own copy of it by clicking on the green button _"Use this template"_ above the file list.

[![Use this Template Button](./assets/template-button.png)](https://github.com/christiankozalla/dev-resume-template/generate)

If you _"Include all branches"_ during the process, the template will already be online on GitHub Pages. The URL should be _https://\<USERNAME\>.github.io/\<REPO-NAME\>/_

Or you only copy the _main_ branch and deploy the project to GitHub Pages yourself.

More information about template repositories on the [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)

## Usage

`package.json` provides four scripts for development, build, preview and deploy. The first three are associated with Vite. The script _deploy_ uses [push-dir](https://github.com/L33T-KR3W/push-dir) to push the `dist` directory to the `gh-pages` branch.

In order to deploy the local changes you made:

```sh
# Clear working tree
$ git add .
$ git commit -m "Before deploy"

# build project to dist directory
$ npm run build

# Use push-dir to push dist to gh-pages
$ npm run deploy
```
