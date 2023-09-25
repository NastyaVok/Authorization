export interface Data {
    name: string,
    id: string,
    amount: number,
    price: string,
}

export interface DataTable {
    content: string[], 
    id: string,
}

export interface Users {
    id: string,
    name: string,
    fullName: string,
    password: string,
    avatar: string
}