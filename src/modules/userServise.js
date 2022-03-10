export class UserServise {

    getUsers() {
        return fetch(' http://localhost:4545/users').then(response => response.json())
    }
}