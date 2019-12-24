export interface IData<T> {
  type: 'data'
  data: T
}

export interface IError {
  type: 'error'
  message: string
  traceback?: string
}

export type RpcRet<T> = IData<T> | IError

export type IRpc<Self> = Record<keyof Self, (...args: any[]) => Promise<RpcRet<any>>>
