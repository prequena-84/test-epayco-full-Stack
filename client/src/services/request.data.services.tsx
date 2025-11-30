import type { TUri, TMethod, TToken, THeaders, IFetchResponse } from "./request.data.services.types";

export default async function requestData<TResponse, TRequestBody = TResponse> ( 
    uri: TUri, 
    method: TMethod = 'GET', 
    body?: TRequestBody, 
    token?: TToken,
):Promise<IFetchResponse<TResponse>> {
    try {

        if ( !uri ) throw new Error('URI no encontrada');
        const headers: THeaders = { 'Content-Type':'application/json' };
        if (token) headers["Authorization"] = `Bearer ${token}`;
     
        const response = await fetch(uri, {
            method,
            headers,
            body: method === 'GET' ? undefined : JSON.stringify(body),
        });

        const data = await response.json().catch(() => null);

        if ( !response.ok ) {
            console.error(data?.message?.message as string)
            return {
                data: null,
                message: (data?.message?.message as string) || 'Error en la solicitud',
            };
        };

        return {
            data: data.data,
            message:data.message,
        };

    } catch(err) {
        return {
            data:null,
            message:`error en petición: ${err}`,
        };
    };
};