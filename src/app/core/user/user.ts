export interface User {
    is_valid: number;
    is_host: number;
    is_helper: number;
    premium_until: Date;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    old: number;
    description: string;
    city: string;
    country: string;
    profile_picture_url: string;
    last_login: Date;
    response_rate?: number;
    response_time?:  number;
}