import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { User } from './interface'

export const myContext = createContext<Partial<User>>({})
export default function Context(props: PropsWithChildren<any>): JSX.Element {
  const [user,setUser] = useState<User>()
  useEffect(() => {
    Axios.get("http://localhost:4000/user", { withCredentials: true }).then((res: AxiosResponse) => {
      setUser(res.data);
    })
  }, []);

  return (
    <myContext.Provider value={user!}>{props.children}</myContext.Provider>
    )
}