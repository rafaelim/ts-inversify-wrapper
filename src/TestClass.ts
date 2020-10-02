import {register} from "./di"

@register(TestClass)
export default class TestClass {
    public log = () => {
        console.log("From Test Class")
    }
}