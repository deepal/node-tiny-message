#node-tiny-message

## A Simple Message Generator

This is a simple message factory to create success/error messages to be passed among NodeJS functions. This is useful to wrap low level errors/messages and pass them to the top of the stack via callbacks/promises.

####Success Message

Syntax - 

```
require('tiny-message').success(<message>,<data>,<success_code>);
```
Example - 

```
const message = require('tiny-message');
const successMsg = message.success('This is a simple success message', {test:123}, 100);
```

Success message will have following properties:

* **success** - success status (always defaults to **true**)
* **message** - success message string
* **data** - Additional data provided

####Error Message

Syntax - 

```
require('tiny-message').error(<message>,<data/error object>,<error_code>);
```
Example - 

```
const message = require('tiny-message');
const errorMsg = message.error('This is a simple error message', new Error('test'), 100);
```

Success message will have following properties:

* **success** - success status (always defaults to **false**)
* **message** - error message string
* **data** - Additional data/error object provided

####Tests
```
npm test
```