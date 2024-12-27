import { model, models , Schema } from 'mongoose';


interface IUser extends Document {
    name?: string;
    email: string;
    password: string;
    phone?: string;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    country?: string;
    admin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema<IUser>({
    name: {type: String}, 
    email: {type: String , required: true , unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    streetAddress: {type: String},
    postalCode: {type: String},
    city: {type: String},
    country: {type: String},
    admin: {type: Boolean , default: false}, 
}, {timestamps: true});



export const User = models?.User || model('User' , UserSchema);