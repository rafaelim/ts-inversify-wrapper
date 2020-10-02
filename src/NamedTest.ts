import { register } from "./di"


export abstract class INamed {
    abstract c: () => void;
}

@register(NamedTest.name)
export default class NamedTest implements INamed {
    public c = () => {
        console.log("From Named Test")
    }
}

