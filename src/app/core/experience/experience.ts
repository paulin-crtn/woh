import { User } from '../user/user';
import { Property_Preview, Property } from '../property/property';
import { Review } from '../review/review';

export interface Experience_Preview {
    id: number;
    status: number;
    title: string;
    min_weeks: number;
    max_weeks: number;
    number_volunteers: number;
    volunteer_hours: number;
    days_off: number;
    accomodation_type: string;
    property: Property_Preview;
    average_ratings: number;
    number_comments: number;
    url: string;
    gallery_pictures_url: string[];
}

export interface Experience extends Experience_Preview {
    has_breakfast: number;
    has_lunch: number;
    has_diner: number;
    has_food_allowance: number;
    has_free_activities: number;
    description: string;
    requirements: string;
    host: User;
    property: Property;
    reviews: Review;
}