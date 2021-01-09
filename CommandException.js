class CommandException extends Error {
    constructor(commandMessage, ...args){
        super(...args); 
        this.errorMessage = errorMessage; 
    }
    
    get errorMessage() {
        return this.errorMessage;
    } 
}

module.exports = CommandException;
