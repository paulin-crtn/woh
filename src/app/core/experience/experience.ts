import { User } from '../user/user';
import { Property } from '../property/property';

export interface Experience {
    id: number;
    status: number;
    host: User;
    property: Property;
    title: string;
    description: string;
    requirements: string;
    min_weeks: number;
    max_weeks: number;
    number_volunteers: number;
    volunteer_hours: number;
    days_off: number;
    accomodation_type: string;
    has_breakfast: number;
    has_lunch: number;
    has_diner: number;
    has_food_allowance: number;
    has_free_activities: number;
    rating: number;
    number_comments: number;
    url: string;
    cover_picture_url: string;
    other_pictures_url?: string[];
}
