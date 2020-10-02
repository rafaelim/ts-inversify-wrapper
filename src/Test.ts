import TestClass from "./TestClass"
import {register, inject } from "./di"
import NamedTest, { INamed } from "./NamedTest"
import Named2Test from "./Named2Test"

@register(Test)
export default class Test {
    constructor(
        private readonly testClass: TestClass, 
        @inject(NamedTest.name) private readonly namedTest: INamed,
        @inject(Named2Test.name) private readonly named2Test: INamed,
    ) {}

    public method = () => {
        this.testClass.log()
        this.namedTest.c()
        this.named2Test.c()

    }
}