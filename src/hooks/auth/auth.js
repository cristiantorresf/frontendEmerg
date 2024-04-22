import {redirect} from "react-router-dom";

export const getLoggedUser =  () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const getUsername = () => {
    return getLoggedUser()?.username || getLoggedUser()?.email
}

export const isUserAuthenticated = () => {
    return Boolean(getUsername())
}

export const logOutUser = () => {
    localStorage.removeItem('user');
    window.location.reload()
    redirect('/')

}

export const loginUser = () => {
    redirect('/customLogin')
}

