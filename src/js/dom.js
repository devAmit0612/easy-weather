export default class Dom {

    /**
     * This is returns element present or not in dom
     * @param {*} obj 
     * @returns 
     */
    isElement = obj => {
        if (!obj || typeof obj !== 'object') {
            return false
        }
      
        if (typeof obj.jquery !== 'undefined') {
            obj = obj[0]
        }
      
        return typeof obj.nodeType !== 'undefined'
    }

    /**
     * This is returns dom element
     * @param {*} obj 
     * @returns 
     */
    getElement = obj => {
        if (this.isElement(obj)) { 
            return obj.jquery ? obj[0] : obj;
        }
      
        if (typeof obj === 'string' && obj.length > 0) {
            return document.querySelector(obj);
        }
      
        return null
    }
}