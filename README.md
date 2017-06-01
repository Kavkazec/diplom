# Installation:
## cd client/ && npm start
## cd ../ && mvn clean package
## cd target/ && java -jar dashboard-1.0.jar

# How to use eslint
* install [eslint](http://eslint.org/docs/user-guide/getting-started) and [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
(eslint-plugin-import, eslint-plugin-react, and eslint-plugin-jsx-a11y) or use `npm install` in client/ directory
*  then use `ctrl + alt + s` (or settings), find `Code Quality Tools`, and enable eslint with automatic search configuration file (if you install `eslint -g`, you need `install eslint-config-airbnb -g` too)
*  use it (see [rules](http://eslint.org/docs/rules/) if you have a problem)