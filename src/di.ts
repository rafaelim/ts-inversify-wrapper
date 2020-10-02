import "reflect-metadata"
import {  decorate, inject, injectable, Container } from "inversify"

interface Abstract<T> {
    prototype: T;
}

interface IContainer {
    register: (identifier: any) => (target: any) => void;
    registerInstance: (identifier: any, value: any) => void;
    resolve: <T>(identifier: Abstract<T> | string | symbol) => T;
}

class IoCContainer extends Container implements IContainer {
    constructor() {
        super({skipBaseClassChecks: true})
    }

    private _param = (paramIndex: number, decorator: Function) => {
        return function (target: any, key: any) { decorator(target, key, paramIndex); };
    }

    private _decorate = (decorators: any[], target: any) => {
        Reflect.decorate(decorators, target)
    }


    public register = (identifier: any) => {
        return (constructor: any) => {
            this._decorate([injectable()], constructor)
            const deps = Reflect.getMetadata("design:paramtypes", constructor);
            deps?.forEach((dependency: any, index: number) => {
                if(this.isBound(dependency))
                    this._decorate([this._param(index, inject(dependency))], constructor)
            });
            this.bind(identifier).to(constructor);
        }
    }

    public registerInstance = (identifier: any, value: any) => {
        this.bind(identifier).toConstantValue(value)
    }

    public resolve = this.get.bind(this);
}

const { resolve, register, registerInstance } = new IoCContainer() as IContainer;

export { resolve, register, registerInstance, inject };
