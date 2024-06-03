import { createContext, useState, ReactNode } from "react";
import { IAuthContext, IAuthContextProviderProps, IloginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);  
  const navigate = useNavigate()
  
  const handleLogin = async (loginData: IloginData) => {

    try {
      const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
      if (data.length === 1) {
        console.log(data)
        setUser(data[0])
        console.log(user)
        navigate('/feed')
      } else {
        alert('Email ou senha incorreto')
      }
    } catch {
      alert('ERRO!!')
    }
  }
  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider
