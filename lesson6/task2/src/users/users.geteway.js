const baseUrl = "https://api.github.com/users";

export const getUserData = userName => {
    return fetch(`${baseUrl}/${userName}`).then(response=>{
        if(response.ok){
            return response.json();
        }
        throw new Error();
    })
}