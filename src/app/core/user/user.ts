export interface User {
    is_valid: number;
    is_complete: number;
    is_host: number;
    is_helper: number;
    is_premium: number;
    premium_until: string | null;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    age: number | null;
    description: string | null;
    city: string | null;
    country: string | null;
    profile_picture_url: string | null;
    recently_online: number | null;
    response_rate?: number;
    response_time?:  number;
}