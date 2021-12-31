function deleteContact(payload){
    return {
        type:'DELETE_CONTACT',
        payload
    }
}
function addContact(payload){
    return {
        type:'ADD_CONTACT',
        payload
    }
}
export {deleteContact,addContact};