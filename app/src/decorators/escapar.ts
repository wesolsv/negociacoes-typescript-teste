export function escapar(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        let retorno = metodoOriginal.apply(this, args);
        if(typeof retorno === 'string'){
            console.log(`@escape em ação na calsse ${this.constructor.name} para o metodo ${propertykey} `)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}