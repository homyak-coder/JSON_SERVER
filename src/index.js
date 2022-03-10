import { render } from "./modules/render";
import {UserServise} from "./modules/userServise";
import {addUser} from "./modules/addUser";

window.userServise = new UserServise

userServise.getUsers().then(data => {
    render(data)
})
addUser()
