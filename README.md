# Camunda Modeler Plugin Helpers :electric_plug:

[![Compatible with Camunda Modeler version 2.2](https://img.shields.io/badge/Camunda%20Modeler-2.2+-blue.svg)](https://github.com/camunda/camunda-modeler)

Helper functions and core utility exports for bundling your Camunda Modeler client plugins.

> [!WARNING]
> This library re-exposes core utilities that you want to use as you develop plug-ins for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).
> If a plug-in uses any of the utilities, i.e. React, then it **must** consume them via the respective [helper export](#api). Use our [webpack plug-in](https://github.com/camunda/camunda-modeler-webpack-plugin) to accomplish that automatically, or use a source mod / configure your plug-in bundler accordingly.


## Usage

Install the plug-in:

```
npm install camunda-modeler-plugin-helpers
```

Use any of the [exposed utilities](#api).

## API

### bpmn-js

Register plugin to be passed as additional module:

```javascript
import {
  registerBpmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

const BpmnJSModule = {
  __init__: [ 'myService' ],
  myService: [ 'type', ... ]
};

registerBpmnJSPlugin(BpmnJSModule);
```

Register a custom [moddle extension](https://github.com/bpmn-io/bpmn-moddle):

```javascript
import {
  registerBpmnJSModdleExtension
} from 'camunda-modeler-plugin-helpers';

var moddleDescriptor = {
  name: 'my descriptor',
  uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
  prefix: 'mydesc',

  ...
};

registerBpmnJSModdleExtension(moddleDescriptor);
```

[![Compatible with Camunda Modeler version 5.29+](https://img.shields.io/badge/Camunda%20Modeler-5.29+-blue.svg)](https://github.com/camunda/camunda-modeler)

## UI Components
These components are available for use:

- **Fill**
- **Modal**
- **Overlay** 
- **Section**
- **ToggleSwitch**
- **TextInput**
- **CachedComponent**

Components exported for use in Camunda Modeler client plugins.

```javascript
import { Fill } from 'camunda-modeler-plugin-helpers/components';
    <Fill slot="status-bar__app" group="1_first">
      <button
        className="btn"
        type="button"
        onClick={ () => setModalOpen(true) }
      >
        Test 
      </button>
```

## Higher-Order Function Helpers
These higher-order components (HOCs) enhance functionality:

- **WithCache**  
  *A higher-order component that passes cache to a wrapped component. Forwards refs, too.*

- **WithCachedState**  
  *A higher-order component that lazily initiates the given wrapped component.*

## Helper Functions

- **createTab**  
  *A helper function to create Tab components to be used with the TabProvider via the `Comp#createCachedState` method.*

## Properties Panel

The following packages are exposed and can be used with `CamundaModelerWebpackPlugin` to configure bundling for the client:

In your webpack configuration, set aliases:

```javascript
// webpack.config.js
  plugins: [
    new CamundaModelerWebpackPlugin({
      type: '@bpmn-io/properties-panel'
    }),
    new CamundaModelerWebpackPlugin({
      type: 'bpmn-js-properties-panel'
    }),
    new CamundaModelerWebpackPlugin({
      type: 'dmn-js-properties-panel'
    })
  ]
```

Then, in the source code of your extension, you can still import:

```js
import { useService } from 'bpmn-js-properties-panel';
import { useState } from '@bpmn-io/properties-panel/preact/hooks';
```

## Packages

[![Compatible with Camunda Modeler version 5.33+](https://img.shields.io/badge/Camunda%20Modeler-5.33+-blue.svg)](https://github.com/camunda/camunda-modeler)

The following packages are exposed and can be used with `CamundaModelerWebpackPlugin` to configure bundling for the client:

```javascript
// webpack.config.js
  plugins: [
    new CamundaModelerWebpackPlugin({
      type: 'react'
    }),
    new CamundaModelerWebpackPlugin({
      type: 'carbon-react'
    })
  ]
```

```javascript
import React, { useEffect } from 'react';
import { Button, Theme, IconButton, TextInput } from '@carbon/react';
```

### React

> [!NOTE]
> Should be used in place of `react` imports.

```javascript
import React, { useEffect } from 'camunda-modeler-plugin-helpers/vendor/react.js';
```


## Additional Resources

* [camunda-modeler-webpack-plugin](https://github.com/camunda/camunda-modeler-webpack-plugin) - Bundle your libraries for use within the [Camunda Modeler](https://github.com/camunda/camunda-modeler)


## License

MIT
