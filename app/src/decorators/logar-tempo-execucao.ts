export function logarTempoDeExecucao() {
    return function (
        targect: any,
        propertykey: string, 
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução ${(t2 -t2)/ 1000}`)
            retorno;
        }
        return descriptor;
    }

}