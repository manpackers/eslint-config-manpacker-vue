## Explain
This project uses parser <code>"vue-eslint-parser"</code><br/>
And plugin <code>"vue"</code>.<br> Inherits <code>"manpacker"</code>


## Install
```
npm install eslint -D

npm install eslint-config-manpacker-vue -D
```
## Usage

- Add &nbsp;<code>.eslintrc</code> &nbsp; file to your project. &nbsp;<br/>
 Or <code>.eslintrc</code> file does not exist, Create a new file.

```
npx eslint --init
```

Configuration content of file.

```
{
  "extends": ["manpacker-vue"]
}
```
- You can add a configuration entry to the <code>package.json</code> file as follows.

```
"eslintConfig": {
  "extends": ["manpacker-vue"]
}
```
Refer to the following configuration.<br>
Example:<br>
```
"eslintConfig": {
  "root": true,
  "extends": ["manpacker-vue"],
  "rules": {}
}
```

## Npm
[link](https://www.npmjs.com/package/eslint-config-manpacker-vue)
