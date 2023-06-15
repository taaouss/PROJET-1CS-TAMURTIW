import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const PageAdmin = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Chargement initial de l'utilisateur à partir du stockage local
        const token = localStorage.getItem("token");
        if (token) {
            const userObject = jwt_decode(token);
            setUser(userObject);
        }
    }, []);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token" + response.credential);
        localStorage.setItem("token", response.credential);
        const userObject = jwt_decode(response.credential);
        console.log(userObject.family_name);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    // Ajoutez cette fonction pour vérifier l'utilisateur à chaque rendu
    useEffect(() => {
        console.log(user.family_name);
    }, [user]);

    return (
        <div>
            <h5>on met ici le debut de la page de l'admin et on ajoute les links en app.js</h5>
            <h1>hy i'm the admin</h1>
            {user && (
                <div>
                    <img src={user.picture} alt="" />
                    <h3>{user.name}</h3>
                </div>
            )}
        </div>
    );
}

export default PageAdmin;
