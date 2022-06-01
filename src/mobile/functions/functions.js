export default class functions {
    static notUndef(undef,value){
        if (undef == undefined){
            return value
        }else{
            return undef
        }
    }
}