import { register } from "./di"
import { INamed } from "./NamedTest"

@register(Named2Test.name)
export default class Named2Test implements INamed {
    public c = () => {
        console.log("From Named Test 2")
    }
}
