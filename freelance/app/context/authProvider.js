"use client";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Vérifie si les données utilisateur, userId et token existent dans le localStorage
        const storedUser = localStorage.getItem("user");
        const storedUserId = localStorage.getItem("userId");
        const storedToken = localStorage.getItem("token");

        // Vérifie et parse storedUser
        if (storedUser && storedUser !== "undefined") {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Erreur lors de la conversion de storedUser en objet :", error);
                localStorage.removeItem("user"); // Supprime la clé invalide
            }
        }

        // Vérifie et parse storedUserId
        if (storedUserId && storedUserId !== "undefined") {
            try {
                setUserId(JSON.parse(storedUserId));
            } catch (error) {
                console.error("Erreur lors de la conversion de storedUserId en objet :", error);
                localStorage.removeItem("userId"); // Supprime la clé invalide
            }
        }

        // Vérifie et parse storedToken
        if (storedToken && storedToken !== "undefined") {
            try {
                setToken(JSON.parse(storedToken));
            } catch (error) {
                console.error("Erreur lors de la conversion de storedToken en objet :", error);
                localStorage.removeItem("token"); // Supprime la clé invalide
            }
        }
    }, []);

    const login = (user, token, userId) => {
        // Sauvegarde les données utilisateur dans le localStorage et dans le state
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userId", JSON.stringify(userId));
        setUser(user);
        setToken(token);
        setUserId(userId);
    };

    const logout = () => {
        // Supprime les données utilisateur du localStorage et du state
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ user, userId, token, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};