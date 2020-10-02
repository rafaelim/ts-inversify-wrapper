# IOC-Container

We are using Inversify[https://github.com/inversify/InversifyJS] to write this wrapper;

## Usage 

With abstract classes or classes as identifier
```javascript
// ExampleClass.ts
import {register} from "./di"

@register(ExampleClass)
export default class ExampleClass {
    public log = () => {
        console.log("From Test Class")
    }
}


// TestClass.ts
import {register} from "./di"

@register(TestClass)
export default class TestClass {
    constructor(
        private readonly exampleClass: ExampleClass
    ) {}

    public method = () => {
        this.exampleClass.log()

    }
}
```

With name as identifier 
```javascript
// ExampleClass.ts
import {register} from "./di"

@register("ExampleClass")
export default class ExampleClass {
    public log = () => {
        console.log("From Test Class")
    }
}


// TestClass.ts
import {register} from "./di"

@register(TestClass)
export default class TestClass {
    constructor(
        @inject("ExampleClass") private readonly exampleClass: ExampleClass
    ) {}

    public method = () => {
        this.exampleClass.log()

    }
}
```