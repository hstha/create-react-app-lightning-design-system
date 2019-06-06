A quick typescript sample combining create react app 2 with the salesforce lightning design system, created following the instructions at https://github.com/synle/create-react-app-salesforce-lightning but keeping things a bit simpler by using

```
import { Button } from '@salesforce/design-system-react';
```

syntax rather than

```
import Button from '@salesforce/design-system-react/components/button';
```

so the webpack transpile customization step isnt required (as discussed in https://react.lightningdesignsystem.com/getting-started/)