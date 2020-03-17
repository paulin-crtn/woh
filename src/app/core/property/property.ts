export interface Property_Preview {
    type: string;
    country: string;
}

export interface Property extends Property_Preview {
    name: string;
    address: string;
    zipcode: string;
    city: string;
}